'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { calculators } from './calc-data';
import Image from 'next/image';

export default function CalculatorPage() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
    
    return (
        <div className="overflow-x-hidden pt-32">
            <section ref={headerRef} className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-[90vw] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-startpb-6 sm:pb-8 lg:pb-12 mb-8 sm:mb-12">
                <motion.div 
                    className="mb-6 lg:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-wide">
                        FINANCIAL<br />CALCULATORS
                    </h1>
                </motion.div>
                <motion.div 
                    className="lg:max-w-md xl:max-w-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                        Plan your investments with ease. Use our Financial Calculators to estimate returns,
                        compare options, and make smarter financial decisions for a secure future.
                    </p>
                </motion.div>
            </section>
            <div className="border-b border-gray-600 w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 max-w-[75vw] mx-auto py-10">
                {calculators.map((c, index) => (
                    <motion.div
                        key={c.slug}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    >
                    <Link href={`/calculator/${c.slug}`} className="group">
                        <motion.div
                            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                            transition={{ duration: 0.08 }}
                            className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#0b1020] to-[#0a0a14] border border-gray-800 shadow-sm hover:border-blue-500/50 min-h-[500px] p-5"
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
                    </motion.div>
                ))}
            </div>
        </div>
    )
}