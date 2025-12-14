'use client';

import { motion } from 'motion/react';
import { NewsletterForm } from '@/components/ui/NewsletterForm';

export function ContactSection() {
  return (
    <section className="py-24 px-8 text-center">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-heading mb-4"
        >
          STAY UPDATED
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8 font-body"
        >
          Subscribe to get notified about new episode releases, case updates, and exclusive content!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <NewsletterForm />
        </motion.div>
      </div>
    </section>
  );
}

