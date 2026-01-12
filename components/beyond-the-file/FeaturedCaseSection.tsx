'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function FeaturedCaseSection() {
  return (
    <section className="py-24 px-8 text-center">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-heading mb-6"
        >
          WOULD YOU LIKE YOUR LOVED ONE&apos;S CASE FEATURED?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8 font-body"
        >
          Contact Us
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded transition-all duration-300 hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
