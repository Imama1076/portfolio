import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero-content"
      className="w-full h-screen min-h-screen bg-black flex flex-col justify-center items-center text-center relative overflow-hidden select-none px-4 sm:px-8 md:px-12"
    >
      {/* Subtle atmospheric center spotlight */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Center Giant Typographic Statement */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col items-center justify-center relative z-10 px-2 sm:px-4">
        {/* Clean, Majestic & Ultra-Readable Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[17vw] sm:text-[16vw] md:text-[15vw] lg:text-[180px] xl:text-[220px] 2xl:text-[260px] font-normal uppercase text-white leading-[0.95] tracking-[0.02em] sm:tracking-[0.04em] drop-shadow-2xl text-center w-full whitespace-nowrap select-none"
          style={{ fontFamily: '"Bebas Neue", "Antonio", "Oswald", sans-serif' }}
        >
          AMAMA FAYYAZ
        </motion.h1>

        {/* Clean Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-400 text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.18em] sm:tracking-[0.25em] mt-5 sm:mt-7 max-w-4xl mx-auto leading-relaxed px-3"
        >
          WEB &amp; WORDPRESS DEVELOPER{' '}
          <span className="text-neutral-600 font-bold px-1.5 sm:px-2">|</span> LARAVEL DEVELOPER
        </motion.p>
      </div>
    </section>
  );
};
