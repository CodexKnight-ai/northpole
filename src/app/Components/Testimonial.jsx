import React from "react";
import testimonials from "../data/Testimonial";

export default function Testimonials() {
  return (
    <div className="bg-secondary pt-8 pb-24 font-['Roboto_Slab',serif]">
      <div className="max-w-7xl mx-auto">
        <h2 className="italic font-semibold text-black mb-6 text-xl">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border-b border-[#3B3B3B] pb-4">
              <div className="flex justify-between mb-1">
                <p className="font-extrabold text-[#1A1A1A]">{t.name}</p>
                <p className="text-[10px] font-extrabold text-[#3B3B3B]">
                  {t.date}
                </p>
              </div>
              <h3 className="font-extrabold text-xl leading-tight mb-2">
                {t.title}
              </h3>
              <p className="text-[#3B3B3B] text-sm leading-relaxed">
                {t.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}