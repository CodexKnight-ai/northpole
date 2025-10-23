"use client";

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="w-full flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
            <motion.div 
                className="w-full max-w-7xl flex flex-col items-center justify-center gap-4 sm:gap-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-6 font-bold leading-tight px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    "Your Financial True North"
                </motion.h1>
                <motion.p 
                    className="text-sm sm:text-base md:text-lg text-[#414141] max-w-3xl px-4 sm:px-6 md:px-0 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    Guiding you towards your financial goals with expert strategies and over two decades of market experience. Let's build your wealth, together.
                </motion.p>
            </motion.div>  
            <motion.div 
                className="w-full max-w-6xl mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 bg-white rounded-xl sm:rounded-2xl overflow-hidden aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
            >
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400 text-sm sm:text-base">Video Placeholder</span>
                    {/* <video className="w-full h-full object-cover" autoPlay loop muted>
                        <source src="/your-video.mp4" type="video/mp4" />
                    </video> */}
                </div>
            </motion.div>
        </section>
    );
}
