'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: 'red' | 'blue' | 'gray';
}

interface HostSpotlightProps {
  name: string;
  role: string;
  badge: string;
  badgeVariant: 'red' | 'blue';
  bioText: string[];
  quote: string;
  imageSrc: string;
  linkedinUrl: string;
  expertise?: ExpertiseItem[];
  yearsExperience?: number;
  reverse?: boolean;
}

export function HostSpotlight({
  name,
  role,
  badge,
  badgeVariant,
  bioText,
  quote,
  imageSrc,
  linkedinUrl,
  expertise,
  yearsExperience,
  reverse = false,
}: HostSpotlightProps) {
  const badgeStyles = {
    red: 'bg-[rgba(40,40,40,0.5)] border-[#444] text-[#ff0000]',
    blue: 'bg-[rgba(0,40,80,0.5)] border-[#004488] text-[#0000ff]',
  };

  const glowStyles = {
    red: 'shadow-[0_0_60px_rgba(255,0,0,0.3)]',
    blue: 'shadow-[0_0_60px_rgba(0,50,255,0.4)]',
  };

  const quoteStyles = {
    red: 'border-l-[#ff0000] text-[#ddd]',
    blue: 'border-l-[#0000ff] text-[#cceeff]',
  };

  const linkedinStyles = {
    red: 'border-[#0077b5] bg-[rgba(0,119,181,0.1)] hover:bg-[rgba(0,119,181,0.3)] hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]',
    blue: 'border-[#0077b5] bg-[rgba(0,119,181,0.1)] hover:bg-[rgba(0,119,181,0.3)] hover:shadow-[0_0_15px_rgba(0,80,255,0.4)]',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${reverse ? 'mt-24' : ''}`}
    >
      {/* Host Bio */}
      <div className={`flex flex-col gap-6 ${reverse ? 'lg:order-2' : ''}`}>
        <span className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full text-xs font-bold tracking-[0.1em] w-fit ${badgeStyles[badgeVariant]}`}>
          {badge}
        </span>
        <h2 className="text-6xl lg:text-7xl font-heading leading-[0.9] text-white">
          {name}
        </h2>

        <div className="flex flex-col gap-6">
          {bioText.map((paragraph, index) => (
            <p key={index} className="text-gray-400 text-lg leading-relaxed font-body">
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote className={`border-l-4 pl-6 italic text-xl my-4 ${quoteStyles[badgeVariant]}`}>
          &ldquo;{quote}&rdquo;
        </blockquote>

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-4 px-6 py-3 border rounded-full text-white no-underline font-semibold text-sm w-fit transition-all duration-300 ${linkedinStyles[badgeVariant]}`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          Follow {name.split(' ')[0]} on LinkedIn
        </a>
      </div>

      {/* Host Visuals */}
      <div className={`flex flex-col gap-6 ${reverse ? 'lg:order-1' : ''}`}>
        <div className={`relative rounded-lg overflow-hidden max-w-[450px] mx-auto ${glowStyles[badgeVariant]}`}>
          <Image
            src={imageSrc}
            alt={name}
            width={450}
            height={600}
            className="w-full h-auto block rounded-lg"
          />
        </div>

        {expertise && (
          <div className="bg-[#111] border border-[#222] p-6 rounded-lg">
            <h3 className="text-sm text-white mb-6 tracking-[0.05em] font-heading">
              EXPERTISE
            </h3>
            <ul className="flex flex-col gap-6 list-none">
              {expertise.map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.variant === 'red' ? 'bg-[rgba(255,0,0,0.1)] text-[#ff0000]' :
                    item.variant === 'blue' ? 'bg-[rgba(0,0,255,0.15)] text-[#0000ff]' :
                    'bg-[rgba(255,255,255,0.1)] text-[#ddd]'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-base mb-1 font-semibold font-body">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-body">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {yearsExperience && (
          <div className="bg-[#111] border border-[#222] p-6 rounded-lg flex items-center gap-6">
            <span className="font-heading text-6xl text-[#ff0000] leading-none">
              {yearsExperience}+
            </span>
            <div>
              <h4 className="text-white font-bold mb-1 font-body">Years of Experience</h4>
              <p className="text-sm text-gray-400 font-body">
                Decoding the psychology of killers and assisting with solving complex cases
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

