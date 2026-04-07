import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog — Forklift Rental Tips, Safety & Industry News",
  description:
    "Expert forklift rental tips, safety guides, cost comparisons, and industry news from Jeddah's leading forklift rental company. Stay informed with ForkliftPro Rentals.",
  keywords: [
    "forklift rental tips",
    "forklift safety guide",
    "forklift rental cost Saudi Arabia",
    "forklift industry news",
    "rent vs buy forklift",
    "forklift rental Jeddah blog",
    "رافعة شوكية نصائح",
    "إيجار رافعة شوكية جدة",
  ],
  openGraph: {
    title: "Blog — Forklift Rental Tips, Safety & Industry News | ForkliftPro Rentals",
    description:
      "Expert forklift rental tips, safety guides, and industry news from Jeddah's leading forklift rental company.",
    type: "website",
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <BlogContent />
    </main>
  );
}
