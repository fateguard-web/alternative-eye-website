'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface SoundbiteCarouselProps {
  items: { label: string; instagramUrl?: string }[];
}

export function SoundbiteCarousel({ items }: SoundbiteCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop: 250px card + 24px gap, Mobile: full width (calculated dynamically)
  const gap = 24;
  const desktopCardWidth = 250;
  const desktopItemWidth = desktopCardWidth + gap;

  const handleNext = () => {
    if (isMobile && containerRef.current) {
      // Mobile: scroll by exactly one container width (one full card, no gap on mobile)
      const containerWidth = containerRef.current.offsetWidth;
      const maxScroll = (items.length - 1) * containerWidth;
      setScrollPosition((prev) => Math.min(prev + containerWidth, maxScroll));
    } else {
      // Desktop: scroll by one card width, show 3 cards
      const maxScroll = (items.length - 3) * desktopItemWidth;
      setScrollPosition((prev) => Math.min(prev + desktopItemWidth, maxScroll));
    }
  };

  const handlePrev = () => {
    if (isMobile && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      setScrollPosition((prev) => Math.max(prev - containerWidth, 0));
    } else {
      setScrollPosition((prev) => Math.max(prev - desktopItemWidth, 0));
    }
  };

  return (
    <div className="relative max-w-[1400px] mx-auto flex items-center gap-4">
      <button
        onClick={handlePrev}
        className="bg-[rgba(255,255,255,0.05)] border border-[#333] text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 flex-shrink-0 z-10 hover:bg-[#ff0000] hover:border-[#ff0000]"
        aria-label="Previous"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div ref={containerRef} className="overflow-hidden w-full sm:w-[798px]">
        <div
          className="flex gap-0 sm:gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full sm:w-[250px] flex-shrink-0"
            >
              <div className="w-full aspect-[9/16] bg-[#111] border border-[#333] rounded-xl flex flex-col items-center justify-center text-gray-500 transition-all duration-300 cursor-pointer relative hover:border-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.2)] hover:-translate-y-2">
                <div className="w-12 h-12 mb-4 text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <span className="font-heading text-gray-400 tracking-[0.05em]">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="bg-[rgba(255,255,255,0.05)] border border-[#333] text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 flex-shrink-0 z-10 hover:bg-[#ff0000] hover:border-[#ff0000]"
        aria-label="Next"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

