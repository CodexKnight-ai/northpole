"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    img: "/award1.jpg",
    alt: "Animated character running on a glowing colorful cosmic trail with planet Saturn and sun flare in the background in space",
    title: "Chief Minister's Award",
    desc: "Honored with the Chief Minister's Award for Finance in 2024, recognizing our commitment to financial excellence and client success."
  },
  {
    img: "/arward2.png",
    alt: "Futuristic cityscape at night with glowing skyscrapers and neon lights reflecting on water",
    title: "Media Coverage",
    desc: "Making Headlines: Spreading Financial Wisdom Across India!(Featured in Ahmedabad Mirror)."
  },
  {
    img: "/award3.png",
    alt: "Serene mountain lake with crystal clear reflection and a soft sunrise in amber tones",
    title: "Featured at CNBC Awaaz (1998)",
    desc: "CNBC Awaaz is one of India's top business channels and a leader in business news and information."
  }
];

export default function Milestones() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const getPrevIndex = () => {
    return currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  };
  
  const getNextIndex = () => {
    return currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  };

  return (
    <div className="relative w-full py-16 md:py-24 overflow-hidden">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="w-full">
        
        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8">
          {/* Previous Slide Preview */}
          <div className="hidden md:flex flex-col items-center w-48 lg:w-64 flex-shrink-0">
            <div className="w-full h-64 lg:h-80 rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 mb-4">
              <div className="w-full h-full bg-gray-900 relative">
                <img
                  src={slides[getPrevIndex()].img}
                  alt={slides[getPrevIndex()].alt}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
            </div>
            <div className="text-center opacity-30 transition-opacity duration-500">
              <h3 className="text-sm lg:text-base font-light text-white mb-2">
                {slides[getPrevIndex()].title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {slides[getPrevIndex()].desc}
              </p>
            </div>
          </div>
          
          {/* Current Slide - Main */}
          <div className="flex flex-col  items-center w-full md:w-[900px] lg:w-[900px] flex-shrink-0">
            <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl mb-6">
              <div className="w-full h-full bg-gray-900 relative">
                <img
                  key={currentSlide}
                  src={slides[currentSlide].img}
                  alt={slides[currentSlide].alt}
                  className="w-full h-full object-cover absolute inset-0 animate-fadeIn"
                  style={{
                    animation: 'fadeIn 0.5s ease-in-out'
                  }}
                />
              </div>
            </div>
            <div className="text-center opacity-100 transition-opacity duration-500">
              <h3 
                key={`title-${currentSlide}`}
                className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4 animate-fadeIn"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out'
                }}
              >
                {slides[currentSlide].title}
              </h3>
              <p 
                key={`desc-${currentSlide}`}
                className="text-gray-400 text-sm md:text-base leading-relaxed animate-fadeIn px-4"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out 0.1s both'
                }}
              >
                {slides[currentSlide].desc}
              </p>
            </div>
          </div>
          
          {/* Next Slide Preview */}
          <div className="hidden md:flex flex-col items-center w-48 lg:w-64 flex-shrink-0">
            <div className="w-full h-64 lg:h-80 rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 mb-4">
              <div className="w-full h-full bg-gray-900 relative">
                <img
                  src={slides[getNextIndex()].img}
                  alt={slides[getNextIndex()].alt}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
            </div>
            <div className="text-center opacity-30 transition-opacity duration-500">
              <h3 className="text-sm lg:text-base font-light text-white mb-2">
                {slides[getNextIndex()].title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {slides[getNextIndex()].desc}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 px-4">
          <button 
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
