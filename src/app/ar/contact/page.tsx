import type { Metadata } from "next";
import ArContactContent from "./ArContactContent";

export const metadata: Metadata = {
  title: "اتصل بنا | احجز رافعة شوكية في جدة",
  description:
    "تواصل مع فوركليفت برو للإيجار. احصل على عرض سعر مجاني لتأجير رافعة شوكية في جدة. اتصل بنا أو أرسل رسالة واتساب أو املأ نموذج التواصل.",
  openGraph: {
    title: "اتصل بنا | احجز رافعة شوكية في جدة",
    description: "تواصل مع فوركليفت برو للإيجار. احصل على عرض سعر مجاني لتأجير رافعة شوكية في جدة.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/ar/contact",
    languages: { en: "https://forkliftprorentals.com/contact", ar: "https://forkliftprorentals.com/ar/contact" },
  },
};

export default function ArContactPage() {
  return <ArContactContent />;
}
