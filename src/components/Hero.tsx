import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="w-full h-screen min-h-screen bg-black bg-fixed flex flex-col justify-center items-center text-center relative overflow-hidden select-none px-3 sm:px-8 md:px-12"
      style={{
        backgroundAttachment: 'fixed',
        backgroundImage:
          'radial-gradient(ellipse 90% 75% at 50% 50%, rgba(255, 255, 255, 0.045) 0%, rgba(0, 0, 0, 1) 85%), radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        backgroundSize: '100% 100%, 32px 32px',
      }}
    >
      {/* Additional fixed ambient backdrop layer for comprehensive multi-device parallax */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-black"
        style={{
          backgroundAttachment: 'fixed',
          backgroundImage:
            'radial-gradient(circle at center, rgba(255, 255, 255, 0.035) 0%, rgba(0, 0, 0, 1) 80%)',
        }}
        aria-hidden="true"
      />

      {/* Atmospheric center spotlight */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Center Giant Typographic Statement */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="w-full max-w-[1600px] mx-auto flex flex-col items-center justify-center relative z-10 px-1 sm:px-4"
      >
        {/* Animated Headline: Grand, tall, and screen-filling typography for Mobile & Tablet */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{
            opacity: [0, 1, 1],
            scale: [0.9, 0.9, 1],
            y: [15, 0, 0],
          }}
          transition={{
            duration: 1.6,
            times: [0, 0.35, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[21.5vw] sm:text-[20.5vw] md:text-[18.5vw] lg:text-[195px] xl:text-[245px] 2xl:text-[285px] font-black uppercase text-white leading-[0.82] tracking-tighter sm:tracking-tight drop-shadow-2xl text-center w-full whitespace-nowrap transform scale-y-[1.6] sm:scale-y-[1.38] md:scale-y-[1.25] lg:scale-y-100 origin-center py-4 sm:py-6 select-none"
          style={{ fontFamily: '"Bebas Neue", "Antonio", "Oswald", sans-serif' }}
        >
          AMAMA FAYYAZ
        </motion.h1>

        {/* Clean Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-300 text-xs sm:text-base md:text-lg font-medium uppercase tracking-[0.16em] sm:tracking-[0.24em] mt-7 sm:mt-11 max-w-5xl mx-auto leading-relaxed px-3"
        >
          WEB &amp; WORDPRESS DEVELOPER{' '}
          <span className="text-neutral-500 font-bold px-1.5 sm:px-2">|</span> LARAVEL DEVELOPER
        </motion.p>
      </motion.div>
    </section>
  );
};
