'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData } from './servicesData';

const ServiceCard = ({ title, description, slug }) => {
  return (
    <Link href={`/services/${slug}`}>
      <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm hover:bg-zinc-800/50 transition-all duration-300 group cursor-pointer">
        <h3 className="text-lg font-normal text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};

const ServicesContent = () => {
  const stats = [
    { value: '25+', unit: 'YEARS' },
    { value: '₹3,500', unit: 'CR' },
    { value: '1000+', unit: 'CLIENTS' },
    { value: '500+', unit: 'ANNUALLY' },
    { value: '150+', unit: 'GLOBALLY' },
  ];

  const services = servicesData;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10" />
        <div className="relative h-[40vh] md:h-[50vh]">
          <Image
            src="/sky.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Header Section - Overlaid on image */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-gray-400 text-xs md:text-sm mb-4 tracking-wider">SERVICES</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                    OUR<br />SERVICES
                  </h1>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    At NORTHPOLE Wealth, we offer a comprehensive suite of financial services designed to meet your unique needs and aspirations. Our strategies are built on a foundation of deep market expertise, disciplined procedures, and a commitment to your long-term success. We partner with you to turn your financial goals into achievable milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs md:text-sm tracking-wide">
                  {stat.unit}
                </div>
              </div>
            ))}
          </div>

          {/* NORTHPOLE Banner */}
          <div className="relative bg-gradient-to-br from-gray-100 to-white rounded-sm p-8 md:p-12 lg:p-16 mb-16 md:mb-20 overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="text-blue-600 text-xs md:text-sm mb-3 md:mb-4 tracking-wide font-medium">
                  WE OFFER MULTIPLE SERVICES AT
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black tracking-tight">
                  NORTHPOLE
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm transition-colors text-sm font-medium tracking-wide">
                EXPLORE
              </button>
            </div>
          </div>

          {/* Services Grid Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-light mb-2 leading-tight">
              Expert Guidance For Every Step
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light mb-12 leading-tight">
              Of <span className="text-white">Your Financial Journey.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-end gap-4 mt-12">
            <button 
              className="w-12 h-12 rounded-sm border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-colors group"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-white group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="w-12 h-12 rounded-sm border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-colors group"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-white group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;