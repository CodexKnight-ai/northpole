export const calculators = [
    {
        "name": "SIP",
        "slug": "sip-calculator",
        "params": [
            { "name": "monthly_investment", "type": "number" },
            { "name": "annual_return_rate", "type": "number" },
            { "name": "investment_period_years", "type": "number" }
        ],
        "description": "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly into mutual funds. Our SIP Calculator helps you estimate the future value of your monthly contributions, understand the power of compounding, and plan long-term wealth creation effectively. It is ideal for investors who prefer disciplined investing over a period of time.",
        "formula": "FV = P × [{(1 + r)^n – 1} / r] × (1 + r)",
        "formula_details": [
            "FV: future value",
            "P: monthly investment",
            "r: monthly interest rate (annual_return_rate / 12 / 100)",
            "n: total months (investment_period_years × 12)"
        ],
        "image": "https://plus.unsplash.com/premium_photo-1672660509676-c627d374e2c2?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Goal Planning",
        "slug": "goal-planning-calculator",
        "params": [
            { "name": "goal_amount", "type": "number" },
            { "name": "current_savings", "type": "number" },
            { "name": "monthly_investment", "type": "number" },
            { "name": "expected_return_rate", "type": "number" }
        ],
        "description": "Financial goals like buying a house, funding education, or planning a dream vacation require systematic planning. The Goal Planning Calculator helps you determine the monthly investment required to achieve a specific future goal by considering your current savings, expected returns, and investment horizon. It ensures you stay on track and avoid last-minute financial stress.",
        "formula": "Monthly Investment = (Future Value - Current Savings × (1 + r)^n) / [{((1 + r)^n – 1) / r} × (1 + r)]",
        "formula_details": [
            "r: monthly interest rate (expected_return_rate / 12 / 100)",
            "n: total months until goal"
        ],
        "image": "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2"
    },
    {
        "name": "Lumpsum",
        "slug": "lumpsum-calculator",
        "params": [
            { "name": "principal_amount", "type": "number" },
            { "name": "annual_return_rate", "type": "number" },
            { "name": "investment_period_years", "type": "number" }
        ],
        "description": "A Lumpsum investment is when you invest a one-time amount instead of periodic contributions. This calculator helps you project how much your single investment can grow over time, based on the expected return rate and investment horizon. It is best suited for investors who have a significant amount ready to invest and want to visualize future returns.",
        "formula": "FV = P × (1 + r)^n",
        "formula_details": [
            "FV: future value",
            "P: principal amount",
            "r: annual interest rate (annual_return_rate / 100)",
            "n: investment period (investment_period_years)"
        ],
        "image": "https://plus.unsplash.com/premium_photo-1682986671851-eba6a14e77af?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Time Duration",
        "slug": "time-duration-calculator",
        "params": [
            { "name": "start_date", "type": "date" },
            { "name": "end_date", "type": "date" }
        ],
        "description": "The Time Duration Calculator helps you quickly calculate the exact number of days, months, or years between two dates. This is particularly useful for financial planning, project management, or even personal tracking like counting days to a goal or event.",
        "formula": "Duration = End Date - Start Date",
        "formula_details": [
            "Result in days, months, or years as required"
        ],
        "image": "https://images.unsplash.com/photo-1523289333742-be1143f6b766"
    },
    {
        "name": "Retirement Planning",
        "slug": "retirement-planning-calculator",
        "params": [
            { "name": "current_age", "type": "number" },
            { "name": "retirement_age", "type": "number" },
            { "name": "monthly_expenses", "type": "number" },
            { "name": "inflation_rate", "type": "number" }
        ],
        "description": "Planning for retirement is one of the most crucial aspects of personal finance. Our Retirement Planning Calculator helps you estimate the corpus required to maintain your lifestyle after retirement by factoring in inflation and expected expenses. This ensures financial security and peace of mind for your golden years.",
        "formula": "Future Monthly Expense = Current Monthly Expense × (1 + inflation_rate/100)^(Retirement Age - Current Age)",
        "formula_details": [
            "Inflated expenses over years to retirement"
        ],
        "image": "https://images.unsplash.com/photo-1533444273691-ebf51af8fd9c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Stock Market VS FD",
        "slug": "stock-market-vs-fd-calculator",
        "params": [
            { "name": "principal_amount", "type": "number" },
            { "name": "stock_return_rate", "type": "number" },
            { "name": "fd_return_rate", "type": "number" },
            { "name": "years", "type": "number" }
        ],
        "description": "Not sure whether to invest in the stock market or keep your money in a fixed deposit? This calculator helps you compare the potential returns from both options side by side. By inputting your investment amount, expected stock returns, and FD rates, you can make an informed decision about which option aligns better with your financial goals and risk appetite.",
        "formula": "Stock Market FV = P × (1 + s_r)^n, FD FV = P × (1 + fd_r)^n",
        "formula_details": [
            "s_r: stock return rate (stock_return_rate / 100)",
            "fd_r: fixed deposit rate (fd_return_rate / 100)",
            "n: years"
        ],
        "image": "https://images.unsplash.com/photo-1745509267699-1b1db256601e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Step-Up SIP",
        "slug": "step-up-sip-calculator",
        "params": [
            { "name": "initial_sip", "type": "number" },
            { "name": "annual_increase_percent", "type": "number" },
            { "name": "annual_return_rate", "type": "number" },
            { "name": "investment_period_years", "type": "number" }
        ],
        "description": "The Step-Up SIP Calculator helps you understand the impact of gradually increasing your SIP contributions over time. It allows you to calculate how yearly increments in your investment can significantly boost your overall returns, leveraging both compounding and increasing contributions for long-term wealth creation.",
        "formula": "FV = SUM [SIP_year × ((1 + r)^(n - year))]",
        "formula_details": [
            "SIP_year: SIP amount for each year with annual increment",
            "r: annual interest rate (annual_return_rate / 100)",
            "n: total investment years"
        ],
        "image": "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "FD (Fixed Deposit)",
        "slug": "fd-calculator",
        "params": [
            { "name": "principal_amount", "type": "number" },
            { "name": "fd_rate", "type": "number" },
            { "name": "fd_period_years", "type": "number" },
            { "name": "compounding_frequency", "type": "string", "options": ["Annual", "Half-Yearly", "Quarterly", "Monthly"] }
        ],
        "description": "A Fixed Deposit (FD) is one of the safest investment options available, offering guaranteed returns over a specified period. Our FD Calculator helps you calculate the maturity amount based on your deposit, chosen tenure, interest rate, and compounding frequency. It’s an excellent tool for risk-averse investors who prefer stability over high risk.",
        "formula": "FV = P × (1 + r/n)^(n×t)",
        "formula_details": [
            "P: principal amount",
            "r: annual interest rate (fd_rate / 100)",
            "t: time in years (fd_period_years)",
            "n: number of compounding periods per year (annual=1, half-yearly=2, quarterly=4, monthly=12)"
        ],
        "image": "https://images.unsplash.com/photo-1684679674829-fc7b436ec8e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
