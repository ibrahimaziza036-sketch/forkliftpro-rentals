import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Our Work in Action | ForkliftPro Rentals",
  description:
    "See ForkliftPro Rentals in action — fleet deployments, forklift operations, and more across Jeddah, Saudi Arabia.",
  openGraph: {
    title: "Gallery | Our Work in Action | ForkliftPro Rentals",
    description:
      "See ForkliftPro Rentals in action — fleet deployments, forklift operations, and more.",
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
