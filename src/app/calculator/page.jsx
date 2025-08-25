'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { calculators } from './calc-data';
import Image from 'next/image';

export default function CalculatorPage() {
    return (
        <div className="overflow-x-hidden pt-32">
            <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-[90vw] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-startpb-6 sm:pb-8 lg:pb-12 mb-8 sm:mb-12">
                <div className="mb-6 lg:mb-0">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-wide">
                        FINANCIAL<br />CALCULATORS
                    </h1>
                </div>
                <div className="lg:max-w-md xl:max-w-lg">
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                        Plan your investments with ease. Use our Financial Calculators to estimate returns,
                        compare options, and make smarter financial decisions for a secure future.
                    </p>
                </div>
            </section>
            <div className="border-b border-gray-600 w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 max-w-[75vw] mx-auto py-10">
                {calculators.map((c) => (
                    <Link key={c.slug} href={`/calculator/${c.slug}`} className="group">
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#0b1020] to-[#0a0a14] border border-gray-800 shadow-sm hover:shadow-blue-900/30 hover:border-gray-700 min-h-[500px] p-5"
                        >
                            <Image
                                src={c.image}
                                alt={c.name}
                                fill   
                                objectFit="cover"
                                aria-hidden
                                className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-white text-4xl font-semibold tracking-wide mb-2">
                                    {c.name.trim().toUpperCase()}
                                </h3>
                                <p className="text-gray-400 text-xl line-clamp-2 max-w-[90%]">
                                    {c.description}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300">
                                    <span>Open Calculator</span>
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    )
}