import type { Metadata } from "next";
import ArContactContent from "./ArContactContent";

export const metadata: Metadata = {
  title: "اتصل بنا | احجز رافعة شوكية في جدة",
  description:
    "تواصل مع فوركليفت برو للإيجار. احصل على عرض سعر مجاني لتأجير رافعة شوكية في جدة. اتصل بنا أو أرسل رسالة واتساب أو املأ نموذج التواصل.",
  alternates: {
    canonical: "https://forkliftprorentals.com/ar/contact",
  },
};

export default function ArContactPage() {
  return <ArContactContent />;
}
