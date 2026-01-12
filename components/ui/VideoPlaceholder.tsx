'use client';

import { motion } from 'motion/react';

interface VideoPlaceholderProps {
  label: string;
  embedUrl?: string;
}

export function VideoPlaceholder({ label }: VideoPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="w-full aspect-video bg-[#111] border border-[#333] rounded-lg flex flex-col items-center justify-center text-gray-500 transition-all duration-300 cursor-pointer hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:text-white">
        <span className="text-5xl mb-4">▶</span>
        <span className="font-heading tracking-[0.05em] text-xl">{label}</span>
      </div>
    </motion.div>
  );
}

