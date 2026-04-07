import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ForkliftPro Rentals | Jeddah's Leading Forklift Company",
  description:
    "Learn about ForkliftPro Rentals — Jeddah's most trusted forklift rental company with 50+ fleet and 500+ clients. Over 15 years of experience.",
  openGraph: {
    title: "About ForkliftPro Rentals | Jeddah's Leading Forklift Company",
    description:
      "Learn about ForkliftPro Rentals — Jeddah's most trusted forklift rental company. Over 15 years of experience.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/about",
    languages: { en: "https://forkliftprorentals.com/about", ar: "https://forkliftprorentals.com/ar/about" },
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
