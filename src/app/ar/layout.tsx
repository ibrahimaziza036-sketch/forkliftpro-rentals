import type { Metadata } from "next";
import ArHeader from "@/components/layout/ArHeader";
import ArFooter from "@/components/layout/ArFooter";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "فوركليفت برو للإيجار | تأجير رافعة شوكية في جدة",
    template: "%s | فوركليفت برو",
  },
  description:
    "الشركة الرائدة في تأجير الرافعات الشوكية في جدة. إيجار يومي وأسبوعي وشهري مع التوصيل في جميع أنحاء جدة والمنطقة الغربية.",
  keywords: [
    "رافعة شوكية للإيجار",
    "تأجير رافعة شوكية جدة",
    "فوركليفت للإيجار في جدة",
    "إيجار رافعة شوكية",
    "رافعة شوكية كهربائية",
    "سعر رافعة شوكية السعودية",
  ],
  alternates: {
    canonical: "https://forkliftprorentals.com/ar",
    languages: {
      en: "https://forkliftprorentals.com",
      ar: "https://forkliftprorentals.com/ar",
    },
  },
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" lang="ar" className="font-body">
      <ArHeader />
      <main id="main-content" className="flex-1 pt-16 lg:pt-[7.5rem]">
        {children}
      </main>
      <ArFooter />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
