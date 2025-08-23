"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const Stats = () => {
  // Data for the line chart (First Card)
  const lineChartData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Wealth Growth',
        data: [100, 115, 130, 142, 155, 170, 185],
        borderColor: '#E9DBC2',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(233, 219, 194, 0.2)');
          gradient.addColorStop(1, 'rgba(13, 13, 13, 0)');
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#0D0D0D',
        pointBorderColor: '#E9DBC2',
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#0D0D0D',
        pointHoverBorderWidth: 2,
        borderWidth: 2,
        borderJoinStyle: 'round',
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(6, 6, 6, 0.95)', // Using col1 (#060606) from theme
        titleFont: { 
          size: 13, 
          weight: 'bold',
          family: 'Arial, sans-serif',
          color: '#E9DBC2' // Accent color for text
        },
        bodyFont: { 
          size: 13,
          family: 'Arial, sans-serif',
          color: '#EDEDED' // Light text color
        },
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => {
            return `Growth: ${context.parsed.y}%`;
          },
          title: (items) => {
            return `Year: ${items[0]?.label || ''}`;
          }
        },
        cornerRadius: 4,
        borderColor: 'rgba(233, 219, 194, 0.3)', // Accent color with transparency
        borderWidth: 1,
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 10,
        left: 10
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#E9DBC2', // Accent color for better visibility
          font: {
            weight: '500',
            size: 12,
            family: 'Arial, sans-serif'
          },
          padding: 10
        },
      },
      y: {
        grid: {
          color: 'rgba(153, 153, 153, 0.2)', // Secondary text color with transparency
          drawBorder: false,
          borderDash: [4, 4],
          drawTicks: false,
          lineWidth: 1
        },
        ticks: {
          color: '#999999', // Secondary text color
          font: {
            family: 'Arial, sans-serif',
            size: 11
          },
          padding: 8,
          callback: (value) => `${value}%`,
        },
        beginAtZero: true,
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };

  // Data for the bar chart (Second Card)
  const barChartData = {
    labels: ['Others', 'Titan'],
    datasets: [
      {
        label: 'Cost Comparison',
        data: [200, 100],
        backgroundColor: [
          'rgba(153, 153, 153, 0.6)', // Secondary text color for others
          'rgba(233, 219, 194, 0.9)', // Accent color for Titan
        ],
        borderColor: [
          'rgba(153, 153, 153, 0.8)', // Border for others
          'rgba(233, 219, 194, 1)',  // Border for Titan
        ],
        borderWidth: 1,
        borderRadius: 2,
        barPercentage: 0.7, // Increased width of bars
        categoryPercentage: 0.6, // More space between categories
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(6, 6, 6, 0.95)', // Using col1 (#060606)
        titleFont: { 
          size: 13, 
          weight: 'bold',
          family: 'Arial, sans-serif',
          color: '#E9DBC2' // Accent color for text
        },
        bodyFont: { 
          size: 13,
          family: 'Arial, sans-serif',
          color: '#EDEDED' // Light text color
        },
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => {
            return `Cost: $${context.raw}`;
          },
          title: (items) => {
            return items[0]?.label || '';
          }
        },
        cornerRadius: 4,
        borderColor: 'rgba(233, 219, 194, 0.3)', // Accent color with transparency
        borderWidth: 1,
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 10,
        left: 10
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#E9DBC2', // Accent color for better visibility
          font: {
            weight: '500',
            size: 13,
            family: 'Arial, sans-serif'
          },
          padding: 10
        },
      },
      y: {
        grid: {
          color: 'rgba(153, 153, 153, 0.2)', // Secondary text color with transparency
          drawBorder: false,
          borderDash: [4, 4],
          drawTicks: false,
          lineWidth: 1
        },
        ticks: {
          color: '#999999', // Secondary text color
          font: {
            family: 'Arial, sans-serif',
            size: 11
          },
          padding: 8,
          callback: (value) => `$${value}`,
        },
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    },
  };

  // Data for the donut chart (Third Card)
  const donutChartData = {
    labels: ['Time Saved', 'Time Spent'],
    datasets: [
      {
        data: [100, 0],
        backgroundColor: [
          'rgba(233, 219, 194, 0.9)', // Main accent color
          'rgba(23, 23, 23, 0.5)',    // Darker background
        ],
        borderColor: [
          'rgba(233, 219, 194, 1)',   // Border matches fill
          'rgba(23, 23, 23, 0.7)',    // Slightly lighter border for contrast
        ],
        borderWidth: 0,
        cutout: '75%',
        borderRadius: 2,
        spacing: 2,
        hoverOffset: 8,
      },
    ],
  };

  const donutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(6, 6, 6, 0.95)', // Using col1 (#060606)
        titleFont: { 
          size: 13, 
          weight: 'bold',
          family: 'Arial, sans-serif',
          color: '#E9DBC2' // Accent color for text
        },
        bodyFont: { 
          size: 13,
          family: 'Arial, sans-serif',
          color: '#EDEDED' // Light text color
        },
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
          },
        },
        cornerRadius: 4,
        borderColor: 'rgba(233, 219, 194, 0.3)', // Accent color with transparency
        borderWidth: 1,
      },
    },
    cutout: '70%',
    radius: '85%',
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1500,
      easing: 'easeOutQuart',
    },
  };

  // Animation variants
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-black via-[#1a0f00] to-black min-h-screen flex items-center justify-center p-6 font-inter">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* === Left Card - Line Chart === */}
        <motion.div 
          className="relative rounded-2xl border border-orange-500 shadow-[0_0_6px_#f97316] bg-gradient-to-b from-[#3a2205] to-[#1a0f00] p-6 flex flex-col justify-between text-white"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <button
            aria-label="Expand details"
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#3a2205] text-orange-500 flex items-center justify-center text-lg font-bold leading-none select-none z-10 hover:bg-orange-600 hover:text-white transition-colors duration-200"
          >
            +
          </button>
          <p className="text-sm leading-relaxed mb-4">
            Titan clients have historically compounded their wealth at an
            average of 10.72% /year. Composite performance represents the net
            annualized return from 2/20/18 through 12/31/24. Tap the '+' for
            additional disclosures.
          </p>
          <div className="relative w-full h-48 mb-6">
            <Line data={lineChartData} options={lineChartOptions} />
            <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-semibold rounded-full px-3 py-1">
              +10.72% YoY
            </div>
          </div>
          <div className="flex items-baseline font-light select-none">
            <span className="text-[5.5rem] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              10.72
            </span>
            <span className="text-2xl leading-none ml-1 font-semibold text-orange-400">%</span>
          </div>
          <div className="text-sm text-gray-300 mt-1">Average Annual Return</div>
        </motion.div>

        {/* === Middle Card - Bar Chart === */}
        <motion.div 
          className="relative rounded-2xl border border-orange-500 shadow-[0_0_6px_#f97316] bg-gradient-to-b from-[#3a2205] to-[#1a0f00] p-6 flex flex-col justify-between text-white"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.1 }}
        >
          <button
            aria-label="Expand details"
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#3a2205] text-orange-500 flex items-center justify-center text-lg font-bold leading-none select-none z-10 hover:bg-orange-600 hover:text-white transition-colors duration-200"
          >
            +
          </button>
          <p className="text-sm leading-relaxed mb-4">
            Better value than a typical private wealth manager.
          </p>
          <div className="relative w-full h-48 mb-6">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
          <div className="flex items-baseline font-light select-none">
            <span className="text-[5.5rem] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              50
            </span>
            <span className="text-2xl leading-none ml-1 font-semibold text-orange-400">%</span>
          </div>
          <div className="text-sm text-gray-300 mt-1">cheaper than competitors</div>
        </motion.div>

        {/* === Right Card - Donut Chart === */}
        <motion.div 
          className="relative rounded-2xl border border-orange-500 shadow-[0_0_6px_#f97316] bg-gradient-to-b from-[#3a2205] to-[#1a0f00] p-6 flex flex-col justify-between text-white"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          transition={{ delay: 0.2 }}
        >
          <button
            aria-label="Expand details"
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#3a2205] text-orange-500 flex items-center justify-center text-lg font-bold leading-none select-none z-10 hover:bg-orange-600 hover:text-white transition-colors duration-200"
          >
            +
          </button>
          <p className="text-sm leading-relaxed mb-4">
            Save up to 5–10 hours weekly managing your portfolio.
          </p>
          <div className="relative w-full h-48 mb-6 flex items-center justify-center">
            <div className="w-40 h-40 relative">
              <Doughnut data={donutChartData} options={donutChartOptions} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-orange-400">100%</span>
                <span className="text-xs text-gray-300">Time Saved</span>
              </div>
            </div>
          </div>
          <div className="flex items-baseline font-light select-none justify-center">
            <span className="text-[5.5rem] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
              100
            </span>
            <span className="text-2xl leading-none ml-1 font-semibold text-orange-400">%</span>
          </div>
          <div className="text-sm text-gray-300 text-center mt-1">efficiency gain</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
