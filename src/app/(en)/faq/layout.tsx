import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions About Forklift Services",
  description:
    "Find answers to common questions about forklift rental and services from ForkliftPro Rentals in Jeddah, Saudi Arabia.",
  openGraph: {
    title: "FAQ | Frequently Asked Questions About Forklift Services",
    description:
      "Find answers to common questions about forklift rental, repair, operator training, sales, and fleet management.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
