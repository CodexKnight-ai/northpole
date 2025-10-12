'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { calculators } from '../calculator/calc-data';

const CalculatorCard = ({ name, description, slug, image }) => {
  return (
    <Link href={`/calculator/${slug}`}>
      <div className="relative overflow-hidden rounded-sm group cursor-pointer h-[300px] md:h-[350px]">
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
      </div>
    </Link>
  );
};

export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 md:gap-16 mb-12">
          <div className="lg:max-w-md">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-wide">
              FINANCIAL<br />CALCULATORS
            </h1>
          </div>
          <div className="lg:max-w-lg flex items-center">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas volutpat at. Elit sagittis etiam mauris tellus gravida mattis feugiat semper amet. Tincidunt nunc pulvinar aliquam quisque
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-800 w-full mb-12" />

        {/* Calculators Grid - 4 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-8">
          {calculators.map((calculator, index) => (
            <CalculatorCard key={index} {...calculator} />
          ))}
        </div>
      </section>
    </div>
  );
}
