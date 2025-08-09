import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:flex-row lg:justify-between">
        
        {/* Left Section - Contact Info */}
        <div className="flex flex-col gap-6 max-w-md">
          <div>
            <h3 className="text-sm font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              “Lorem ipsum dolor sit amet consectetur. Vitae eu maecenas
              volutpat at. Elit sagittis etiam”
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Reach out to us</h3>
            <a
              href="mailto:northpole@gmail.com"
              className="text-white text-sm hover:underline"
            >
              northpole@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-6 text-xs font-medium">
          <a href="#" className="hover:underline">
            HOME
          </a>
          <a href="#" className="hover:underline">
            ABOUT US
          </a>
          <a href="#" className="hover:underline">
            INVESTORS
          </a>
          <a href="#" className="hover:underline">
            INVESTORS
          </a>
        </nav>
      </div>

      {/* Branding */}
      <div className="mt-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
          NORTHPOLE
        </h1>
      </div>
    </footer>
  );
}
