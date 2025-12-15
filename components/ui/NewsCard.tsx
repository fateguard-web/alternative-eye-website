'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
  href: string;
}

export function NewsCard({ date, title, description, href }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-[#111] border border-[#222] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#333]"
    >
      <div className="h-[200px] bg-[#222] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(255,0,0,0.1)] to-[rgba(0,0,255,0.1)]" />
      </div>
      <div className="p-6">
        <span className="block text-xs text-gray-500 mb-2">{date}</span>
        <h3 className="text-2xl mb-2 font-heading">{title}</h3>
        <p className="text-gray-400 mb-4 font-body">{description}</p>
        <Link
          href={href}
          className="inline-block px-5 py-1.5 border border-[#ff0000] text-white rounded-full no-underline font-semibold transition-all duration-300 hover:bg-[#ff0000] hover:text-white"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}

