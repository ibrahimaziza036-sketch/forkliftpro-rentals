import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Forklift Industry Insights & Expert Tips",
  description:
    "Stay updated with the latest forklift industry news, maintenance tips, safety guides, and expert advice from ForkliftPro Rentals. Your go-to resource for all things forklift.",
  keywords: [
    "forklift blog",
    "forklift tips",
    "forklift maintenance guide",
    "forklift safety",
    "forklift rental guide",
    "forklift industry news",
    "forklift operator tips",
  ],
  openGraph: {
    title: "Blog - Forklift Industry Insights & Expert Tips | ForkliftPro Rentals",
    description:
      "Stay updated with the latest forklift industry news, maintenance tips, safety guides, and expert advice from ForkliftPro Rentals.",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
