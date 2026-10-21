import React, { useRef } from 'react';
import { SECONDARY_PROJECTS } from '../data/portfolioData';
import { SecondaryProject } from '../types';
import { ChevronLeft, ChevronRight, Server, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface MoreProjectsSectionProps {
  onSelectProject: (project: SecondaryProject) => void;
}

export const MoreProjectsSection: React.FC<MoreProjectsSectionProps> = ({ onSelectProject }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#fbf9f5] border-b border-[#e5e2da] py-16 sm:py-20 md:py-28 select-none" id="more-projects">
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <div>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-wide text-[#191817] leading-none"
              style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 300 }}
            >
              More Projects
            </h2>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#dbd7cd] bg-white hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#dbd7cd] bg-white hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Card Track: Fully responsive card width */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-6 sm:pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SECONDARY_PROJECTS.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(project)}
              className="w-[85vw] max-w-[340px] sm:w-[380px] sm:max-w-[420px] md:w-[450px] snap-start flex-shrink-0 bg-[#f8f6f1] border border-[#e5e2da] hover:border-[#191817] transition-all duration-300 rounded-2xl flex flex-col justify-between p-5 sm:p-7 shadow-xs hover:shadow-xl group text-left hover:-translate-y-1 cursor-pointer"
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Visual Mockup Container */}
                <div
                  className="w-full h-48 sm:h-56 md:h-64 bg-[#141414] border border-[#2a2a2a] rounded-xl flex flex-col justify-between overflow-hidden relative group-hover:border-[#191817] transition-all duration-300 shadow-inner group/thumb"
                >
                  {/* Browser Top Bar (clean dots only) */}
                  <div className="bg-[#1a1a1a] px-3 sm:px-3.5 py-2 sm:py-2.5 border-b border-[#2e2e2e] flex items-center gap-1.5 shrink-0 z-20 relative">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* Visual Content: Video / Full Page WordPress Screenshot / App Mockup */}
                  <div className="relative w-full flex-grow overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
                    {/* Breaksy: Has Video Demo + Cover Image */}
                    {project.videoUrl ? (
                      <div className="relative w-full h-full group/vid">
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
                          src={project.videoUrl}
                          poster="/assets/coverimage.webp"
                          preload="auto"
                          autoPlay
                          loop
                          muted
                          playsInline
                          disablePictureInPicture
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover/vid:bg-black/5 transition-colors flex items-center justify-center">
                          <span className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white/95 text-neutral-900 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider opacity-0 group-hover/vid:opacity-100 transition-opacity duration-200 shadow-xl flex items-center gap-1.5">
                            <Eye className="w-3.5 h-3.5" />
                            Click to View Video
                          </span>
                        </div>
                      </div>
                    ) : project.imageUrl ? (
                      /* WordPress full page mockup: Smooth hover scroll effect */
                      <div className="relative w-full h-full overflow-hidden group/wp">
                        <img
                          src={project.imageUrl}
                          alt={project.imageAlt || project.title}
                          loading="eager"
                          decoding="async"
                          className={`w-full ${
                            project.mockupType === 'wordpress'
                              ? 'object-cover object-top transition-transform duration-[4500ms] ease-in-out group-hover/thumb:-translate-y-[62%]'
                              : 'object-cover object-top transition-transform duration-500 group-hover/thumb:scale-105'
                          }`}
                        />
                      </div>
                    ) : project.mockupType === 'omnisync' ? (
                      <div className="space-y-2 p-3 sm:p-4 my-auto w-full">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Server className="w-4 h-4 text-white" />
                            <span className="text-xs font-semibold text-white tracking-wider">OMNISYNC API</span>
                          </div>
                          <span className="text-[10px] font-mono text-[#a09d95]">Laravel Microservice</span>
                        </div>
                        <div className="p-2.5 sm:p-3 bg-[#0a0a0a] border border-[#222222] rounded font-mono text-[10px] sm:text-[11px] text-[#dbd7cd]">
                          <code>[Queue Worker] 250k sync events ok • 99.98% Uptime</code>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Metadata & Description */}
                <div>
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase text-[#191817] tracking-wide group-hover:text-neutral-700 transition-colors leading-none"
                    style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 400 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#191817] mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#5a5750] leading-relaxed mt-1.5 sm:mt-2 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 sm:pt-2">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#eae6dc] text-[10px] sm:text-[11px] font-mono text-[#191817] rounded-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
