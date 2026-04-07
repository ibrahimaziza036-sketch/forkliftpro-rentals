"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, X, Siren, Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { label: "الرئيسية", href: "/ar" },
  { label: "خدماتنا", href: "/ar/services" },
  { label: "من نحن", href: "/ar/about" },
  { label: "معرض الصور", href: "/ar/gallery" },
  { label: "المدونة", href: "/ar/blog" },
  { label: "الأسئلة الشائعة", href: "/faq" },
  { label: "اتصل بنا", href: "/ar/contact" },
];

export default function ArHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden lg:block bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>English</span>
              </Link>
              <div className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
                <Siren className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="font-semibold text-primary">
                  متوفر على مدار الساعة
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/ar" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo-final.png"
              alt="فوركليفت برو للإيجار"
              width={160}
              height={50}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-lg hover:bg-orange-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/ar/contact"
              className="hidden sm:inline-flex btn-primary bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-md shadow-primary/25"
            >
              احجز رافعة شوكية
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[calc(100vw-3rem)] bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link
                  href="/ar"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/images/logo-final.png"
                    alt="فوركليفت برو"
                    width={140}
                    height={44}
                    className="h-9 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-orange-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/"
                  className="block px-6 py-3 text-base font-medium text-gray-500 hover:text-primary hover:bg-orange-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    English
                  </span>
                </Link>
              </div>
              <div className="p-4 border-t border-gray-100 space-y-3">
                <Link
                  href="/ar/contact"
                  className="block w-full btn-primary bg-primary text-white text-center px-5 py-3 rounded-lg text-sm font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  احجز رافعة شوكية
                </Link>
                <div className="flex items-center justify-center gap-1.5 text-xs text-primary font-semibold">
                  <Siren className="w-3.5 h-3.5 animate-pulse" />
                  <span>متوفر على مدار الساعة</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
