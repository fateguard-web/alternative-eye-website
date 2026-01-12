import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center py-16">
          <h1 className="text-6xl md:text-8xl font-heading mb-4 text-[#ff0000]">
            404
          </h1>

          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            PAGE NOT FOUND
          </h2>

          <p className="text-xl text-gray-400 mb-8 font-body max-w-2xl">
            The page you&apos;re looking for doesn&apos;t exist or may have
            been moved. Let&apos;s get you back on track.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#ff0000] text-white rounded-full no-underline font-semibold transition-all duration-300 hover:bg-[#ff0000] hover:text-white"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

