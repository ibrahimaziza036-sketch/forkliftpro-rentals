import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن | فوركليفت برو للإيجار — شركة الرافعات الشوكية الرائدة في جدة",
  description:
    "تعرف على فوركليفت برو للإيجار — أكثر شركة تأجير رافعات شوكية موثوقة في جدة. أكثر من 15 عامًا من الخبرة، أسطول يضم أكثر من 50 رافعة، وأكثر من 500 عميل.",
  openGraph: {
    title: "من نحن | فوركليفت برو للإيجار",
    description:
      "تعرف على فوركليفت برو للإيجار — شركة تأجير رافعات شوكية موثوقة في جدة مع أكثر من 15 عامًا من الخبرة.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/ar/about",
    languages: { en: "https://forkliftprorentals.com/about", ar: "https://forkliftprorentals.com/ar/about" },
  },
};

export default function ArAboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
