import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Alternative Eye',
  description: 'Read the latest insights, case analyses, and investigations from Alternative Eye.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-48 pb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-heading mb-6">
          BLOG
        </h1>
        <p className="text-2xl text-gray-400 mb-8 font-body">
          Coming Soon
        </p>
        <p className="text-lg text-gray-500 mb-12 font-body leading-relaxed">
          Our blog will feature in-depth case analyses, investigative insights, 
          forensic techniques, and thought-provoking commentary on the intersection 
          of crime, technology, and justice. Stay tuned for compelling stories and 
          expert perspectives.
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

