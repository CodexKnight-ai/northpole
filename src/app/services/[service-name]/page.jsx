'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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
      <div className="fixed top-8 left-8 z-50">
        <Link 
          href="/services"
          className="inline-flex items-center justify-center w-12 h-12 border border-gray-700 hover:border-gray-500 rounded-sm transition-colors group bg-black/50 backdrop-blur-sm"
          aria-label="Back to services"
        >
          <svg className="w-5 h-5 text-white group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* Column 1 - Service Title */}
        <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 xl:p-20">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-gray-400 text-xs md:text-sm tracking-wider uppercase">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Column 2 - Image */}
        <div className="relative bg-gray-200 min-h-[50vh] lg:min-h-screen">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Column 3 - Description */}
        <div className="relative flex flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="space-y-12">
            {/* Top Content */}
            <div className="space-y-4">
              <h2 className="text-gray-400 text-xs md:text-sm tracking-wider uppercase">
                {service.tagline}
              </h2>
              <p className="text-white text-sm md:text-base leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h3 className="text-gray-400 text-xs md:text-sm tracking-wider uppercase">
                {service.mainTitle}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {service.content}
              </p>
            </div>
          </div>

          {/* Bottom Link */}
          <div className="mt-12">
            <a 
              href={`https://${service.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
            >
              <span className="text-sm md:text-base">{service.link}</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
