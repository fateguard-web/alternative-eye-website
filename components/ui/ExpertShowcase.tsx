'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface ExpertShowcaseProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
}

export function ExpertShowcase({
  name,
  title,
  description,
  imageSrc,
}: ExpertShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center gap-6"
    >
      <div className="w-full max-w-[280px] sm:max-w-[400px] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-[#333]">
        <Image
          src={imageSrc}
          alt={name}
          width={400}
          height={500}
          className="w-full h-auto block grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-heading">{name}</h3>
        <p className="text-lg text-gray-300 font-body">{title}</p>
        <p className="text-base text-gray-400 font-body max-w-[600px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

