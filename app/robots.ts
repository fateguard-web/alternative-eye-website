import { MetadataRoute } from 'next';

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
 * Generate robots.txt for search engine crawlers
 * Next.js automatically serves this at /robots.txt
 * Allows all crawlers to access all pages and references the sitemap
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const baseUrl = siteUrl.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

