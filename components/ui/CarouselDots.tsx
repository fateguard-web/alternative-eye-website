'use client';

import { cn } from '@/lib/utils';

interface CarouselDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

export function CarouselDots({
  totalSlides,
  currentSlide,
  onDotClick,
}: CarouselDotsProps) {
  if (totalSlides <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotClick(index)}
          className={cn(
            'h-2 w-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-500',
            index === currentSlide
              ? 'bg-red-500 w-8'
              : 'bg-gray-600 hover:bg-gray-500'
          )}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentSlide ? 'true' : 'false'}
        />
      ))}
    </div>
  );
}

