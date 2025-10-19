import React from 'react';
import Link from 'next/link';

const StatItem = ({ number, description }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-700 py-6">
      <span className="text-5xl font-light text-white">{number}</span>
      <span className="text-sm text-gray-300 ml-8">{description}</span>
    </div>
  );
};

const App = (props) => {
  const defaultStats = [
    { number: '25+', description: 'Years Market Experience' },
    { number: '₹3,500', description: 'Portfolio Managed' },
    { number: '1000+', description: 'Clients Served' },
    { number: '500+', description: 'Trader Mentored annually' },
    { number: '150+', description: 'Training Sessions Globally' },
  ];

  const stats = props.stats || defaultStats;

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white p-8  md:p-16 md:pt-52">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-light tracking-wider mb-4">
              NUMBER TELLS
            </h2>
            <h1 className="text-6xl font-light">
              OUR <span className="text-blue-400">STORY</span>
            </h1>
          </div>

          {/* Right Section - Stats */}
          <div>
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                number={stat.number}
                description={stat.description}
              />
            ))}
          </div>
        </div>

        {/* Bottom Card */}
        <div className="relative rounded-lg mb-8">

          <p className="text-gray-400 bg-white  rounded-lg  p-12 font-extralight text-2xl md:text-6xl md:font-light leading-relaxed pr-16">
            YOUR JOURNEY TO WEALTH CREATION BEGINS WITH A SINGLE CONVERSATION.
            REACH OUT TO OUR EXPERT TEAM, AND LET'S START BUILDING YOUR
            PROSPEROUS FUTURE TOGETHER.
          </p>
           {/* Large Text */}
          <div className="text-center bg-[#1E1E1E]">
            <h2 className="text-[20rem] font-bold text-[#414141] tracking-wider">
              NORTH
            </h2>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="mt-24 mb-16">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-4">
              Get Started
            </h2>
            <h2 className="text-5xl md:text-7xl font-light text-white">
              Easily!
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-6 max-w-md">
              Your journey to wealth creation begins with a single conversation. Reach out to our expert team, and let's start building your prosperous future together.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Financial Calculators Card */}
            <Link href="/calculators">
              <div className="group relative border border-gray-700 rounded-lg p-8 h-64 transition-all duration-300 hover:bg-white hover:border-white cursor-pointer overflow-hidden">
                {/* Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white group-hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-normal text-white group-hover:text-black transition-colors duration-300 mb-2">
                    Financial Calculators
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    Get a estimated idea on how your portfolio will perform
                  </p>
                </div>
              </div>
            </Link>

            {/* Our Services Card */}
            <Link href="/services">
              <div className="group relative border border-gray-700 rounded-lg p-8 h-64 transition-all duration-300 hover:bg-white hover:border-white cursor-pointer overflow-hidden">
                {/* Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white group-hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-normal text-white group-hover:text-black transition-colors duration-300 mb-2">
                    Our Services
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    explore what we have to offer and how you can be benifited from it
                  </p>
                </div>
              </div>
            </Link>

            {/* Connect us Card */}
            <Link href="/contact">
              <div className="group relative border border-gray-700 rounded-lg p-8 h-64 transition-all duration-300 hover:bg-white hover:border-white cursor-pointer overflow-hidden">
                {/* Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white group-hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
                  <svg className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-normal text-white group-hover:text-black transition-colors duration-300 mb-2">
                    Connect us!
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    Join a community of like minded personality, become a part of family
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Contact/CTA Section */}
        <div className="mt-32 mb-16 max-w-4xl">
          <p className="text-gray-400 text-sm mb-6">Hi, We're Northpole Wealth! 👋</p>
          
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-light text-gray-300 leading-tight mb-8">
            A <span className="text-white">NISM-certified</span> wealth management firm{' '}
            <span className="text-gray-300">with a passion for helping you achieve</span>{' '}
            <span className="text-white font-normal">financial freedom through disciplined, goal-based strategies.</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {/* Brochure/Info Button */}
            <a 
              href="/brochure.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 group"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Company Brochure</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/northpole-wealth" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-black hover:bg-gray-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email */}
            <a 
              href="mailto:contact@northpolewealth.com"
              className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-black hover:bg-gray-200 transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full text-black hover:bg-gray-200 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default App;
