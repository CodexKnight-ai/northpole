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
    { heading: 'Market Experience',value: '25+' ,unit: 'YEARS' },
    { heading: 'Portfolios Managed',value: '₹3,500' ,unit: 'CR' },
    { heading: 'Clients Served',value: '1000+' ,unit: 'CLIENTS' },
    { heading: 'Traders Mentored',value: '500+' ,unit: 'ANNUALLY' },
    { heading: 'Training Sessions',value: '150+' ,unit: 'GLOBALLY' },
  ];

  const services = servicesData;

  return (
    <div className="pt-50 min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="relative w-full">
        <div className="" />
        {/* <div className="relative h-[40vh] md:h-[50vh]">
          <Image
            src="/sky.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        {/* Header Section - Overlaid on image */}
        <div className="flex items-center">
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
      <div className="border-b-[1px] p-8"></div>
       {/* Stats Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-center items-center">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-16 md:mb-20 h-full">
            {stats.map((stat, index) => (
              <div key={index} className="text-center h-full">
                <div className="text-gray-400 text-xs md:text-sm tracking-wide text-left ">
                  {stat.heading}
                </div>
                <div className="text-gray-400 flex text-xs md:text-sm tracking-wide h-full">
                      <div className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-2">
                        {stat.value}
                      </div>
                      <div className="self-end text-gray-400 text-sm md:text-sm tracking-wide">
                        {stat.unit}
                      </div>
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>  
      {/* NORTHPOLE Banner */}
      <Image src="/northpole_banner.png" alt="Northpole Banner  " width={1920} height={1080} className= "w-screen overflow-hidden mb-12" />
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          
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