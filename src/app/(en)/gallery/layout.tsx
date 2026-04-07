import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Our Work in Action | ForkliftPro Rentals",
  description:
    "See ForkliftPro Rentals in action — fleet deployments, forklift operations, and more across Jeddah, Saudi Arabia.",
  openGraph: {
    title: "Gallery | Our Work in Action | ForkliftPro Rentals",
    description:
      "See ForkliftPro Rentals in action — fleet deployments, forklift operations, and more.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/gallery",
    languages: { en: "https://forkliftprorentals.com/gallery", ar: "https://forkliftprorentals.com/ar/gallery" },
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
