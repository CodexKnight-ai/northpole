'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { servicesData } from './servicesData';

const ServiceCard = ({ title, description, slug, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link href={`/services/${slug}`}>
        <motion.div 
          className="bg-black h-[400px] p-6 rounded-sm hover:bg-zinc-800/50 transition-all duration-300 group cursor-pointer border border-transparent"
          whileHover={{ 
            y: -10, 
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
          }}
          transition={{ duration: 0.08 }}
        >
          <h3 className="text-2xl font-normal text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const StatItem = ({ heading, value, unit, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  const extractNumber = (str) => {
    const match = str.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, '')) : 0;
  };
  
  const targetNumber = extractNumber(value);
  const prefix = value.match(/^[^\d]+/) ? value.match(/^[^\d]+/)[0] : '';
  const suffix = value.match(/[^\d,]+$/) ? value.match(/[^\d,]+$/)[0] : '';
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = targetNumber / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);
  
  const formatNumber = (num) => {
    return num.toLocaleString('en-IN');
  };
  
  return (
    <motion.div 
      ref={ref}
      className="text-center h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.div 
        className="text-gray-400 text-xs md:text-sm tracking-wide text-left"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        {heading}
      </motion.div>
      <div className="text-gray-400 flex text-xs md:text-sm tracking-wide h-full">
        <motion.div 
          className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-2"
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {prefix}{formatNumber(count)}{suffix}
        </motion.div>
        <motion.div 
          className="self-end text-gray-400 text-sm md:text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
        >
          {unit}
        </motion.div>
      </div>
    </motion.div>
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
  
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-50 min-h-screen bg-[#0D0D0D] text-white">
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
        <div ref={headerRef} className="flex items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-gray-400 text-xs md:text-sm mb-4 tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                SERVICES
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                    OUR<br />SERVICES
                  </h1>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    At NORTHPOLE Wealth, we offer a comprehensive suite of financial services designed to meet your unique needs and aspirations. Our strategies are built on a foundation of deep market expertise, disciplined procedures, and a commitment to your long-term success. We partner with you to turn your financial goals into achievable milestones.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-gray-300 p-8"></div>
       {/* Stats Section */}
      <div className="container mx-auto pt-14 px-6 md:px-12 lg:px-20 flex justify-center items-center">
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-16 md:mb-20 h-full">
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </div>  
      {/* NORTHPOLE Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image src="/northpole_banner.svg" alt="Northpole Banner  " width={1920} height={1080} className= "w-screen overflow-hidden mb-12" />
      </motion.div>
      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Services Grid Section */}
          <div ref={servicesRef} className="mb-12">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl text-[#999999] font-light mb-2 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Expert Guidance For Every Step
            </motion.h2>
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light mb-12 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Of <span className="text-white font-bold">Your Financial Journey.</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <motion.div 
            className="flex justify-end gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.button 
              className="w-12 h-12 rounded-sm border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-colors group"
              aria-label="Previous"
              whileHover={{ scale: 1.1, borderColor: "#9CA3AF" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button 
              className="w-12 h-12 rounded-sm border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-colors group"
              aria-label="Next"
              whileHover={{ scale: 1.1, borderColor: "#9CA3AF" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-white group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;