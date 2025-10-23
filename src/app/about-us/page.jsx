'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const StatItem = ({ number, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  // Extract numeric value from string like "25+" or "₹3,500"
  const extractNumber = (str) => {
    const match = str.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, '')) : 0;
  };
  
  const targetNumber = extractNumber(number);
  const prefix = number.match(/^[^\d]+/) ? number.match(/^[^\d]+/)[0] : '';
  const suffix = number.match(/[^\d,]+$/) ? number.match(/[^\d,]+$/)[0] : '';
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = targetNumber / (duration / 16); // 60fps
      
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
      className="flex items-center justify-between border-b border-gray-700 py-4 sm:py-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.span 
        className="text-3xl sm:text-4xl md:text-5xl font-light text-white"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        {prefix}{formatNumber(count)}{suffix}
      </motion.span>
      <motion.span 
        className="text-xs sm:text-sm text-gray-300 ml-4 sm:ml-8 text-right"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
      >
        {description}
      </motion.span>
    </motion.div>
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
  
  const headerRef = useRef(null);
  const quoteRef = useRef(null);
  const getStartedRef = useRef(null);
  const ctaRef = useRef(null);
  const storyRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const getStartedInView = useInView(getStartedRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  
  // Scroll-based color change for quote
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start end", "end start"]
  });
  
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#9CA3AF", "#4B5563", "#1F2937", "#000000"]
  );

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-4 sm:p-6 md:p-8 lg:p-16 pt-24 sm:pt-32 md:pt-40 lg:pt-52">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wider mb-2 sm:mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              NUMBER TELLS
            </motion.h2>
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light"
              initial={{ opacity: 0, x: -30 }}
              animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              OUR <motion.span 
                className="text-blue-400 text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
                initial={{ scale: 0.8 }}
                animate={headerInView ? { scale: 1 } : { scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                STORY
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Right Section - Stats */}
          <div>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                description={stat.description}
                index={index}
              />
            ))}
          </div>
        </div>

      

        {/* Bottom Card */}
        <div ref={quoteRef} className="relative rounded-lg mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              className="bg-white rounded-lg p-6 sm:p-8 md:p-12 font-extralight text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl md:font-light leading-relaxed pr-4 sm:pr-8 md:pr-16"
              style={{ color: textColor }}
            >
              YOUR JOURNEY TO WEALTH CREATION BEGINS WITH A SINGLE CONVERSATION.
              REACH OUT TO OUR EXPERT TEAM, AND LET'S START BUILDING YOUR
              PROSPEROUS FUTURE TOGETHER.
            </motion.p>
          </motion.div>
           {/* Large Text */}
          <motion.div 
            className="text-center bg-[#1E1E1E] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h2 
              className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-[#414141] tracking-wider"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              NORTH
            </motion.h2>
          </motion.div>
        </div>

        {/* Get Started Section */}
        <div ref={getStartedRef} className="mt-16 sm:mt-20 md:mt-24 mb-12 sm:mb-16">
          <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
            <motion.div 
              className="gap-2 sm:gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={getStartedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-2 sm:mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={getStartedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Get Started
              </motion.h2>
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={getStartedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Easily!
              </motion.h2>
            </motion.div>
            <motion.p 
              className="text-gray-400 text-xs sm:text-sm md:text-base mt-0 md:mt-6 max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={getStartedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Your journey to wealth creation begins with a single conversation. Reach out to our expert team, and let's start building your prosperous future together.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Financial Calculators Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={getStartedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
            <Link href="/calculators">
              <motion.div 
                className="group relative border border-gray-700 rounded-lg p-6 sm:p-8 h-56 sm:h-64 transition-all duration-300 hover:bg-white hover:border-white cursor-pointer overflow-hidden"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-white group-hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <h3 className="text-lg sm:text-xl font-normal text-white group-hover:text-black transition-colors duration-300 mb-1 sm:mb-2">
                    Financial Calculators
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    Get a estimated idea on how your portfolio will perform
                  </p>
                </div>
              </motion.div>
            </Link>
            </motion.div>

            {/* Our Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={getStartedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
            <Link href="/services">
              <motion.div 
                className="group relative border border-gray-700 rounded-lg p-6 sm:p-8 h-56 sm:h-64 transition-all duration-300 hover:bg-white hover:border-white cursor-pointer overflow-hidden"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-white group-hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <h3 className="text-lg sm:text-xl font-normal text-white group-hover:text-black transition-colors duration-300 mb-1 sm:mb-2">
                    Our Services
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    explore what we have to offer and how you can be benifited from it
                  </p>
                </div>
              </motion.div>
            </Link>
            </motion.div>

            {/* Connect us Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={getStartedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
            <Link href="/contact">
              <motion.div 
                className="group relative border border-gray-700 rounded-lg p-6 sm:p-8 h-56 sm:h-64 transition-all duration-300 hover:bg-white hover:border-white cursor-pointer overflow-hidden"
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-white group-hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                  <h3 className="text-lg sm:text-xl font-normal text-white group-hover:text-black transition-colors duration-300 mb-1 sm:mb-2">
                    Connect us!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    Join a community of like minded personality, become a part of family
                  </p>
                </div>
              </motion.div>
            </Link>
            </motion.div>
          </div>
        </div>

        {/* Contact/CTA Section */}
        <div ref={ctaRef} className="mt-20 sm:mt-24 md:mt-32 mb-12 sm:mb-16 max-w-4xl">
          <motion.p 
            className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Hi, We're Northpole Wealth! 👋
          </motion.p>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 leading-tight mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            A <span className="text-white">NISM-certified</span> wealth management firm{' '}
            <span className="text-gray-300">with a passion for helping you achieve</span>{' '}
            <span className="text-white font-normal">financial freedom through disciplined, goal-based strategies.</span>
          </motion.h2>

          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {/* Brochure/Info Button */}
            <a 
              href="/brochure.pdf" 
              download
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-gray-600 rounded-full text-sm sm:text-base text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Company Brochure</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/northpole-wealth" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-black hover:bg-gray-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:contact@northpolewealth.com"
              className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-black hover:bg-gray-200 transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-black hover:bg-gray-200 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </motion.div>

          
        </div>
         {/* Our Story Section */}
        <div ref={storyRef} className="mt-20 sm:mt-24 md:mt-32 mb-20 sm:mb-24 md:mb-32">
          <motion.p 
            className="text-[12vw] sm:text-[10vw] md:text-[9vw] text-center font-light tracking-wider mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={storyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            OUR STORY
          </motion.p>
          
          <div className="mb-6 sm:mb-8">
            <motion.p 
              className="text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              • Since 2009
            </motion.p>
            
            <motion.div 
              className="space-y-4 sm:space-y-6 w-full text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Northpole Wealth was founded by Kalpesh Patel, a NISM-certified Research Analyst with a vision to make expert financial guidance accessible to all. Built on 25+ years of market experience, our journey began with a simple mission: to empower every Indian to achieve financial independence through disciplined, goal-based investing.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                Our foundation is rooted in systematic strategies and a commitment to education, embodied by the renowned Bhavthagnyanche rule-based trading system. We believe in replacing emotional decisions with proven, data-driven methods, mentoring hundreds of individuals annually to become confident and successful investors.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                Today, Northpole Wealth is a trusted partner for over 1,000 clients, recognized with the prestigious Chief Minister's Award for our contributions to financial literacy. We continue to transform financial goals into reality, managing portfolios worth over ₹3500 Cr+ while staying committed to our community through initiatives like the NMC Tree Plantation. Our story is one of growth, trust, and unwavering dedication to our clients' prosperity.
              </motion.p>
            </motion.div>
          </div>

          {/* Brochure Visual */}
          <motion.div 
            className="mt-12 sm:mt-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-8 sm:p-12 md:p-20 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={storyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <Image src="/northpole_bookMockup.svg" alt="Brochure" width={500} height={500} className='w-full h-full object-contain' />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default App;
