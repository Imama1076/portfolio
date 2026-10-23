import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductionSystemsSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const ProductionSystemsSection: React.FC<ProductionSystemsSectionProps> = ({
  onSelectCaseStudy,
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Track active card based on scroll on desktop
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportMid = scrollY + window.innerHeight * 0.45;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + rect.height;

        if (viewportMid >= top && viewportMid <= bottom) {
          setActiveCardIndex(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <section className="w-full bg-[#fbf9f5] border-b border-[#e5e2da] relative pt-12 sm:pt-20 md:pt-28 pb-16 sm:pb-24 md:pb-32" id="work">
      {/* Sticky Header Bar */}
      <div className="sticky top-14 sm:top-16 md:top-20 z-40 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#e5e2da] py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-12 transition-all shadow-xs mb-8 sm:mb-12 md:mb-16">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-light uppercase text-[#191817] tracking-wide leading-none"
              style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 300 }}
            >
              Featured Projects
            </h2>
          </div>
        </div>
      </div>

      {/* Responsive Cards Deck: Stacks sticky on desktop, comfortable natural scroll on mobile/tablet */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 relative">
        {CASE_STUDIES.map((study, index) => {
          return (
            <div
              key={study.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              style={
                isDesktop
                  ? {
                      top: `${110 + index * 20}px`,
                      zIndex: 20 + index,
                    }
                  : { zIndex: 10 + index }
              }
              className="relative lg:sticky w-full mb-10 sm:mb-14 lg:mb-44 last:mb-0 transition-all duration-300"
            >
              <article className="w-full bg-white border border-[#d6d2c4] rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.18)] p-5 sm:p-7 md:p-10 lg:p-12 flex flex-col justify-between overflow-hidden relative group">
                {/* Subtle Background Watermark Numeral */}
                <span className="absolute right-4 -bottom-4 sm:right-6 sm:-bottom-6 text-[100px] sm:text-[160px] md:text-[200px] lg:text-[250px] font-bold text-[#f7f5ef] select-none pointer-events-none leading-none -z-0">
                  {study.number}
                </span>

                {/* Card Main Body: 2-Column Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-16 py-2 sm:py-4 md:py-6 items-center relative z-10 flex-grow">
                  {/* Left Column: Title, Narrative, Technologies, Inspect Button */}
                  <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-left order-2 lg:order-1">
                    <div>
                      <h3
                        className="text-3xl sm:text-5xl md:text-6xl font-normal uppercase text-[#191817] tracking-wide leading-none"
                        style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 400 }}
                      >
                        {study.title}
                      </h3>
                      {study.subheading && (
                        <p className="text-sm sm:text-base md:text-lg text-[#5a5750] font-sans font-medium mt-1">
                          {study.subheading}
                        </p>
                      )}
                    </div>

                    {/* Exact User Narrative Description */}
                    <p className="text-xs sm:text-sm md:text-base text-[#3b3a36] leading-relaxed font-sans">
                      {study.leadParagraph}
                    </p>

                    {/* Stack Badges */}
                    <div className="space-y-1.5 sm:space-y-2 pt-1">
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#7a776f] block">
                        {study.stackHeading || 'Core Technologies:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {study.stackBadges.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 sm:px-3 py-1 bg-[#f4f1ea] border border-[#dbd7cd] text-[11px] sm:text-xs font-mono text-[#191817] font-medium rounded-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => onSelectCaseStudy(study)}
                        className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 bg-[#191817] hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-95 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: High-Res Interactive Browser Frame with Real Uploaded Images */}
                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <div
                      onClick={() => onSelectCaseStudy(study)}
                      className="group/img cursor-pointer rounded-xl overflow-hidden border border-[#d6d2c4] bg-[#141414] shadow-xl transition-all duration-300 hover:border-[#191817] hover:scale-[1.01]"
                    >
                      {/* Browser Window Chrome Top Bar (clean dots only) */}
                      <div className="bg-[#1f1e1d] px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-[#333333] flex items-center justify-between">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56]" />
                          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e]" />
                          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f]" />
                        </div>
                      </div>

                      {/* High-Resolution Project Showcase Image / Live Video */}
                      <div className="relative overflow-hidden bg-[#1a1a1a] h-[200px] sm:h-[280px] md:h-[360px] lg:h-[440px]">
                        {study.videoUrl ? (
                          <div className="relative w-full h-full bg-black">
                            <video
                              ref={(videoEl) => {
                                if (!videoEl) return;
                                videoEl.defaultMuted = true;
                                videoEl.muted = true;
                                videoEl.setAttribute('muted', '');
                                videoEl.setAttribute('playsinline', '');
                                videoEl.setAttribute('webkit-playsinline', '');

                                const triggerPlay = () => {
                                  if (videoEl.paused) {
                                    videoEl.play().catch(() => {});
                                  }
                                };

                                triggerPlay();
                                videoEl.onloadeddata = triggerPlay;
                                videoEl.oncanplay = triggerPlay;
                                videoEl.onpause = () => {
                                  if (!document.hidden) triggerPlay();
                                };
                                videoEl.onended = () => {
                                  videoEl.currentTime = 0;
                                  triggerPlay();
                                };

                                if ('IntersectionObserver' in window) {
                                  const observer = new IntersectionObserver(
                                    (entries) => {
                                      entries.forEach((entry) => {
                                        if (entry.isIntersecting) triggerPlay();
                                      });
                                    },
                                    { threshold: 0.1 }
                                  );
                                  observer.observe(videoEl);
                                }
                              }}
                              src={study.videoUrl}
                              poster={study.imageUrl}
                              preload="auto"
                              autoPlay
                              loop
                              muted
                              playsInline
                              disablePictureInPicture
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        ) : (
                          <img
                            src={study.imageUrl}
                            alt={study.imageAlt}
                            className="w-full h-full object-contain sm:object-cover sm:object-top transition-transform duration-700 ease-out group-hover/img:scale-[1.03] bg-[#0c0c0c]"
                            loading="eager"
                            decoding="async"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const fallback = target.parentElement?.querySelector('.fallback-container');
                              if (fallback) fallback.classList.remove('hidden');
                            }}
                          />
                        )}

                        {/* Hover Overlay Hint */}
                        <div className="absolute inset-0 bg-[#000000]/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="px-4 py-2 bg-white text-[#191817] rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider font-bold shadow-2xl">
                            Click to View Project
                          </span>
                        </div>

                        {/* Fallback container */}
                        <div className="fallback-container hidden absolute inset-0 bg-[#1f1e1d] flex flex-col items-center justify-center p-6 text-center text-white">
                          <Sparkles className="w-8 h-8 text-neutral-400 mb-3" />
                          <span className="font-mono text-sm uppercase tracking-wider text-white mb-1">
                            {study.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Strip */}
                <div className="pt-3 sm:pt-4 border-t border-[#f0eee6] flex items-center text-[11px] sm:text-xs font-mono text-[#7a776f] relative z-10">
                  <div>
                    STATUS: <strong className="text-[#191817]">{study.timeline}</strong>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};
