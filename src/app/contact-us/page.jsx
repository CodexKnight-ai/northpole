'use client';

import Image from "next/image";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section with Background Image */}
            <section className="relative w-full h-[60vh] md:h-[70vh]">
                <Image
                    src="/sky.jpg"
                    alt="Contact Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                
                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        Let's Connect
                    </h1>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300">
                        One step towards <span className="font-bold text-white">GROWTH</span>
                    </p>
                    
                    {/* Arrow Icon */}
                    <div className="mt-12 w-16 h-16 md:w-20 md:h-20 border border-white/30 flex items-center justify-center">
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Side - Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">
                            GET IN TOUCH
                        </h2>
                        
                        {/* Contact Details */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <a 
                                href="tel:+919825677777" 
                                className="text-sm md:text-base px-4 py-2 border border-gray-600 rounded-sm hover:border-gray-400 transition-colors"
                            >
                                +91 982 567 7777
                            </a>
                            <a 
                                href="mailto:northpole77@gmail.com" 
                                className="text-sm md:text-base px-4 py-2 border border-gray-600 rounded-sm hover:border-gray-400 transition-colors"
                            >
                                northpole77@gmail.com
                            </a>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
                            Your journey to wealth creation begins with a single conversation. Reach out to our expert team, and let's start building your prosperous future together.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-gray-600 rounded-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-600 rounded-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                                <FaFacebook className="text-xl" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-600 rounded-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="#" className="w-10 h-10 border border-gray-600 rounded-sm flex items-center justify-center hover:border-gray-400 transition-colors">
                                <FaLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-[#1a1a1a] border-t-4 border-blue-500 p-8 md:p-12 rounded-sm">
                        <form className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-sm text-gray-400 mb-3">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm text-gray-400 mb-3">
                                    Email ID
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm text-gray-400 mb-3">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    required
                                    className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm text-gray-400 mb-3">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows={4}
                                    required
                                    className="w-full bg-transparent border-b border-gray-700 pb-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Tell us about your requirements"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-sm transition-colors font-medium uppercase text-sm tracking-wide"
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
