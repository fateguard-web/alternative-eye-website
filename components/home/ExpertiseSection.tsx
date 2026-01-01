'use client';

import { motion } from 'motion/react';

export function ExpertiseSection() {
  const skills = [
    'VIOLENT CRIME ANALYSIS',
    'FORENSIC PROFILING',
    'DIGITAL FORENSICS',
    'COLD CASE INVESTIGATION',
    'VICTIM ADVOCACY',
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl lg:text-7xl font-heading leading-[0.9]">
              PROVIDING AN ALTERNATIVE EYE TO INVESTIGATION
            </h2>
          </motion.div>

          <div>
            <ul className="list-none">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="font-heading text-3xl lg:text-4xl border-b border-[#222] py-4 text-gray-400 transition-all duration-300 cursor-default hover:text-white hover:pl-8"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

