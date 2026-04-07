import type { Metadata } from "next";
import ArServicesContent from "./ArServicesContent";

export const metadata: Metadata = {
  title: "خدمات تأجير الرافعات الشوكية | تحميل وتفريغ ورفع ثقيل",
  description:
    "خدمات تأجير رافعات شوكية احترافية في جدة: إيجار قصير وطويل المدى، تحميل وتفريغ، رفع ثقيل حتى ١٠ طن، نقل وتحريك، مع مشغلين محترفين. التوصيل في نفس اليوم.",
  openGraph: {
    title: "حلول تأجير رافعات شوكية متكاملة — ١ إلى ١٠ طن | فوركليفت برو",
    description:
      "استأجر رافعات شوكية مع مشغلين في جدة والمنطقة الغربية. خطط يومية وأسبوعية وشهرية.",
    images: ["/images/hero/forklift-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/ar/services",
    languages: { en: "https://forkliftprorentals.com/services", ar: "https://forkliftprorentals.com/ar/services" },
  },
};

export default function ArServicesPage() {
  return <ArServicesContent />;
}
