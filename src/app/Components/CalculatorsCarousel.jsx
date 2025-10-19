"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { calculators } from '../calculator/calc-data';

export default function CalculatorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % calculators.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + calculators.length) % calculators.length);
  };

  const getVisibleCalculators = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(calculators[(currentIndex + i) % calculators.length]);
    }
    return visible;
  };

  return (
    <div className="w-full py-16 md:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-400 mb-2">
              Predict Your Portfolio Performance
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-400">
              With Our <span className="text-white font-normal">Financial Calculators.</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getVisibleCalculators().map((calculator, index) => (
            <Link key={index} href={`/calculator/${calculator.slug}`}>
              <div className="relative rounded-lg overflow-hidden h-[350px] md:h-[400px] group cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={calculator.image}
                    alt={calculator.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                </div>
                
                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {calculator.name.toUpperCase()}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2">
                      {calculator.description.substring(0, 100)}...
                    </p>
                  </div>
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
