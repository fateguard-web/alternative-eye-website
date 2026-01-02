'use client';

import { motion } from 'motion/react';
import { HostSpotlight } from '@/components/ui/HostSpotlight';

export function HostsSection() {
  const melissaExpertise = [
    {
      title: 'Forensic Profiler',
      description: 'Behavioral analysis and criminal psychology with a track record of breaking complex cases through pattern recognition',
      variant: 'red' as const,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M3 6h18M7 21v-4m10 4v-4M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-9 7h10M5 6v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6" />
        </svg>
      ),
    },
    {
      title: 'Remote Viewer',
      description: 'Utilizing alternative investigative methodologies to access information beyond conventional forensic techniques',
      variant: 'blue' as const,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: 'Case Decoder',
      description: 'Live decoding sessions that reveal hidden connections and breakthrough insights in real-time',
      variant: 'gray' as const,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
  ];

  const melissaBio = [
    "With nearly 15 years of experience as a forensic profiler and remote viewer, I've spent my career decoding the minds of killers and uncovering patterns that traditional methods overlook.",
    "I created Alternative Eye because I saw a critical gap in how we approach cold cases and crime media. Too many cases go silent, trapped in systems that fail to evolve.",
    "This podcast is my answer—a platform where forensic expertise meets innovative thinking, where world-class specialists collaborate in real-time, and where the public becomes part of the investigation.",
  ];

  const wendyBio = [
    "Dr. Wendy Watson brings a wealth of expertise and insight to Alternative Eye, offering a unique perspective that complements our investigative approach.",
    "With her extensive background and collaborative spirit, she helps us explore cases from multiple angles, ensuring we leave no stone unturned in our pursuit of truth.",
    "Together, we combine traditional expertise with innovative methodologies, creating a dynamic platform for real investigative breakthroughs.",
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-heading">MEET THE HOSTS</h2>
        </motion.div>

        <HostSpotlight
          name="MELISSA PHELAN"
          role="Host & Decoder"
          badge="⭐ HOST & DECODER"
          badgeVariant="red"
          bioText={melissaBio}
          quote="We're not just reviewing cases—we're breaking down the walls of silence and pushing investigations forward in ways they've never been pushed before."
          imageSrc="/assets/melissa-phelan.jpg"
          linkedinUrl="https://www.linkedin.com/in/melissa-phelan-alternative-eye/"
          expertise={melissaExpertise}
          yearsExperience={15}
        />

        <HostSpotlight
          name="DR. WENDY WATSON"
          role="Co-Host"
          badge="⭐ CO-HOST"
          badgeVariant="blue"
          bioText={wendyBio}
          quote="My goal is to balance the scales of power and justice, even if only a little."
          imageSrc="/assets/dr-wendy-watson.jpg"
          linkedinUrl="https://www.linkedin.com/in/wendylynwatson/"
          reverse
        />
      </div>
    </section>
  );
}

