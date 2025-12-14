import { HeroSection } from '@/components/home/HeroSection';
import { BreakingNewsSection } from '@/components/home/BreakingNewsSection';
import { HostsSection } from '@/components/home/HostsSection';
import { VideoSection } from '@/components/home/VideoSection';
import { ExpertsSection } from '@/components/home/ExpertsSection';
import { SoundbitesSection } from '@/components/home/SoundbitesSection';
import { ExpertiseSection } from '@/components/home/ExpertiseSection';
import { ContactSection } from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BreakingNewsSection />
      <HostsSection />
      <VideoSection />
      <ExpertsSection />
      <SoundbitesSection />
      <ExpertiseSection />
      <ContactSection />
    </>
  );
}
