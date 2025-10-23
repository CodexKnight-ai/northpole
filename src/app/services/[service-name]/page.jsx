'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { servicesData } from '../servicesData';

export default function ServicePage() {
  const params = useParams();
  const serviceName = params['service-name'];
  const service = servicesData.find(s => s.slug === serviceName);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Service Not Found</h1>
          <Link href="/services" className="text-blue-500 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button - Fixed Position */}
      <motion.div 
        className="fixed top-8 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Link 
          href="/services"
          className="inline-flex items-center justify-center w-12 h-12 border border-gray-700 hover:border-gray-500 rounded-sm transition-colors group bg-black/50 backdrop-blur-sm"
          aria-label="Back to services"
        >
          <motion.svg 
            className="w-5 h-5 text-white group-hover:text-gray-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </motion.svg>
        </Link>
      </motion.div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* Column 1 - Service Title */}
        <motion.div 
          className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              {service.title}
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-xs md:text-sm tracking-wider uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              {service.subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Column 2 - Image */}
        <motion.div 
          className="relative bg-gray-200 min-h-[50vh] lg:min-h-screen overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Column 3 - Description */}
        <motion.div 
          className="relative flex flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-12">
            {/* Top Content */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-gray-400 text-xs md:text-sm tracking-wider uppercase">
                {service.tagline}
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                {service.shortDescription}
              </p>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            >
              <h3 className="text-gray-400 text-xs md:text-sm tracking-wider uppercase">
                {service.mainTitle}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {service.content}
              </p>
            </motion.div>
          </div>

          {/* Bottom Link */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            <a 
              href={`https://${service.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
            >
              <span className="text-sm md:text-base">{service.link}</span>
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
