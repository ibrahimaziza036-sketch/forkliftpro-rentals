import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "معرض الصور | أعمالنا الميدانية | فوركليفت برو للإيجار",
  description:
    "شاهد فوركليفت برو للإيجار أثناء العمل — نشر الأسطول، عمليات الرافعات الشوكية، والمزيد في أنحاء جدة والمنطقة الغربية.",
  openGraph: {
    title: "معرض الصور | أعمالنا الميدانية | فوركليفت برو للإيجار",
    description:
      "شاهد فوركليفت برو للإيجار أثناء العمل — نشر الأسطول وعمليات الرافعات الشوكية.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/ar/gallery",
    languages: { en: "https://forkliftprorentals.com/gallery", ar: "https://forkliftprorentals.com/ar/gallery" },
  },
};

export default function ArGalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
