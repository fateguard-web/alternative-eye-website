import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/types/article';
import { format } from 'date-fns';
import { CategoryBadge } from './CategoryBadge';

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-[#333]">
      <h2 className="text-3xl md:text-4xl font-heading mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => {
          const publishedDate = new Date(article.frontmatter.publishedAt);
          const formattedDate = format(publishedDate, 'MMM d, yyyy');

          return (
            <Link
              key={article.slug}
              href={`/case-intelligence/${article.slug}`}
              className="group bg-[#111] border border-[#222] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#333]"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden bg-[#222]">
                <Image
                  src={article.frontmatter.imageUrl}
                  alt={article.frontmatter.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,0,0,0.1)] to-[rgba(0,0,255,0.1)]" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <CategoryBadge category={article.frontmatter.category} />
                </div>
                <h3 className="text-xl font-heading mb-2 group-hover:text-[#ff0000] transition-colors line-clamp-2">
                  {article.frontmatter.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {article.frontmatter.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>{formattedDate}</span>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
