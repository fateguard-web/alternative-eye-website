'use client';

import { motion } from 'motion/react';
import { Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/alternativeeye',
    color: 'hover:text-[#e4405f]',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com/@alternativeeye',
    color: 'hover:text-[#ff0000]',
  },
  {
    name: 'TikTok',
    icon: () => (
      // Custom TikTok icon (lucide-react doesn't have TikTok)
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
    color: 'hover:text-[#00f2ea]',
  },
];

export function MailingAddress() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className="text-xl font-heading mb-2">MAILING ADDRESS</h3>
      <p className="text-gray-400 font-body">
        Alternative Eye Productions<br />
        Los Angeles, CA
      </p>
    </motion.div>
  );
}

export function FollowUsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h3 className="text-xl font-heading mb-2">FOLLOW US</h3>
      <p className="text-gray-400 font-body mb-4">
        Stay connected for updates, behind-the-scenes content, and case discussions
      </p>
      <div className="flex gap-3 flex-wrap">
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
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 bg-white/5 border border-white/10 rounded-lg text-white transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20`}
              aria-label={`Follow us on ${social.name}`}
            >
              <IconComponent />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}

export function ResponseTimeNote() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="pt-6 border-t border-white/10"
    >
      <p className="text-sm text-gray-500 font-body">
        We typically respond within 24-48 hours. For urgent matters, 
        please email us directly at the address above.
      </p>
    </motion.div>
  );
}

export function ContactInfo() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="space-y-6">
        <MailingAddress />
        <FollowUsSection />
      </div>
    </motion.div>
  );
}
