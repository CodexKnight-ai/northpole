'use client'
import React from "react";

export default function page() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-[90vw] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-startpb-6 sm:pb-8 lg:pb-12 mb-8 sm:mb-12">
            <div className="mb-6 lg:mb-0">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight tracking-wide">
                    LUMPSUM<br />CALCULATOR
                </h1>
            </div>
            <div className="lg:max-w-md xl:max-w-lg">
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                    Thinking of making a lumpsum investment? Calculate the future value of your wealth using our Lumpsum Calculator.
                </p>
            </div>
        </section>
    )
}
