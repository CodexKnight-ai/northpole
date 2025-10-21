import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10 sm:px-6 sm:py-12 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6 w-full">
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
              Contact Us
            </h2>
            <p className="text-gray-400 text-sm sm:text-md md:text-lg leading-relaxed">
              Northpole Wealth: Charting Your Course to Financial Freedom.
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
              Reach out to us
            </h3>
            <div className="w-full flex flex-col gap-4 sm:flex-wrap sm:flex-row sm:items-center sm:justify-between">
              <address className="not-italic">
                <a
                  href="mailto:northpole@gmail.com"
                  className="text-white text-sm sm:text-md md:text-lg hover:underline break-all"
                >
                    northpole77@gmail.com                </a>
              </address>
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-md md:text-lg font-medium"
              >
                <Link href="/" aria-label="Home" className="hover:underline">
                  Home
                </Link>
                <Link href="/about-us" aria-label="About Us" className="hover:underline">
                  About Us
                </Link>
                <Link href="/investors" aria-label="Investors" className="hover:underline">
                  Investors
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 sm:mt-28 md:mt-32 text-center">
        <h1 className="text-[12vw] font-extrabold tracking-wide">
          NORTHPOLE
        </h1>
      </div>
    </footer>
  );
}
