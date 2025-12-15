import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function NotFound() {
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
          <h1 className="text-6xl md:text-8xl font-heading mb-4 text-red-500">
            404
          </h1>

          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            EPISODE NOT FOUND
          </h2>

          <p className="text-xl text-gray-400 mb-8 font-body max-w-2xl">
            The episode you&apos;re looking for doesn&apos;t exist or may have
            been removed.
          </p>

          <Link
            href="/episodes"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg no-underline font-semibold transition-all duration-300 hover:bg-gray-200"
          >
            View All Episodes
          </Link>
        </div>
      </div>
    </div>
  );
}
