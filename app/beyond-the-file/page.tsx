import type { Metadata } from 'next';
import { InfoCard } from '@/components/beyond-the-file/InfoCard';
import { HowItWorksSection } from '@/components/beyond-the-file/HowItWorksSection';
import { CTASection } from '@/components/beyond-the-file/CTASection';
import { FeaturedCaseSection } from '@/components/beyond-the-file/FeaturedCaseSection';

export const metadata: Metadata = {
  title: 'Beyond the File | Alternative Eye',
  description: 'This isn\'t just another true crime podcast. We\'re breaking down the systems of silence, engaging the public, and using cutting-edge methods to decode cold cases in real-time.',
};

export default function BeyondTheFilePage() {
  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-8 pt-32 pb-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading mb-6">
              BEYOND THE FILE
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 font-body max-w-4xl mx-auto">
              This isn&apos;t just another true crime podcast. We&apos;re breaking down the systems of silence, engaging the public, and using cutting-edge methods to decode cold cases in real-time.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <InfoCard
              title="Expert Collaboration"
              description="Bringing together world-class specialists to review cases, share insights, and push investigations forward."
            />
            <InfoCard
              title="Featured Experts"
              description="We'll be revealing distinguished experts who bring unique expertise to help us uncover the truth."
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Call to Action Section */}
      <CTASection />

      {/* Featured Case Section */}
      <FeaturedCaseSection />
    </div>
  );
}
