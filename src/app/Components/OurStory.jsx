import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurStory() {
    return (
        <section className="bg-main min-h-screen flex flex-col items-center text-black pt-12 sm:pt-16 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8 pb-12">
            {/* Top Link */}
            <div className="w-full max-w-7xl 2xl:max-w-8xl mx-auto text-center">
                <a 
                    href="https://lorem-ipsum-dolor-sit-amet.com" 
                    className="inline-block text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 hover:text-gray-400 transition-colors duration-300 mt-4 sm:mt-6 md:mt-10 mb-16 sm:mb-24 md:mb-32 lg:mb-48 px-4"
                    aria-label="Lorem ipsum dolor sit amet"
                >
                    https://lorem-ipsum-dolor-sit-amet.com
                </a>
                
                {/* Main Content */}
                <div className="px-2 sm:px-4 md:px-6">
                    <h1 className="text-7xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[13vw] font-bold text-white mb-8 sm:mb-12 md:mb-16 mt-8 sm:mt-12 md:mt-16 leading-tight">
                        OUR STORY
                    </h1>
                    
                    <div className="max-w-4xl lg:max-w-6xl mx-auto text-gray-200 text-justify">
                        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repudiandae illo adipisci cupiditate aliquid architecto, reprehenderit debitis error iusto quaerat accusamus fuga tempora aliquam nihil delectus odit magnam quis. Consectetur provident rem optio mollitia quibusdam cumque corrupti dolores totam dolorem.
                            </p>
                            
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repudiandae illo adipisci cupiditate aliquid architecto, reprehenderit debitis error iusto quaerat accusamus fuga tempora aliquam nihil delectus odit magnam quis. Consectetur provident rem optio mollitia quibusdam cumque corrupti dolores totam dolorem.
                            </p>
                            
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati deserunt, expedita, eveniet sit et atque autem aliquam accusantium, blanditiis tenetur quisquam iste dignissimos. Minus rerum nam, tenetur non iure quisquam nisi, est aspernatur, quaerat quo dolor autem a? Laudantium earum recusandae aliquid quidem quae corporis quisquam quam dolorum nostrum repellendus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Image */}
            <div className="w-full max-w-screen 2xl:max-w-8xl mt-8 sm:mt-12 md:mt-16 rounded-lg overflow-hidden shadow-xl">
                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
                    <Image
                        src="/sky.jpg"
                        alt="Our team working together in a modern office space"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}