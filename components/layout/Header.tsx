'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/episodes', label: 'Episodes' },
    { href: '/beyond-the-file', label: 'Beyond the File' },
    { href: '/case-intelligence', label: 'Case Intelligence' },
    { href: '/contact', label: 'Contact' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-[64px] sm:top-[48px] left-0 w-full z-[1000] py-6 px-8 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-[#d4c5a9] no-underline font-heading text-2xl tracking-[0.1em] hover:text-[#e6d8c0] transition-colors flex items-center gap-3"
        >
          <Image
            src="/assets/alternative-eye.png"
            alt="Alternative Eye Logo"
            width={40}
            height={32}
            className="w-10 h-8"
            priority
          />
          ALTERNATIVE EYE
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white no-underline text-sm font-medium hover:text-gray-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button and Dropdown */}
        <div className="sm:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:text-gray-300 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

          {/* Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-[#0a0a0a] border border-[#222] rounded-lg shadow-lg overflow-hidden z-[1001]">
              <nav className="flex flex-col">
                {menuItems.map((item, index) => (
                  <Link
                    key={`${item.href}-${index}`}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white no-underline text-base font-medium hover:bg-[#1a1a1a] transition-colors py-4 px-6 border-b border-[#222] last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

