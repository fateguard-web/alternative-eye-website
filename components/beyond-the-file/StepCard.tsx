'use client';

import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  icon: LucideIcon;
  stepNumber: number;
  title: string;
  description: string;
  delay?: number;
}

export function StepCard({ icon: Icon, stepNumber, title, description, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#111] border border-[#222] p-8 text-center transition-all duration-300 hover:border-[#333]"
    >
      {/* Icon with glow effect */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,0,0,0.3)] to-[rgba(0,0,255,0.3)] blur-2xl" />
          <Icon className="w-16 h-16 text-red-500 relative z-10" strokeWidth={1.5} />
        </div>
      </div>

      {/* Step label */}
      <div className="text-sm font-semibold text-blue-500 mb-3 tracking-wider">
        STEP {stepNumber}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-heading mb-4 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 font-body leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
}
