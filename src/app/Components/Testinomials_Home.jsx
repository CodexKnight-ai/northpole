"use client";
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// Embla Carousel CSS
const emblaStyle = `
  .embla {
    overflow: hidden;
    width: 100%;
  }
  .embla__container {
    display: flex;
    width: 100%;
    margin: 0;
  }
  .embla__slide {
    position: relative;
    flex: 0 0 100%;
    min-width: 0;
    padding: 0 2px;
    box-sizing: border-box;
  }
  @media (min-width: 640px) {
    .embla__slide {
      flex: 0 0 50%;
    }
  }
  @media (min-width: 1024px) {
    .embla__slide {
      flex: 0 0 33.333%;
    }
  }
`;

const Testimonials_Home = () => {
  const testimonials = [
    {
      img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
      text: `“Kalpesh Patel helped me turn my savings into a steady wealth-building portfolio. His advice is practical, clear, and personalized.”`,
      name: "Rajesh Mehta",
      role: "AHMEDABAD, GUJARAT",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
      text: `“I had no clue about the stock market. Today, I confidently trade and invest thanks to his step-by-step mentorship.”`,
      name: "Neha Shah",
      role: "VADODARA, GUJARAT",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
      text: `“Northpole’s SIP plan set up my daughter’s education fund without stress. Highly recommend Kalpesh Patel!”`,
      name: "Amit Desai",
      role: "MUMBAI, MAHARASHTRA",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
      text: `“The BhavBhagwanChe system changed my trading mindset. I now follow discipline, not emotions.”`,
      name: "Vishal Jain",
      role: "SURAT, GUJARAT",
    },
    {
        img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
        text: `“Kalpeshbhai is more than a financial advisor—he’s a guide. His teachings go beyond charts and numbers.”`,
        name: "Dr. Sneha Vora",
        role: "NADIAD, GUJARAT",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  // Auto-scroll to next slide
  useEffect(() => {
    if (!emblaApi) return;
    
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;
    
    autoplay.play();
    
    return () => {
      if (autoplay) autoplay.stop();
    };
  }, [emblaApi]);

  // Add Embla styles to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = emblaStyle;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="w-full text-white py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-800 pb-6 sm:pb-8 mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-0">
          <h2 className="max-w-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-light text-gray-400">
            What our connection feels{" "}
            <span className="text-white font-normal">about us</span>
          </h2>
          <span className="text-[10px] sm:text-xs font-normal tracking-widest text-white self-start sm:mt-2">
            TESTIMONIALS
          </span>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-6">
              {testimonials.map((item, index) => (
                <div key={index} className="embla__slide">
                  <article className="bg-white rounded-lg p-6 sm:p-8 h-full flex flex-col justify-between min-h-[380px] sm:min-h-[420px] md:min-h-[450px] hover:shadow-xl transition-shadow duration-300">
                    <div>
                      <img
                        alt={item.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-4 sm:mb-6 object-cover"
                        src={item.img}
                        width="48"
                        height="48"
                      />
                      <p className="mb-6 sm:mb-8 text-xs sm:text-sm md:text-base leading-relaxed text-gray-600">
                        {item.text}
                      </p>
                    </div>
                    <footer className="mt-auto">
                      <p className="text-xl sm:text-2xl md:text-3xl text-black mb-1 font-serif italic">
                        {item.name}
                      </p>
                      <p className="text-[10px] sm:text-xs uppercase text-gray-500 tracking-wide">
                        {item.role}
                      </p>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials_Home;
