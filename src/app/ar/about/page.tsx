"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Heart,
  Award,
  Lightbulb,
  ArrowLeft,
  Phone,
  Building,
  Users,
  MapPin,
  Target,
  Eye,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ------------------------------------------------------------------ */
/*  Section wrapper                                                    */
/* ------------------------------------------------------------------ */
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Values data                                                        */
/* ------------------------------------------------------------------ */
const VALUES = [
  {
    icon: Shield,
    title: "السلامة أولاً",
    description:
      "السلامة هي أولويتنا القصوى. جميع مشغلينا معتمدون ومدربون على أعلى معايير السلامة. كل رافعة يتم فحصها قبل كل مهمة.",
  },
  {
    icon: Award,
    title: "الموثوقية",
    description:
      "أكثر من ١٥ سنة من الخدمة الموثوقة. نلتزم بمواعيد التسليم ونضمن جاهزية الرافعات في جميع الأوقات.",
  },
  {
    icon: Heart,
    title: "خدمة العملاء",
    description:
      "رضا العملاء هو محور عملنا. فريق دعم متاح على مدار الساعة. نستمع لاحتياجاتك ونوفر الحل الأمثل.",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description:
      "نستثمر في أحدث الرافعات والتقنيات. أسطولنا يتضمن رافعات حديثة بأعلى معايير الكفاءة والأداء.",
  },
];

/* ------------------------------------------------------------------ */
/*  Milestones                                                         */
/* ------------------------------------------------------------------ */
const MILESTONES = [
  {
    year: "٢٠١٠",
    title: "تأسيس الشركة",
    description: "بدأنا برافعتين شوكيتين وحلم كبير في خدمة قطاع اللوجستيات في جدة.",
  },
  {
    year: "٢٠١٣",
    title: "توسع الأسطول",
    description: "وصل أسطولنا إلى ١٥ رافعة شوكية مع التوسع في خدمة مكة المكرمة والطائف.",
  },
  {
    year: "٢٠١٦",
    title: "١٠٠ عميل",
    description: "تجاوزنا حاجز ١٠٠ عميل نشط مع عقود طويلة المدى في القطاعات الصناعية والتجارية.",
  },
  {
    year: "٢٠١٩",
    title: "خدمة ٢٤/٧",
    description: "أطلقنا خدمة الطوارئ على مدار الساعة لتلبية الاحتياجات العاجلة لعملائنا.",
  },
  {
    year: "٢٠٢٢",
    title: "+٥٠ رافعة",
    description: "تجاوز أسطولنا ٥٠ رافعة شوكية بسعات من ٣ إلى ١٠ طن مع تغطية المنطقة الغربية كاملة.",
  },
  {
    year: "٢٠٢٥",
    title: "+٥٠٠ عميل",
    description: "نخدم أكثر من ٥٠٠ عميل وأنجزنا أكثر من ١٠,٠٠٠ مشروع بنجاح.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function ArAboutPage() {
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
            من نحن
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            الشركة الرائدة في تأجير{" "}
            <span className="text-primary">الرافعات الشوكية</span> في جدة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            منذ عام {SITE_CONFIG.foundedYear}، نقدم خدمات تأجير رافعات شوكية
            موثوقة واحترافية في جدة والمنطقة الغربية.
          </motion.p>
        </div>
      </section>

      {/* ---- Story Section ---- */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <p className="text-primary font-semibold uppercase tracking-wider mb-3">
                  قصتنا
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                  أكثر من {SITE_CONFIG.experienceYears} سنة من التميز في خدمة
                  عملائنا
                </h2>
                <div className="space-y-4 text-gray-500 leading-relaxed">
                  <p>
                    تأسست فوركليفت برو في عام {SITE_CONFIG.foundedYear} في جدة
                    برؤية واضحة: توفير خدمات تأجير رافعات شوكية موثوقة وبأسعار
                    تنافسية لقطاع اللوجستيات والصناعة في المنطقة الغربية.
                  </p>
                  <p>
                    بدأنا برافعتين شوكيتين فقط، وعلى مدار السنوات نمونا لنصبح
                    واحدة من أكبر شركات تأجير الرافعات الشوكية في جدة بأسطول يتجاوز{" "}
                    {SITE_CONFIG.fleetSize} رافعة شوكية.
                  </p>
                  <p>
                    اليوم، نخدم أكثر من {SITE_CONFIG.clientCount} عميل في مختلف
                    القطاعات من المستودعات والمصانع إلى مواقع البناء والموانئ. كل
                    إيجار يشمل مشغل مدرب وصيانة كاملة ودعم فني على مدار الساعة.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary">تأسست {SITE_CONFIG.foundedYear}</p>
                      <p className="text-sm text-gray-400">في جدة</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary">{SITE_CONFIG.clientCount}</p>
                      <p className="text-sm text-gray-400">عميل سعيد</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary">{SITE_CONFIG.projectsCompleted}</p>
                      <p className="text-sm text-gray-400">مشروع منجز</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary">٨ مدن</p>
                      <p className="text-sm text-gray-400">مناطق الخدمة</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero/forklift-hero-2.jpg"
                    alt="فريق فوركليفت برو"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Vision & Mission ---- */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">رؤيتنا</h3>
                <p className="text-gray-500 leading-relaxed">
                  أن نكون الشركة الأولى والأكثر موثوقية في تأجير الرافعات الشوكية
                  في المملكة العربية السعودية، مع الالتزام بأعلى معايير الجودة
                  والسلامة.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">مهمتنا</h3>
                <p className="text-gray-500 leading-relaxed">
                  تقديم حلول تأجير رافعات شوكية مرنة وموثوقة تساعد عملاءنا على
                  إنجاز مشاريعهم بكفاءة وأمان، مع توفير أفضل قيمة مقابل المال.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Values Section ---- */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <p className="text-primary font-semibold uppercase tracking-wider mb-3">
                قيمنا
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                القيم التي تحرك عملنا
              </h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                نلتزم بمجموعة من القيم الأساسية التي تشكل أساس كل ما نقوم به
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeUp}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <motion.div variants={fadeUp}>
              <p className="text-primary font-semibold uppercase tracking-wider mb-3">
                مسيرتنا
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                محطات بارزة في تاريخنا
              </h2>
            </motion.div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 right-6 w-0.5 bg-primary/20" />

              <div className="space-y-10">
                {MILESTONES.map((milestone, i) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs z-10">
                      {milestone.year}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1">
                      <h3 className="font-bold text-secondary text-lg mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
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
              هل ترغب في التعامل معنا؟
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              تواصل معنا اليوم واكتشف لماذا يثق أكثر من {SITE_CONFIG.clientCount}{" "}
              عميل في فوركليفت برو.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/ar/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-primary/25"
              >
                تواصل معنا
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
