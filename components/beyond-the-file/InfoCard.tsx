'use client';

import { motion } from 'motion/react';

interface InfoCardProps {
  title: string;
  description: string;
}

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-[#111] border border-[#222] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#333]"
    >
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[rgba(255,0,0,0.2)] to-[rgba(0,0,255,0.2)] blur-xl" />
        <h3 className="text-2xl md:text-3xl mb-4 font-heading relative z-10">{title}</h3>
        <p className="text-gray-400 font-body leading-relaxed relative z-10">{description}</p>
      </div>
    </motion.div>
  );
}
