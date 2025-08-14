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
      text: `“Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas csfew fewef”`,
      name: "Vishva Boda",
      role: "Website Developer",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
      text: `“Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas csfew fewef”`,
      name: "Gaurav Mehta",
      role: "Business Management",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
      text: `“Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas csfew fewef”`,
      name: "Deepayu Ninama",
      role: "UI UX Designer",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
      text: `“Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas csfew fewef”`,
      name: "Chai Wala",
      role: "Support Team",
    },
    {
        img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
        text: `“Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas csfew fewef”`,
        name: "Deep Patel",
        role: "Developers",
    },
    {
        img: "https://storage.googleapis.com/a1aa/image/d8326357-a2ac-40e2-f94d-2e8cfd5500d6.jpg",
        text: `“Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas csfew fewef”`,
        name: "Subrat Jain",
        role: "Developer",
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
    <div className="bg-[#0a0a0a] text-white max-w-[90rem] mx-auto px-6 py-20 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-gray-700 pb-12 mb-12">
        <h2 className="max-w-4xl text-[3.5rem] leading-[1.1] font-light text-gray-400">
          What our connection feels{" "}
          <strong className="text-white font-extrabold">about us</strong>
        </h2>
        <span className="text-xs font-semibold tracking-widest text-white self-start mt-3">
          TESTIMONIALS
        </span>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-full overflow-hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((item, index) => (
              <div key={index} className="embla__slide">
                <article className="bg-[#f7f7f7] rounded-lg p-6 w-full max-w-[300px] mx-auto text-gray-400">
                  <img
                    alt={item.name}
                    className="w-12 h-12 rounded-full mb-6"
                    src={item.img}
                    width="48"
                    height="48"
                  />
                  <p className="mb-6 text-sm leading-relaxed font-light">
                    {item.text}
                  </p>
                  <footer>
                    <p className="font-gv text-2xl text-gray-900 mb-1">
                      {item.name}
                    </p>
                    <p className="text-[0.625rem] uppercase text-gray-400 font-light tracking-wide">
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
  );
};

export default Testimonials_Home;
