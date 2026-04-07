"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  ArrowRight,
  Phone,
  Eye,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Gallery data                                                       */
/* ------------------------------------------------------------------ */
type GalleryCategory = "All" | "Loading & Unloading" | "Heavy Lifting" | "Warehouse Operations" | "Site Deployments";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Loading & Unloading",
  "Heavy Lifting",
  "Warehouse Operations",
  "Site Deployments",
];

const GALLERY_ITEMS = [
  {
    title: "Container Loading at Jeddah Port",
    client: "Al-Rajhi Shipping",
    category: "Loading & Unloading" as const,
    description:
      "3-ton Hyundai forklift deployed for daily container loading and unloading at Jeddah Islamic Port. Handling 200+ pallets per shift.",
    image: "/images/real/hyundai-3ton-yellow.jpeg",
  },
  {
    title: "Steel Beam Lifting Project",
    client: "Saudi Binladin Group",
    category: "Heavy Lifting" as const,
    description:
      "7-ton Heli diesel forklift handling heavy steel beams for a commercial construction project on Tahlia Street, Jeddah.",
    image: "/images/real/heli-7ton-orange.jpeg",
  },
  {
    title: "FMCG Warehouse Operations",
    client: "Almarai Distribution",
    category: "Warehouse Operations" as const,
    description:
      "Fleet of 4 forklifts managing inventory movement across Almarai's 40,000 sq ft cold storage facility in Jeddah.",
    image: "/images/real/tcm-5ton-white.jpeg",
  },
  {
    title: "Factory Relocation Support",
    client: "Jeddah Industrial City",
    category: "Site Deployments" as const,
    description:
      "8 forklifts deployed for a 2-week factory equipment relocation project. Moved 500+ tons of heavy machinery safely.",
    image: "/images/real/tcm-delivery-truck.jpeg",
  },
  {
    title: "Truck Unloading at Distribution Hub",
    client: "SACO Hardware",
    category: "Loading & Unloading" as const,
    description:
      "Daily forklift rental for unloading delivery trucks at SACO's Jeddah distribution center. Fast turnaround, zero damage.",
    image: "/images/real/hyster-7ton-yellow.jpeg",
  },
  {
    title: "Marble Slab Handling",
    client: "Al-Muhaidib Marble Works",
    category: "Heavy Lifting" as const,
    description:
      "Specialized 10-ton Heli forklift handling delicate marble slabs weighing up to 5 tons each at the quarry site.",
    image: "/images/real/heli-10ton-red.jpeg",
  },
  {
    title: "E-Commerce Fulfillment Center",
    client: "Noon Logistics",
    category: "Warehouse Operations" as const,
    description:
      "Long-term rental of Mitsubishi forklifts for high-volume warehouse operations. Supporting 10,000+ orders per day in peak season.",
    image: "/images/real/mitsubishi-7ton-sunset.jpeg",
  },
  {
    title: "Event Setup at Jeddah Superdome",
    client: "MBC Events",
    category: "Site Deployments" as const,
    description:
      "Short-term forklift rental for stage equipment and heavy prop movement during a major event setup at Jeddah Superdome.",
    image: "/images/real/mitsubishi-10ton-fleet.jpeg",
  },
  {
    title: "Cement Bag Loading",
    client: "Yamama Cement Co.",
    category: "Loading & Unloading" as const,
    description:
      "3 diesel forklifts on monthly rental for loading cement bags onto delivery trucks. Operating 12 hours daily, 6 days a week.",
    image: "/images/real/heavy-forklift-front.jpeg",
  },
  {
    title: "Generator Installation Lift",
    client: "Saudi Electricity Company",
    category: "Heavy Lifting" as const,
    description:
      "10-ton heavy-duty Mitsubishi forklift used to position industrial generators at a new power substation in North Jeddah.",
    image: "/images/real/mitsubishi-10ton-yard.jpeg",
  },
  {
    title: "Pharmaceutical Storage Management",
    client: "Nahdi Medical Co.",
    category: "Warehouse Operations" as const,
    description:
      "TCM forklifts with precision controls for handling sensitive pharmaceutical inventory in climate-controlled warehouse.",
    image: "/images/real/tcm-5ton-white.jpeg",
  },
  {
    title: "NEOM Project Material Handling",
    client: "NEOM Contractors",
    category: "Site Deployments" as const,
    description:
      "Fleet of 10 rough-terrain forklifts deployed to support material handling at a major NEOM construction site.",
    image: "/images/real/heli-10ton-red.jpeg",
  },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/*  Gallery Card                                                       */
/* ------------------------------------------------------------------ */
function GalleryCard({
  item,
}: {
  item: (typeof GALLERY_ITEMS)[number];
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow card-hover-lift"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
          <Eye className="w-8 h-8 text-white mb-3" />
          <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
          <p className="text-primary font-semibold text-sm">{item.client}</p>
        </div>
      </div>

      {/* Card content */}
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
export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom section-padding relative z-10 text-center">
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
            See Our Work in Action
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            From warehouse operations to heavy lifting &mdash; explore real rental
            projects delivered by ForkliftPro across Jeddah and Western Saudi Arabia.
          </motion.p>
        </div>
      </section>

      {/* ---- Gallery Grid ---- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {CATEGORIES.map((category) => {
              const count =
                category === "All"
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((item) => item.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                  <span
                    className={`ml-1.5 text-xs ${
                      activeCategory === category
                        ? "text-white/80"
                        : "text-gray-400"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <GalleryCard
                  key={`${item.category}-${item.title}`}
                  item={item}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Whether it&apos;s a single forklift rental or a full fleet deployment, our
              team is ready to deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get a Free Quote
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
