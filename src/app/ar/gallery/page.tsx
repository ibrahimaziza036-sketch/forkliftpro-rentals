"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ArrowLeft, Phone, Eye } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Gallery data                                                       */
/* ------------------------------------------------------------------ */
type GalleryCategory =
  | "الكل"
  | "تحميل وتفريغ"
  | "رفع ثقيل"
  | "عمليات المستودعات"
  | "نشر في المواقع";

const CATEGORIES: GalleryCategory[] = [
  "الكل",
  "تحميل وتفريغ",
  "رفع ثقيل",
  "عمليات المستودعات",
  "نشر في المواقع",
];

const GALLERY_ITEMS = [
  {
    title: "تحميل الحاويات في ميناء جدة",
    client: "الراجحي للشحن",
    category: "تحميل وتفريغ" as const,
    description:
      "رافعة شوكية هيونداي ٣ طن لتحميل وتفريغ الحاويات يومياً في ميناء جدة الإسلامي. أكثر من ٢٠٠ منصة نقالة في كل وردية.",
    image: "/images/real/hyundai-3ton-yellow.jpeg",
  },
  {
    title: "مشروع رفع عوارض حديدية",
    client: "مجموعة بن لادن السعودية",
    category: "رفع ثقيل" as const,
    description:
      "رافعة شوكية هيلي ديزل ٧ طن للتعامل مع العوارض الحديدية الثقيلة في مشروع بناء تجاري على شارع التحلية، جدة.",
    image: "/images/real/heli-7ton-orange.jpeg",
  },
  {
    title: "عمليات مستودع السلع الاستهلاكية",
    client: "المراعي للتوزيع",
    category: "عمليات المستودعات" as const,
    description:
      "أسطول من ٤ رافعات شوكية لإدارة حركة المخزون في مستودع المراعي للتخزين البارد بمساحة ٤٠,٠٠٠ قدم مربع في جدة.",
    image: "/images/real/tcm-5ton-white.jpeg",
  },
  {
    title: "دعم نقل المصنع",
    client: "مدينة جدة الصناعية",
    category: "نشر في المواقع" as const,
    description:
      "٨ رافعات شوكية لمشروع نقل معدات مصنع لمدة أسبوعين. تم نقل أكثر من ٥٠٠ طن من الآلات الثقيلة بأمان.",
    image: "/images/real/tcm-delivery-truck.jpeg",
  },
  {
    title: "تفريغ الشاحنات في مركز التوزيع",
    client: "ساكو للأدوات",
    category: "تحميل وتفريغ" as const,
    description:
      "إيجار رافعة شوكية يومي لتفريغ شاحنات التوصيل في مركز توزيع ساكو بجدة. سرعة في التنفيذ وبدون أضرار.",
    image: "/images/real/hyster-7ton-yellow.jpeg",
  },
  {
    title: "التعامل مع ألواح الرخام",
    client: "المهيدب للرخام",
    category: "رفع ثقيل" as const,
    description:
      "رافعة شوكية هيلي ١٠ طن متخصصة للتعامل مع ألواح الرخام الدقيقة بوزن يصل إلى ٥ طن في موقع المحجر.",
    image: "/images/real/heli-10ton-red.jpeg",
  },
  {
    title: "مركز التجارة الإلكترونية",
    client: "نون للوجستيات",
    category: "عمليات المستودعات" as const,
    description:
      "إيجار طويل المدى لرافعات ميتسوبيشي لعمليات المستودعات عالية الحجم. دعم أكثر من ١٠,٠٠٠ طلب يومياً في موسم الذروة.",
    image: "/images/real/mitsubishi-7ton-sunset.jpeg",
  },
  {
    title: "تجهيز فعالية في سوبردوم جدة",
    client: "MBC للفعاليات",
    category: "نشر في المواقع" as const,
    description:
      "إيجار رافعات شوكية قصير المدى لنقل معدات المسرح والديكورات الثقيلة أثناء تجهيز فعالية كبرى في سوبردوم جدة.",
    image: "/images/real/mitsubishi-10ton-fleet.jpeg",
  },
  {
    title: "تحميل أكياس الإسمنت",
    client: "شركة اليمامة للإسمنت",
    category: "تحميل وتفريغ" as const,
    description:
      "٣ رافعات شوكية ديزل بإيجار شهري لتحميل أكياس الإسمنت على شاحنات التوصيل. تشغيل ١٢ ساعة يومياً، ٦ أيام في الأسبوع.",
    image: "/images/real/heavy-forklift-front.jpeg",
  },
  {
    title: "تركيب مولدات كهربائية",
    client: "شركة الكهرباء السعودية",
    category: "رفع ثقيل" as const,
    description:
      "رافعة شوكية ميتسوبيشي ١٠ طن لوضع مولدات صناعية في محطة كهرباء فرعية جديدة شمال جدة.",
    image: "/images/real/mitsubishi-10ton-yard.jpeg",
  },
  {
    title: "إدارة مخزون الأدوية",
    client: "شركة النهدي الطبية",
    category: "عمليات المستودعات" as const,
    description:
      "رافعات TCM بتحكم دقيق للتعامل مع مخزون الأدوية الحساسة في مستودع مكيف.",
    image: "/images/real/tcm-5ton-white.jpeg",
  },
  {
    title: "مناولة مواد مشروع نيوم",
    client: "مقاولو نيوم",
    category: "نشر في المواقع" as const,
    description:
      "أسطول من ١٠ رافعات شوكية للتضاريس الوعرة لدعم مناولة المواد في موقع بناء نيوم الرئيسي.",
    image: "/images/real/heli-10ton-red.jpeg",
  },
];

/* ------------------------------------------------------------------ */
/*  Gallery Card                                                       */
/* ------------------------------------------------------------------ */
function GalleryCard({ item }: { item: (typeof GALLERY_ITEMS)[number] }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <Eye className="w-8 h-8 text-white mb-3" />
          <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
          <p className="text-primary font-semibold text-sm">{item.client}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
            {item.category}
          </span>
        </div>
        <h3 className="font-bold text-secondary mb-1 line-clamp-1">
          {item.title} &mdash; {item.client}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function ArGalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("الكل");

  const filteredItems =
    activeCategory === "الكل"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 py-28 lg:py-36 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Camera className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            شاهد أعمالنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            من عمليات المستودعات إلى الرفع الثقيل &mdash; استعرض مشاريع التأجير
            الحقيقية التي نفذتها فوركليفت برو في جدة والمنطقة الغربية.
          </motion.p>
        </div>
      </section>

      {/* ---- Category Filter ---- */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[64px] lg:top-[104px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Gallery Grid ---- */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <GalleryCard key={item.title} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">
                لا توجد صور في هذه الفئة
              </h3>
              <p className="text-gray-500">جرب اختيار فئة أخرى</p>
            </div>
          )}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              هل تحتاج رافعة شوكية لمشروعك؟
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              تواصل معنا واحصل على عرض سعر مجاني. التوصيل في نفس اليوم في جدة.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg"
              >
                احجز رافعة الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-colors border border-white/20"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
