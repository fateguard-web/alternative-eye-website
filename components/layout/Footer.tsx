import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Episodes', href: '/episodes' },
  { name: 'Beyond the File', href: '/beyond-the-file' },
  { name: 'Case Intelligence', href: '/case-intelligence' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions' },
];

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/alternativeeye',
    ariaLabel: 'Follow us on Facebook',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/alternativeeye',
    ariaLabel: 'Follow us on Instagram',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@alternativeeye',
    ariaLabel: 'Follow us on YouTube',
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    url: 'https://x.com/alternativeeye',
    ariaLabel: 'Follow us on X (Twitter)',
  },
  {
    name: 'TikTok',
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    url: 'https://tiktok.com/@alternativeeye',
    ariaLabel: 'Follow us on TikTok',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/company/alternativeeye',
    ariaLabel: 'Follow us on LinkedIn',
  },
];

export function Footer() {
  return (
    <footer className="py-16 px-8 md:border-t md:border-[#222] md:mt-16 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        {/* Four-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div>
            <Image
              src="/assets/the-alternative-eye-footer-logo.png"
              alt="Alternative Eye"
              width={200}
              height={80}
              className="mb-4"
              priority
            />
            <p className="text-gray-400 font-body leading-relaxed">
              Beyond the File — where crime meets code. Decoding the systems of
              silence behind the world&apos;s most complex cases.
            </p>
          </div>

          {/* Column 2: Navigation Menu */}
          <div>
            <h3 className="font-heading text-xl mb-4">MENU</h3>
            <nav>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 font-body"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="font-heading text-xl mb-4">LEGAL</h3>
            <nav>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 font-body"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4: Social Media Links */}
          <div>
            <h3 className="font-heading text-xl mb-4">FOLLOW US</h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                    aria-label={social.ariaLabel}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-white/10 text-center">
          <h4 className="text-sm font-heading mb-3 text-gray-300">DISCLAIMER</h4>
          <p className="text-xs text-gray-400 font-body leading-relaxed max-w-4xl mx-auto">
            We are discussing individuals whose cases may correlate with the offender&apos;s known patterns or whose details may or may not be present in offender communications. These individuals are NOT confirmed victims of Charles Ray Vines, Dennis Rader, or any other offender unless publicly verified by law enforcement. The opinions, theories, and analyses presented on this podcast are for informational and educational purposes only and do not constitute legal advice or official findings. All discussions are based on publicly available information, expert analysis, and investigative research. Viewer and listener discretion is advised.
          </p>
        </div>

        {/* Copyright Notice */}
        <div className="pt-6 text-center">
          <p className="text-sm text-gray-400 font-body">
            &copy; 2025 Alternative Eye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

