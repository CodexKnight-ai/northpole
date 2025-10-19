"use client";

import { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '../services/servicesData';

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="w-full py-16 md:py-24 ">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-400 mb-2">
              Expert Guidance For Every Step
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-400">
              Of <span className="text-white font-normal">Your Financial Journey.</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
              aria-label="Next"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleServices().map((service, index) => (
            <Link key={index} href={`/services/${service.slug}`}>
              <div className="bg-black rounded-lg p-8 h-[350px] flex flex-col justify-between hover:scale-105 transition-transform duration-300 cursor-pointer ">
                <div>
                  <h3 className="text-xl md:text-2xl font-light text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-700 hover:bg-gray-800 transition-all duration-300"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
