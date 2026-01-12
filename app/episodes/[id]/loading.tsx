export default function EpisodeLoading() {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb Skeleton */}
        <div className="h-6 w-40 bg-white/10 rounded mb-8 animate-pulse" />

        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="h-6 w-64 bg-white/10 rounded mb-4 animate-pulse" />
          <div className="h-12 w-full bg-white/10 rounded mb-4 animate-pulse" />
          <div className="h-6 w-full bg-white/10 rounded mb-2 animate-pulse" />
          <div className="h-6 w-3/4 bg-white/10 rounded animate-pulse" />
        </div>

        {/* Video Player Skeleton */}
        <div className="w-full aspect-video bg-white/10 rounded-lg mb-8 animate-pulse" />

        {/* Action Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="h-14 w-full sm:w-64 bg-white/10 rounded-full animate-pulse" />
          <div className="h-14 w-full sm:w-64 bg-white/10 rounded-full animate-pulse" />
        </div>

        {/* Details Section Skeleton */}
        <div className="bg-[#1a1a1a] rounded-lg p-8 border border-white/10">
          <div className="h-8 w-64 bg-white/10 rounded mb-6 animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-white/10 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
