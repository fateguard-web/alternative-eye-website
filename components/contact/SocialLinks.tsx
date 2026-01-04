'use client';

import { motion } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/alternativeeyebeyondthefile?igsh=MXJuNmF4ZGYzMW5seQ%3D%3D&utm_source=qr',
    color: 'hover:text-[#e4405f]',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@alternativeeyebeyondthefile?si=X5k8GWKS1ZRAmQlk',
    color: 'hover:text-[#ff0000]',
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
    url: 'https://www.tiktok.com/@alternativeeye22?_r=1&_t=ZT-92mzruRCmgI',
    color: 'hover:text-[#00f2ea]',
  },
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="text-center"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-heading mb-2">FOLLOW US</h3>
        <p className="text-gray-400 font-body">
          Stay connected for updates, behind-the-scenes content, and case discussions
        </p>
      </div>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 bg-white/5 border border-white/10 rounded-lg text-white transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20`}
              aria-label={`Follow us on ${social.name}`}
            >
              <IconComponent />
            </motion.a>
          );
        })}
      </div>

      {/* Optional: Social handles text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-8 text-sm text-gray-500 font-body"
      >
        @alternativeeye on all platforms
      </motion.p>
    </motion.div>
  );
}
