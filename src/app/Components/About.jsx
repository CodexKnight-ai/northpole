"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <section ref={ref} className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Left Column */}
                    <motion.div 
                        className="flex flex-col gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.h1 
                            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            Kalpesh Patel
                        </motion.h1>
                        <motion.p 
                            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            Kalpesh Patel is a NISM-certified Research Analyst, Wealth Creator, and founder of Northpole Wealth. With over 25 years of stock market experience, he has helped thousands of individuals achieve their financial goals through a disciplined, goal-based approach. Known for his systematic strategies and mentorship, Kalpesh Patel is a recognized expert across media and financial circles.
                        </motion.p>
                    </motion.div>

                    {/* Middle Column */}
                    <motion.div 
                        className="bg-white rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    >
                        <div className="flex-1 flex flex-col justify-between gap-4 sm:gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            >
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">25 Years +</h1>
                                <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg">
                                    Over 25 years of experience in financial markets                                </p>
                            </motion.div>
                            <motion.div 
                                className="w-full rounded-xl overflow-hidden bg-gray-100 min-h-[200px] sm:min-h-[250px]"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            >
                                <img 
                                    src="/kalpesh_bhai.jpg" 
                                    alt="" 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzY2NiI+UGxhY2Vob2xkZXIgSW1hZ2U8L3RleHQ+PC9zdmc+'
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div 
                        className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        <motion.div 
                            className="aspect-square w-full max-w-[280px] sm:max-w-xs mx-auto lg:mx-auto rounded-2xl overflow-hidden bg-gray-100"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <img 
                                src="/kalpesh_bhai.jpg" 
                                alt="" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA4MDAgNDAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iIzY2NiI+UGxhY2Vob2xkZXIgSW1hZ2U8L3RleHQ+PC9zdmc+'
                                }}
                            />
                        </motion.div>
                        
                        <div className="space-y-3 sm:space-y-4">
                            {[
                                "Lorem woksd dajkd s dajdksdsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat molestiae totam. Quos.",
                                "Lorem woksd dajkd s dajdksdsd Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugiat molestiae totam. Quos."
                            ].map((text, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex gap-3 sm:gap-4 items-start"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.span 
                                        className="flex-shrink-0 mt-1 rounded-full w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center text-base sm:text-lg md:text-xl text-black bg-white"
                                        whileHover={{ rotate: 90, scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        +
                                    </motion.span>
                                    <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}