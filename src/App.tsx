/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NarrativeSection } from './components/NarrativeSection';
import { TechStackSection } from './components/TechStackSection';
import { ProductionSystemsSection } from './components/ProductionSystemsSection';
import { MoreProjectsSection } from './components/MoreProjectsSection';
import { ToolkitSection } from './components/ToolkitSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollManifestoSection } from './components/ScrollManifestoSection';
import { useSmoothScroll, getLenis } from './hooks/useSmoothScroll';
import { CASE_STUDIES } from './data/portfolioData';
import { CaseStudy, SecondaryProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | SecondaryProject | null>(null);

  // Initialize Lenis + GSAP kinetic smooth scrolling
  useSmoothScroll();

  const scrollToSection = (id: string) => {
    const lenis = getLenis();
    const element = document.getElementById(id);
    if (lenis && element) {
      lenis.scrollTo(element, { offset: 0, duration: 1.2 });
    } else if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fbf9f5] font-sans text-[#191817] antialiased min-h-screen flex flex-col selection:bg-neutral-900 selection:text-white w-full overflow-x-hidden relative">
      {/* Top Reading Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Top Header Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Fixed Hero Curtain Container */}
      <div id="hero" className="relative w-full h-screen">
        {/* Fixed Hero: Stays pinned in background while next content rolls up over it */}
        <div className="fixed top-0 left-0 w-full h-screen z-0">
          <Hero onExploreClick={() => scrollToSection('intro')} />
        </div>
      </div>

      {/* Main Content Sections: Slides UP OVER the fixed Hero like a physical curtain */}
      <main className="relative z-10 w-full bg-[#fbf9f5] flex-grow shadow-[0_-25px_60px_rgba(0,0,0,0.5)]">
        {/* Section 01: About Me (WordPress Developer Focus) */}
        <NarrativeSection />

        {/* Section 02: Black Scroll-Driven Text Reading Reveal Section */}
        <ScrollManifestoSection />

        {/* Section 03: Tech Stack & Skills Showcase */}
        <TechStackSection />

        {/* Section 03: Featured Production Systems & Case Studies with Full-Screen Card Scroll */}
        <ProductionSystemsSection onSelectCaseStudy={setSelectedProject} />

        {/* Section 04: More Projects (Horizontal Scroll Carousel) */}
        <MoreProjectsSection onSelectProject={setSelectedProject} />

        {/* Section 05: Applied Skills & Architecture Inspector */}
        <ToolkitSection />
      </main>

      {/* Editorial Footer with Direct Contact */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Floating Smooth Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Interactive Monograph Brief / Schema Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectOtherStudy={(study) => setSelectedProject(study)}
        allStudies={CASE_STUDIES}
      />
    </div>
  );
}
