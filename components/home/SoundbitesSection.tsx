'use client';

import { motion } from 'motion/react';
import { SoundbiteCarousel } from '@/components/ui/SoundbiteCarousel';

export function SoundbitesSection() {
  const soundbites = [
    { label: 'Clip 1' },
    { label: 'Clip 2' },
    { label: 'Clip 3' },
    { label: 'Clip 4' },
    { label: 'Clip 5' },
    { label: 'Clip 6' },
  ];

  return (
    <section className="py-24 px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 flex flex-col items-center gap-4"
        >
          <h2 className="text-5xl font-heading">SOUNDBITES</h2>
          <p className="text-xl text-gray-400 font-body">
            Get a taste of our investigations with these compelling clips!
          </p>
        </motion.div>

        <SoundbiteCarousel items={soundbites} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 text-lg text-gray-300 font-body"
        >
          <p>
            Want to hear the full story?{' '}
            <a href="#" className="text-gray-400 underline font-semibold transition-colors hover:text-[#ff0000]">
              Listen to the complete episode
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

