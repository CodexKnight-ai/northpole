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

  // Data for the bar chart (Second Card) - AUM Growth
  const barChartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'AUM Growth',
        data: [1500, 2000, 2500, 3000, 3500],
        backgroundColor: 'rgba(233, 219, 194, 0.9)', // Accent color
        borderColor: 'rgba(233, 219, 194, 1)',
        borderWidth: 1,
        borderRadius: 4,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
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
            return `AUM: ₹${context.raw} Cr`;
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
          callback: (value) => `₹${value}`,
        },
        beginAtZero: true,
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeOutQuart'
    },
  };

  // Data for the donut chart (Third Card) - Client Success Stories
  const donutChartData = {
    labels: ['Retirement Planning', "Child's Education", 'Wealth Creation', 'Other Goals'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: [
          'rgba(233, 219, 194, 0.9)',  // Accent color for Retirement
          'rgba(233, 219, 194, 0.7)',  // Lighter accent for Education
          'rgba(233, 219, 194, 0.5)',  // Even lighter for Wealth
          'rgba(153, 153, 153, 0.5)',  // Gray for Others
        ],
        borderColor: [
          'rgba(233, 219, 194, 1)',
          'rgba(233, 219, 194, 0.9)',
          'rgba(233, 219, 194, 0.7)',
          'rgba(153, 153, 153, 0.7)',
        ],
        borderWidth: 2,
        cutout: '65%',
        borderRadius: 4,
        spacing: 3,
        hoverOffset: 10,
      },
    ],
  };

  const donutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#FFFFFF',
          font: {
            size: 10,
            family: 'Arial, sans-serif',
            weight: '400',
          },
          padding: 8,
          boxWidth: 12,
          boxHeight: 12,
          usePointStyle: true,
          pointStyle: 'circle',
          generateLabels: (chart) => {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i];
                return {
                  text: `${label}: ${value}%`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: data.datasets[0].borderColor[i],
                  lineWidth: 1,
                  hidden: false,
                  index: i,
                  fontColor: '#FFFFFF'
                };
              });
            }
            return [];
          }
        }
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
    <div className="w-full py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
          "Why work with real advisor?"
        </h2>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* === Left Card - Line Chart === */}
          <motion.div 
            className="relative rounded-lg bg-black p-4 sm:p-6 flex flex-col text-white h-full hover:border-gray-700 transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <div className="mb-3 sm:mb-4">
              <div className="text-xs text-gray-500 mb-2">1</div>
              <h3 className="text-base sm:text-lg font-light text-gray-300 mb-3 sm:mb-4">Years of Market Experience</h3>
              <div className="flex items-baseline mb-4 sm:mb-6">
                <span className="text-4xl sm:text-5xl font-light text-[#E9DBC2]">25</span>
                <span className="text-xl sm:text-2xl font-light text-[#E9DBC2] ml-1">+</span>
              </div>
            </div>
            <div className="relative w-full h-40 sm:h-48">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </motion.div>

          {/* === Middle Card - Donut Chart === */}
          <motion.div 
            className="relative rounded-lg bg-black p-4 sm:p-6 flex flex-col text-white hover:border-gray-700 transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-3 sm:mb-4">
              <div className="text-xs text-gray-500 mb-2">2</div>
              <h3 className="text-base sm:text-lg font-light text-gray-300 mb-3 sm:mb-4">Client Success Stories</h3>
              <div className="flex items-baseline mb-4 sm:mb-6">
                <span className="text-4xl sm:text-5xl font-light text-[#E9DBC2]">1,000</span>
                <span className="text-xl sm:text-2xl font-light text-[#E9DBC2] ml-1">+</span>
              </div>
            </div>
            <div className="relative w-full h-56 sm:h-64 flex items-center justify-center">
              <Doughnut data={donutChartData} options={donutChartOptions} />
            </div>
          </motion.div>

          {/* === Right Card - Bar Chart === */}
          <motion.div 
            className="relative rounded-lg bg-black p-4 sm:p-6 flex flex-col text-white hover:border-gray-700 transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-3 sm:mb-4">
              <div className="text-xs text-gray-500 mb-2">3</div>
              <h3 className="text-base sm:text-lg font-light text-gray-300 mb-3 sm:mb-4">Portfolios Managed</h3>
              <div className="flex items-baseline mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl md:text-5xl font-light text-[#E9DBC2]">₹3500 Cr</span>
                <span className="text-xl sm:text-2xl font-light text-[#E9DBC2] ml-1">+</span>
              </div>
            </div>
            <div className="relative w-full h-40 sm:h-48">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
