import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen px-8 pt-48 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Banner image skeleton */}
        <Skeleton className="h-64 md:h-96 w-full rounded-lg mb-8" />

        {/* Title skeleton */}
        <Skeleton className="h-12 md:h-16 w-3/4 mb-4" />

        {/* Metadata skeleton */}
        <div className="flex items-center gap-4 mb-8">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Content skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC skeleton (desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>

          {/* Article content skeleton */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, idx) => (
                <Skeleton key={idx} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
