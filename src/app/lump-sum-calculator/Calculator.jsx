'use client';

import { useMemo, useState } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const Calculator = () => {
  const MAX_INVESTMENT = 1000 * 10000000; // 1000 crores in INR (1 crore = 1e7)
  const MAX_RETURNS = 50; // percent
  const MAX_YEARS = 80; // years
  const [investment, setInvestment] = useState('');
  const [tenure, setTenure] = useState('');
  const [returns, setReturns] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Numeric copies for calculations
  const invNum = Number(investment) || 0;
  const yrsNum = Number(tenure) || 0;
  const rateNum = Number(returns) || 0;

  // Calculate values only when form is submitted
  const corpusValue = isSubmitted ? invNum * Math.pow(1 + rateNum / 100, yrsNum) : 0;
  const totalEarnings = isSubmitted ? corpusValue - invNum : 0;
  const totalDeposited = isSubmitted ? invNum : 0;

  // Prepare chart data (yearly points over the provided tenure in years)
  const { chartData, chartOptions } = useMemo(() => {
    const inv = invNum;
    const yrs = Math.min(yrsNum, MAX_YEARS);
    const rate = Math.min(rateNum, MAX_RETURNS);

    // Yearly points on x-axis
    const years = Math.max(0, Math.floor(yrs));
    const labels = Array.from({ length: years }, (_, i) => `Y${i + 1}`);
    const data = Array.from({ length: years }, (_, i) => inv * Math.pow(1 + rate / 100, i + 1));

    return {
      chartData: {
        labels,
        datasets: [
          {
            label: 'Projected Value',
            data,
            fill: true,
            borderColor: 'rgba(59,130,246,1)', // blue-500
            backgroundColor: 'rgba(59,130,246,0.1)',
            pointRadius: 2,
            pointHoverRadius: 5,
            tension: 0.25,
          },
          {
            label: 'Invested Amount',
            data: labels.map(() => inv),
            fill: false,
            borderColor: 'rgba(34,197,94,1)', // green-500
            backgroundColor: 'rgba(34,197,94,0.2)',
            pointRadius: 0,
            borderWidth: 2,
            borderDash: [6, 4],
            tension: 0,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'top', labels: { color: '#D1D5DB' } },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const v = ctx.parsed.y || 0;
                return `${ctx.dataset.label}: ₹${v.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
              },
            },
          },
        },
        scales: {
          x: {
            ticks: { color: '#9CA3AF' }, // gray-400
            grid: { color: 'rgba(255,255,255,0.06)' },
          },
          y: {
            ticks: {
              color: '#9CA3AF',
              callback: (value) => `₹${Number(value).toLocaleString()}`,
            },
            grid: { color: 'rgba(255,255,255,0.06)' },
          },
        },
      },
    };
  }, [investment, tenure, returns]);

  const handleReset = () => {
    setInvestment('');
    setTenure('');
    setReturns('');
    setIsSubmitted(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      invNum > 0 && invNum <= MAX_INVESTMENT &&
      yrsNum > 0 && yrsNum <= MAX_YEARS &&
      rateNum > 0 && rateNum <= MAX_RETURNS
    ) {
      setIsSubmitted(true);
    }
  };

  const isValid =
    invNum > 0 && invNum <= MAX_INVESTMENT &&
    yrsNum > 0 && yrsNum <= MAX_YEARS &&
    rateNum > 0 && rateNum <= MAX_RETURNS;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6 md:p-12">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-10 w-full max-w-7xl">
        {/* Left side - Inputs */}
        <section className="w-full md:w-1/2 flex flex-col justify-between px-3 flex-1 min-h-[500px]">
          <div className="flex flex-col gap-12">
            {/* Investment Input */}
            <div>
              <label
                htmlFor="investment"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                INVESTMENT AMOUNT
              </label>
              <input
                id="investment"
                type="number"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                min={0}
                max={MAX_INVESTMENT}
                step="1"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-white"
                placeholder="Ex: 10,00,000"
              />
              {invNum > MAX_INVESTMENT && (
                <p className="mt-1 text-sm text-red-400">Max allowed is ₹{MAX_INVESTMENT.toLocaleString()} (1000 Crore).</p>
              )}
            </div>

            {/* Tenure Input */}
            <div>
              <label
                htmlFor="tenure"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                TENURE (in years) (Upto 80 years)
              </label>
              <input
                id="tenure"
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                min={1}
                max={MAX_YEARS}
                step="1"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-white"
                placeholder="Ex: 10"
              />
              {yrsNum > MAX_YEARS && (
                <p className="mt-1 text-sm text-red-400">Max tenure is {MAX_YEARS} years.</p>
              )}
            </div>

            {/* Expected Returns Input */}
            <div>
              <label
                htmlFor="returns"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                EXPECTED RATE OF RETURN
              </label>
              <input
                id="returns"
                type="number"
                value={returns}
                onChange={(e) => setReturns(e.target.value)}
                min={0}
                max={MAX_RETURNS}
                step="0.1"
                className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-white"
                placeholder="Ex: 12%"
              />
              {rateNum > MAX_RETURNS && (
                <p className="mt-1 text-sm text-red-400">Max expected return is {MAX_RETURNS}% p.a.</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="submit"
              className="w-full p-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isValid}
            >
              PLAN MY FUTURE VALUE
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full p-3 border border-gray-500 text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              RESET
            </button>
          </div>
        </section>

        {/* Right side - Output */}
        <section className="w-full md:w-1/2 flex flex-col gap-6 flex-1">
          {/* Chart */}
          <div className={`flex-1 min-h-[350px] bg-[#1a1a1a] border border-gray-700 rounded-lg ${!isSubmitted ? 'opacity-50' : ''}`}>
            {isSubmitted && chartData.labels.length > 0 ? (
              <div className="h-full w-full p-4">
                <Line data={chartData} options={chartOptions} />
              </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-gray-500">Enter your details and click "PLAN MY FUTURE VALUE" to see results</p>
              </div>
            )}
          </div>

          {/* Summary Box */}
          <div className={`bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 transition-opacity relative ${!isSubmitted ? 'opacity-50' : ''}`}>
            {!isSubmitted ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Results will appear here</p>
              </div>
            ) : (
              <div className={isSubmitted ? 'opacity-100' : 'opacity-0'}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Your Corpus Value:</span>
                  <span className="font-semibold">
                    ₹{corpusValue.toLocaleString()} ({(corpusValue / 10000000).toFixed(2)} Crores)
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Total Earnings:</span>
                  <span className="font-semibold text-green-400">
                    ₹{totalEarnings.toLocaleString()} ({(totalEarnings / 10000000).toFixed(2)} Crores)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Deposited Amount:</span>
                  <span className="font-semibold">
                    ₹{totalDeposited.toLocaleString()} ({(totalDeposited / 100000).toFixed(2)} Lakhs)
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
      </form>
    </main>
  );
};

export default Calculator;
