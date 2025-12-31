'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { BrandButton } from '@/components/ui/BrandButton';

export function CTASection() {
  const features = [
    'Available on all platforms',
    'New episodes weekly',
    'Join the investigation'
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#000] py-20">
      <div className="max-w-[900px] mx-auto px-4 sm:px-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading mb-6"
        >
          READY TO GO BEYOND THE FILE?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-gray-400 font-body mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join us as we decode the systems of silence and bring new perspectives to unsolved cases. Every episode brings us closer to the truth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12"
        >
          <BrandButton variant="youtube" href="https://www.youtube.com/@AlternativeEyeBeyondtheFile">
            Watch on YouTube
          </BrandButton>
          <BrandButton variant="spotify" href="https://open.spotify.com/show/1Ob7qtebpVxh1IG7pkzEic?si=8ddad381056a45da">
            Listen on Spotify
          </BrandButton>
        </motion.div>

        {/* Feature Bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
              </div>
              <span className="text-sm text-gray-300 font-body">{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
