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
    <div className="w-full text-white py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start border-b border-gray-800 pb-8 mb-16">
          <h2 className="max-w-2xl text-4xl md:text-5xl lg:text-6xl leading-tight font-light text-gray-400">
            What our connection feels{" "}
            <span className="text-white font-normal">about us</span>
          </h2>
          <span className="text-xs font-normal tracking-widest text-white self-start mt-2">
            TESTIMONIALS
          </span>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container gap-6">
              {testimonials.map((item, index) => (
                <div key={index} className="embla__slide">
                  <article className="bg-white rounded-lg p-8 h-full flex flex-col justify-between min-h-[450px] hover:shadow-xl transition-shadow duration-300">
                    <div>
                      <img
                        alt={item.name}
                        className="w-12 h-12 rounded-full mb-6 object-cover"
                        src={item.img}
                        width="48"
                        height="48"
                      />
                      <p className="mb-8 text-sm md:text-base leading-relaxed text-gray-600">
                        {item.text}
                      </p>
                    </div>
                    <footer className="mt-auto">
                      <p className="text-2xl md:text-3xl text-black mb-1 font-serif italic">
                        {item.name}
                      </p>
                      <p className="text-xs uppercase text-gray-500 tracking-wide">
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
