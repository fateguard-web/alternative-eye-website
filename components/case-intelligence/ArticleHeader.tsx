import Image from 'next/image';
import { format } from 'date-fns';
import type { ArticleFrontmatter } from '@/lib/types/article';
import { CategoryBadge } from './CategoryBadge';

interface ArticleHeaderProps {
  frontmatter: ArticleFrontmatter;
  readTime: number;
}

export function ArticleHeader({ frontmatter, readTime }: ArticleHeaderProps) {
  const authors = Array.isArray(frontmatter.authors)
    ? frontmatter.authors
    : [frontmatter.authors];

  const publishedDate = new Date(frontmatter.publishedAt);
  const formattedDate = format(publishedDate, 'MMM d, yyyy');

  return (
    <div className="mb-12">
      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={frontmatter.imageUrl}
          alt={frontmatter.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight">
        {frontmatter.title}
      </h1>

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
        <span>{formattedDate}</span>
        <span>•</span>
        <span>{readTime} min read</span>
        <span>•</span>
        <span>{authors.join(', ')}</span>
      </div>

      {/* Category Badge */}
      <div className="mb-6">
        <CategoryBadge category={frontmatter.category} />
      </div>

      {/* Description */}
      <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
        {frontmatter.description}
      </p>
    </div>
  );
}
