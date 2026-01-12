'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, ChevronLeft } from 'lucide-react';

export default function EpisodeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Episode page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen py-32 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <Link
          href="/episodes"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Episodes</span>
        </Link>

        <div className="flex flex-col items-center justify-center text-center py-16">
          <div className="flex justify-center mb-6">
            <AlertCircle className="w-20 h-20 text-red-500" />
          </div>

          <h1 className="text-4xl md:text-6xl font-heading mb-4">
            EPISODE NOT FOUND
          </h1>

          <p className="text-xl text-gray-400 mb-8 font-body max-w-2xl">
            We couldn&apos;t find the episode you&apos;re looking for. It may
            have been removed or the link might be incorrect.
          </p>

          {error.message && (
            <p className="text-sm text-gray-500 mb-8 font-mono bg-white/5 p-4 rounded-lg max-w-2xl">
              {error.message}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={reset}
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200"
            >
              Try Again
            </button>

            <Link
              href="/episodes"
              className="inline-block px-8 py-4 border border-white text-white rounded-lg no-underline font-semibold transition-all duration-300 hover:bg-white hover:text-black"
            >
              View All Episodes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
