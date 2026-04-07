"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowLeft,
  CheckCircle,
  Clock,
  Award,
  Truck,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ------------------------------------------------------------------ */
/*  Services data                                                      */
/* ------------------------------------------------------------------ */
const SERVICES_AR = [
  {
    id: "short-term",
    icon: Clock,
    title: "إيجار قصير المدى",
    subtitle: "إيجار يومي وأسبوعي للمشاريع العاجلة",
    description:
      "نوفر رافعات شوكية للإيجار اليومي والأسبوعي لتلبية احتياجاتك العاجلة. سواء كان لديك مشروع مؤقت أو ذروة موسمية أو حاجة طارئة، نوفر الرافعة في موقعك بسرعة.",
    features: [
      "توصيل في نفس اليوم في جدة",
      "مشغل مدرب مشمول",
      "صيانة كاملة مشمولة",
      "ساعات عمل مرنة",
      "بدون التزام طويل المدى",
    ],
    image: "/images/hero/forklift-hero-1.jpg",
  },
  {
    id: "long-term",
    icon: Award,
    title: "إيجار طويل المدى",
    subtitle: "عقود شهرية وسنوية بأسعار مخفضة",
    description:
      "وفر المال مع عقود الإيجار طويلة المدى. نوفر آلات مخصصة يتم صيانتها بشكل دوري من فريقنا طوال فترة العقد. أسعار تنافسية تزداد مع طول مدة الإيجار.",
    features: [
      "أقصى توفير في التكاليف",
      "مشغل مخصص واحتياطي",
      "توصيل في جميع أنحاء المنطقة",
      "دعم أولوية ٢٤/٧",
      "ضمان استبدال فوري",
      "صيانة كاملة مشمولة",
    ],
    image: "/images/hero/forklift-hero-2.jpg",
  },
  {
    id: "loading",
    icon: Truck,
    title: "تحميل وتفريغ",
    subtitle: "مشغلين محترفين لتحميل وتفريغ الحاويات",
    description:
      "خدمة تحميل وتفريغ احترافية بمشغلين ذوي خبرة. نتعامل مع الحاويات والشاحنات والبضائع في منشأتك بكفاءة وأمان تام.",
    features: [
      "مشغلين محترفين ومعتمدين",
      "تعامل مع جميع أنواع البضائع",
      "بدون أضرار مضمون",
      "خدمة متاحة على مدار الساعة",
      "تقارير يومية",
    ],
    image: "/images/hero/forklift-hero-3.jpg",
  },
  {
    id: "heavy-lifting",
    icon: Shield,
    title: "رفع ثقيل",
    subtitle: "رافعات من ٣ إلى ١٠ طن",
    description:
      "رافعات شوكية بسعات من ٣ إلى ١٠ طن للتعامل مع الأحمال الثقيلة. نتعامل مع الحديد والخرسانة والآلات والمعدات الصناعية بأمان تام.",
    features: [
      "رافعات ٣، ٥، ٧، ١٠ طن",
      "مشغلين متخصصين في الأحمال الثقيلة",
      "معدات السلامة مشمولة",
      "تخطيط الرفع مسبقاً",
      "إشراف على السلامة",
    ],
    image: "/images/fleet/forklift-fleet-1.jpeg",
  },
  {
    id: "moving",
    icon: Zap,
    title: "نقل وتحريك",
    subtitle: "نقل المصانع والمعدات الثقيلة",
    description:
      "نقل المصانع وإعادة تنظيم المستودعات وتحريك المعدات الثقيلة. نخطط وننفذ عملية النقل بأمان وكفاءة مع فريق متخصص.",
    features: [
      "تخطيط شامل لعملية النقل",
      "فريق متعدد الرافعات",
      "بدون أضرار مضمون",
      "جدول زمني واضح",
      "تأمين على المعدات",
    ],
    image: "/images/fleet/forklift-fleet-2.jpeg",
  },
  {
    id: "operators",
    icon: Users,
    title: "مشغلين متوفرين",
    subtitle: "كل إيجار يشمل مشغل مدرب",
    description:
      "كل رافعة شوكية تأتي مع مشغل مدرب ومعتمد على السلامة. مشغلونا يحملون جميع الشهادات المطلوبة وخبرة واسعة في جميع أنواع المشاريع.",
    features: [
      "مشغلين معتمدين على السلامة",
      "خبرة في جميع أنواع المشاريع",
      "شهادات سارية المفعول",
      "التزام بمعايير السلامة",
      "متاحين على مدار الساعة",
    ],
    image: "/images/fleet/forklift-fleet-3.jpeg",
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function ArServicesContent() {
  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 py-28 lg:py-36 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold uppercase tracking-wider mb-4"
          >
            خدماتنا
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            خدمات تأجير رافعات شوكية متكاملة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            من الإيجار اليومي إلى العقود السنوية، نوفر جميع أنواع خدمات الرافعات
            الشوكية في جدة والمنطقة الغربية.
          </motion.p>
        </div>
      </section>

      {/* ---- Services List ---- */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {SERVICES_AR.map((service, i) => {
              const Icon = service.icon;
              const isReversed = i % 2 !== 0;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:direction-ltr" : ""}`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        {service.subtitle}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/ar/contact"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md shadow-primary/25"
                    >
                      اطلب هذه الخدمة
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- CTA Section ---- */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              هل تحتاج رافعة شوكية لمشروعك؟
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              تواصل معنا الآن واحصل على عرض سعر مجاني. فريقنا جاهز لمساعدتك في
              اختيار الخدمة المناسبة.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-primary/25"
              >
                احصل على عرض سعر
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
