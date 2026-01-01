'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { BrandButton } from '@/components/ui/BrandButton';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-8 pt-4 pb-16 bg-gradient-radial from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/assets/logo-hero.jpg"
            alt="Alternative Eye Logo"
            width={800}
            height={400}
            priority
            className="w-full max-w-[800px] mx-auto rounded shadow-[0_0_35px_rgba(255,0,0,0.6)]"
          />
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl uppercase tracking-[0.2em] mb-4 opacity-80 font-heading"
        >
          Beyond the File — Where Crime Meets Code
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg max-w-2xl mx-auto mb-12 text-gray-400 font-body"
        >
          Decoding the systems of silence behind the world&apos;s most complex cases.
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <BrandButton variant="youtube" href="https://www.youtube.com/@AlternativeEyeBeyondtheFile">
            Watch on YouTube
          </BrandButton>
          <BrandButton variant="spotify" href="https://open.spotify.com/show/1Ob7qtebpVxh1IG7pkzEic?si=a8fd1f0121764df7">
            Listen on Spotify
          </BrandButton>
        </motion.div>
      </div>
    </section>
  );
}

