import Link from "next/link";
import type { Metadata } from "next";
import {
  Clock,
  User,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Phone,
  BookOpen,
  Tag,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

/* ------------------------------------------------------------------ */
/*  Blog post data — imported from shared source                       */
/* ------------------------------------------------------------------ */
const ALL_POSTS = BLOG_POSTS;

const BLOG_OG_IMAGES = [
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
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return ALL_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Blog Post Not Found" };
  }
  const postIndex = ALL_POSTS.findIndex((p) => p.slug === slug);
  return {
    title: `${post.title} | ForkliftPro Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author],
      tags: [post.category, "forklift rental", "Saudi Arabia", "Jeddah"],
      images: [
        {
          url: BLOG_OG_IMAGES[postIndex % BLOG_OG_IMAGES.length],
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://forkliftprorentals.com/blog/${slug}`,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Table of contents for Ultimate Guide                               */
/* ------------------------------------------------------------------ */
const TABLE_OF_CONTENTS = [
  { id: "types-of-rental", label: "Types of Forklift Rental" },
  { id: "pricing-factors", label: "Pricing Factors" },
  { id: "how-to-choose", label: "How to Choose the Right Forklift" },
  { id: "rental-process", label: "The Rental Process" },
  { id: "first-time-tips", label: "Tips for First-Time Renters" },
  { id: "common-mistakes", label: "Common Mistakes to Avoid" },
  { id: "conclusion", label: "Conclusion" },
];

/* ------------------------------------------------------------------ */
/*  Blog post page component                                           */
/* ------------------------------------------------------------------ */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you are looking for does not exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e55f00] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = ALL_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const isUltimateGuide = slug === "ultimate-guide-to-forklift-rental";
  const ContentComponent = CONTENT_MAP[slug] || null;

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: {
              "@type": "Organization",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "ForkliftPro Rentals",
              logo: {
                "@type": "ImageObject",
                url: "https://forkliftprorentals.com/images/logo-final.png",
              },
            },
            datePublished: post.isoDate,
            dateModified: post.isoDate,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://forkliftprorentals.com/blog/${slug}`,
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${slug}` },
          ])),
        }}
      />
      {/* Hero */}
      <section className="bg-[#1A1A2E] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF6B00] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#FF6B00]/20 text-[#FF6B00]">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-400 text-sm">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
                <User className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div>
                <p className="text-white font-semibold">{post.author}</p>
                <p className="text-xs">{SITE_CONFIG.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content area with sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
            {/* Sidebar - Table of Contents (only for Ultimate Guide) */}
            {isUltimateGuide && (
              <aside className="lg:w-72 shrink-0">
                <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                  <h3 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-wider mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {TABLE_OF_CONTENTS.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#FF6B00] transition-colors py-1"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#FF6B00]" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Main content */}
            <article className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100">
                {ContentComponent ? (
                  <ContentComponent />
                ) : (
                  <UltimateGuideContent />
                )}
              </div>

              {/* Author Box */}
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 mt-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#e55f00] flex items-center justify-center shrink-0">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A2E]">ForkliftPro Team</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {SITE_CONFIG.name} - Content Team
                    </p>
                    <p className="text-gray-600 text-sm">
                      Our team of forklift industry experts shares practical insights and
                      in-depth knowledge gained from over {new Date().getFullYear() - SITE_CONFIG.foundedYear} years of
                      experience serving businesses across Jeddah, Saudi Arabia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Internal CTA Banner */}
              <div className="my-12 bg-gradient-to-r from-[#FF6B00] to-[#e55f00] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Need a Forklift in Jeddah?</h3>
                <p className="text-white/90 mb-6 max-w-lg mx-auto">
                  Get a free quote for daily, weekly, or monthly forklift rental. Same-day delivery available across Jeddah.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF6B00] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                    Get Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
                    View Our Services
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#FF6B00] to-[#e55f00] rounded-2xl shadow-xl p-8 md:p-12 mt-8 text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  Ready to Rent? Get a Free Quote
                </h2>
                <p className="text-white/90 mb-6 max-w-lg mx-auto">
                  Whether you need a single forklift for a day or a full fleet for a long-term
                  project, we have you covered. Contact us today for a no-obligation quote.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-[#FF6B00] px-8 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30"
                  >
                    <Phone className="w-4 h-4" /> {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] text-center mb-10">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group block bg-[#F8F9FA] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="h-36 bg-gradient-to-br from-[#FF6B00]/80 to-[#0066CC]/80 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-white/30" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-[#FF6B00]">{related.category}</span>
                  <h3 className="text-base font-bold text-[#1A1A2E] mt-1 mb-2 group-hover:text-[#FF6B00] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{related.date}</span>
                    <span>{related.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/*  Content map — maps slugs to content components                     */
/* ------------------------------------------------------------------ */
const CONTENT_MAP: Record<string, React.FC> = {
  "forklift-rental-checklist-before-you-sign": ChecklistContent,
  "electric-vs-diesel-forklift-which-one-is-right": ElectricVsDieselContent,
  "how-much-does-it-cost-to-rent-a-forklift": RentalCostContent,
  "benefits-of-renting-vs-buying-a-forklift": RentVsBuyContent,
  "forklift-rental-safety-essentials": SafetyContent,
  "how-to-choose-the-right-forklift-for-your-business": ChooseForkliftContent,
  "why-forklift-rental-demand-is-surging-in-saudi-arabia": DemandSurgingContent,
  "short-term-vs-long-term-forklift-rental": ShortVsLongContent,
};

/* ------------------------------------------------------------------ */
/*  Ultimate Guide content                                             */
/* ------------------------------------------------------------------ */
function UltimateGuideContent() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        Renting a forklift is one of the most practical and cost-effective decisions a business can
        make, especially when dealing with short-term projects, seasonal demand spikes, or when
        you want to test a particular forklift model before committing to a purchase. In this
        comprehensive guide, we cover everything you need to know about forklift rental in
        Saudi Arabia.
      </p>

      <h2 id="types-of-rental" className="text-2xl font-bold mt-10 mb-4">
        Types of Forklift Rental
      </h2>
      <p>
        Understanding the different rental options is the first step. Forklift rental companies in Saudi Arabia typically offer three main types of rental arrangements.
      </p>
      <p>
        <strong>Daily Rental</strong> is ideal for one-off jobs such as unloading a large shipment or handling a single-day warehouse reorganization. Daily rates tend to be higher per-day compared to longer terms, but they give maximum flexibility.
      </p>
      <p>
        <strong>Weekly Rental</strong> offers a sweet spot between flexibility and cost savings. A weekly agreement usually provides a 15 to 25 percent discount compared to the equivalent daily rate. This is popular among construction companies handling a specific phase of a project.
      </p>
      <p>
        <strong>Monthly and Long-Term Rental</strong> is the most economical option. Monthly contracts can save up to 40 percent off the daily rate, and many companies include preventive maintenance as part of the package.
      </p>

      <h2 id="pricing-factors" className="text-2xl font-bold mt-10 mb-4">
        Pricing Factors
      </h2>
      <p>
        Forklift rental pricing is influenced by several key factors that every renter should understand before requesting quotes.
      </p>
      <p>
        <strong>Forklift Type and Capacity</strong> is the most significant factor. A basic 3-ton electric model costs significantly less than a 10-ton diesel counterbalance.
      </p>
      <p>
        <strong>Rental Duration</strong> directly affects your per-day cost. Longer periods mean deeper discounts with tiered pricing at seven, fourteen, and thirty day thresholds.
      </p>
      <p>
        <strong>Delivery and Transportation</strong> costs can add up for remote sites. At ForkliftPro, we offer free delivery within Jeddah and transparent pricing for the rest of the region.
      </p>
      <p>
        <strong>Operator Availability</strong> is another factor. Renting with a trained operator adds to the cost but eliminates the risk of improper operation.
      </p>

      <h2 id="how-to-choose" className="text-2xl font-bold mt-10 mb-4">
        How to Choose the Right Forklift
      </h2>
      <p>
        Choosing the correct forklift for your specific application is critical. Renting too small leads to inefficiency and safety risks, while too large wastes money.
      </p>
      <p>
        <strong>Assess your load requirements.</strong> Determine the maximum weight and typical lift height. Always choose a forklift with rated capacity at least 20 percent higher than your maximum anticipated load.
      </p>
      <p>
        <strong>Consider your operating environment.</strong> Indoor operations on smooth floors call for electric forklifts. Outdoor work on uneven ground requires diesel or LPG-powered models.
      </p>
      <p>
        <strong>Evaluate attachment needs.</strong> Standard forks handle most pallet work, but specialized tasks may require side shifters, clamps, or rotators.
      </p>

      <h2 id="rental-process" className="text-2xl font-bold mt-10 mb-4">
        The Rental Process
      </h2>
      <div className="space-y-4 my-6">
        {[
          { step: "1", title: "Inquiry and Consultation", desc: "Contact us by phone, WhatsApp, or website. Share your requirements and our team will recommend the best options." },
          { step: "2", title: "Quote and Agreement", desc: "We provide a detailed quote covering rental rate, delivery, insurance, and included services. Once approved, we finalize the agreement." },
          { step: "3", title: "Delivery and Handover", desc: "We deliver the forklift on the agreed date, conduct a joint inspection, and ensure your operator is comfortable with all controls." },
          { step: "4", title: "Operation and Support", desc: "During the rental, our support team is available for any issues. Monthly rentals include scheduled preventive maintenance." },
          { step: "5", title: "Return and Final Billing", desc: "We pick up the forklift, conduct a final inspection, and issue the closing bill based on actual usage." },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold shrink-0">
              {item.step}
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A2E]">{item.title}</h4>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="first-time-tips" className="text-2xl font-bold mt-10 mb-4">
        Tips for First-Time Renters
      </h2>
      <ul className="space-y-3 my-6">
        {[
          "Always request a site assessment before committing to a forklift type.",
          "Ask about insurance coverage and understand your liability for damage or theft.",
          "Verify that your operators hold valid forklift certifications before the machine arrives.",
          "Negotiate inclusive maintenance for longer-term rentals to avoid unexpected costs.",
          "Document the forklift condition thoroughly during handover with photos.",
          "Plan your logistics in advance and ensure the delivery area is accessible.",
        ].map((tip, i) => (
          <li key={i} className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>

      <h2 id="common-mistakes" className="text-2xl font-bold mt-10 mb-4">
        Common Mistakes to Avoid
      </h2>
      <p>
        <strong>Choosing the cheapest option without considering total cost.</strong> A lower daily rate does not always mean a better deal when hidden charges inflate the final bill.
      </p>
      <p>
        <strong>Renting the wrong type of forklift.</strong> A diesel forklift for indoor use creates exhaust and noise issues. An electric model on rough outdoor terrain cannot handle conditions.
      </p>
      <p>
        <strong>Ignoring maintenance responsibilities.</strong> Daily checks like fluid levels and tire pressure prevent breakdowns and additional charges.
      </p>
      <p>
        <strong>Not having a contingency plan.</strong> Ask about emergency response time and replacement units. Our average response time is 30 minutes within Jeddah.
      </p>

      <h2 id="conclusion" className="text-2xl font-bold mt-10 mb-4">
        Conclusion
      </h2>
      <p>
        Forklift rental is a flexible, cost-effective solution for businesses of all sizes. By understanding rental types, pricing factors, and avoiding common mistakes, you can ensure a smooth experience. Contact ForkliftPro today for a free consultation.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Checklist: 10 Things to Verify Before You Sign                     */
/* ------------------------------------------------------------------ */
function ChecklistContent() {
  const items = [
    { title: "Verify the Forklift Condition", desc: "Before accepting delivery, inspect the forklift thoroughly. Check for visible damage, tire wear, hydraulic leaks, and overall cleanliness. Take dated photos from multiple angles as documentation." },
    { title: "Confirm the Rental Rate Structure", desc: "Understand exactly how you are being charged. Is it a flat daily rate or are there hourly overage charges? Ask about minimum rental periods and whether weekends count as billable days." },
    { title: "Review Insurance Coverage", desc: "Know what the rental company's insurance covers and what falls on you. Most basic policies cover mechanical breakdown but not operator error or negligence damage." },
    { title: "Check Delivery and Pickup Terms", desc: "Confirm who pays for transportation, the delivery radius included in the price, and whether same-day pickup is available when you finish early." },
    { title: "Verify Operator Requirements", desc: "Some rental agreements require certified operators only. If your team lacks certification, ask about operator-inclusive rental packages." },
    { title: "Understand Maintenance Responsibilities", desc: "Clarify who handles daily maintenance like checking oil, coolant, and tire pressure. For long-term rentals, confirm whether scheduled servicing is included." },
    { title: "Review the Damage Policy", desc: "Know what constitutes normal wear versus chargeable damage. Understand the process for reporting incidents and the associated costs." },
    { title: "Check Fuel and Charging Terms", desc: "For diesel forklifts, confirm whether you receive a full tank and must return it full. For electric units, ensure charging infrastructure compatibility." },
    { title: "Confirm Extension and Early Return Policies", desc: "Projects rarely go exactly as planned. Know the process and cost for extending your rental period or returning the forklift earlier than scheduled." },
    { title: "Get Everything in Writing", desc: "Verbal agreements are worth nothing when disputes arise. Ensure every term, rate, and condition is documented in the signed rental agreement." },
  ];

  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        Signing a forklift rental agreement without reading the fine print can lead to unexpected costs, liability issues, and operational headaches. This checklist covers the 10 critical items every business should verify before committing to a rental contract.
      </p>

      <div className="space-y-8 mt-8">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center text-white font-bold shrink-0 text-sm">
              {i + 1}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mt-0 mb-2">{item.title}</h3>
              <p className="text-gray-600 mt-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">The Bottom Line</h2>
      <p>
        A forklift rental agreement is a binding contract. Taking 15 minutes to review these 10 points can save you thousands in unexpected charges and weeks of frustration. At ForkliftPro, we believe in transparent agreements with no hidden costs, so you always know exactly what you are paying for.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Electric vs Diesel Forklift                                        */
/* ------------------------------------------------------------------ */
function ElectricVsDieselContent() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        Choosing between an electric and diesel forklift is one of the most important decisions you will make when renting. Each type has distinct advantages depending on your operating environment, budget, and project requirements.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Electric Forklifts: The Indoor Champion</h2>
      <p>
        Electric forklifts run on rechargeable batteries and produce zero direct emissions. This makes them the only viable option for indoor warehouses, food processing plants, and any enclosed space where air quality matters.
      </p>
      <p>
        <strong>Key advantages:</strong> Zero emissions for indoor use, significantly quieter operation (ideal for noise-sensitive environments), lower operating cost per hour since electricity is cheaper than diesel fuel, and smoother acceleration for precise load positioning.
      </p>
      <p>
        <strong>Limitations:</strong> Battery life typically provides 6 to 8 hours of continuous operation before requiring a recharge cycle of 8 to 12 hours. They struggle on wet, uneven, or loose surfaces. Initial rental rates can be slightly higher due to the cost of battery technology.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Diesel Forklifts: The Outdoor Workhorse</h2>
      <p>
        Diesel forklifts dominate outdoor operations, construction sites, ports, and any environment where raw power and endurance are required. They handle rough terrain, heavy loads, and long shifts without the downtime associated with battery charging.
      </p>
      <p>
        <strong>Key advantages:</strong> Unlimited runtime with quick refueling, superior performance on inclines and rough surfaces, higher lifting capacities available (up to 10 tons and beyond), and proven reliability in extreme heat conditions common in Saudi Arabia.
      </p>
      <p>
        <strong>Limitations:</strong> Exhaust emissions make them unsuitable for enclosed spaces, higher noise levels, greater fuel costs over time, and more frequent maintenance requirements for engines and filters.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Cost Comparison</h2>
      <p>
        For a typical 3-ton forklift on a monthly rental, diesel units generally have a lower base rental rate. However, when you factor in fuel costs, the total operating cost can be higher than an electric unit. Electric forklifts cost less to run per hour but may require investment in charging stations.
      </p>
      <p>
        For outdoor projects or sites without reliable power supply, diesel remains the more practical and cost-effective choice despite higher fuel expenses.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Our Recommendation</h2>
      <p>
        <strong>Choose electric</strong> if you operate primarily indoors, have access to charging infrastructure, and value low noise and zero emissions.
      </p>
      <p>
        <strong>Choose diesel</strong> if you work outdoors, need maximum uptime without charging breaks, handle loads above 5 tons, or operate on rough terrain.
      </p>
      <p>
        Not sure which is right for your project? Contact ForkliftPro for a free site assessment. We will evaluate your specific conditions and recommend the most efficient option.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  How Much Does It Cost to Rent a Forklift                           */
/* ------------------------------------------------------------------ */
function RentalCostContent() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        Forklift rental pricing in Saudi Arabia varies based on multiple factors including forklift type, tonnage, rental duration, and delivery distance. This guide breaks down the real cost structure so you can budget accurately.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What Affects the Price?</h2>
      <p>
        <strong>Tonnage and Type:</strong> A 3-ton diesel forklift is the most affordable standard option. As you move up to 5-ton, 7-ton, and 10-ton capacities, rental rates increase proportionally due to higher machine value and operating costs.
      </p>
      <p>
        <strong>Rental Duration:</strong> Daily rentals carry the highest per-day rate but offer maximum flexibility. Weekly rentals typically save 15 to 25 percent compared to daily rates. Monthly contracts offer the deepest discounts, often 30 to 40 percent below the daily equivalent.
      </p>
      <p>
        <strong>Delivery Location:</strong> Most rental companies include free delivery within a certain radius of their depot. Beyond that, transportation charges apply based on distance. Remote sites or locations requiring special transport arrangements cost more.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Additional Costs to Budget For</h2>
      <p>
        <strong>Operator charges:</strong> If you need a certified operator provided with the forklift, this is charged as a separate daily or monthly fee on top of the machine rental.
      </p>
      <p>
        <strong>Fuel costs:</strong> For diesel forklifts, you are typically responsible for fuel during the rental period. Electric forklift charging costs are usually your responsibility as well.
      </p>
      <p>
        <strong>Insurance and damage waiver:</strong> Basic coverage is often included, but comprehensive coverage for accidental damage may be an optional add-on.
      </p>
      <p>
        <strong>Overtime usage:</strong> Most daily rentals are based on an 8-hour shift. Extended hours may incur additional charges. Clarify this before signing.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">How to Get the Best Deal</h2>
      <ul className="space-y-3 my-6">
        {[
          "Request quotes from at least three rental companies to compare total costs, not just headline rates.",
          "Book longer rental periods when possible since the per-day savings are substantial.",
          "Ask about package deals that bundle delivery, maintenance, and operator costs into one rate.",
          "Time your rental strategically. Off-peak periods may offer better availability and pricing.",
          "Build a relationship with one rental provider for repeat business discounts.",
        ].map((tip, i) => (
          <li key={i} className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>

      <p>
        At ForkliftPro, we offer transparent pricing with no hidden fees. Call us at {SITE_CONFIG.phoneDisplay} for a customized quote based on your specific requirements.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Benefits of Renting vs Buying                                      */
/* ------------------------------------------------------------------ */
function RentVsBuyContent() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        The rent versus buy decision is one every business faces when they need forklift access. While buying makes sense for some large-scale operations, renting offers compelling advantages that most businesses overlook.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Financial Advantages of Renting</h2>
      <p>
        <strong>Zero upfront capital investment.</strong> Purchasing a new 5-ton forklift can cost hundreds of thousands of riyals. Renting converts this large capital expense into a manageable monthly operational cost, freeing up cash for core business activities.
      </p>
      <p>
        <strong>No depreciation risk.</strong> Forklifts lose significant value in their first few years. When you rent, the depreciation risk stays with the rental company while you enjoy full use of the equipment.
      </p>
      <p>
        <strong>Predictable budgeting.</strong> Monthly rental rates are fixed and known in advance. No surprise repair bills, no spare parts inventory to maintain, and no unexpected maintenance costs that blow your budget.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Operational Advantages</h2>
      <p>
        <strong>Flexibility to scale.</strong> Business demands fluctuate. Renting allows you to add forklifts during peak seasons and return them when demand drops, paying only for what you actually use.
      </p>
      <p>
        <strong>Access to modern equipment.</strong> Rental fleets are regularly updated with newer models. You benefit from the latest safety features, fuel efficiency improvements, and ergonomic designs without buying new equipment.
      </p>
      <p>
        <strong>Maintenance is included.</strong> Long-term rental agreements typically include scheduled maintenance performed by factory-trained technicians. This eliminates the need for an in-house maintenance team and spare parts inventory.
      </p>
      <p>
        <strong>Quick replacement for breakdowns.</strong> If a rented forklift breaks down, the rental company provides a replacement, usually within hours. Owned equipment can sit idle for days waiting for parts.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">When Buying Makes Sense</h2>
      <p>
        Buying may be justified when you need the forklift continuously for five or more years, operate in a very specialized niche requiring customized equipment, or when your usage volume makes the per-hour ownership cost lower than rental.
      </p>
      <p>
        For most businesses in Saudi Arabia, especially those in construction, logistics, and warehousing, renting provides the best balance of cost, flexibility, and operational simplicity.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Forklift Rental Safety Essentials                                  */
/* ------------------------------------------------------------------ */
function SafetyContent() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        Forklift accidents cause thousands of workplace injuries globally every year. When renting a forklift, safety is not just the operator&apos;s responsibility. It is a shared obligation between the rental company, the renter, and every person on the worksite.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Pre-Delivery Safety Checks</h2>
      <p>
        Before the forklift arrives at your site, ensure you have completed these preparations. Designate a safe unloading area away from pedestrian traffic. Verify that the ground surface can support the forklift weight. Clear the intended operating area of obstacles, debris, and trip hazards.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Operator Requirements</h2>
      <p>
        Only trained and certified operators should operate a forklift. In Saudi Arabia, operators should hold valid certification from a recognized training program. Never allow untrained personnel to operate the equipment, even for short moves. The liability and safety risks are simply not worth it.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Daily Pre-Operation Inspection</h2>
      <p>
        Every shift should begin with a thorough walk-around inspection. The operator must check tire condition and pressure, hydraulic fluid levels, brake function, steering responsiveness, horn and lights, fork condition for cracks or bends, and seatbelt function.
      </p>
      <ul className="space-y-3 my-6">
        {[
          "Check tire condition and inflation before every shift.",
          "Test brakes, steering, and horn before moving any load.",
          "Inspect forks for cracks, bends, or excessive wear.",
          "Verify hydraulic hoses for leaks or damage.",
          "Ensure all lights, mirrors, and warning devices work properly.",
          "Confirm the seatbelt latches securely.",
          "Check fluid levels: engine oil, coolant, hydraulic fluid.",
        ].map((tip, i) => (
          <li key={i} className="flex gap-3 items-start">
            <CheckCircle className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
            <span className="text-gray-700">{tip}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Worksite Safety Rules</h2>
      <p>
        <strong>Speed limits:</strong> Enforce a maximum speed appropriate for your worksite conditions. Indoor operations should typically not exceed 8 km/h.
      </p>
      <p>
        <strong>Pedestrian zones:</strong> Establish clearly marked pedestrian walkways separated from forklift traffic areas. Use physical barriers where possible.
      </p>
      <p>
        <strong>Load limits:</strong> Never exceed the rated load capacity shown on the forklift data plate. Overloading is the leading cause of tip-over accidents.
      </p>
      <p>
        <strong>Parking procedure:</strong> Always lower forks to ground level, engage the parking brake, turn off the engine, and remove the key when the forklift is not in use.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Emergency Procedures</h2>
      <p>
        Ensure all operators know what to do in an emergency. If the forklift begins to tip, the operator should never jump. The safest action is to brace, lean away from the direction of the fall, and stay within the operator compartment. Report any incidents immediately to the rental company and your safety officer.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  How to Choose the Right Forklift                                   */
/* ------------------------------------------------------------------ */
function ChooseForkliftContent() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        Selecting the wrong forklift can cost your business thousands in lost productivity, safety incidents, and unnecessary rental expenses. This step-by-step guide helps you evaluate your needs and pick the right machine.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Step 1: Define Your Load Requirements</h2>
      <p>
        Start with the basics. What is the heaviest load you need to lift? What is the maximum height you need to reach? For most warehouse operations, a 3-ton forklift with a standard 3-meter mast is sufficient. Construction sites handling steel beams or heavy equipment typically need 5 to 7-ton capacity. Port and heavy industrial operations may require 10-ton units.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Step 2: Assess Your Operating Environment</h2>
      <p>
        <strong>Indoor warehouses</strong> with smooth concrete floors and climate control are best served by electric forklifts. They produce zero emissions and operate quietly.
      </p>
      <p>
        <strong>Outdoor construction sites</strong> with gravel, sand, or uneven terrain require diesel forklifts with pneumatic tires for traction and stability.
      </p>
      <p>
        <strong>Mixed environments</strong> where the forklift moves between indoor and outdoor areas may benefit from LPG-powered models that balance power with lower emissions.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Step 3: Measure Your Space</h2>
      <p>
        Aisle width is a critical factor. Standard counterbalance forklifts need at least 3.5 meters of aisle width to turn safely. If your aisles are 2.5 meters or narrower, you need a reach truck or narrow-aisle forklift. Trying to squeeze a standard forklift into tight spaces damages racking and inventory.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Step 4: Consider Your Shift Length</h2>
      <p>
        If you run single 8-hour shifts, a standard electric forklift battery will last the entire shift. For double or triple shift operations, you either need spare batteries for quick swaps or should opt for diesel forklifts that can be refueled in minutes.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Step 5: Factor in Attachments</h2>
      <p>
        Beyond standard forks, consider whether you need side shifters for precise pallet placement, fork positioners for varying pallet sizes, clamps for handling barrels or cartons, or paper roll clamps for printing and packaging operations. Not all rental companies stock every attachment, so confirm availability early.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Quick Selection Guide</h2>
      <div className="space-y-4 my-6">
        {[
          { cap: "3 Ton", use: "Standard warehousing, light manufacturing, retail distribution" },
          { cap: "5 Ton", use: "Medium warehouses, construction material handling, container work" },
          { cap: "7 Ton", use: "Heavy industrial, steel fabrication, large construction projects" },
          { cap: "10 Ton", use: "Ports, heavy industry, mega projects, large machinery handling" },
        ].map((item) => (
          <div key={item.cap} className="flex gap-4 items-start bg-gray-50 rounded-xl p-4">
            <div className="w-20 h-10 rounded-lg bg-[#FF6B00] flex items-center justify-center text-white font-bold shrink-0 text-sm">
              {item.cap}
            </div>
            <p className="text-gray-700 mt-0 mb-0">{item.use}</p>
          </div>
        ))}
      </div>

      <p>
        Still unsure? Contact ForkliftPro for a free consultation. We will visit your site, assess your requirements, and recommend the perfect forklift for your operation.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Forklift Rental Demand Is Surging in Saudi Arabia              */
/* ------------------------------------------------------------------ */
function DemandSurgingContent() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        The forklift rental market in Saudi Arabia has experienced remarkable growth, driven by Vision 2030 mega projects, a booming logistics sector, and a fundamental shift in how businesses approach equipment management.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Vision 2030 and Construction Boom</h2>
      <p>
        Saudi Arabia is undergoing the largest construction transformation in its history. Projects like NEOM, The Red Sea Development, Jeddah Tower, and massive infrastructure upgrades across the kingdom have created unprecedented demand for material handling equipment. These projects need hundreds of forklifts for limited durations, making rental far more practical than purchasing.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">E-Commerce and Logistics Expansion</h2>
      <p>
        The Saudi e-commerce market has grown rapidly, accelerated by changing consumer habits. Companies like Noon, Amazon Saudi, and local logistics providers are building and expanding massive fulfillment centers across Jeddah, Riyadh, and Dammam. Each new warehouse needs forklifts from day one, and rental provides the fastest path to operational readiness.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Cost-Conscious Business Culture</h2>
      <p>
        Saudi businesses are increasingly adopting asset-light strategies. Rather than tying up capital in depreciating equipment, companies prefer to rent and allocate those funds to growth initiatives. This shift is particularly strong among small and medium enterprises that cannot justify the capital investment of purchasing forklifts outright.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Port and Industrial Growth</h2>
      <p>
        Jeddah Islamic Port, one of the busiest ports in the region, continues to expand its cargo handling capacity. The industrial cities in Yanbu, Rabigh, and KAEC are attracting new manufacturing and processing facilities. All of this translates to consistent demand for forklift rentals across the western region.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">What This Means for Businesses</h2>
      <p>
        Increasing demand means rental availability can tighten during peak construction seasons. Businesses planning projects should book their forklifts in advance to ensure they get the right equipment at competitive rates. Building a relationship with a reliable local rental provider like ForkliftPro ensures priority access and consistent pricing.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Short-Term vs Long-Term Forklift Rental                            */
/* ------------------------------------------------------------------ */
function ShortVsLongContent() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:text-[#1A1A2E] prose-a:text-[#0066CC] prose-strong:text-[#1A1A2E]">
      <p className="text-xl text-gray-600 leading-relaxed">
        The choice between short-term and long-term forklift rental directly impacts your project budget. Understanding the pricing structures and when each option makes financial sense can save your business significant money.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Short-Term Rental (Daily and Weekly)</h2>
      <p>
        Short-term rental is designed for temporary needs. Whether you are unloading a large shipment, reorganizing a warehouse, setting up an event, or handling a brief construction phase, daily and weekly rentals provide equipment exactly when you need it without long-term commitment.
      </p>
      <p>
        <strong>Best for:</strong> One-off loading and unloading jobs, event setup and teardown, emergency equipment replacement, seasonal peaks lasting less than a month, and project phases with defined start and end dates.
      </p>
      <p>
        <strong>Cost considerations:</strong> Daily rates are the highest per-day cost but provide maximum flexibility. Weekly rates typically offer a 15 to 25 percent discount over the daily equivalent. Most short-term rentals include basic insurance but charge separately for delivery.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Long-Term Rental (Monthly and Annual)</h2>
      <p>
        Long-term rental is the most economical option for ongoing forklift needs. Monthly contracts typically offer 30 to 40 percent savings over daily rates, and annual agreements can push savings even higher. These contracts often include scheduled maintenance, priority support, and free delivery.
      </p>
      <p>
        <strong>Best for:</strong> Continuous warehouse operations, ongoing construction projects spanning months, businesses that need forklifts year-round but prefer not to own, growing companies testing their forklift needs before purchasing, and operations with consistent daily utilization.
      </p>
      <p>
        <strong>Cost considerations:</strong> Lower per-day rate with predictable monthly billing. Maintenance is typically included in the contract. Early termination may carry penalties, so ensure you realistically need the equipment for the full contract duration.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">The Break-Even Point</h2>
      <p>
        As a general rule, if you need a forklift for more than 15 to 20 days within a month, a monthly contract is almost always cheaper than paying daily rates. If your project exceeds 3 months, a long-term agreement unlocks the deepest discounts and best service terms.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Our Recommendation</h2>
      <p>
        Start with a clear timeline for your project. If the duration is uncertain, begin with a weekly rental and negotiate a conversion to monthly rates if the project extends. At ForkliftPro, we make it easy to switch between rental terms as your needs evolve, with no penalty for upgrading to a longer contract.
      </p>
      <p>
        Contact us for a side-by-side cost comparison tailored to your specific project timeline and forklift requirements.
      </p>
    </div>
  );
}
