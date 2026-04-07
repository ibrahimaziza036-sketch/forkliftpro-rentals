import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Forklift Industry Insights & Expert Tips",
  description:
    "Stay updated with the latest forklift industry news, maintenance tips, safety guides, and expert advice from ForkliftPro Rentals. Your go-to resource for all things forklift.",
  alternates: {
    canonical: "https://forkliftprorentals.com/blog",
  },
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
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
