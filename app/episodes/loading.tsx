export default function EpisodesLoading() {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-16 w-64 bg-white/10 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-white/10 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Episode Cards Skeleton */}
        <div className="space-y-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Video Skeleton */}
                <div className="w-full aspect-video bg-white/10 rounded-lg animate-pulse" />

                {/* Content Skeleton */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="h-4 w-48 bg-white/10 rounded mb-3 animate-pulse" />
                    <div className="h-8 w-full bg-white/10 rounded mb-3 animate-pulse" />
                    <div className="h-4 w-full bg-white/10 rounded mb-2 animate-pulse" />
                    <div className="h-4 w-3/4 bg-white/10 rounded mb-6 animate-pulse" />
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-40 bg-white/10 rounded-lg animate-pulse" />
                    <div className="h-10 w-32 bg-white/10 rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
