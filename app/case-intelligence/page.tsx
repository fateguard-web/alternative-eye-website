import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/case-intelligence';
import { format } from 'date-fns';
import { CaseIntelligenceClient } from './CaseIntelligenceClient';

export const metadata: Metadata = {
  title: 'Case Intelligence | Alternative Eye',
  description: 'In-depth case analyses, investigative insights, and expert perspectives on the intersection of crime, technology, and justice.',
};

interface ArticleCardData {
  id: string;
  slug: string;
  title: string;
  description: string;
  featuredImage: string;
  date: string;
  readTime: string;
  author: string;
}

// Convert Article to ArticleCardData format
function articleToCardData(
  article: Awaited<ReturnType<typeof getAllArticles>>[0]
): ArticleCardData {
  const publishedDate = new Date(article.frontmatter.publishedAt);
  const formattedDate = format(publishedDate, 'MMM d, yyyy');
  const authors = Array.isArray(article.frontmatter.authors)
    ? article.frontmatter.authors
    : [article.frontmatter.authors];

  return {
    id: article.slug,
    slug: article.slug,
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    featuredImage: article.frontmatter.imageUrl,
    date: formattedDate,
    readTime: `${article.readTime} min read`,
    author: authors.join(', '),
  };
}

export default async function CaseIntelligencePage() {
  const articles = await getAllArticles();
  const articleCards = articles.map(articleToCardData);

  return <CaseIntelligenceClient articles={articleCards} />;
}
