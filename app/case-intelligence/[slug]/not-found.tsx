import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <Link
          href="/case-intelligence"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Case Intelligence</span>
        </Link>

        <div className="flex flex-col items-center justify-center text-center py-16">
          <h1 className="text-6xl md:text-8xl font-heading mb-4 text-[#ff0000]">
            404
          </h1>

          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            ARTICLE NOT FOUND
          </h2>

          <p className="text-xl text-gray-400 mb-8 font-body max-w-2xl">
            The article you&apos;re looking for doesn&apos;t exist or may have
            been removed.
          </p>

          <Link
            href="/case-intelligence"
            className="inline-block px-8 py-4 border border-[#ff0000] text-white rounded-full no-underline font-semibold transition-all duration-300 hover:bg-[#ff0000] hover:text-white"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
