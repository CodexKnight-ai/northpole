'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { calculators } from '../calculator/calc-data';

const CalculatorCard = ({ name, description, slug, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    >
    <Link href={`/calculator/${slug}`}>
      <motion.div 
        className="relative  overflow-hidden rounded-sm group cursor-pointer h-[300px] md:h-[350px] border border-transparent"
        whileHover={{ 
          y: -10, 
          borderColor: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
        }}
        transition={{ duration: 0.08 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3 group-hover:text-blue-400 transition-colors">
              {name.toUpperCase()}
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2">
              {description.substring(0, 100)}...
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
    </motion.div>
  );
};

export default function CalculatorsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  
  return (
    <div className="min-h-screen pt-20 bg-[#0D0D0D] text-white">
      {/* Header Section */}
      <section ref={headerRef} className=" py-16 md:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 md:gap-16 mb-12">
          <motion.div 
            className="lg:max-w-md"
            initial={{ opacity: 0, x: -50 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide">
              FINANCIAL<br />CALCULATORS
            </h1>
          </motion.div>
          <motion.div 
            className="lg:max-w-lg flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc pulvinar aliquam quisque
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-800 w-full mb-12" />

        {/* Calculators Grid - 4 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-8">
          {calculators.map((calculator, index) => (
            <CalculatorCard key={index} {...calculator} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
