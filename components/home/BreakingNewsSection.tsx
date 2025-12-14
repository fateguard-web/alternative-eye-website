'use client';

import { motion } from 'motion/react';
import { NewsCard } from '@/components/ui/NewsCard';

const newsItems = [
  {
    date: 'DEC 12, 2025',
    title: 'THE SILENT WITNESS IN CODE',
    description: 'How digital forensics cracked a cold case from 1998.',
    href: '#',
  },
  {
    date: 'DEC 05, 2025',
    title: 'PATTERN RECOGNITION',
    description: 'Using AI to identify serial offender markers.',
    href: '#',
  },
  {
    date: 'NOV 28, 2025',
    title: 'REMOTE VIEWING FILES',
    description: "Declassifying the government's psychic spy program.",
    href: '#',
  },
];

export function BreakingNewsSection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 border-t border-[#333] pt-4 flex justify-between items-start">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold text-[#ff0000] tracking-[0.1em] block mb-2">
              NEW EPISODES WEEKLY
            </span>
            <h2 className="text-5xl font-heading">BREAKING NEWS</h2>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

