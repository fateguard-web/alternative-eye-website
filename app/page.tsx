import { HeroSection } from '@/components/home/HeroSection';
import { BreakingNewsSection } from '@/components/home/BreakingNewsSection';
import { HostsSection } from '@/components/home/HostsSection';
import { VideoSection } from '@/components/home/VideoSection';
import { ExpertsSection } from '@/components/home/ExpertsSection';
import { ExpertiseSection } from '@/components/home/ExpertiseSection';
import { ContactSection } from '@/components/home/ContactSection';
import { getAllArticles } from '@/lib/case-intelligence';
import { format } from 'date-fns';

export default async function Home() {
  // Fetch the first 3 articles from Case Intelligence
  const allArticles = await getAllArticles();
  const featuredArticles = allArticles.slice(0, 3).map((article) => {
    const publishedDate = new Date(article.frontmatter.publishedAt);
    const formattedDate = format(publishedDate, 'MMM d, yyyy').toUpperCase();
    return {
      date: formattedDate,
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      href: `/case-intelligence/${article.slug}`,
      imageUrl: article.frontmatter.imageUrl || '',
    };
  });

  return (
    <>
      <HeroSection />
      <BreakingNewsSection articles={featuredArticles} />
      <HostsSection />
      <VideoSection />
      <ExpertsSection />
      <ExpertiseSection />
      <ContactSection />
    </>
  );
}
