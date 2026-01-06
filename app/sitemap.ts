import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/case-intelligence';

/**
 * Get the site URL from environment variables or use default
 */
function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://www.thealternativeeye.com';
}

/**
 * Generate sitemap for SEO
 * Next.js automatically serves this at /sitemap.xml
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const baseUrl = siteUrl.replace(/\/$/, '');

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/beyond-the-file`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-intelligence`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/episodes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const articles = await getAllArticles();
    for (const article of articles) {
      const publishedDate = new Date(article.frontmatter.publishedAt);
      articleRoutes.push({
        url: `${baseUrl}/case-intelligence/${article.slug}`,
        lastModified: publishedDate,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error);
  }

  return [...staticRoutes, ...articleRoutes];
}

