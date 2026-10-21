import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const NarrativeSection: React.FC = () => {
  const skillBadges = [
    'Custom WordPress & Elementor Builds',
    'WooCommerce & High-Converting Stores',
    'Modern Frontend & Interactive UI',
    'Speed Optimization & Core Web Vitals',
    'Responsive Mobile-First Design',
    'Clean, Scalable & Maintainable Code',
  ];

  return (
    <section className="w-full bg-[#fbf9f5] border-b border-[#e5e2da] py-20 sm:py-24 md:py-32" id="intro">
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Top Section Header: About Me */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-6xl md:text-7xl font-black text-[#191817] tracking-tight uppercase leading-none"
            style={{ fontFamily: '"Bebas Neue", "Antonio", "Oswald", sans-serif' }}
          >
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#191817] mx-auto mt-3 rounded-full" />
        </div>

        {/* Centered Profile Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 flex flex-col items-center"
        >
          {/* 1. Main Headline */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#191817] leading-[1.28] tracking-tight font-headline text-center"
          >
            I’m a Web &amp; WordPress Developer building clean, high-converting digital experiences.
          </motion.h3>

          {/* 2. Highlight / Sub-Headline + 3. Body Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg text-[#3b3a36] font-sans font-normal leading-[1.75] sm:leading-[1.8] flex flex-col items-center w-full"
          >

            {/* Body Paragraph */}
            <p className="text-neutral-700 max-w-3xl text-center">
              From tailored corporate websites and engaging WooCommerce storefronts to modern dynamic web applications, I translate ideas into responsive, fast, and user-friendly digital products. My focus is always on sleek aesthetics, optimal loading speeds, cross-device responsiveness, and an effortless editing experience for clients.
            </p>

            {/* 4. Badges / Skill Pills (6 items) - Centered Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 w-full max-w-3xl text-left">
              {skillBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 sm:p-4 bg-white border border-[#e5e2da] rounded-xl shadow-2xs hover:border-[#191817] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#191817] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#191817]">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
