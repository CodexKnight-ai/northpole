import React from 'react';

const StatItem = ({ number, description }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-700 py-6">
      <span className="text-5xl font-light text-white">{number}</span>
      <span className="text-sm text-gray-300 ml-8">{description}</span>
    </div>
  );
};

const App = (props) => {
  const defaultStats = [
    { number: '25+', description: 'Years Market Experience' },
    { number: '₹3,500', description: 'Portfolio Managed' },
    { number: '1000+', description: 'Clients Served' },
    { number: '500+', description: 'Trader Mentored annually' },
    { number: '150+', description: 'Training Sessions Globally' },
  ];

  const stats = props.stats || defaultStats;

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-light tracking-wider mb-4">
              NUMBER TELLS
            </h2>
            <h1 className="text-6xl font-light">
              OUR <span className="text-blue-400">STORY</span>
            </h1>
          </div>

          {/* Right Section - Stats */}
          <div>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                description={stat.description}
              />
            ))}
          </div>
        </div>

        {/* Bottom Card */}
        <div className="relative bg-white rounded-lg p-12 mb-8">
          <div className="absolute top-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
          <p className="text-gray-400 text-2xl md:text-3xl font-light leading-relaxed pr-16">
            YOUR JOURNEY TO WEALTH CREATION BEGINS WITH A SINGLE CONVERSATION.
            REACH OUT TO OUR EXPERT TEAM, AND LET'S START BUILDING YOUR
            PROSPEROUS FUTURE TOGETHER.
          </p>
        </div>

        {/* Large Text */}
        <div className="text-center">
          <h2 className="text-9xl font-bold text-gray-800 tracking-wider">
            NORTH
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
