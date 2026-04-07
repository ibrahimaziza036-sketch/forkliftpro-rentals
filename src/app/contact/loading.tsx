import { HeroSkeleton, FormSkeleton } from "@/components/ui/LoadingSkeleton";

export default function ContactLoading() {
  return (
    <>
      <HeroSkeleton />
      <section className="py-16 bg-gray-50">
        <FormSkeleton />
      </section>
    </>
  );
}
