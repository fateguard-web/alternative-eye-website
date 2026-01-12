/**
 * Type definitions for case intelligence articles
 */

export interface ArticleFrontmatter {
  title: string;
  description: string;
  authors: string[] | string; // Support both array and legacy string format
  publisher?: string;
  category: string;
  imageUrl: string;
  imageWidth?: number;
  imageHeight?: number;
  publishedAt: string; // ISO 8601 date string
  keywords?: string[] | string; // Support both array and comma-separated string
  isPublished?: boolean;
}

export interface Heading {
  id: string;
  text: string;
  level: 1 | 2 | 3 | 4;
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string; // Raw markdown content
  htmlContent: string; // Processed HTML content
  readTime: number; // Calculated read time in minutes
  headings: Heading[]; // Extracted headings for TOC
}
