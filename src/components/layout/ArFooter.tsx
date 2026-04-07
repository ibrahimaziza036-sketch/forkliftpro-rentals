"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Siren,
  Globe,
} from "lucide-react";
import { SITE_CONFIG, SERVICE_AREAS } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "الرئيسية", href: "/ar" },
  { label: "من نحن", href: "/ar/about" },
  { label: "معرض الصور", href: "/ar/gallery" },
  { label: "المدونة", href: "/ar/blog" },
  { label: "اتصل بنا", href: "/ar/contact" },
  { label: "احجز رافعة", href: "/ar/contact#booking" },
];

const AR_SERVICES = [
  { label: "إيجار قصير المدى", href: "/ar/services#short-term" },
  { label: "إيجار طويل المدى", href: "/ar/services#long-term" },
  { label: "تحميل وتفريغ", href: "/ar/services#loading" },
  { label: "رفع ثقيل", href: "/ar/services#heavy-lifting" },
  { label: "نقل وتحريك", href: "/ar/services#moving" },
  { label: "مشغلين متوفرين", href: "/ar/services#operators" },
];

const AR_SERVICE_AREAS: Record<string, string> = {
  jeddah: "جدة",
  makkah: "مكة المكرمة",
  madinah: "المدينة المنورة",
  rabigh: "رابغ",
  kaec: "مدينة الملك عبدالله الاقتصادية",
  taif: "الطائف",
  yanbu: "ينبع",
  "al-lith": "الليث",
};

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: SITE_CONFIG.socialLinks.facebook,
    svg: (
      <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: SITE_CONFIG.socialLinks.instagram,
    svg: (
      <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: SITE_CONFIG.socialLinks.linkedin,
    svg: (
      <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: SITE_CONFIG.socialLinks.youtube,
    svg: (
      <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ArFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300">
      {/* Emergency CTA Banner */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-white">
              <Siren className="w-6 h-6 animate-pulse shrink-0" />
              <div>
                <p className="font-bold text-lg">تحتاج رافعة شوكية الآن؟</p>
                <p className="text-sm text-white/80">
                  التوصيل في نفس اليوم متاح. اتصل بنا وسنوفر رافعة في موقعك
                  اليوم.
                </p>
              </div>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors shrink-0 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              اتصل {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1">
            <Link href="/ar" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-final-white.png"
                alt="فوركليفت برو للإيجار"
                width={160}
                height={50}
                className="h-12 w-auto brightness-110"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              شريكك الموثوق في تأجير الرافعات الشوكية. الشركة الأكثر موثوقية في
              تأجير الرافعات الشوكية في جدة. نخدم أكثر من{" "}
              {SITE_CONFIG.clientCount} عميل منذ عام{" "}
              {SITE_CONFIG.foundedYear}.
            </p>

            <div className="flex items-center gap-3 mb-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-400"
                >
                  {social.svg}
                </a>
              ))}
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>English Version</span>
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Rental Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">
              خدمات التأجير
            </h3>
            <ul className="space-y-3">
              {AR_SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span>{service.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">
              معلومات التواصل
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">الهاتف</p>
                    <p className="text-sm text-gray-300 group-hover:text-primary transition-colors">
                      {SITE_CONFIG.phoneDisplay}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">
                      البريد الإلكتروني
                    </p>
                    <p className="text-sm text-gray-300 group-hover:text-primary transition-colors">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">العنوان</p>
                    <p className="text-sm text-gray-300">جدة، المملكة العربية السعودية</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">ساعات العمل</p>
                    <p className="text-sm text-gray-300">
                      الأحد - الخميس: ٨:٠٠ ص - ٦:٠٠ م
                    </p>
                    <p className="text-sm text-gray-300">
                      السبت: ٨:٠٠ ص - ٤:٠٠ م
                    </p>
                    <p className="text-sm text-gray-300">
                      الجمعة: إيجارات طوارئ متاحة
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-white font-bold text-base mb-4">مناطق الخدمة</h3>
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="px-3 py-1.5 text-xs font-medium bg-white/5 hover:bg-primary/20 hover:text-primary rounded-full transition-colors"
              >
                {AR_SERVICE_AREAS[area.slug] || area.city}
              </Link>
            ))}
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              src={SITE_CONFIG.mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`موقع ${SITE_CONFIG.name} على خرائط جوجل`}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-500 text-center md:text-right">
              &copy; {currentYear} فوركليفت برو للإيجار. جميع الحقوق محفوظة.
            </p>
            <p className="text-sm text-gray-500 text-center md:text-right">
              تم تطوير الموقع بواسطة{" "}
              <a
                href="https://corpnexsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Corpnex Solution
              </a>
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                سياسة الخصوصية
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
