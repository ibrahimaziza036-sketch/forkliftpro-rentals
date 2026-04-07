"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Clock,
  User,
  ArrowRight,
  Search,
  Mail,
  Tag,
  TrendingUp,
  Shield,
  Lightbulb,
  Newspaper,
} from "lucide-react";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data";

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
/*  Blog data                                                          */
/* ------------------------------------------------------------------ */
type Category = "All" | "Tips" | "Industry News" | "Safety" | "Guides";

const CATEGORIES: Category[] = ["All", "Tips", "Industry News", "Safety", "Guides"];

const CATEGORY_ICONS: Record<Category, React.ElementType> = {
  All: BookOpen,
  Tips: Lightbulb,
  "Industry News": Newspaper,
  Safety: Shield,
  Guides: TrendingUp,
};

const CATEGORY_COLORS: Record<string, string> = {
  Tips: "bg-amber-100 text-amber-800",
  "Industry News": "bg-blue-100 text-blue-800",
  Safety: "bg-red-100 text-red-800",
  Guides: "bg-green-100 text-green-800",
};

const PLACEHOLDER_COLORS: Record<string, string> = {
  Tips: "from-amber-400 to-orange-500",
  "Industry News": "from-blue-400 to-indigo-500",
  Safety: "from-red-400 to-rose-500",
  Guides: "from-green-400 to-emerald-500",
};

const BLOG_IMAGES = [
  "/images/hero/forklift-hero-1.jpg",
  "/images/hero/forklift-hero-2.jpg",
  "/images/hero/forklift-hero-3.jpg",
  "/images/fleet/forklift-fleet-1.jpeg",
  "/images/fleet/forklift-fleet-2.jpeg",
  "/images/fleet/forklift-fleet-3.jpeg",
  "/images/fleet/forklift-fleet-4.jpeg",
  "/images/gallery/forklift-work-1.jpeg",
  "/images/gallery/forklift-work-2.jpeg",
];

/* ------------------------------------------------------------------ */
/*  Blog card component                                                */
/* ------------------------------------------------------------------ */
function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover-glow border-glow">
          {/* Blog post image */}
          <div
            className={`h-48 bg-gradient-to-br ${PLACEHOLDER_COLORS[post.category]} relative overflow-hidden`}
          >
            <Image src={BLOG_IMAGES[index % BLOG_IMAGES.length]} alt={post.title} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            <div className="absolute top-4 left-4">
              <span
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${CATEGORY_COLORS[post.category]}`}
              >
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#FF6B00] transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{post.date}</span>
              <span className="inline-flex items-center gap-1 text-[#FF6B00] font-semibold text-sm group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main blog content (client component)                               */
/* ------------------------------------------------------------------ */
export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1A1A2E] py-20 overflow-hidden">
        <Image src="/images/hero/forklift-hero-2.jpg" alt="" fill className="object-cover opacity-20" sizes="100vw" priority />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B00] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0066CC] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Forklift Industry Insights
              <br />
              <span className="text-[#FF6B00]">& Expert Tips</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Stay ahead with the latest trends, rental advice, safety guides, and
              practical tips from Jeddah&apos;s leading forklift rental team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => {
              const Icon = CATEGORY_ICONS[cat];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat}
                  {cat !== "All" && (
                    <span className="text-xs opacity-70">
                      ({BLOG_POSTS.filter((p) => p.category === cat).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post, idx) => (
                <BlogCard key={post.slug} post={post} index={idx} />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div variants={fadeUp} className="text-center py-20">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-500">No posts found</h3>
                <p className="text-gray-400 mt-2">
                  Try selecting a different category to find what you&apos;re looking for.
                </p>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#1A1A2E]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6B00]/20 mb-6">
              <Mail className="w-8 h-8 text-[#FF6B00]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest forklift industry insights, maintenance tips, and exclusive
              offers delivered straight to your inbox. No spam, just valuable content.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#FF6B00] hover:bg-[#e55f00] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#FF6B00]/25 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 text-xs mt-4">
              By subscribing, you agree to receive our newsletter. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
