"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  CalendarRange,
  PackageOpen,
  Weight,
  ArrowLeftRight,
  HardHat,
  Phone,
  PhoneCall,
  Truck,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Users,
  Award,
  Zap,
  Fuel,
  ChevronLeft,
  ChevronRight,
  Wrench,
  MapPin,
  Check,
} from "lucide-react";
import {
  SITE_CONFIG,
  SERVICES,
  TESTIMONIALS,
  CLIENT_LOGOS,
  FLEET_TYPES,
  RENTAL_PLANS,
} from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Icon map                                                           */
/* ------------------------------------------------------------------ */
const SERVICE_ICON_MAP: Record<string, React.ElementType> = {
  Clock,
  CalendarRange,
  PackageOpen,
  Weight,
  ArrowLeftRight,
  HardHat,
};

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
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Fade-in wrapper                                                    */
/* ------------------------------------------------------------------ */
function FadeInWhenVisible({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };
  const offset = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ================================================================== */
/*  GALLERY IMAGES                                                     */
/* ================================================================== */
const GALLERY_IMAGES = [
  { src: "/images/real/heli-7ton-orange.jpeg", alt: "7-ton Heli forklift for rent in Jeddah - heavy lifting operations" },
  { src: "/images/real/tcm-5ton-white.jpeg", alt: "5-ton TCM forklift rental - warehouse loading in Jeddah" },
  { src: "/images/real/mitsubishi-7ton-sunset.jpeg", alt: "Mitsubishi 7-ton forklift at sunset - construction site rental" },
  { src: "/images/real/hyundai-3ton-yellow.jpeg", alt: "Hyundai 3-ton forklift for rent - small warehouse operations" },
  { src: "/images/real/heli-10ton-red.jpeg", alt: "Heli 10-ton heavy duty forklift rental in Jeddah" },
  { src: "/images/real/tcm-delivery-truck.jpeg", alt: "Forklift delivery on flatbed truck - Jeddah forklift rental service" },
  { src: "/images/real/hyster-7ton-yellow.jpeg", alt: "Hyster 7-ton forklift for rent - industrial site Jeddah" },
  { src: "/images/real/mitsubishi-10ton-fleet.jpeg", alt: "Mitsubishi 10-ton forklift fleet - monthly rental in Saudi Arabia" },
];

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */
export default function HomePage() {
  /* testimonial carousel state */
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () =>
    setActiveTestimonial((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  const nextTestimonial = () =>
    setActiveTestimonial((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );

  return (
    <>
      {/* ============================================================ */}
      {/*  1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden -mt-16 lg:-mt-[7.5rem]">
        {/* Background image */}
        <Image
          src="/images/hero/banner-final.png"
          alt="Forklift rental fleet in Jeddah"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        {/* Decorative accent blurs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

        <div className="relative container-custom section-padding w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                #1 Forklift Rental in Jeddah
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Forklift Rental in Jeddah{" "}
              <span className="block text-primary">
                From 3 to 10 Tons
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Loading, unloading, shifting &amp; moving. Experienced operators.
              Well-maintained fleet. Flexible daily, weekly &amp; monthly plans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                href="/contact"
                className="btn-pulse shine-effect inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Book a Forklift Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-secondary transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call: {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-6 sm:gap-10"
          >
            {[
              { icon: Award, text: "15+ Years" },
              { icon: Users, text: "500+ Clients" },
              { icon: Truck, text: "50+ Fleet" },
              { icon: MapPin, text: "All of Jeddah" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-white font-semibold text-sm sm:text-base">
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ARABIC HEADLINE BANNER                                        */}
      {/* ============================================================ */}
      <section className="relative bg-secondary overflow-hidden py-14 sm:py-20">
        {/* Animated background blurs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Arabic text with reveal animation */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              dir="rtl"
            >
              <span className="text-primary">رافعة شوكية</span>{" "}
              فوركليفت للإيجار في جدة
            </motion.h2>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="h-1 w-40 sm:w-56 bg-gradient-to-r from-primary via-primary to-transparent rounded-full mb-6 origin-center"
            />

            {/* Scrolling forklift images strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-5xl overflow-hidden rounded-2xl"
            >
              <div className="flex gap-3 animate-scroll">
                {[
                  "/images/real/heli-7ton-orange.jpeg",
                  "/images/real/tcm-5ton-white.jpeg",
                  "/images/real/mitsubishi-7ton-sunset.jpeg",
                  "/images/real/hyundai-3ton-yellow.jpeg",
                  "/images/real/heli-10ton-red.jpeg",
                  "/images/real/tcm-delivery-truck.jpeg",
                  "/images/real/hyster-7ton-yellow.jpeg",
                  "/images/real/heavy-forklift-front.jpeg",
                  "/images/real/heli-7ton-orange.jpeg",
                  "/images/real/tcm-5ton-white.jpeg",
                  "/images/real/mitsubishi-7ton-sunset.jpeg",
                  "/images/real/hyundai-3ton-yellow.jpeg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="relative shrink-0 w-48 h-36 sm:w-56 sm:h-40 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`ForkliftPro fleet ${i + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 192px, 224px"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-sm sm:text-base mt-6 max-w-xl"
            >
              Forklift Rental in Jeddah — 3 to 10 Ton — Daily, Weekly &amp; Monthly
            </motion.p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. WHAT WE DO — SERVICES                                     */}
      {/* ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Your Trusted Forklift{" "}
              <span className="text-primary">Rental Partner</span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 text-lg">
              Whether you need a forklift for a day or a year, for a warehouse
              or a mega construction site — we have the solution.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {SERVICES.map((service, i) => {
              const IconComp = SERVICE_ICON_MAP[service.icon] || Truck;
              return (
                <FadeInWhenVisible key={service.slug} delay={i * 0.08}>
                  <Link
                    href={service.href}
                    className="group block bg-white rounded-2xl border border-gray-200 p-7 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 card-hover-lift"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComp className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. FLEET SHOWCASE                                            */}
      {/* ============================================================ */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Our Fleet —{" "}
              <span className="text-primary">
                The Right Machine for Every Job
              </span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 text-lg">
              From 3-ton to 10-ton forklifts — a
              well-maintained fleet ready for immediate deployment.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET_TYPES.map((fleet, i) => (
              <FadeInWhenVisible key={fleet.name} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 card-hover-glow border-glow">
                  {/* Image — dominant, 60% of card */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={fleet.image}
                      alt={fleet.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {fleet.tonnage}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3">{fleet.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Fuel className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>
                          <strong>Fuel:</strong> {fleet.fuelType}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>
                          <strong>Best For:</strong> {fleet.bestFor}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>
                          <strong>Daily Rate:</strong> {fleet.dailyRate}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full bg-secondary text-white font-semibold text-sm py-3 rounded-lg hover:bg-primary transition-colors duration-300"
                    >
                      Enquire Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. RENTAL PLANS                                              */}
      {/* ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Flexible Plans That{" "}
              <span className="text-primary">Fit Your Budget</span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 text-lg">
              Choose a plan that matches your project timeline. The longer you
              rent, the more you save.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {RENTAL_PLANS.map((plan, i) => (
              <FadeInWhenVisible key={plan.name} delay={i * 0.12}>
                <div
                  className={`relative bg-white rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    plan.popular
                      ? "border-2 border-primary shadow-xl ring-1 ring-primary/20"
                      : "border border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-bold px-6 py-1.5 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-xl font-bold text-primary">
                      {plan.priceRange}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 font-bold text-base py-3.5 rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30"
                        : "bg-secondary text-white hover:bg-primary"
                    }`}
                  >
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. WHY CHOOSE US                                             */}
      {/* ============================================================ */}
      <section className="bg-secondary section-padding overflow-hidden">
        <div className="container-custom">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
              Why <span className="text-primary">Choose Us</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
              Numbers that speak louder than words. Trusted by businesses across
              Jeddah for over 15 years.
            </p>
          </FadeInWhenVisible>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { value: 15, suffix: "+", label: "Years Experience", icon: Award },
              { value: 500, suffix: "+", label: "Satisfied Clients", icon: Users },
              { value: 50, suffix: "+", label: "Machines in Fleet", icon: Truck },
              {
                value: 10000,
                suffix: "+",
                label: "Projects Completed",
                icon: CheckCircle,
              },
            ].map((stat, i) => (
              <FadeInWhenVisible key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          {/* Benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HardHat,
                title: "Experienced Operators Included",
                desc: "Every rental comes with trained, safety-certified operators at no extra cost.",
              },
              {
                icon: Truck,
                title: "Free Delivery in Jeddah",
                desc: "We deliver the forklift to your site and pick it up when you are done. Zero transport hassle.",
              },
              {
                icon: Wrench,
                title: "All Maintenance Covered",
                desc: "Breakdowns? We fix it or replace it. You never pay for repairs or downtime.",
              },
              {
                icon: Zap,
                title: "Same-Day Deployment",
                desc: "Urgent need? Most forklift types available for same-day delivery in Jeddah.",
              },
            ].map((benefit, i) => (
              <FadeInWhenVisible key={benefit.title} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300 card-hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. HOW IT WORKS                                              */}
      {/* ============================================================ */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg">
              Renting a forklift is as easy as 1-2-3. We handle the logistics so
              you can focus on your project.
            </p>
          </FadeInWhenVisible>

          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: 1,
                  icon: PhoneCall,
                  title: "Tell Us What You Need",
                  description:
                    "Call, WhatsApp, or fill out our form. Tell us the forklift type, tonnage, duration, and site location.",
                },
                {
                  step: 2,
                  icon: Truck,
                  title: "We Deliver to Your Site",
                  description:
                    "We match the right machine and operator to your job. Delivery and setup at your site — often same day.",
                },
                {
                  step: 3,
                  icon: CheckCircle,
                  title: "You Get the Job Done",
                  description:
                    "Your operations run smoothly with reliable equipment. We handle maintenance. You focus on results.",
                },
              ].map((item, i) => (
                <FadeInWhenVisible key={item.step} delay={i * 0.15}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10 shadow-lg shadow-primary/30">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. IMAGE GALLERY                                             */}
      {/* ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              See Our Fleet{" "}
              <span className="text-primary">in Action</span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-14 text-lg">
              Real photos from real job sites. Our forklifts at work across
              Jeddah and Western Saudi Arabia.
            </p>
          </FadeInWhenVisible>

          {/* Masonry-style asymmetric grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
            {/* Large image — spans 2 cols and 2 rows */}
            <FadeInWhenVisible delay={0} className="col-span-2 row-span-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={GALLERY_IMAGES[0].src}
                  alt={GALLERY_IMAGES[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeInWhenVisible>

            {/* Standard images */}
            <FadeInWhenVisible delay={0.05}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={GALLERY_IMAGES[1].src}
                  alt={GALLERY_IMAGES[1].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={GALLERY_IMAGES[2].src}
                  alt={GALLERY_IMAGES[2].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeInWhenVisible>

            {/* Tall image — spans 2 rows */}
            <FadeInWhenVisible delay={0.15} className="row-span-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={GALLERY_IMAGES[3].src}
                  alt={GALLERY_IMAGES[3].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeInWhenVisible>

            {/* Wide image — spans 2 cols */}
            <FadeInWhenVisible delay={0.2} className="col-span-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={GALLERY_IMAGES[4].src}
                  alt={GALLERY_IMAGES[4].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeInWhenVisible>

            {/* Bottom row standard */}
            <FadeInWhenVisible delay={0.25}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={GALLERY_IMAGES[5].src}
                  alt={GALLERY_IMAGES[5].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={GALLERY_IMAGES[6].src}
                  alt={GALLERY_IMAGES[6].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.35} className="col-span-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <Image
                  src={GALLERY_IMAGES[7].src}
                  alt={GALLERY_IMAGES[7].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  8. TESTIMONIALS CAROUSEL                                     */}
      {/* ============================================================ */}
      <section className="bg-gray-50 section-padding overflow-hidden">
        <div className="container-custom">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 text-lg">
              Real feedback from businesses that trust ForkliftPro Rentals to
              keep their operations running.
            </p>
          </FadeInWhenVisible>

          <div className="max-w-3xl mx-auto relative">
            <div className="overflow-hidden">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-lg"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({
                    length: TESTIMONIALS[activeTestimonial].rating,
                  }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{TESTIMONIALS[activeTestimonial].content}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-secondary text-lg">
                    {TESTIMONIALS[activeTestimonial].name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {TESTIMONIALS[activeTestimonial].company}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Nav buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === activeTestimonial
                        ? "bg-primary w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  9. CLIENT LOGOS                                               */}
      {/* ============================================================ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <FadeInWhenVisible>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Trusted by{" "}
              <span className="text-primary">500+ Businesses</span> Across
              Jeddah
            </h2>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-12 text-base">
              From logistics giants to construction firms — companies rely on
              ForkliftPro Rentals.
            </p>
          </FadeInWhenVisible>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CLIENT_LOGOS.map((logo, i) => (
              <FadeInWhenVisible key={logo} delay={i * 0.05}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 px-4 py-6 flex items-center justify-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <span className="font-bold text-gray-400 text-sm text-center">
                    {logo}
                  </span>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  10. CTA BANNER                                               */}
      {/* ============================================================ */}
      <section className="relative bg-primary section-padding overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

        <div className="relative container-custom text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Need a Forklift? Get a Free Quote in 5 Minutes
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
              Call now or fill out our form. Our team is ready to deploy the
              right forklift to your site — fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-pulse inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-lg px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-xl"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-secondary/80 transition-colors shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </>
  );
}
