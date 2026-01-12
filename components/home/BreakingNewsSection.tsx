'use client';

import { motion } from 'motion/react';
import { NewsCard } from '@/components/ui/NewsCard';

interface Article {
  date: string;
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
}

interface BreakingNewsSectionProps {
  articles: Article[];
}

export function BreakingNewsSection({ articles }: BreakingNewsSectionProps) {
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
          {articles.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}

