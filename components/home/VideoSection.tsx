'use client';

import { motion } from 'motion/react';
import { VideoPlaceholder } from '@/components/ui/VideoPlaceholder';
import { YouTubeEmbed } from '@/components/episodes/YouTubeEmbed';

type Episode =
  | { type: 'youtube'; videoId: string; title: string }
  | { type: 'placeholder'; label: string };

export function VideoSection() {
  const episodes: Episode[] = [
    { type: 'youtube', videoId: 'JxBtgLkUplE', title: 'S1E9' },
    { type: 'youtube', videoId: 'g3KDg--PlDI', title: 'S1E8' },
    { type: 'youtube', videoId: '5xteX9-INjI', title: 'Episode 1' },
    { type: 'youtube', videoId: 'ZsXBBIHcNzw', title: 'Episode 2' },
    { type: 'youtube', videoId: 'fGHoHbPKIbw', title: 'Episode 3' },
    { type: 'youtube', videoId: 'joCYaGAlzIs', title: 'Episode 4' },
    { type: 'youtube', videoId: '0KgnacF1jeE', title: 'Episode 5' },
    { type: 'youtube', videoId: '7ReiyMruwHc', title: 'Episode 6' },
    { type: 'youtube', videoId: '6TUFo_zbRTg', title: 'Episode 7' },
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

        <div className="flex flex-col gap-12">
          {episodes.map((episode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              {episode.type === 'youtube' ? (
                <YouTubeEmbed videoId={episode.videoId} title={episode.title} />
              ) : (
                <VideoPlaceholder label={episode.label} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

