import type { Metadata } from "next";
import ArBlogContent from "./ArBlogContent";

export const metadata: Metadata = {
  title: "المدونة | نصائح وأدلة تأجير الرافعات الشوكية",
  description:
    "اقرأ أحدث المقالات والنصائح حول تأجير الرافعات الشوكية في السعودية. أدلة شاملة، نصائح السلامة، ومقارنات بين أنواع الرافعات.",
  openGraph: {
    title: "المدونة | نصائح وأدلة تأجير الرافعات الشوكية",
    description: "اقرأ أحدث المقالات والنصائح حول تأجير الرافعات الشوكية في السعودية.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/ar/blog",
    languages: { en: "https://forkliftprorentals.com/blog", ar: "https://forkliftprorentals.com/ar/blog" },
  },
};

export default function ArBlogPage() {
  return <ArBlogContent />;
}
