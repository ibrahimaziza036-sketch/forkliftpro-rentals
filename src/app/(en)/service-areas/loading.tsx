import { HeroSkeleton, CardGridSkeleton } from "@/components/ui/LoadingSkeleton";

export default function ServiceAreasLoading() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <HeroSkeleton />
      <CardGridSkeleton count={8} />
    </main>
  );
}
