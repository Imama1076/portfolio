import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ['#444444', '#ffffff']);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, color, y }}
      className="inline-block transition-colors duration-75 mx-[0.16em] my-[0.08em] select-none"
    >
      {children}
    </motion.span>
  );
};

export const ScrollManifestoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.35'],
  });

  const manifestoText =
    "I BUILD CUSTOM WEBSITES AND HIGH-PERFORMANCE DIGITAL EXPERIENCES THAT TURN CASUAL VISITORS INTO COMMITTED CLIENTS. COMBINING INTUITIVE DESIGN, CLEAN CODE, AND FAST LOADING SPEEDS, I CRAFT SOLUTIONS BUILT TO HELP YOUR BUSINESS GROW.";

  const words = manifestoText.split(' ');
  const totalWords = words.length;

  return (
    <section
      ref={containerRef}
      className="w-full bg-black text-white relative py-24 md:py-36 border-y border-neutral-900 overflow-hidden select-none"
      id="manifesto"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,255,255,0.035),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10 flex flex-col items-center justify-center">
        {/* Primary Scroll-Highlight Text - Font matches footer, with reduced font-weight (font-normal/medium) */}
        <div
          className="text-center font-normal uppercase tracking-normal leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] max-w-6xl mx-auto"
          style={{ fontFamily: '"Bebas Neue", "Antonio", "Oswald", sans-serif' }}
        >
          {words.map((word, idx) => {
            const start = idx / totalWords;
            const end = start + 1 / totalWords;
            return (
              <Word key={idx} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </section>
  );
};
