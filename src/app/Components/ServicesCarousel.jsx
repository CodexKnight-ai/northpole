"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { servicesData } from '../services/servicesData';

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(servicesData[(currentIndex + i) % servicesData.length]);
    }
    return visible;
  };

  return (
    <div ref={ref} className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-400 mb-1 sm:mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Expert Guidance For Every Step
            </motion.h2>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Of <span className="text-white font-normal">Your Financial Journey.</span>
            </motion.h2>
          </motion.div>
          
          {/* Navigation Arrows */}
          <motion.div 
            className="hidden sm:flex gap-2 md:gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <motion.button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              aria-label="Previous"
              whileHover={{ scale: 1.1, borderColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              aria-label="Next"
              whileHover={{ scale: 1.1, borderColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {getVisibleServices().map((service, index) => (
              <motion.div
                key={`${service.slug}-${currentIndex}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
              >
                <Link href={`/services/${service.slug}`}>
                  <motion.div 
                    className="bg-black rounded-lg p-6 sm:p-8 min-h-[250px] sm:h-[280px] md:h-[300px] flex flex-col justify-between cursor-pointer border border-transparent"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-3 sm:mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className="flex sm:hidden justify-center gap-3 mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <motion.button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
            aria-label="Previous"
            whileHover={{ scale: 1.1, borderColor: "#fff" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
            aria-label="Next"
            whileHover={{ scale: 1.1, borderColor: "#fff" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
