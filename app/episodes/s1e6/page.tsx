import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function S1E6Page() {
  return (
    <div className="min-h-screen pt-48 pb-16 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Navigation */}
        <Link
          href="/episodes"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Episodes</span>
        </Link>

        {/* Placeholder Content */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-heading mb-4 leading-tight">
            S1E6 | Inside the Fager Family Homicides: Cracks, Codes, and the Cold Case Machine
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Episode page coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
