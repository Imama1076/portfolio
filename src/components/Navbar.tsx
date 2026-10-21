import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getLenis } from '../hooks/useSmoothScroll';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setMobileMenuOpen(false);
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const lenis = getLenis();
      const element = document.getElementById(id);
      if (lenis && element) {
        lenis.scrollTo(element, { duration: 1.2 });
      } else if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-neutral-900 py-3.5 sm:py-4 shadow-2xl'
          : 'bg-transparent py-5 sm:py-6 md:py-8'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
        {/* Brand Wordmark: AMAMA FAYYAZ */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="flex items-center tracking-wider text-base sm:text-lg md:text-xl font-bold uppercase transition-transform duration-200 hover:scale-[1.02]"
        >
          <span className="text-white font-extrabold tracking-widest">AMAMA</span>
          <span className="text-neutral-400 font-light ml-2 tracking-widest">FAYYAZ</span>
        </a>

        {/* Center / Right Desktop Navigation Links: HOME, PROJECTS, ABOUT, CONTACT */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {[
            { id: 'hero', label: 'HOME' },
            { id: 'work', label: 'PROJECTS' },
            { id: 'intro', label: 'ABOUT' },
            { id: 'contact', label: 'CONTACT' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-300 hover:text-white transition-colors py-1 relative group cursor-pointer"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Trigger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none cursor-pointer rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/98 border-b border-neutral-800 px-6 py-6 space-y-4 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {[
                { id: 'hero', label: 'HOME' },
                { id: 'work', label: 'PROJECTS' },
                { id: 'intro', label: 'ABOUT' },
                { id: 'contact', label: 'CONTACT' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className="text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:text-white py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
