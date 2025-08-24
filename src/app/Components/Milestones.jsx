"use client";

import { useState, useEffect } from 'react';

const slides = [
  {
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/71afce28-10bd-4516-84d8-e31321dd953d.png",
    alt: "Animated character running on a glowing colorful cosmic trail with planet Saturn and sun flare in the background in space",
    title: "Achievements & Milestones",
    desc: "Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc."
  },
  {
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b8508f67-00ac-4403-b13f-97dc63c92490.png",
    alt: "Futuristic cityscape at night with glowing skyscrapers and neon lights reflecting on water",
    title: "Innovative Designs",
    desc: "Pellentesque habitant morbi tristique senectus. Curabitur venenatis suscipit quam, quis imperdiet elit luctus."
  },
  {
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/85eeb024-c674-4b22-ad02-3fd926b8574f.png",
    alt: "Serene mountain lake with crystal clear reflection and a soft sunrise in amber tones",
    title: "Nature Inspirations",
    desc: "Suspendisse potenti. Cras mollis nibh a lacinia blandit. Donec sed sem sed nulla pulvinar faucibus."
  }
];

export default function Milestones() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 300);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);
  
  // Preload next and previous images
  useEffect(() => {
    const preloadImages = [];
    const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    
    [nextIndex, prevIndex].forEach(index => {
      const img = new Image();
      img.src = slides[index].img;
      preloadImages.push(img);
    });
    
    return () => {
      // Cleanup function to prevent memory leaks
      preloadImages.length = 0;
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full py-12 md:py-20 lg:py-28 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Journey
        </h2>
        
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Slides Container */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 2}rem))`,
              }}
            >
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-full px-2 transition-all duration-300"
                  style={{
                    transform: currentSlide === index ? 'scale(1)' : 'scale(0.9)',
                    opacity: currentSlide === index ? 1 : 0.7,
                  }}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={slide.img}
                        alt={slide.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzY2NiI+UGxhY2Vob2xkZXIgSW1hZ2U8L3RleHQ+PC9zdmc+';
                        }}
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {slide.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-6' : 'bg-white/30 w-2.5 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
