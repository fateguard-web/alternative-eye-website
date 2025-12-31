/**
 * Case Intelligence Article Processing Utilities
 * Handles reading and processing markdown files for case intelligence articles
 */

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import DOMPurify from 'isomorphic-dompurify';
import readingTime from 'reading-time';
import type { Article, ArticleFrontmatter, Heading } from './types/article';
import { generateSlug } from './utils';

const CONTENT_DIR = join(process.cwd(), 'content', 'case-intelligence');

/**
 * Normalize frontmatter to handle both array and string formats
 */
function normalizeFrontmatter(data: any): ArticleFrontmatter {
  return {
    title: data.title || '',
    description: data.description || '',
    authors: Array.isArray(data.authors)
      ? data.authors
      : data.author
        ? [data.author]
        : data.authors || [],
    publisher: data.publisher,
    category: data.category || '',
    imageUrl: data.imageUrl || '',
    imageWidth: data.imageWidth,
    imageHeight: data.imageHeight,
    publishedAt: data.publishedAt || new Date().toISOString(),
    keywords: Array.isArray(data.keywords)
      ? data.keywords
      : typeof data.keywords === 'string'
        ? data.keywords.split(',').map((k: string) => k.trim())
        : [],
    isPublished: data.isPublished !== false, // Default to true
  };
}

/**
 * Extract headings from markdown content for table of contents
 */
function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 1 | 2 | 3 | 4;
    const text = match[2].trim();
    const id = generateSlug(text);

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
}

/**
 * Process markdown content to HTML with sanitization
 */
async function processMarkdown(content: string): Promise<string> {
  // Convert markdown to HTML
  const processedContent = await remark().use(remarkHtml).process(content);
  const html = String(processedContent);

  // Sanitize HTML to prevent XSS attacks
  const sanitized = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p',
      'br',
      'strong',
      'em',
      'u',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'ul',
      'ol',
      'li',
      'blockquote',
      'code',
      'pre',
      'a',
      'img',
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id'],
  });

  // Fix image paths: remove /public prefix if present (Next.js serves from /public as root)
  const fixedHtml = sanitized.replace(/src="\/public\//g, 'src="/');

  return fixedHtml;
}

/**
 * Add IDs to headings in HTML for TOC linking
 */
function addHeadingIds(html: string, headings: Heading[]): string {
  let processedHtml = html;

  headings.forEach((heading) => {
    const headingTag = `h${heading.level}`;
    const regex = new RegExp(
      `<${headingTag}>(.*?)</${headingTag}>`,
      'gi'
    );
    processedHtml = processedHtml.replace(
      regex,
      (match, content) => {
        // Only replace if the heading text matches (to avoid duplicates)
        if (content.trim() === heading.text) {
          return `<${headingTag} id="${heading.id}">${content}</${headingTag}>`;
        }
        return match;
      }
    );
  });

  return processedHtml;
}

/**
 * Get all article files from the content directory
 */
async function getArticleFiles(): Promise<string[]> {
  try {
    const files = await readdir(CONTENT_DIR);
    return files.filter((file) => file.endsWith('.md'));
  } catch (error) {
    console.error('Error reading content directory:', error);
    return [];
  }
}

/**
 * Read and process a single markdown file
 */
async function processArticleFile(filename: string): Promise<Article | null> {
  try {
    const filePath = join(CONTENT_DIR, filename);
    const fileContents = await readFile(filePath, 'utf-8');

    // Parse frontmatter and content
    const { data, content } = matter(fileContents);

    // Normalize frontmatter
    const frontmatter = normalizeFrontmatter(data);

    // Skip unpublished articles
    if (!frontmatter.isPublished) {
      return null;
    }

    // Generate slug from title
    const slug = generateSlug(frontmatter.title);

    // Extract headings before processing
    const headings = extractHeadings(content);

    // Process markdown to HTML
    const htmlContent = await processMarkdown(content);

    // Add IDs to headings for TOC linking
    const htmlWithIds = addHeadingIds(htmlContent, headings);

    // Calculate read time
    const readTimeResult = readingTime(content);
    const readTimeMinutes = Math.ceil(readTimeResult.minutes);

    return {
      slug,
      frontmatter,
      content,
      htmlContent: htmlWithIds,
      readTime: readTimeMinutes,
      headings,
    };
  } catch (error) {
    console.error(`Error processing article file ${filename}:`, error);
    return null;
  }
}

/**
 * Get all published articles
 */
export async function getAllArticles(): Promise<Article[]> {
  const files = await getArticleFiles();
  const articles = await Promise.all(
    files.map((file) => processArticleFile(file))
  );

  // Filter out null values and sort by published date (newest first)
  const validArticles = articles.filter(
    (article): article is Article => article !== null
  );

  return validArticles.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt).getTime();
    const dateB = new Date(b.frontmatter.publishedAt).getTime();
    return dateB - dateA; // Newest first
  });
}

/**
 * Get a single article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getAllArticles();
  return articles.find((article) => article.slug === slug) || null;
}

/**
 * Get related articles based on category
 */
export async function getRelatedArticles(
  slug: string,
  category: string,
  limit: number = 3
): Promise<Article[]> {
  const articles = await getAllArticles();

  // Filter out current article and get articles with same category
  const related = articles
    .filter(
      (article) =>
        article.slug !== slug && article.frontmatter.category === category
    )
    .slice(0, limit);

  // If not enough articles with same category, fill with recent articles
  if (related.length < limit) {
    const remaining = limit - related.length;
    const additional = articles
      .filter(
        (article) =>
          article.slug !== slug &&
          !related.some((r) => r.slug === article.slug)
      )
      .slice(0, remaining);

    return [...related, ...additional];
  }

  return related;
}
