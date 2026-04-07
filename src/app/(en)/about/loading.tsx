import { HeroSkeleton, ContentSkeleton } from "@/components/ui/LoadingSkeleton";

export default function AboutLoading() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <HeroSkeleton />
      <ContentSkeleton />
    </main>
  );
}
