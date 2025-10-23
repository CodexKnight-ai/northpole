'use client';

import { useMemo, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { calculators } from '../calc-data';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);




function getCalculatorBySlug(slug) {
    return calculators.find(calc => calc.slug === slug);
}

// Calculation logic for each slug
function calculateResult(slug, form) {
    // For Lumpsum, SIP, FD, etc.
    const getNumber = (v) => isNaN(Number(v)) ? 0 : Number(v);

    switch (slug) {
        case "lumpsum-calculator": {
            const P = getNumber(form.principal_amount);
            const r = getNumber(form.annual_return_rate) / 100;
            const n = getNumber(form.investment_period_years);
            const FV = P * Math.pow(1 + r, n);
            return {
                corpusValue: FV,
                totalDeposited: P,
                totalEarnings: FV - P,
                yearly: Array.from({ length: n }, (_, i) => P * Math.pow(1 + r, i + 1))
            };
        }
        case "sip-calculator": {
            const P = getNumber(form.monthly_investment);
            const r = getNumber(form.annual_return_rate) / 12 / 100;
            const n = getNumber(form.investment_period_years) * 12;
            const FV = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
            return {
                corpusValue: FV,
                totalDeposited: P * n,
                totalEarnings: FV - (P * n),
                yearly: Array.from({ length: getNumber(form.investment_period_years) }, (_, i) => {
                    const months = (i + 1) * 12;
                    return P * (((Math.pow(1 + r, months) - 1) / r) * (1 + r));
                })
            };
        }
        case "goal-planning-calculator": {
            // Find months needed to reach goal given current savings and monthly investment at expected return
            const G = getNumber(form.goal_amount);
            const Cs = getNumber(form.current_savings);
            const P = getNumber(form.monthly_investment);
            const r = getNumber(form.expected_return_rate) / 12 / 100; // monthly
            if (G <= 0 || (Cs <= 0 && P <= 0)) {
                return { corpusValue: 0, totalDeposited: 0, totalEarnings: 0, yearly: [] };
            }
            // Handle zero rate analytically
            if (r === 0) {
                const n = Math.max(0, Math.ceil((G - Cs) / (P || 1))); // months
                const FV = Cs + P * n;
                const years = Math.ceil(n / 12);
                const yearly = Array.from({ length: years }, (_, i) => {
                    const m = (i + 1) * 12;
                    return Cs + P * Math.min(m, n);
                });
                return {
                    corpusValue: FV,
                    totalDeposited: Cs + P * n,
                    totalEarnings: FV - (Cs + P * n),
                    yearly,
                };
            }
            // Binary search for minimal n such that value >= G
            const valueAt = (months) => Cs * Math.pow(1 + r, months) + P * (((Math.pow(1 + r, months) - 1) / r) * (1 + r));
            let lo = 0, hi = 1000 * 12; // up to 1000 years cap
            while (lo < hi) {
                const mid = Math.floor((lo + hi) / 2);
                if (valueAt(mid) >= G) hi = mid; else lo = mid + 1;
            }
            const n = lo; // months
            const FV = valueAt(n);
            const years = Math.max(1, Math.ceil(n / 12));
            const yearly = Array.from({ length: years }, (_, i) => valueAt(Math.min((i + 1) * 12, n)));
            const totalDeposited = Cs + P * n;
            return {
                corpusValue: FV,
                totalDeposited,
                totalEarnings: FV - totalDeposited,
                yearly,
            };
        }
        case "time-duration-calculator": {
            const start = form.start_date ? new Date(form.start_date) : null;
            const end = form.end_date ? new Date(form.end_date) : null;
            if (!start || !end || isNaN(start.getTime()) || isNaN(end.getTime()) || end < start) {
                return { corpusValue: 0, totalDeposited: 0, totalEarnings: 0, yearly: [] };
            }
            const msPerDay = 24 * 60 * 60 * 1000;
            const days = Math.round((end - start) / msPerDay);
            // Approximate months and years for a small trend line (non-monetary)
            const years = Math.max(1, Math.ceil(days / 365));
            const yearly = Array.from({ length: years }, (_, i) => Math.min(days, (i + 1) * 365));
            const monthsApprox = Math.floor(days / 30);
            const yearsApprox = (days / 365);
            return {
                corpusValue: days, // use days as primary numeric value
                totalDeposited: 0,
                totalEarnings: 0,
                yearly,
                // extra breakdowns for UI
                totalDays: days,
                totalMonths: monthsApprox,
                totalYears: yearsApprox,
            };
        }
        case "retirement-planning-calculator": {
            const currentAge = getNumber(form.current_age);
            const retireAge = getNumber(form.retirement_age);
            const monthly = getNumber(form.monthly_expenses);
            const infl = getNumber(form.inflation_rate) / 100;
            const years = Math.max(0, retireAge - currentAge);
            const futureMonthly = monthly * Math.pow(1 + infl, years);
            const yearly = Array.from({ length: years }, (_, i) => monthly * Math.pow(1 + infl, i + 1));
            return {
                corpusValue: futureMonthly, // future monthly expense at retirement
                totalDeposited: 0,
                totalEarnings: futureMonthly - monthly,
                yearly,
            };
        }
        case "stock-market-vs-fd-calculator": {
            const P = getNumber(form.principal_amount);
            const s = getNumber(form.stock_return_rate) / 100;
            const f = getNumber(form.fd_return_rate) / 100;
            const n = getNumber(form.years);
            const FV_stock = P * Math.pow(1 + s, n);
            const FV_fd = P * Math.pow(1 + f, n);
            const yearlyStock = Array.from({ length: n }, (_, i) => P * Math.pow(1 + s, i + 1));
            const yearlyFd = Array.from({ length: n }, (_, i) => P * Math.pow(1 + f, i + 1));
            return {
                corpusValue: FV_stock,
                totalDeposited: P,
                totalEarnings: FV_stock - P,
                yearly: yearlyStock,
                // extra fields for chart/UI
                fdValue: FV_fd,
                yearlyFd,
            };
        }
        case "step-up-sip-calculator": {
            const initial = getNumber(form.initial_sip);
            const g = getNumber(form.annual_increase_percent) / 100; // yearly step-up
            const rAnnual = getNumber(form.annual_return_rate) / 100;
            const years = getNumber(form.investment_period_years);
            const r = rAnnual / 12; // monthly
            let totalDeposited = 0;
            let FV = 0;
            const yearly = [];
            for (let y = 0; y < years; y++) {
                const monthlySip = initial * Math.pow(1 + g, y);
                // simulate this year (12 months)
                for (let m = 0; m < 12; m++) {
                    FV = (FV + monthlySip) * (1 + r);
                    totalDeposited += monthlySip;
                }
                yearly.push(FV);
            }
            return {
                corpusValue: FV,
                totalDeposited,
                totalEarnings: FV - totalDeposited,
                yearly,
            };
        }
        case "fd-calculator": {
            const P = getNumber(form.principal_amount);
            const r = getNumber(form.fd_rate) / 100;
            const t = getNumber(form.fd_period_years);
            const freqMap = { Annual: 1, "Half-Yearly": 2, Quarterly: 4, Monthly: 12 };
            const n = freqMap[form.compounding_frequency] || 1;
            const FV = P * Math.pow(1 + r / n, n * t);
            return {
                corpusValue: FV,
                totalDeposited: P,
                totalEarnings: FV - P,
                yearly: Array.from({ length: t }, (_, i) => P * Math.pow(1 + r / n, n * (i + 1)))
            };
        }
        // Add similar logic for other calculators
        default:
            return null;
    }
}

