import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Episodes | Alternative Eye',
  description: 'Watch and listen to Alternative Eye episodes.',
};

export default function EpisodesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-48 pb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-heading mb-6">
          EPISODES
        </h1>
        <p className="text-2xl text-gray-400 mb-8 font-body">
          Coming Soon
        </p>
        <p className="text-lg text-gray-500 mb-12 font-body leading-relaxed">
          We&apos;re working on bringing you a comprehensive episodes archive. 
          Check back soon for full episodes, episode guides, and exclusive behind-the-scenes content.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 border border-white text-white rounded-full no-underline font-semibold transition-all duration-300 hover:bg-white hover:text-black"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

