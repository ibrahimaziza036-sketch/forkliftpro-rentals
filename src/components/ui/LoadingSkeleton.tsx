export function HeroSkeleton() {
  return (
    <div className="bg-[#1A1A2E] animate-pulse">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="h-6 w-32 bg-white/10 rounded-full mx-auto mb-4" />
        <div className="h-12 w-3/4 max-w-xl bg-white/10 rounded-lg mx-auto mb-4" />
        <div className="h-8 w-1/2 max-w-md bg-white/10 rounded-lg mx-auto mb-6" />
        <div className="h-5 w-2/3 max-w-lg bg-white/10 rounded-lg mx-auto" />
      </div>
    </div>
  );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 animate-pulse"
          >
            <div className="h-48 bg-gray-200" />
            <div className="p-6 space-y-3">
              <div className="h-5 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-100 rounded w-full" />
              <div className="h-4 bg-gray-100 rounded w-5/6" />
              <div className="flex justify-between mt-4">
                <div className="h-3 bg-gray-100 rounded w-20" />
                <div className="h-3 bg-gray-100 rounded w-16" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-2/3 mb-2" />
          <div className="h-4 bg-gray-100 rounded w-1/2 mb-8" />
          <div className="space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i}>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                <div className="h-12 bg-gray-100 rounded-lg w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4 animate-pulse">
          <div className="h-7 bg-gray-200 rounded w-48 mb-6" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-24 bg-gray-100 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContentSkeleton() {
  return (
    <div className="container mx-auto px-4 py-16 animate-pulse">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="h-10 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-5/6" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-64 bg-gray-200 rounded-xl" />
        <div className="h-4 bg-gray-100 rounded w-4/5" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-3/4" />
      </div>
    </div>
  );
}
