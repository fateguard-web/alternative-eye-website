'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

interface CaseArticleCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  featuredImage: string;
  date: string;
  readTime: string;
  author: string;
}

export function CaseArticleCard({
  slug,
  title,
  description,
  featuredImage,
  date,
  readTime,
  author,
}: CaseArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-[#111] border border-[#222] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#333]"
    >
      {/* Featured image with gradient overlay */}
      <div className="h-[240px] relative overflow-hidden bg-[#222]">
        {featuredImage ? (
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-br from-[rgba(255,0,0,0.1)] to-[rgba(0,0,255,0.1)]" />
      </div>

      {/* Article content */}
      <div className="p-6">
        {/* Article metadata */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
          <span>•</span>
          <span>{author}</span>
        </div>

        {/* Article title */}
        <h2 className="text-2xl mb-3 font-heading leading-tight">{title}</h2>

        {/* Article description */}
        <p className="text-gray-400 mb-6 font-body line-clamp-3">
          {description}
        </p>

        {/* Read More button */}
        <Link
          href={`/case-intelligence/${slug}`}
          className="inline-block px-6 py-2 border border-[#ff0000] text-white rounded-full no-underline font-semibold transition-all duration-300 hover:bg-[#ff0000] hover:text-white"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}
