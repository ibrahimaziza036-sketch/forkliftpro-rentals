"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  ArrowLeft,
  Truck,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  Zap,
  Wrench,
  Award,
  Fuel,
} from "lucide-react";
import { SITE_CONFIG, FLEET_TYPES } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Animated counter                                                   */
/* ------------------------------------------------------------------ */
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const stepTime = Math.max(Math.floor((duration * 1000) / end), 10);
    const increment = Math.max(Math.floor(end / (duration * 100)), 1);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("ar-SA")}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Fade-in wrapper                                                    */
/* ------------------------------------------------------------------ */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Arabic fleet data                                                  */
/* ------------------------------------------------------------------ */
const AR_FLEET = FLEET_TYPES.map((f) => ({
  ...f,
  nameAr:
    f.tonnage === "3 Ton"
      ? "رافعة شوكية ٣ طن"
      : f.tonnage === "5 Ton"
        ? "رافعة شوكية ٥ طن"
        : f.tonnage === "7 Ton"
          ? "رافعة شوكية ٧ طن"
          : "رافعة شوكية ١٠ طن",
  tonnageAr:
    f.tonnage === "3 Ton"
      ? "٣ طن"
      : f.tonnage === "5 Ton"
        ? "٥ طن"
        : f.tonnage === "7 Ton"
          ? "٧ طن"
          : "١٠ طن",
  fuelTypeAr:
    f.fuelType === "Diesel / Electric" ? "ديزل / كهربائي" : "ديزل",
  bestForAr:
    f.tonnage === "3 Ton"
      ? "المستودعات، المصانع الصغيرة، الأحمال الخفيفة"
      : f.tonnage === "5 Ton"
        ? "المستودعات المتوسطة، مواقع البناء، تحميل الحاويات"
        : f.tonnage === "7 Ton"
          ? "الأحمال الثقيلة، المواقع الصناعية، الحديد والآلات"
          : "الصناعات الثقيلة، الموانئ، المشاريع الكبرى",
}));

/* ------------------------------------------------------------------ */
/*  Services data                                                      */
/* ------------------------------------------------------------------ */
const AR_SERVICES = [
  {
    icon: Clock,
    title: "إيجار قصير المدى",
    description: "إيجار يومي وأسبوعي للمشاريع العاجلة والاحتياجات المؤقتة. توصيل سريع لموقعك.",
  },
  {
    icon: Award,
    title: "إيجار طويل المدى",
    description: "عقود شهرية وسنوية بأسعار مخفضة. آلات مخصصة يتم صيانتها بشكل دوري.",
  },
  {
    icon: Truck,
    title: "تحميل وتفريغ",
    description: "مشغلين محترفين لتحميل وتفريغ الحاويات والشاحنات في منشأتك.",
  },
  {
    icon: Shield,
    title: "رفع ثقيل",
    description: "رافعات من ٣ إلى ١٠ طن. نتعامل مع الحديد والخرسانة والمعدات الصناعية بأمان.",
  },
  {
    icon: Zap,
    title: "نقل وتحريك",
    description: "نقل المصانع وإعادة تنظيم المستودعات وتحريك المعدات الثقيلة بكفاءة.",
  },
  {
    icon: Users,
    title: "مشغلين متوفرين",
    description: "كل إيجار يشمل مشغل مدرب ومعتمد. فريقك يركز على عمله ونحن نتولى الرفع.",
  },
];

/* ------------------------------------------------------------------ */
/*  Why Choose Us data                                                 */
/* ------------------------------------------------------------------ */
const WHY_CHOOSE_US = [
  {
    icon: Zap,
    title: "سرعة التوصيل",
    description: "توصيل في نفس اليوم في جدة. نصل لموقعك بأسرع وقت ممكن.",
  },
  {
    icon: Wrench,
    title: "صيانة مستمرة",
    description: "جميع الرافعات يتم صيانتها بشكل دوري. أي عطل يتم إصلاحه فوراً أو نوفر بديل.",
  },
  {
    icon: Users,
    title: "مشغلين محترفين",
    description: "مشغلين مدربين ومعتمدين على السلامة. خبرة واسعة في جميع أنواع المشاريع.",
  },
  {
    icon: Star,
    title: "أسعار تنافسية",
    description: "أسعار منافسة مع خطط مرنة. يومي وأسبوعي وشهري بأفضل الأسعار في جدة.",
  },
];

/* ------------------------------------------------------------------ */
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */
const STATS = [
  { value: 15, suffix: "+", label: "سنة خبرة", prefix: "" },
  { value: 50, suffix: "+", label: "رافعة شوكية", prefix: "" },
  { value: 500, suffix: "+", label: "عميل سعيد", prefix: "" },
  { value: 10000, suffix: "+", label: "مشروع منجز", prefix: "" },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function ArHomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 py-32 lg:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary font-semibold uppercase tracking-wider mb-4"
              >
                الشركة الرائدة في تأجير الرافعات الشوكية في جدة
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                تأجير رافعة شوكية في جدة{" "}
                <span className="text-primary">&mdash;</span>{" "}
                <span className="block mt-2">من ٣ إلى ١٠ طن</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
              >
                إيجار يومي وأسبوعي وشهري مع مشغلين محترفين. التوصيل في نفس اليوم
                في جميع أنحاء جدة والمنطقة الغربية.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/ar/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-primary/25"
                >
                  احصل على عرض سعر مجاني
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link
                  href="/ar/gallery"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors border border-white/20"
                >
                  شاهد أسطولنا
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-6 mt-8"
              >
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">توصيل نفس اليوم</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">مشغل مدرب</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">صيانة شاملة</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/forklift-hero-1.jpg"
                  alt="تأجير رافعة شوكية في جدة"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS                                                       */}
      {/* ============================================================ */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES OVERVIEW                                           */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              خدماتنا
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
              حلول تأجير رافعات شوكية متكاملة
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              نوفر جميع أنواع خدمات الرافعات الشوكية في جدة والمنطقة الغربية
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AR_SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 h-full">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.3} className="text-center mt-12">
            <Link
              href="/ar/services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-md shadow-primary/25"
            >
              عرض جميع الخدمات
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FLEET                                                       */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              أسطولنا
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
              رافعات شوكية من ٣ إلى ١٠ طن
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              أسطول متنوع من الرافعات الشوكية المحافظ عليها لتلبية جميع احتياجاتك
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AR_FLEET.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.nameAr}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.tonnageAr}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-secondary text-lg mb-2">
                      {item.nameAr}
                    </h3>
                    <div className="space-y-1.5 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Fuel className="w-4 h-4 text-primary" />
                        <span>{item.fuelTypeAr}</span>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.bestForAr}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WHY CHOOSE US                                               */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              لماذا نحن
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
              لماذا تختار فوركليفت برو؟
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              أكثر من {SITE_CONFIG.experienceYears} سنة خبرة في تأجير الرافعات
              الشوكية في جدة والمنطقة الغربية
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              هل تحتاج رافعة شوكية؟
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              تواصل معنا الآن واحصل على عرض سعر مجاني. التوصيل في نفس اليوم متاح
              في جدة.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-primary/25"
              >
                تواصل معنا الآن
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors border border-white/20"
              >
                <Phone className="w-5 h-5" />
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
