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
    <div className="w-full py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-12 md:mb-16">
          "Why work with real advisor?"
        </h2>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* === Left Card - Line Chart === */}
          <motion.div 
            className="relative rounded-lg bg-black p-6 flex flex-col text-white h-full hover:border-gray-700 transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-2">1</div>
              <h3 className="text-lg font-light text-gray-300 mb-4">Years of Market Experience</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-light text-white">25</span>
                <span className="text-2xl font-light text-gray-400 ml-1">+</span>
              </div>
            </div>
            <div className="relative w-full h-48 mb-4">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A line graph can represent steady growth and experience accumulation from Year 1 to Year 25.
            </p>
          </motion.div>

          {/* === Middle Card - Donut Chart === */}
          <motion.div 
            className="relative rounded-lg bg-black p-6 flex flex-col text-white hover:border-gray-700 transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-2">2</div>
              <h3 className="text-lg font-light text-gray-300 mb-4">Client Success Stories</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-light text-white">1,000</span>
                <span className="text-2xl font-light text-gray-400 ml-1">+</span>
              </div>
            </div>
            <div className="relative w-full h-48 mb-4 flex items-center justify-center">
              <div className="w-40 h-40 relative">
                <Doughnut data={donutChartData} options={donutChartOptions} />
              </div>
            </div>
            <div className="text-sm leading-relaxed text-gray-400">
              <p className="font-medium mb-2">Pie Chart</p>
              <ul className="space-y-1">
                <li>• Retirement Planning: 40%</li>
                <li>• Child's Education: 30%</li>
                <li>• Wealth Creation: 20%</li>
                <li>• Other Goals: 10%</li>
              </ul>
            </div>
          </motion.div>

          {/* === Right Card - Bar Chart === */}
          <motion.div 
            className="relative rounded-lg bg-black p-6 flex flex-col text-white hover:border-gray-700 transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-2">3</div>
              <h3 className="text-lg font-light text-gray-300 mb-4">Portfolios Managed</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-light text-white">₹3500 Cr</span>
                <span className="text-2xl font-light text-gray-400 ml-1">+</span>
              </div>
            </div>
            <div className="relative w-full h-48 mb-4">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A bar chart can show the growth of Assets Under Management (AUM) over recent years (e.g., 2020, 2021, 2022, 2023, 2024).
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
