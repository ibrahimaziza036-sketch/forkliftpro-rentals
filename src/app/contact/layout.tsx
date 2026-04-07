import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ForkliftPro Rentals | Get in Touch Today",
  description:
    "Contact ForkliftPro Rentals for forklift rental inquiries. Call, WhatsApp, or visit our Jeddah office. 24/7 emergency service available.",
  openGraph: {
    title: "Contact ForkliftPro Rentals | Get in Touch Today",
    description:
      "Get in touch with ForkliftPro Rentals. Call, WhatsApp, or visit our Jeddah office for all forklift service inquiries.",
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
