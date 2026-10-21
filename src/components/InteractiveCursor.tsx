import React, { useEffect, useState } from 'react';

export const InteractiveCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop/laptops with mouse
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setMounted(true);

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor-hover]')
        );
        setIsHovered(isClickable);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth trailing animation loop
    const animate = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      setTrailingPos({ x: trailX, y: trailY });
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-difference select-none" aria-hidden="true">
      {/* Outer Smooth Trailing Ring - Inverts colors: white on black, black on white */}
      <div
        className="fixed top-0 left-0 rounded-full border border-white pointer-events-none transition-transform duration-200 ease-out flex items-center justify-center"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 1.7 : 1
          })`,
          width: '36px',
          height: '36px',
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
          backdropFilter: isHovered ? 'invert(10%)' : 'none',
        }}
      />

      {/* Center Crisp Pointer Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 0.6 : 1
          })`,
        }}
      />
    </div>
  );
};
