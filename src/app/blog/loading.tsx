import { HeroSkeleton, CardGridSkeleton } from "@/components/ui/LoadingSkeleton";

export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <HeroSkeleton />
      {/* Category filter skeleton */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-10 w-28 bg-gray-200 rounded-full animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
      <CardGridSkeleton count={6} />
    </main>
  );
}
