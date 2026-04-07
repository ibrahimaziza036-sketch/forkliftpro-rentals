"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  HelpCircle,
  Search,
} from "lucide-react";
import { SITE_CONFIG, FAQ_ITEMS } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type Category = "All" | "Rental" | "Capacity" | "General";

const CATEGORIES: Category[] = [
  "All",
  "Rental",
  "Capacity",
  "General",
];

const CATEGORY_COLORS: Record<string, string> = {
  Rental: "bg-primary/10 text-primary",
  Capacity: "bg-accent/10 text-accent",
  General: "bg-gray-100 text-gray-600",
};

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ------------------------------------------------------------------ */
/*  FAQ Accordion Item                                                 */
/* ------------------------------------------------------------------ */
function FAQItem({
  question,
  answer,
  category,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-sm transition-shadow">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <span
              className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                CATEGORY_COLORS[category] || CATEGORY_COLORS.General
              }`}
            >
              {category}
            </span>
          </div>
          <h3 className="text-base md:text-lg font-semibold text-secondary pr-4">
            {question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  JSON-LD FAQ Schema                                                 */
/* ------------------------------------------------------------------ */
function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFAQs =
    activeCategory === "All"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  return (
    <>
      <FAQSchema />

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
            <HelpCircle className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Find answers to common questions about our forklift rental services,
            pricing, delivery, and rental terms.
          </motion.p>
        </div>
      </section>

      {/* ---- FAQ Content ---- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
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
                  ? FAQ_ITEMS.length
                  : FAQ_ITEMS.filter((item) => item.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
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

          {/* FAQ Items */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="space-y-4"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFAQs.map((item, index) => (
                  <motion.div
                    key={`${item.category}-${item.question}`}
                    variants={fadeUp}
                  >
                    <FAQItem
                      question={item.question}
                      answer={item.answer}
                      category={item.category}
                      isOpen={openIndex === index}
                      onToggle={() => handleToggle(index)}
                    />
                  </motion.div>
                ))}

                {filteredFAQs.length === 0 && (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      No questions found in this category.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
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
              Still Have Questions?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Our team is happy to help. Contact us directly and we&apos;ll get you the
              answers you need &mdash; fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
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
