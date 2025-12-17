import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/case-intelligence';
import { ArticleHeader } from '@/components/case-intelligence/ArticleHeader';
import { TableOfContents } from '@/components/case-intelligence/TableOfContents';
import { ArticleContent } from '@/components/case-intelligence/ArticleContent';
import { RelatedArticles } from '@/components/case-intelligence/RelatedArticles';
import { SocialShareButtons } from '@/components/case-intelligence/SocialShareButtons';

// Get site URL from environment or use default
const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://alternativeeye.com';
};

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generate static params for all articles at build time
 */
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/**
 * Generate SEO metadata for the article
 */
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Alternative Eye',
    };
  }

  const siteUrl = getSiteUrl();
  const postUrl = `${siteUrl}/case-intelligence/${slug}`;
  const imageUrl = article.frontmatter.imageUrl.startsWith('http')
    ? article.frontmatter.imageUrl
    : `${siteUrl}${article.frontmatter.imageUrl}`;

  const authors = Array.isArray(article.frontmatter.authors)
    ? article.frontmatter.authors
    : [article.frontmatter.authors];

  const keywords = Array.isArray(article.frontmatter.keywords)
    ? article.frontmatter.keywords
    : typeof article.frontmatter.keywords === 'string'
      ? article.frontmatter.keywords.split(',').map((k) => k.trim())
      : [];

  return {
    metadataBase: new URL(siteUrl),
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: authors.map((author) => ({ name: author })),
    creator: authors[0],
    publisher: article.frontmatter.publisher || 'Alternative Eye',
    category: article.frontmatter.category,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: postUrl,
      siteName: 'Alternative Eye',
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: [
        {
          url: imageUrl,
          width: article.frontmatter.imageWidth || 1200,
          height: article.frontmatter.imageHeight || 630,
          alt: article.frontmatter.title,
        },
      ],
      publishedTime: article.frontmatter.publishedAt,
      authors: authors,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@alternativeeye',
      creator: '@alternativeeye',
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: postUrl,
    },
    other: {
      'article:published_time': article.frontmatter.publishedAt,
      'article:author': authors[0],
      'article:section': article.frontmatter.category,
    },
  };
}

/**
 * Main article page component
 */
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(
    slug,
    article.frontmatter.category,
    3
  );

  const siteUrl = getSiteUrl();

  return (
    <div className="min-h-screen px-4 sm:px-8 pt-32 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Back to Articles Button */}
        <Link
          href="/case-intelligence"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Articles</span>
        </Link>

        {/* Article Header */}
        <ArticleHeader
          frontmatter={article.frontmatter}
          readTime={article.readTime}
        />

        {/* Two-column layout: TOC + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop: Left Sidebar, Mobile: Accordion at top */}
          <div className="lg:col-span-1">
            <TableOfContents headings={article.headings} />
          </div>

          {/* Article Content */}
          <div className="lg:col-span-3">
            <ArticleContent htmlContent={article.htmlContent} />

            {/* Social Share Buttons */}
            <div className="mt-12 pt-8 border-t border-[#333]">
              <SocialShareButtons
                title={article.frontmatter.title}
                slug={slug}
                siteUrl={siteUrl}
              />
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <RelatedArticles articles={relatedArticles} />
          </div>
        )}
      </div>
    </div>
  );
}
