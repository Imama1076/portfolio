import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { CaseStudy, SecondaryProject } from '../types';

interface ProjectModalProps {
  project: CaseStudy | SecondaryProject | null;
  onClose: () => void;
  onSelectOtherStudy?: (study: CaseStudy) => void;
  allStudies?: CaseStudy[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setSelectedGalleryIndex(0);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isCaseStudy = 'number' in project;
  const technologies = isCaseStudy
    ? (project as CaseStudy).stackBadges
    : (project as SecondaryProject).stack;

  const hasVideo = 'videoUrl' in project && Boolean((project as any).videoUrl);
  const hasImage = 'imageUrl' in project && Boolean((project as any).imageUrl);
  const videoUrl = hasVideo ? (project as any).videoUrl : null;
  const imageUrl = hasImage ? (project as any).imageUrl : null;
  const galleryImages: string[] | undefined = (project as any).galleryImages;
  const imageAlt = project.title;
  const isWordPress = (project as any).mockupType === 'wordpress' || (imageUrl && imageUrl.includes('wordpress'));

  const currentDisplayImage =
    galleryImages && galleryImages.length > 0
      ? galleryImages[selectedGalleryIndex] || imageUrl
      : imageUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="bg-[#141414] text-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-neutral-800 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Project Title, Technologies and Close Button */}
        <div className="bg-[#1c1c1c] border-b border-neutral-800 px-5 sm:px-7 py-4 flex items-center justify-between gap-4">
          <div className="space-y-1.5 text-left">
            <h2
              id="modal-headline"
              className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-wide text-white leading-none"
              style={{ fontFamily: '"Antonio", sans-serif', fontWeight: 400 }}
            >
              {project.title}
            </h2>
            {/* Technologies Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 bg-[#282828] border border-neutral-700 text-neutral-200 text-xs font-mono rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Media Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-center flex-grow scrollbar-thin">
          {/* Direct Video Player (No tab buttons needed) */}
          {hasVideo ? (
            <div className="w-full bg-black rounded-xl overflow-hidden shadow-2xl flex items-center justify-center border border-neutral-800">
              <video
                src={videoUrl}
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl mx-auto"
              />
            </div>
          ) : isWordPress ? (
            /* WordPress Full Scrollable Webpage Screenshot (Clean dots only) */
            <div className="w-full rounded-xl overflow-hidden border border-neutral-700 bg-white shadow-2xl flex flex-col">
              <div className="bg-[#242424] px-4 py-2 border-b border-neutral-800 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="max-h-[68vh] overflow-y-auto bg-white scrollbar-thin">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          ) : (
            /* Multi-Image Gallery or Single High-Res Image Display */
            <div className="w-full flex flex-col items-center space-y-4">
              {/* Gallery Image Preview Switcher */}
              {galleryImages && galleryImages.length > 1 && (
                <div className="flex items-center gap-2 bg-[#222222] p-1.5 rounded-xl border border-neutral-800">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedGalleryIndex(idx)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                        selectedGalleryIndex === idx
                          ? 'bg-white text-black font-bold shadow-md'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      Preview 0{idx + 1}
                    </button>
                  ))}
                </div>
              )}

              {/* Main Expanded Image View */}
              <div className="w-full bg-black/60 rounded-xl overflow-hidden border border-neutral-800 flex items-center justify-center p-2 shadow-2xl">
                <img
                  src={currentDisplayImage}
                  alt={imageAlt}
                  className="w-full h-auto max-h-[68vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
