'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function EpisodesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Episodes page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-32 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="w-20 h-20 text-red-500" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-heading mb-4">
          SOMETHING WENT WRONG
        </h1>
        
        <p className="text-xl text-gray-400 mb-8 font-body">
          We encountered an error loading the episodes. Please try again.
        </p>
        
        {error.message && (
          <p className="text-sm text-gray-500 mb-8 font-mono bg-white/5 p-4 rounded-lg">
            {error.message}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-white text-black rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-block px-8 py-4 border border-white text-white rounded-lg no-underline font-semibold transition-all duration-300 hover:bg-white hover:text-black"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
