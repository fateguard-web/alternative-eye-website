'use client';

import { motion } from 'motion/react';
import { VideoPlaceholder } from '@/components/ui/VideoPlaceholder';

export function VideoSection() {
  const episodes = [
    'Episode 1 Placeholder',
    'Episode 2 Placeholder',
    'Episode 3 Placeholder',
    'Episode 4 Placeholder',
    'Episode 5 Placeholder',
    'Episode 6 Placeholder',
    'Episode 7 Placeholder',
  ];

  return (
    <section className="py-24 px-8 bg-[#0a0a0a]">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 flex flex-col items-center gap-4"
        >
          <h2 className="text-5xl font-heading">LATEST EPISODES</h2>
          <p className="text-xl text-gray-400 font-body">
            Watch and listen as we decode the most complex cases.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {episodes.map((episode, index) => (
            <VideoPlaceholder key={index} label={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}

