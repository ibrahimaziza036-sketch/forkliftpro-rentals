import { HeroSkeleton, CardGridSkeleton } from "@/components/ui/LoadingSkeleton";

export default function ServicesLoading() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <HeroSkeleton />
      <CardGridSkeleton count={6} />
    </main>
  );
}
