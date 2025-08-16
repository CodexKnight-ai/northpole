"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ServicesCarousel() {
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef(null);

  const cards = [
    {
      title: "PMS",
      description:
        "Image 1 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
    {
      title: "PMS",
      description:
        "Image 2 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
    {
      title: "PMS",
      description:
        "Image 3 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
    {
      title: "PMS",
      description:
        "Image 4 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
    {
      title: "PMS",
      description:
        "Image 5 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
    {
      title: "PMS",
      description:
        "Image 6 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
    {
      title: "PMS",
      description:
        "Image 7 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
    {
      title: "PMS",
      description:
        "Image 8 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
    {
      title: "PMS",
      description:
        "Image 9 Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
      img: "/sky.jpg",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const toggleViewAll = () => {
    setShowAll((prev) => !prev);
    if (!showAll && scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90vw] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          {/* Left Text */}
          <div className="lg:max-w-md">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat
              at. Elit sagittis etiam mauris tellus gravida mattis feugiat
              semper amet.
            </p>
          </div>

          {/* Center Title */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-wide">
              LOREM IPSUM <br />
              LOREM IPSUM
            </h2>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col items-start lg:items-end space-y-4">
            <button
              onClick={toggleViewAll}
              className="bg-white text-black text-xs font-normal rounded-sm py-2 px-6 whitespace-nowrap hover:bg-opacity-90 transition-colors"
            >
              {showAll ? "SHOW LESS" : "VIEW ALL"}
            </button>
            <div
              className={`space-x-3 ${
                showAll ? "hidden" : "hidden sm:flex"
              }`}
            >
              <button
                aria-label="Previous"
                onClick={scrollLeft}
                className="bg-black border border-white border-opacity-20 rounded-sm w-10 h-10 flex items-center justify-center text-white text-base hover:bg-gray-900 transition-colors"
              >
                <FaArrowLeft />
              </button>
              <button
                aria-label="Next"
                onClick={scrollRight}
                className="bg-black border border-white border-opacity-20 rounded-sm w-10 h-10 flex items-center justify-center text-white text-base hover:bg-gray-900 transition-colors"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div
          className={`${
            showAll
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              : "overflow-hidden"
          } transition-all duration-500 ease-in-out`}
        >
          <motion.div
            ref={scrollRef}
            className={`${
              !showAll
                ? "flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-4 sm:space-x-6"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            } w-[90vw] mx-auto`}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${
                  !showAll
                    ? "flex-shrink-0 snap-center w-[85%] xs:w-[70%] sm:w-[48%] md:w-[32%]"
                    : "w-full"
                } bg-[#0a0a0a] rounded-md overflow-hidden relative group`}
              >
                {/* Image Wrapper */}
                <div className="relative w-full h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh]">
                  <Image
                    src={card.img}
                    alt={`Abstract dark 3D shape for ${card.title}`}
                    fill
                    className="object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                    priority={index < 3}
                  />
                </div>

                {/* Text Overlay */}
                <div className="absolute top-2 left-2 right-2 p-3 sm:p-4 max-w-[70%]">
                  <h3 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
