import React from 'react';

const SKILLS_ROW_1 = [
  'WORDPRESS',
  'GOOGLE ANTIGRAVITY',
  'ELEMENTOR',
  'LARAVEL',
  'FULL-STACK ARCHITECTURE',
  'MYSQL RELATIONAL',
  'GOOGLE AI STUDIO',
  'AI-ASSISTED DEVELOPMENT',
  'BOOTSTRAP 5',
  'TAILWIND CSS',
  'ACADEMIC PLANNING APPS',
  'ECOMMERCE PLATFORMS',
  'RESTFUL APIS',
];

const SKILLS_ROW_2 = [
  'MVC ARCHITECTURE',
  'USER AUTHENTICATION',
  'ADMIN MANAGEMENT',
  'GPA & CGPA TRACKING',
  'PAYMENT GATEWAYS',
  'DATABASE OPTIMIZATION',
  'CUSTOM THEMES & HOOKS',
  'RESPONSIVE UI/UX',
  'BUSINESS MANAGEMENT',
  'CLEAN SEMANTIC CODE',
];

export const SkillMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden select-none relative z-20 py-4 sm:py-6 md:py-10 bg-[#060606] border-y border-[#1c1917]">
      {/* Subtle monochrome ambient light */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(255,255,255,0.04),transparent_70%)]" 
        aria-hidden="true" 
      />

      <div className="relative -rotate-1 md:-rotate-2 scale-105 my-1 sm:my-2 space-y-2.5 sm:space-y-3.5">
        {/* Ribbon 1: Primary Dark Ribbon moving Left */}
        <div className="w-full bg-[#0d0d0d] text-white py-2.5 sm:py-3 md:py-3.5 border-y border-[#262626] shadow-md flex items-center overflow-hidden">
          <div className="animate-marquee-slow flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
            {[...SKILLS_ROW_1, ...SKILLS_ROW_1].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6 md:gap-8">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#fbf9f5] hover:text-neutral-300 transition-colors cursor-default font-sans">
                  {skill}
                </span>
                <span
                  className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon 2: Secondary Ribbon moving Right */}
        <div className="w-full bg-[#171717] text-[#eae6dc] py-2 sm:py-2.5 md:py-3 border-y border-[#2b2b2b] shadow-md flex items-center overflow-hidden">
          <div className="animate-marquee-slow-reverse flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
            {[...SKILLS_ROW_2, ...SKILLS_ROW_2].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6 md:gap-8">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#dbd7cd] hover:text-white transition-colors cursor-default font-sans">
                  {skill}
                </span>
                <span
                  className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-400 shadow-[0_0_6px_rgba(255,255,255,0.4)] shrink-0"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
