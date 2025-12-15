'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Case Intelligence page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-48 pb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-heading mb-6 text-[#ff0000]">
          ERROR
        </h1>
        <p className="text-2xl text-gray-400 mb-8 font-body">
          Something went wrong
        </p>
        <p className="text-lg text-gray-500 mb-12 font-body leading-relaxed">
          We encountered an error while loading the case intelligence articles.
          This has been logged and we&apos;ll look into it.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block px-8 py-4 border border-white text-white rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-black"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block px-8 py-4 border border-[#ff0000] text-white rounded-full no-underline font-semibold transition-all duration-300 hover:bg-[#ff0000] hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
