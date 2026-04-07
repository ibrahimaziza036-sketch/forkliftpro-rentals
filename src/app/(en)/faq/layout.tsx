import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Frequently Asked Questions About Forklift Services",
  description:
    "Find answers to common questions about forklift rental and services from ForkliftPro Rentals in Jeddah, Saudi Arabia.",
  openGraph: {
    title: "FAQ | Frequently Asked Questions About Forklift Services",
    description:
      "Find answers to common questions about forklift rental, repair, operator training, sales, and fleet management.",
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
