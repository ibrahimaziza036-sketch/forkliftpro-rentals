import type { Metadata } from "next";
import ArBlogContent from "./ArBlogContent";

export const metadata: Metadata = {
  title: "المدونة | نصائح وأدلة تأجير الرافعات الشوكية",
  description:
    "اقرأ أحدث المقالات والنصائح حول تأجير الرافعات الشوكية في السعودية. أدلة شاملة، نصائح السلامة، ومقارنات بين أنواع الرافعات.",
  alternates: {
    canonical: "https://forkliftprorentals.com/ar/blog",
  },
};

export default function ArBlogPage() {
  return <ArBlogContent />;
}
