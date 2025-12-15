import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen px-8 pt-48 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Page title skeleton */}
        <div className="mb-4 text-center">
          <Skeleton className="h-20 md:h-32 w-3/4 mx-auto mb-4" />
        </div>
        <div className="mb-12 text-center">
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>

        {/* Article grid skeleton - 9 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-[#111] border border-[#222] rounded-lg overflow-hidden"
            >
              {/* Image skeleton */}
              <Skeleton className="h-[240px] w-full rounded-none" />

              {/* Content skeleton */}
              <div className="p-6">
                <Skeleton className="h-4 w-3/4 mb-3" />
                <Skeleton className="h-8 w-full mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-6" />
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination skeleton */}
        <div className="flex justify-center">
          <Skeleton className="h-10 w-96" />
        </div>
      </div>
    </div>
  );
}
