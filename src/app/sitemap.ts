import type { MetadataRoute } from "next";

const BASE_URL = "https://forkliftprorentals.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const cities = [
    "jeddah",
    "makkah",
    "madinah",
    "rabigh",
    "kaec",
    "taif",
    "yanbu",
    "al-lith",
  ];

  const blogSlugs = [
    "ultimate-guide-to-forklift-rental",
    "forklift-rental-checklist-before-you-sign",
    "electric-vs-diesel-forklift-which-one-is-right",
    "forklift-safety-tips-for-warehouse-operations",
    "how-to-reduce-forklift-maintenance-costs",
    "forklift-rental-vs-buying-which-saves-more",
    "top-forklift-brands-available-for-rental",
    "how-to-choose-right-forklift-capacity",
    "forklift-operator-training-what-you-need-to-know",
  ];

  /* ------------------------------------------------------------------ */
  /*  Bilingual pages (EN ↔ AR hreflang alternates)                     */
  /* ------------------------------------------------------------------ */
  const bilingualPages: { en: string; ar: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { en: "", ar: "/ar", priority: 1.0, changeFrequency: "weekly" },
    { en: "/services", ar: "/ar/services", priority: 0.9, changeFrequency: "monthly" },
    { en: "/about", ar: "/ar/about", priority: 0.7, changeFrequency: "monthly" },
    { en: "/contact", ar: "/ar/contact", priority: 0.7, changeFrequency: "monthly" },
    { en: "/gallery", ar: "/ar/gallery", priority: 0.7, changeFrequency: "monthly" },
    { en: "/blog", ar: "/ar/blog", priority: 0.8, changeFrequency: "weekly" },
  ];

  const bilingualEntries = bilingualPages.flatMap(({ en, ar, priority, changeFrequency }) => [
    {
      url: `${BASE_URL}${en}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${BASE_URL}${en}`,
          ar: `${BASE_URL}${ar}`,
        },
      },
    },
    {
      url: `${BASE_URL}${ar}`,
      lastModified: currentDate,
      changeFrequency,
      priority: priority * 0.9,
      alternates: {
        languages: {
          en: `${BASE_URL}${en}`,
          ar: `${BASE_URL}${ar}`,
        },
      },
    },
  ]);

  /* ------------------------------------------------------------------ */
  /*  English-only pages                                                 */
  /* ------------------------------------------------------------------ */
  const englishOnlyPages = [
    // FAQ
    {
      url: `${BASE_URL}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },

    // Service areas - main page
    {
      url: `${BASE_URL}/service-areas`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },

    // Service areas - city pages
    ...cities.map((city) => ({
      url: `${BASE_URL}/service-areas/${city}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),

    // Blog posts
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Legal pages
    {
      url: `${BASE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...bilingualEntries, ...englishOnlyPages];
}
