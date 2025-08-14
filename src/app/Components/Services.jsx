"use client";
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const newsItems = [
    {
      title: "The latest. Take a look at what's new right now.",
      category: "Testimonials",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
    {
      title: "The latest. Take a look at what's new right now.",
      category: "Testimonials",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
    {
      title: "The latest. Take a look at what's new right now.",
      category: "Testimonials",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
    {
      title: "The latest. Take a look at what's new right now.",
      category: "Testimonials",
      imgSrc:
        "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
    {
        title: "The latest. Take a look at what's new right now.",
        category: "Testimonials",
        imgSrc:
          "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
    {
        title: "The latest. Take a look at what's new right now.",
        category: "Testimonials",
        imgSrc:
          "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
    {
        title: "The latest. Take a look at what's new right now.",
        category: "Testimonials",
        imgSrc:
          "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
    {
        title: "The latest. Take a look at what's new right now.",
        category: "Testimonials",
        imgSrc:
          "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
    {
        title: "The latest. Take a look at what's new right now.",
        category: "Testimonials",
        imgSrc:
          "https://storage.googleapis.com/a1aa/image/7313c40f-8c32-4c6c-b400-3be34f25fab9.jpg",
    },
  ];

  return (
    <div className="text-white font-sans max-w-full px-10 py-8 overflow-hidden">
      <h1 className="text-3xl font-bold mb-8 flex justify-center">
        The latest. Take a look at what's new right now.
      </h1>
      
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {newsItems.map((item, index) => (
              <div key={index} className="embla__slide flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] px-1">
                <article className="rounded-lg overflow-hidden relative w-full h-[680px] mx-1">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    height="680"
                    width="680"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 p-6 flex flex-col justify-between">
                    <h2 className="text-white text-lg font-semibold leading-snug max-w-[85%]">
                      {item.title}
                    </h2>
                    <p className="text-white text-sm uppercase tracking-wide">
                      {item.category}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 shadow-lg z-10"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 shadow-lg z-10"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