const CalculatorPage = () => {
    const params = typeof useParams === 'function' ? useParams() : null;
    const calcName = params?.['calc-name'];

    const calculator = getCalculatorBySlug(calcName || "lumpsum-calculator");

    // Dynamically build state from calculator params
    const initialForm = useMemo(() => {
        const obj = {};
        if (calculator) {
            calculator.params.forEach(p => { obj[p.name] = ''; });
        }
        return obj;
    }, [calculator]);

    const [form, setForm] = useState(initialForm);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Result shape: { corpusValue, totalDeposited, totalEarnings, yearly }
    const result = isSubmitted ? calculateResult(calculator.slug, form) : null;

    // Labels for chart
    const yearsLabel = result?.yearly ? result.yearly.map((_, i) => `Year ${i + 1}`) : [];

    // Determine if this calculator represents monetary values
    const moneySlugs = new Set([
        'lumpsum-calculator',
        'sip-calculator',
        'fd-calculator',
        'step-up-sip-calculator',
        'stock-market-vs-fd-calculator',
        'retirement-planning-calculator',
        'goal-planning-calculator',
    ]);
    const isMoney = moneySlugs.has(calculator.slug);

    // Build an invested series when it makes sense and is accurate
    let investedSeries = [];
    if (result?.yearly?.length) {
        const nYears = result.yearly.length;
        switch (calculator.slug) {
            case 'lumpsum-calculator':
            case 'fd-calculator':
                investedSeries = Array.from({ length: nYears }, () => result.totalDeposited || 0);
                break;
            case 'sip-calculator': {
                const P = Number(form.monthly_investment) || 0;
                investedSeries = Array.from({ length: nYears }, (_, i) => P * 12 * (i + 1));
                break;
            }
            case 'step-up-sip-calculator': {
                const initial = Number(form.initial_sip) || 0;
                const g = (Number(form.annual_increase_percent) || 0) / 100;
                let cum = 0;
                investedSeries = Array.from({ length: nYears }, (_, i) => {
                    const thisYearMonthly = initial * Math.pow(1 + g, i);
                    cum += thisYearMonthly * 12;
                    return cum;
                });
                break;
            }
            default:
                // For other calculators (non-monetary or complex): omit invested line for clarity
                investedSeries = [];
        }
    }

    const isStockVsFd = calculator.slug === 'stock-market-vs-fd-calculator';
    const datasets = [
        {
            label: isStockVsFd ? 'Stock Value' : 'Projected Value',
            data: result?.yearly || [],
            fill: true,
            borderColor: 'rgba(59,130,246,1)', // blue-500
            backgroundColor: 'rgba(59,130,246,0.12)',
            pointRadius: 0,
            pointHoverRadius: 4,
            borderWidth: 2,
            tension: 0.25,
        },
    ];
    if (isStockVsFd && Array.isArray(result?.yearlyFd)) {
        datasets.push({
            label: 'FD Value',
            data: result.yearlyFd,
            fill: false,
            borderColor: 'rgba(234,179,8,1)', // amber-500
            backgroundColor: 'rgba(234,179,8,0.2)',
            pointRadius: 0,
            borderWidth: 2,
            tension: 0.25,
        });
    }
    if (investedSeries.length) {
        datasets.push({
            label: 'Invested Amount',
            data: investedSeries,
            fill: false,
            borderColor: 'rgba(34,197,94,1)', // green-500
            backgroundColor: 'rgba(34,197,94,0.2)',
            pointRadius: 0,
            borderWidth: 2,
            borderDash: [6, 4],
            tension: 0.1,
        });
    }

    const chartData = { labels: yearsLabel, datasets };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
            legend: { display: true, position: 'top', labels: { color: '#E5E7EB' } },
            tooltip: {
                backgroundColor: 'rgba(17,24,39,0.9)',
                titleColor: '#F9FAFB',
                bodyColor: '#E5E7EB',
                borderColor: 'rgba(55,65,81,0.5)',
                borderWidth: 1,
                callbacks: {
                    label: (ctx) => {
                        const v = ctx.parsed.y || 0;
                        if (!isMoney) return `${ctx.dataset.label}: ${v.toLocaleString()}`;
                        return `${ctx.dataset.label}: ₹${v.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: { color: '#9CA3AF' },
                grid: { color: 'rgba(255,255,255,0.06)' },
            },
            y: {
                ticks: {
                    color: '#9CA3AF',
                    callback: (value) => {
                        const num = Number(value);
                        if (!isMoney) return num.toLocaleString();
                        // Format in lakhs/crores for readability
                        if (num >= 1e7) return `₹${(num / 1e7).toFixed(1)} Cr`;
                        if (num >= 1e5) return `₹${(num / 1e5).toFixed(1)} L`; // Lakhs
                        return `₹${num.toLocaleString()}`;
                    },
                },
                grid: { color: 'rgba(255,255,255,0.06)' },
                beginAtZero: true,
            },
        },
        elements: { line: { capBezierPoints: true } },
        animation: { duration: 500, easing: 'easeOutQuart' },
    };


    // Handlers
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };
    const handleReset = () => {
        setForm(initialForm);
        setIsSubmitted(false);
    };

    if (!calculator) return <div>Calculator not found</div>;

    // Input validation
    const isValid = calculator.params.every(p => {
        if (p.type === "number") return Number(form[p.name]) > 0;
        if (p.type === "string" && p.options) return !!form[p.name];
        if (p.type === "date") return !!form[p.name];
        return !!form[p.name];
    });

    const headerRef = useRef(null);
    const formRef = useRef(null);
    const aboutRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
    const formInView = useInView(formRef, { once: true, margin: "-100px" });
    const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
    
    return (
        <div className="min-h-screen pt-20   bg-black text-white">
            {/* Header Section */}
            <section ref={headerRef} className="px-6 md:px-12 lg:px-20 pt-24 pb-12 max-w-7xl mx-auto border-b border-gray-800">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                    <motion.div 
                        className="lg:max-w-md"
                        initial={{ opacity: 0, x: -50 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-wide uppercase">
                            {calculator.name}<br/>CALC
                        </h1>
                    </motion.div>
                    <motion.div 
                        className="lg:max-w-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {calculator.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Section */}
            <main ref={formRef} className="px-6 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-10 w-full">
                    {/* Inputs */}
                    <motion.section 
                        className="w-full md:w-1/2 flex flex-col justify-between px-3 flex-1 min-h-[500px]"
                        initial={{ opacity: 0, x: -30 }}
                        animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex flex-col gap-12">
                            {calculator.params.map((param, index) => (
                                <motion.div 
                                    key={param.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                >
                                    <label
                                        htmlFor={param.name}
                                        className="block text-xs uppercase tracking-wider mb-3 text-gray-400"
                                    >
                                        {param.name.replace(/_/g, ' ')}
                                    </label>
                                    {param.type === "string" && param.options ? (
                                        <select
                                            id={param.name}
                                            name={param.name}
                                            value={form[param.name]}
                                            onChange={handleChange}
                                            required
                                            className="w-full p-4 bg-transparent border border-gray-700 rounded-sm text-white capitalize placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                                        >
                                            <option value="" className="bg-black">Choose...</option>
                                            {param.options.map(opt => (
                                                <option key={opt} value={opt} className="bg-black">{opt}</option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            id={param.name}
                                            name={param.name}
                                            type={param.type === "date" ? "date" : "number"}
                                            value={form[param.name]}
                                            onChange={handleChange}
                                            required
                                            placeholder={param.type === "number" ? "Ex. 50000" : ""}
                                            className="w-full p-4 bg-transparent border border-gray-700 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <motion.div 
                            className="flex flex-col gap-4 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        >
                            <motion.button
                                type="submit"
                                className="w-full p-4 bg-white text-black font-medium rounded-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase text-sm tracking-wide"
                                disabled={!isValid}
                            >
                                Plan My Future Value
                            </motion.button>
                            <motion.button
                                type="button"
                                onClick={handleReset}
                                className="w-full p-4 border border-gray-700 text-white rounded-sm hover:bg-gray-900 transition-colors uppercase text-sm tracking-wide"
                            >
                                Reset
                            </motion.button>
                        </motion.div>
                    </motion.section>

                    {/* Output and Chart */}
                    <motion.section 
                        className="w-full md:w-1/2 flex flex-col gap-6 flex-1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {/* Chart */}
                        <motion.div 
                            className={`flex-1 min-h-[350px] bg-[#1a1a1a] border border-gray-700 rounded-lg ${!isSubmitted ? 'opacity-50' : ''}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={formInView ? { opacity: isSubmitted ? 1 : 0.5, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        >
                            {isSubmitted && chartData.labels.length > 0 ? (
                                <div className="h-full w-full p-4">
                                    <Line data={chartData} options={chartOptions} />
                                </div>
                            ) : (
                                <div className="h-full w-full flex items-center justify-center">
                                    <p className="text-gray-500">Enter your details and click "CALCULATE" to see results</p>
                                </div>
                            )}
                        </motion.div>

                        {/* Summary Box */}
                        <motion.div 
                            className={`bg-[#1a1a1a] border border-gray-700 rounded-sm p-6 transition-opacity relative ${!isSubmitted ? 'opacity-50' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={formInView ? { opacity: isSubmitted ? 1 : 0.5, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        >
                            {!isSubmitted ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-gray-500 text-sm">Results will appear here</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {calculator.slug === 'time-duration-calculator' ? (
                                        <>
                                            <div className="flex justify-between items-center py-2">
                                                <span className="text-gray-400 text-sm">Total Days:</span>
                                                <span className="font-semibold text-lg">{(result?.totalDays || 0).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-t border-gray-800">
                                                <span className="text-gray-400 text-sm">Approx Months:</span>
                                                <span className="font-semibold text-lg">{(result?.totalMonths || 0).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-t border-gray-800">
                                                <span className="text-gray-400 text-sm">Approx Years:</span>
                                                <span className="font-semibold text-lg">{(result?.totalYears || 0).toFixed(2)}</span>
                                            </div>
                                        </>
                                    ) : calculator.slug === 'stock-market-vs-fd-calculator' ? (
                                        <>
                                            <div className="flex justify-between items-center py-2">
                                                <span className="text-gray-400 text-sm">Stock Value:</span>
                                                <span className="font-semibold text-lg">₹{(result?.corpusValue || 0).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-t border-gray-800">
                                                <span className="text-gray-400 text-sm">FD Value:</span>
                                                <span className="font-semibold text-lg">₹{(result?.fdValue || 0).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-t border-gray-800">
                                                <span className="text-gray-400 text-sm">Total Deposited:</span>
                                                <span className="font-semibold text-lg">₹{(result?.totalDeposited || 0).toLocaleString()}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex justify-between items-center py-2">
                                                <span className="text-gray-400 text-sm">Your Corpus Value:</span>
                                                <span className="font-bold text-xl">₹{(result?.corpusValue || 0).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-t border-gray-800">
                                                <span className="text-gray-400 text-sm">Total Earnings:</span>
                                                <span className="font-semibold text-lg text-green-400">₹{(result?.totalEarnings || 0).toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-t border-gray-800">
                                                <span className="text-gray-400 text-sm">Total Deposited Amount:</span>
                                                <span className="font-semibold text-lg">₹{(result?.totalDeposited || 0).toLocaleString()}</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.section>
                </form>
            </main>

            {/* About Section */}
            <section ref={aboutRef} className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto border-t border-gray-800">
                <motion.h2 
                    className="text-3xl md:text-4xl font-light mb-12 text-center uppercase tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    About {calculator.name} Calc
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <h3 className="text-lg font-semibold mb-4">What is a {calculator.name} Investment?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {calculator.description}
                        </p>
                        <h3 className="text-lg font-semibold mb-4">How does this {calculator.name} Calculator work?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Our {calculator.name.toLowerCase()} calculator is so convenient to use that even a layman can use it. All you need to do is enter the required inputs such as {calculator.params.slice(0, 2).map(p => p.name.replace(/_/g, ' ')).join(', ')}, and the expected rate of return you are willing to stay invested and, the expected rate of return that you think the investment will generate. After entering the required values, the calculator will give you the future value of your investments.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        <h3 className="text-lg font-semibold mb-4">What is {calculator.name} Calculator?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            With {calculator.name} Calculator, you can calculate the maturity value of your investment made today at a certain rate of interest. For example, if you invest ₹1,00,000 today for 10 years at 12% rate of interest, the {calculator.name.toLowerCase()} calculator tells you the future value of your investment made today will be ₹3,10,584.82 after 10 years.
                        </p>
                        <h3 className="text-lg font-semibold mb-4">When should one prefer {calculator.name} Investment?</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Ideally any investment (whether lumpsum or SIP) should be done keeping in mind your financial goals, time horizon, and risk appetite. {calculator.name} investment is preferred when one has large amount of surplus funds and more importantly if he/she is willing to stay invested for a longer period. Therefore, the return on {calculator.name.toLowerCase()} investment done over a longer period helps generate compounding rate of returns.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>

    );
};

export default CalculatorPage;
