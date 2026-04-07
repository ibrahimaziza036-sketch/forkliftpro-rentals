import type { Metadata } from "next";
import ArHeader from "@/components/layout/ArHeader";
import ArFooter from "@/components/layout/ArFooter";
import { generateLocalBusinessSchema, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
      />
      <ArHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <ArFooter />
    </div>
  );
}
