import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-8 sm:py-10 md:py-12 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          <div>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">
              Contact Us
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Northpole Wealth: Charting Your Course to Financial Freedom.
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2">
              Reach out to us
            </h3>
            <div className="w-full flex flex-col gap-3 sm:gap-4 sm:flex-wrap sm:flex-row sm:items-center sm:justify-between">
              <address className="not-italic">
                <a
                  href="mailto:northpole@gmail.com"
                  className="text-white text-xs sm:text-sm md:text-base lg:text-lg hover:underline break-all"
                >
                    northpole77@gmail.com                </a>
              </address>
              <nav
                aria-label="Footer navigation"
                className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base lg:text-lg font-medium"
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
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-32 text-center">
        <h1 className="text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] font-extrabold tracking-wide">
          NORTHPOLE
        </h1>
      </div>
    </footer>
  );
}
