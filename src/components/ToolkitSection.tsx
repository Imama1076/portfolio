import React from 'react';
import { Sparkles } from 'lucide-react';

export const ToolkitSection: React.FC = () => {
  const qualitiesRow1 = [
    'CUSTOM WORDPRESS',
    'SUB-SECOND SPEED',
    'RESPONSIVE DESIGN',
    'WOOCOMMERCE SCALING',
    'SEO & CORE WEB VITALS',
    'PIXEL-PERFECT DESIGN',
    'HIGH CONVERSION RATE',
    '100% RELIABILITY',
  ];

  const qualitiesRow2 = [
    'CLIENT-FOCUSED DEDICATION',
    'MODERN FRONTEND',
    'CLEAN MODULAR CODE',
    'CLEAN CODE & FAST UX',
    'RAPID TURNAROUND',
    'MOBILE-FIRST RESPONSIVE',
    'MEASURABLE BUSINESS IMPACT',
    'DEDICATED QUALITY',
  ];

  return (
    <section
      id="toolkit"
      className="w-full bg-[#080808] text-white py-24 md:py-36 border-b border-[#1c1917] relative overflow-hidden select-none"
    >
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_40%,rgba(255,255,255,0.035),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Top Header Statement matching reference image typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-12 sm:mb-16 md:mb-24">
          <div className="lg:col-span-8 space-y-4 text-left">
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-wide text-white leading-[1.15] sm:leading-[1.12] md:leading-[1.08]"
              style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 300 }}
            >
              Code. Design. Speed.
              <br />
              <span className="text-neutral-400">WordPress &amp; Full-Stack.</span>
              <br />
              &amp; Real Results.
            </h2>
          </div>

          <div className="lg:col-span-4 text-left lg:text-right pb-2">
            <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-sans leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-white pl-4 lg:pl-0 lg:pr-4 py-1">
              &ldquo;Crafted with precision, sleek modern design, and optimized performance to elevate your brand and deliver real results.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Tilted Ticker Ribbons with White Ribbon above and visible gap */}
      <div className="relative py-12 md:py-16 my-4 overflow-hidden w-full space-y-6 sm:space-y-8">
        {/* Ribbon 1: Angled White Ribbon on Top with Black Text and Black Dots */}
        <div
          className="w-[120%] -ml-[10%] rotate-[1.2deg] sm:rotate-[1deg] bg-white text-black py-4 sm:py-5 shadow-2xl relative z-20 flex items-center overflow-hidden border-y border-neutral-300"
        >
          <div className="animate-marquee-slow flex items-center whitespace-nowrap">
            {[...qualitiesRow1, ...qualitiesRow1, ...qualitiesRow1, ...qualitiesRow1].map((quality, idx) => (
              <div key={`r1-${idx}`} className="flex items-center">
                <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-widest text-black">
                  {quality}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-black mx-4 sm:mx-6 shrink-0 shadow-xs" />
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Dark Charcoal Ribbon Below with White Text & White Dots */}
        <div
          className="w-[120%] -ml-[10%] rotate-[-1.5deg] sm:rotate-[-1.2deg] bg-[#141414] text-white py-4 sm:py-5 shadow-2xl relative z-10 flex items-center overflow-hidden border-y border-neutral-700"
        >
          <div className="animate-marquee-slow-reverse flex items-center whitespace-nowrap">
            {[...qualitiesRow2, ...qualitiesRow2, ...qualitiesRow2, ...qualitiesRow2].map((quality, idx) => (
              <div key={`r2-${idx}`} className="flex items-center">
                <span className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-widest text-white">
                  {quality}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-white mx-4 sm:mx-6 shrink-0 shadow-xs" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
