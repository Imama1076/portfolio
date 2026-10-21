import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp, Copy, Check, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getLenis } from '../hooks/useSmoothScroll';

export const Footer: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsContactModalOpen(false);
      }
    };
    if (isContactModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isContactModalOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('amamaishere@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'contact') {
      setIsContactModalOpen(true);
      return;
    }
    const lenis = getLenis();
    const elem = document.getElementById(id);
    if (lenis && elem) {
      lenis.scrollTo(elem, { duration: 1.2 });
    } else if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-black text-white relative select-none pt-20 sm:pt-28 pb-10" id="footer">
      {/* Anchor for Contact navigation */}
      <div id="contact" className="absolute top-0 left-0" />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Main High-Impact Call-To-Action Block */}
        <div className="text-center max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 pb-16 sm:pb-24 md:pb-28">
          {/* Big Headline in Clean Condensed Typography */}
          <h2
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light uppercase text-white leading-[1.15] sm:leading-[1.12] md:leading-[1.08] tracking-wide px-2"
            style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 300 }}
          >
            DESIGN THAT TRULY DRIVES
            <br />
            BUSINESS GROWTH + RESULTS
          </h2>

          {/* Quotation statement */}
          <div className="space-y-3 max-w-3xl mx-auto px-4">
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.2em] leading-relaxed">
              TURNING BOLD IDEAS INTO HIGH-IMPACT DIGITAL EXPERIENCES THAT ELEVATE VISIBILITY AND DRIVE GROWTH.
            </p>
            <p className="text-neutral-500 text-xs sm:text-sm font-normal tracking-wide italic leading-relaxed">
              &ldquo;I don&apos;t just build websites &mdash; I design fast, high-converting digital experiences tailored to turn visitors into long-term clients.&rdquo;
            </p>
          </div>

          {/* Center Action Button: LET'S TALK */}
          <div className="flex items-center justify-center pt-2">
            {/* Let's Talk Pill Button - Opens Interactive Popup Modal */}
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-200 text-black px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="pt-8 sm:pt-10 pb-6 border-t border-[#1c1c1c] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-wider">
          {/* Brand Wordmark Left */}
          <div className="flex items-center tracking-wider text-base md:text-lg font-bold uppercase">
            <span className="text-white font-extrabold tracking-widest">AMAMA</span>
            <span className="text-neutral-400 font-light ml-2 tracking-widest">FAYYAZ</span>
          </div>

          {/* Center Navigation Links: HOME, PROJECTS, ABOUT, CONTACT (404 Removed as requested) */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-neutral-400">
            {[
              { id: 'hero', label: 'HOME' },
              { id: 'work', label: 'PROJECTS' },
              { id: 'intro', label: 'ABOUT' },
              { id: 'contact', label: 'CONTACT' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Scroll to Top with Arrow Up */}
          <button
            type="button"
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>SCROLL TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Bottom-Most Copyright Strip */}
        <div className="pt-6 border-t border-[#141414] flex items-center justify-center text-[11px] text-neutral-500 font-sans tracking-wide">
          <div>
            &copy; {new Date().getFullYear()} AMAMA FAYYAZ. All rights reserved.
          </div>
        </div>
      </div>

      {/* Interactive Contact & Let's Talk Modal Popup */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsContactModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#111111] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 text-left p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Title */}
              <div className="space-y-1 pr-8">
                <h3
                  className="text-3xl sm:text-4xl font-normal uppercase text-white tracking-wide"
                  style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 400 }}
                >
                  LET&apos;S TALK
                </h3>
              </div>

              {/* Email Card with Copy Button */}
              <div className="mt-6 p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  Email Address
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-sm sm:text-base font-mono font-semibold text-white select-all">
                    amamaishere@gmail.com
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-medium transition-colors cursor-pointer border border-neutral-700"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Connect Social Buttons */}
              <div className="mt-5 space-y-2.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  Connect On Profiles
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/amama-fayyaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#0077b5]/15 hover:bg-[#0077b5]/25 border border-[#0077b5]/40 text-neutral-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 fill-[#0077b5]" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                      <span className="text-xs font-semibold">LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Imama1076/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      <span className="text-xs font-semibold">GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
