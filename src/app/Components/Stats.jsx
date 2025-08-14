"use client";   

import React from "react";



const Stats = () => {
  return (
    <div className="bg-gradient-to-b from-black via-[#1a0f00] to-black min-h-screen flex items-center justify-center p-6 font-inter">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* === Left Card === */}
        <div className="relative rounded-2xl border border-orange-500 shadow-[0_0_6px_#f97316] bg-gradient-to-b from-[#3a2205] to-[#1a0f00] p-6 flex flex-col justify-between text-white">
          <button
            aria-label="Expand details"
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#3a2205] text-orange-500 flex items-center justify-center text-lg font-bold leading-none select-none"
          >
            +
          </button>
          <p className="text-sm leading-relaxed mb-4">
            Titan clients have historically compounded their wealth at an
            average of 10.72% /year. Composite performance represents the net
            annualized return from 2/20/18 through 12/31/24. Tap the '+' for
            additional disclosures.
          </p>
          <div className="relative w-full h-36 mb-6">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              <defs>
                <linearGradient
                  id="orangeGradient1"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <g stroke="#4b2e05" strokeWidth="0.5">
                {[...Array(9)].map((_, i) => (
                  <line
                    key={i}
                    x1={30 + i * 30}
                    y1="10"
                    x2={30 + i * 30}
                    y2="110"
                  />
                ))}
              </g>

              {/* Baseline line */}
              <polyline
                points="30,110 60,100 90,90 120,82 150,75 180,70 210,65 240,60 270,55"
                stroke="#9ca3af"
                strokeWidth="2"
                fill="none"
              />

              {/* Titan fill area */}
              <path
                d="M30,110 L60,95 L90,80 L120,70 L150,62 L180,55 L210,50 L240,45 L270,40 L270,110 Z"
                fill="url(#orangeGradient1)"
              />

              {/* Titan line */}
              <polyline
                points="30,110 60,95 90,80 120,70 150,62 180,55 210,50 240,45 270,40"
                stroke="#f97316"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="absolute top-8 left-[65%] bg-orange-600 text-white text-xs font-semibold rounded-full px-3 py-1">
              With Titan +10.72%
            </div>
          </div>
          <div className="flex items-baseline font-light select-none">
            <span className="text-[5.5rem] leading-none font-bold">10.72</span>
            <span className="text-2xl leading-none ml-1 font-semibold">%</span>
          </div>
        </div>

        {/* === Middle Card === */}
        <div className="relative rounded-2xl border border-orange-500 shadow-[0_0_6px_#f97316] bg-gradient-to-b from-[#3a2205] to-[#1a0f00] p-6 flex flex-col justify-between text-white">
          <button
            aria-label="Expand details"
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#3a2205] text-orange-500 flex items-center justify-center text-lg font-bold leading-none select-none"
          >
            +
          </button>
          <p className="text-sm leading-relaxed mb-4">
            Better value than a typical private wealth manager.
          </p>
          <div className="relative w-full h-36 mb-6">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              <defs>
                <linearGradient
                  id="orangeGradient2"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Bars */}
              <rect
                x="50"
                y="20"
                width="50%"
                height="90"
                rx="10"
                fill="#4b2e05"
              />
              <rect
                x="180"
                y="65"
                width="50%"
                height="45"
                rx="10"
                fill="url(#orangeGradient2)"
              />

              {/* Labels */}
              <text
                x="75"
                y="15"
                fill="#f97316"
                fontSize="10"
                fontWeight="600"
                textAnchor="middle"
              >
                Others
              </text>
              <text
                x="205"
                y="60"
                fill="white"
                fontSize="10"
                fontWeight="500"
                textAnchor="middle"
              >
                Titan
              </text>
            </svg>
          </div>
          <div className="flex items-baseline font-light select-none">
            <span className="text-[5.5rem] leading-none font-bold">50</span>
            <span className="text-2xl leading-none ml-1 font-semibold">%</span>
          </div>
          <div className="text-xs mt-1 select-none">cheaper</div>
        </div>

        {/* === Right Card === */}
        <div className="relative rounded-2xl border border-orange-500 shadow-[0_0_6px_#f97316] bg-gradient-to-b from-[#3a2205] to-[#1a0f00] p-6 flex flex-col justify-between text-white">
          <button
            aria-label="Expand details"
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#3a2205] text-orange-500 flex items-center justify-center text-lg font-bold leading-none select-none"
          >
            +
          </button>
          <p className="text-sm leading-relaxed mb-4">
            Save up to 5–10 hours weekly managing your portfolio.
          </p>
          <div className="relative w-full h-36 mb-6 flex justify-center items-end">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              <defs>
                <linearGradient
                  id="orangeGradient3"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Semi-circle curve */}
              <path
                d="M30 110 Q150 10 270 110"
                stroke="#f97316"
                strokeWidth="2"
                fill="url(#orangeGradient3)"
              />
            </svg>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-semibold rounded-full px-3 py-1">
              With Titan
            </div>
          </div>
          <div className="flex items-baseline font-light select-none">
            <span className="text-[5.5rem] leading-none font-bold">100</span>
            <span className="text-2xl leading-none ml-1 font-semibold">%</span>
          </div>
          <div className="text-xs mt-1 select-none">time saved</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
