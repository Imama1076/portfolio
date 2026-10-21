import React from 'react';

interface TechItem {
  id: string;
  name: string;
  logoUrl: string;
}

const TECH_ROW_1: TechItem[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    logoUrl: '/logos/wordpress.webp',
  },
  {
    id: 'antigravity',
    name: 'Google Antigravity',
    logoUrl: '/logos/antigravity.webp',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    logoUrl: '/logos/woocommerce.webp',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    logoUrl: '/logos/laravel.webp',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    logoUrl: '/logos/mysql.webp',
  },
  {
    id: 'elementor',
    name: 'Elementor',
    logoUrl: '/logos/elementor.webp',
  },
];

const TECH_ROW_2: TechItem[] = [
  {
    id: 'aistudio',
    name: 'Google AI Studio',
    logoUrl: '/logos/ai-studio.webp',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    logoUrl: '/logos/javascript.webp',
  },
  {
    id: 'html5',
    name: 'HTML5',
    logoUrl: '/logos/html5.webp',
  },
  {
    id: 'css3',
    name: 'CSS3',
    logoUrl: '/logos/css3.webp',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap 5',
    logoUrl: '/logos/bootstrap.svg',
  },
  {
    id: 'github',
    name: 'GitHub',
    logoUrl: '/logos/github.webp',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    logoUrl: '/logos/tailwind.svg',
  },
];

export const TechStackSection: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="w-full bg-[#080808] text-white border-y border-[#1c1917] py-16 sm:py-20 md:py-28 overflow-hidden relative select-none"
    >
      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 mb-8 sm:mb-12 md:mb-16 relative z-10">
        <h2
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-wide text-white leading-none"
          style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 300 }}
        >
          TECH STACK &amp; SKILLS
        </h2>
      </div>

      {/* Marquee Display: Two horizontal infinite sliding rows with sleek responsive cards */}
      <div className="space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
        {/* Row 1: Leftward infinite track */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-slow flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap pl-4">
            {[...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1, ...TECH_ROW_1].map((tech, idx) => (
              <div
                key={`${tech.id}-row1-${idx}`}
                className="min-w-[190px] sm:min-w-[240px] md:min-w-[320px] h-[75px] sm:h-[90px] md:h-[115px] bg-[#121212] hover:bg-[#1a1a1a] border border-[#262626] hover:border-white/40 rounded-xl sm:rounded-2xl px-5 sm:px-7 md:px-9 py-3 sm:py-4 flex items-center justify-center gap-3.5 sm:gap-5 transition-all duration-300 shadow-xl cursor-default shrink-0 hover:scale-[1.02]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-13 md:h-13 flex items-center justify-center shrink-0">
                  <img
                    src={tech.logoUrl}
                    alt={`${tech.name} logo`}
                    className="max-w-full max-h-full object-contain filter drop-shadow brightness-110"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
                <span className="text-sm sm:text-lg md:text-2xl font-extrabold text-white tracking-wide font-sans">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward infinite track */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-slow-reverse flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap pl-4">
            {[...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2, ...TECH_ROW_2].map((tech, idx) => (
              <div
                key={`${tech.id}-row2-${idx}`}
                className="min-w-[190px] sm:min-w-[240px] md:min-w-[320px] h-[75px] sm:h-[90px] md:h-[115px] bg-[#121212] hover:bg-[#1a1a1a] border border-[#262626] hover:border-white/40 rounded-xl sm:rounded-2xl px-5 sm:px-7 md:px-9 py-3 sm:py-4 flex items-center justify-center gap-3.5 sm:gap-5 transition-all duration-300 shadow-xl cursor-default shrink-0 hover:scale-[1.02]"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-13 md:h-13 flex items-center justify-center shrink-0">
                  <img
                    src={tech.logoUrl}
                    alt={`${tech.name} logo`}
                    className="max-w-full max-h-full object-contain filter drop-shadow brightness-110"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
                <span className="text-sm sm:text-lg md:text-2xl font-extrabold text-white tracking-wide font-sans">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
