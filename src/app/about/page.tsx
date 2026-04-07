"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  HardHat,
  Lightbulb,
  Heart,
  Award,
  ArrowRight,
  Phone,
  Building,
  Users,
  MapPin,
  Cpu,
  Target,
  Eye,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Metadata (exported from a separate file for Next.js App Router)    */
/* ------------------------------------------------------------------ */
// Note: metadata must be in a server component or layout.
// We export it from a companion file below.

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
/*  Section wrapper with in-view animation                             */
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Timeline data                                                      */
/* ------------------------------------------------------------------ */
const MILESTONES = [
  {
    year: "2010",
    title: "Founded in Jeddah",
    description:
      "Started with a small fleet driven by a vision to provide reliable forklift rentals to Jeddah's industries.",
    icon: Building,
  },
  {
    year: "2012",
    title: "Expanded Service Area",
    description:
      "Extended our forklift services to Makkah, Rabigh, and the surrounding industrial zones.",
    icon: MapPin,
  },
  {
    year: "2015",
    title: "100th Client Milestone",
    description:
      "Reached 100 active clients, proving our commitment to quality service and building lasting partnerships.",
    icon: Users,
  },
  {
    year: "2017",
    title: "Rental Fleet Doubled",
    description:
      "Doubled our rental fleet capacity and launched dedicated operator orientation programs for all rental clients.",
    icon: HardHat,
  },
  {
    year: "2019",
    title: "GPS Fleet Tracking Launched",
    description:
      "Introduced GPS-based fleet tracking for all rental units, giving clients real-time visibility of their rented equipment.",
    icon: Target,
  },
  {
    year: "2021",
    title: "KAEC & Yanbu Coverage",
    description:
      "Extended our reach to KAEC and Yanbu, serving the rapidly growing industrial zones of Western Saudi Arabia.",
    icon: Building,
  },
  {
    year: "2023",
    title: "500th Client Milestone",
    description:
      "Celebrated serving over 500 businesses across Jeddah and Western Saudi Arabia — a testament to trusted, dependable partnerships.",
    icon: Award,
  },
  {
    year: "2024",
    title: "IoT-Enabled Rental Fleet",
    description:
      "Deployed cutting-edge IoT sensors across our rental fleet for real-time monitoring and proactive maintenance.",
    icon: Cpu,
  },
];

/* ------------------------------------------------------------------ */
/*  Values data                                                        */
/* ------------------------------------------------------------------ */
const VALUES = [
  {
    title: "Reliability",
    description:
      "We show up on time, every time. Our 99.5% uptime record and 30-minute emergency response mean your operations never stop.",
    icon: Shield,
  },
  {
    title: "Safety",
    description:
      "Zero compromises on safety. Every forklift is inspected, every operator is trained, and every job follows strict safety protocols.",
    icon: HardHat,
  },
  {
    title: "Innovation",
    description:
      "From IoT-enabled fleet management to predictive maintenance analytics, we invest in technology that keeps you ahead.",
    icon: Lightbulb,
  },
  {
    title: "Customer First",
    description:
      "Your success is our success. We listen, adapt, and go the extra mile to deliver solutions tailored to your unique needs.",
    icon: Heart,
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="relative bg-secondary overflow-hidden">
        <Image src="/images/hero/forklift-banner.png" alt="" fill className="object-cover opacity-30" sizes="100vw" priority />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom section-padding relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold uppercase tracking-wider mb-4"
          >
            About ForkliftPro Rentals
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our Story{" "}
            <span className="text-primary">&mdash;</span>{" "}
            <span className="block mt-2">15+ Years of Keeping Jeddah Moving</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            From a small fleet to Jeddah&apos;s most trusted forklift
            rental company. This is the ForkliftPro story.
          </motion.p>
        </div>
      </section>

      {/* ---- Company Story ---- */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Built by Technicians, for Industry
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ForkliftPro Rentals was founded in Jeddah by a team of forklift
                  professionals who saw a clear gap between the unreliable rental options most
                  businesses had and the level of dependability they truly deserved.
                </p>
                <p>
                  We started with just 2 forklifts for rent and a single delivery van,
                  serving one client at a time. Our founders knew
                  from their years on the floor that equipment downtime wasn&apos;t just an inconvenience
                  &mdash; it was lost revenue, missed deadlines, and broken promises to
                  customers.
                </p>
                <p>
                  That understanding fueled our growth from a small Jeddah operation to
                  the region&apos;s leading forklift rental company with a fleet of{" "}
                  <span className="font-semibold text-secondary">{SITE_CONFIG.fleetSize} forklifts</span>,
                  offices across major cities, and a team of over 80 dedicated professionals
                  serving{" "}
                  <span className="font-semibold text-secondary">500+ active clients</span>.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <div className="bg-gray-100 rounded-2xl aspect-[4/3] overflow-hidden relative">
                <Image src="/images/gallery/forklift-work-1.jpeg" alt="ForkliftPro HQ - Jeddah, Saudi Arabia" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-lg">
                <p className="text-3xl font-bold">{SITE_CONFIG.fleetSize}</p>
                <p className="text-sm opacity-90">Fleet Size</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ---- Mission & Vision ---- */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Mission &amp; Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding everything we do &mdash; from daily service calls to long-term
              partnerships.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver reliable, efficient, and safe forklift solutions that keep
                Jeddah&apos;s industries running without interruption. We exist to eliminate
                downtime and empower businesses to operate at their full potential &mdash;
                every day, every shift.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Saudi Arabia&apos;s most trusted name in material handling &mdash;
                pioneering smart fleet technology, setting safety benchmarks, and building a
                future where every warehouse and factory operates at peak efficiency with
                zero unplanned downtime.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ---- Timeline ---- */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped ForkliftPro into the company it is today.
            </p>
          </motion.div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {MILESTONES.map((milestone, index) => {
                const Icon = milestone.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={milestone.year}
                    variants={fadeUp}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 pl-12 md:pl-0 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div
                        className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${
                          isLeft ? "md:ml-auto" : ""
                        } max-w-md`}
                      >
                        <span className="inline-block bg-primary/10 text-primary font-bold text-sm px-3 py-1 rounded-full mb-3">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg font-bold text-secondary mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md z-10">
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ---- Company Values ---- */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four principles that guide every decision, every service call, and every
              client interaction.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* ---- CTA Section ---- */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container-custom section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the ForkliftPro Difference?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Join {SITE_CONFIG.clientCount} businesses across Jeddah who trust ForkliftPro
              for reliable, safe, and efficient forklift solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="btn-secondary"
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
