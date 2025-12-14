'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface ExpertShowcaseProps {
  name: string;
  imageSrc: string;
  websiteUrl?: string;
}

export function ExpertShowcase({ name, imageSrc, websiteUrl }: ExpertShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-8"
    >
      <div className="max-w-[400px] w-full rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-[#333]">
        <Image
          src={imageSrc}
          alt={name}
          width={400}
          height={500}
          className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      {websiteUrl && (
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-4 text-base tracking-[0.1em] border border-white text-white rounded-full no-underline transition-all duration-300 hover:bg-white hover:text-black"
        >
          Visit Website
        </a>
      )}
    </motion.div>
  );
}

