'use client';

import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white">
            {/* Hero Section with Background Image */}
            <section className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
                <Image
                    src="/LetsConnect.png"
                    alt="Contact Hero"
                    fill
                    className="object-cover"
                    priority
                />
                
                
               
            </section>

            {/* Contact Section */}
            <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
                    {/* Left Side - Contact Info */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-8 sm:mb-10 md:mb-12">
                            GET IN TOUCH
                        </h2>
                        
                        {/* Contact Details */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
                            <a 
                                href="tel:+919825677777" 
                                className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 border border-gray-600 rounded-sm hover:border-gray-400 transition-colors"
                            >
                                +91 982 567 7777
                            </a>
                            <a 
                                href="mailto:northpole77@gmail.com" 
                                className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 border border-gray-600 rounded-sm hover:border-gray-400 transition-colors"
                            >
                                northpole77@gmail.com
                            </a>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-lg">
                            Your journey to wealth creation begins with a single conversation. Reach out to our expert team, and let's start building your prosperous future together.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 sm:gap-4">
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-600 rounded-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                                <FaInstagram className="text-lg sm:text-xl" />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-600 rounded-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                                <FaFacebook className="text-lg sm:text-xl" />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-600 rounded-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                                <FaTwitter className="text-lg sm:text-xl" />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-gray-600 rounded-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                                <FaLinkedin className="text-lg sm:text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-[#1a1a1a] border-t-4 border-blue-500 p-6 sm:p-8 md:p-12 rounded-sm">
                        <form className="space-y-6 sm:space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-gray-700 pb-2 sm:pb-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                                    Email ID
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-gray-700 pb-2 sm:pb-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    required
                                    className="w-full bg-transparent border-b border-gray-700 pb-2 sm:pb-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    required
                                    className="w-full bg-transparent border-b border-gray-700 pb-2 sm:pb-3 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Tell us about your requirements"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 rounded-sm transition-colors font-medium uppercase text-xs sm:text-sm tracking-wide"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
