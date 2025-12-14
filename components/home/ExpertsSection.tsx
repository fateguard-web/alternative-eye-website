'use client';

import { motion } from 'motion/react';
import { ExpertShowcase } from '@/components/ui/ExpertShowcase';

export function ExpertsSection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col items-center gap-4"
        >
          <h2 className="text-5xl font-heading">FEATURED EXPERTS</h2>
          <p className="text-xl text-gray-400 max-w-[700px] leading-relaxed font-body">
            Watch this space! We&apos;ll be revealing our distinguished experts as their
            featured episodes roll out. Each brings unique expertise to help us uncover the truth.
          </p>
        </motion.div>

        <ExpertShowcase
          name="Kerrie Droban Zhivago"
          imageSrc="/assets/kerrie-droban-zhivago.jpeg"
          websiteUrl="https://kerriedroban.com"
        />
      </div>
    </section>
  );
}

