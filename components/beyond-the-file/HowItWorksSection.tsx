'use client';

import { FileSearch, Radio, MessageSquare, Target } from 'lucide-react';
import { StepCard } from './StepCard';

export function HowItWorksSection() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 mt-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading mb-4 tracking-wider">
            HOW IT WORKS
          </h2>
          <p className="text-base sm:text-lg text-gray-500 font-body">
            A new approach to investigating crime media and cold cases
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <StepCard
            icon={FileSearch}
            stepNumber={1}
            title="DEEP CASE ANALYSIS"
            description="We dive beyond the surface, examining evidence with forensic precision and alternative perspectives."
            delay={0}
          />
          <StepCard
            icon={Radio}
            stepNumber={2}
            title="LIVE DECODING"
            description="Watch as we decode cases in real-time with expert guests, sharing insights as they emerge."
            delay={0.1}
          />
          <StepCard
            icon={MessageSquare}
            stepNumber={3}
            title="PUBLIC ENGAGEMENT"
            description="Your voice matters. We leverage community insights to push investigations in new directions."
            delay={0.2}
          />
          <StepCard
            icon={Target}
            stepNumber={4}
            title="BREAKING SILENCE"
            description="Dismantling the systems that keep cases cold, one episode at a time."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
