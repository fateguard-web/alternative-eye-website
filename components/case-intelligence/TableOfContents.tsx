'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Heading } from '@/lib/types/article';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      rootMargin: '-20% 0% -35% 0%',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all heading elements
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 200; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveId(id);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  // Render TOC item with proper indentation
  const renderTOCItem = (heading: Heading, index: number) => {
    const isActive = activeId === heading.id;
    const indentClass =
      heading.level === 2
        ? ''
        : heading.level === 3
          ? 'ml-4'
          : heading.level === 4
            ? 'ml-8'
            : '';

    return (
      <li key={`${heading.id}-${index}`}>
        <button
          onClick={() => scrollToSection(heading.id)}
          className={cn(
            'text-left w-full py-2 px-3 rounded transition-colors text-sm',
            isActive
              ? 'text-[#ff0000] font-semibold bg-[#1a1a1a]'
              : 'text-gray-400 hover:text-white hover:bg-[#111]',
            indentClass
          )}
        >
          {heading.text}
        </button>
      </li>
    );
  };

  return (
    <>
      {/* Mobile: Collapsible Accordion */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-[#111] border border-[#222] rounded-lg hover:border-[#333] transition-colors"
        >
          <span className="font-heading text-xl">Table of Contents</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </button>

        {isOpen && (
          <nav className="mt-4 bg-[#111] border border-[#222] rounded-lg p-4">
            <ul className="space-y-1">{headings.map(renderTOCItem)}</ul>
          </nav>
        )}
      </div>

      {/* Desktop: Sticky Sidebar */}
      <nav className="hidden lg:block sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="bg-[#111] border border-[#222] rounded-lg p-4">
          <h2 className="font-heading text-xl mb-4 text-white">Contents</h2>
          <ul className="space-y-1">{headings.map(renderTOCItem)}</ul>
        </div>
      </nav>
    </>
  );
}
