import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ForkliftPro Rentals | Get in Touch Today",
  description:
    "Contact ForkliftPro Rentals for forklift rental inquiries. Call, WhatsApp, or visit our Jeddah office. 24/7 emergency service available.",
  openGraph: {
    title: "Contact ForkliftPro Rentals | Get in Touch Today",
    description:
      "Get in touch with ForkliftPro Rentals. Call, WhatsApp, or visit our Jeddah office for all forklift service inquiries.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/contact",
    languages: { en: "https://forkliftprorentals.com/contact", ar: "https://forkliftprorentals.com/ar/contact" },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
