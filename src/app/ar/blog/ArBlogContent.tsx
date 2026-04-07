"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Clock,
  User,
  ArrowLeft,
  Search,
  TrendingUp,
  Shield,
  Lightbulb,
  Newspaper,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
/*  Arabic category mapping                                            */
/* ------------------------------------------------------------------ */
type Category = "الكل" | "نصائح" | "أخبار الصناعة" | "السلامة" | "أدلة";

const CATEGORIES: Category[] = [
  "الكل",
  "نصائح",
  "أخبار الصناعة",
  "السلامة",
  "أدلة",
];

const CATEGORY_MAP: Record<string, Category> = {
  Tips: "نصائح",
  "Industry News": "أخبار الصناعة",
  Safety: "السلامة",
  Guides: "أدلة",
};

const CATEGORY_ICONS: Record<Category, React.ElementType> = {
  "الكل": BookOpen,
  "نصائح": Lightbulb,
  "أخبار الصناعة": Newspaper,
  "السلامة": Shield,
  "أدلة": TrendingUp,
};

const CATEGORY_COLORS: Record<string, string> = {
  "نصائح": "bg-amber-100 text-amber-800",
  "أخبار الصناعة": "bg-blue-100 text-blue-800",
  "السلامة": "bg-red-100 text-red-800",
  "أدلة": "bg-green-100 text-green-800",
};

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function ArBlogContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const arCategory = CATEGORY_MAP[post.category];
    const categoryMatch =
      activeCategory === "الكل" || arCategory === activeCategory;
    const searchMatch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 py-28 lg:py-36 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <BookOpen className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            المدونة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            نصائح وأدلة شاملة حول تأجير الرافعات الشوكية والسلامة المهنية
            وأحدث أخبار الصناعة.
          </motion.p>
        </div>
      </section>

      {/* ---- Filters ---- */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[64px] lg:top-[104px] z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {CATEGORIES.map((cat) => {
                const Icon = CATEGORY_ICONS[cat];
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeCategory === cat
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في المقالات..."
                className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Blog Grid ---- */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">
                لا توجد مقالات
              </h3>
              <p className="text-gray-500">
                جرب تغيير الفئة أو كلمات البحث
              </p>
            </div>
          ) : (
            <AnimatedSection>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => {
                  const arCategory = CATEGORY_MAP[post.category] || post.category;
                  return (
                    <motion.div
                      key={post.slug}
                      variants={fadeUp}
                      className="group"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow h-full"
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <span
                              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                                CATEGORY_COLORS[arCategory] ||
                                "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {arCategory}
                            </span>
                            <span className="text-xs text-gray-400 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="font-bold text-secondary text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <User className="w-3.5 h-3.5" />
                              <span>{post.author}</span>
                            </div>
                            <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                              اقرأ المزيد
                              <ArrowLeft className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
