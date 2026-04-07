"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertTriangle,
  PhoneCall,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";


/* ------------------------------------------------------------------ */
/*  Zod schema                                                         */
/* ------------------------------------------------------------------ */
const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "الاسم يجب أن يكون حرفين على الأقل")
    .max(100, "الاسم يجب أن يكون أقل من ١٠٠ حرف"),
  email: z.string().email("يرجى إدخال بريد إلكتروني صحيح"),
  phone: z
    .string()
    .min(10, "يرجى إدخال رقم هاتف صحيح")
    .max(20, "رقم الهاتف طويل جداً")
    .regex(/^[+\d\s()-]+$/, "يرجى إدخال رقم هاتف صحيح"),
  serviceNeeded: z.string().min(1, "يرجى اختيار خدمة"),
  message: z
    .string()
    .min(10, "الرسالة يجب أن تكون ١٠ أحرف على الأقل")
    .max(2000, "الرسالة يجب أن تكون أقل من ٢٠٠٠ حرف"),
  privacyConsent: z.literal(true, {
    message: "يجب الموافقة على سياسة الخصوصية للإرسال",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ------------------------------------------------------------------ */
/*  Service options                                                    */
/* ------------------------------------------------------------------ */
const SERVICE_OPTIONS = [
  "إيجار قصير المدى",
  "إيجار طويل المدى",
  "تحميل وتفريغ",
  "رفع ثقيل",
  "نقل وتحريك",
  "مشغلين متوفرين",
  "أخرى",
];

/* ------------------------------------------------------------------ */
/*  Contact Info Card                                                   */
/* ------------------------------------------------------------------ */
function ContactCard({
  icon: Icon,
  title,
  children,
  href,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="font-semibold text-secondary text-sm mb-1">{title}</p>
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </>
  );

  const cls = `flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${href ? "cursor-pointer" : ""}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {inner}
      </a>
    );
  }

  return <div className={cls}>{inner}</div>;
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function ArContactContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          service: data.serviceNeeded,
          message: data.message,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
      reset();
    } catch {
      // Form error — show user-friendly message
      alert("حدث خطأ. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            اتصل بنا
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            تواصل معنا{" "}
            <span className="text-primary">&mdash;</span>{" "}
            <span className="block mt-2">نحن جاهزون لمساعدتك</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            احصل على عرض سعر مجاني أو احجز رافعة شوكية الآن. فريقنا متاح على مدار
            الساعة.
          </motion.p>
        </div>
      </section>

      {/* ---- Contact Info Cards ---- */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ContactCard
              icon={Phone}
              title="الهاتف"
              href={`tel:${SITE_CONFIG.phone}`}
            >
              <p>{SITE_CONFIG.phoneDisplay}</p>
              <p className="text-xs text-gray-400 mt-1">متاح على مدار الساعة</p>
            </ContactCard>
            <ContactCard
              icon={MessageCircle}
              title="واتساب"
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            >
              <p>{SITE_CONFIG.phoneDisplay}</p>
              <p className="text-xs text-gray-400 mt-1">رد سريع</p>
            </ContactCard>
            <ContactCard
              icon={Mail}
              title="البريد الإلكتروني"
              href={`mailto:${SITE_CONFIG.email}`}
            >
              <p>{SITE_CONFIG.email}</p>
            </ContactCard>
            <ContactCard icon={MapPin} title="العنوان">
              <p>جدة، المملكة العربية السعودية</p>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* ---- Form Section ---- */}
      <section id="booking" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                أرسل لنا رسالة
              </h2>
              <p className="text-gray-500 text-lg">
                املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  تم إرسال رسالتك بنجاح!
                </h3>
                <p className="text-gray-600 mb-6">
                  شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary font-semibold hover:underline"
                >
                  إرسال رسالة أخرى
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      {...register("fullName")}
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200"} focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="example@email.com"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200"} focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none`}
                      dir="ltr"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="05XX XXX XXXX"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200"} focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none`}
                      dir="ltr"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-sm font-semibold text-secondary mb-2">
                      الخدمة المطلوبة *
                    </label>
                    <select
                      {...register("serviceNeeded")}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.serviceNeeded ? "border-red-400 bg-red-50" : "border-gray-200"} focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none`}
                    >
                      <option value="">اختر الخدمة</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.serviceNeeded && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {errors.serviceNeeded.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="أخبرنا عن مشروعك واحتياجاتك..."
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200"} focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Privacy Consent */}
                <div className="flex items-start gap-3">
                  <input
                    {...register("privacyConsent")}
                    type="checkbox"
                    id="privacy-ar"
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="privacy-ar"
                    className="text-sm text-gray-500"
                  >
                    أوافق على{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      سياسة الخصوصية
                    </Link>{" "}
                    وأوافق على أن يتم التواصل معي بخصوص استفساري.
                  </label>
                </div>
                {errors.privacyConsent && (
                  <p className="text-red-500 text-xs flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    {errors.privacyConsent.message}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ---- Quick CTA ---- */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            تفضل الاتصال المباشر؟
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            فريقنا متاح على مدار الساعة. اتصل بنا أو أرسل واتساب للرد الفوري.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg"
            >
              <PhoneCall className="w-5 h-5" />
              اتصل الآن
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
