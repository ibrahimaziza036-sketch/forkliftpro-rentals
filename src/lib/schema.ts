import { SITE_CONFIG } from "@/lib/constants";

const BASE_URL = "https://forkliftprorentals.com";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    name: SITE_CONFIG.name,
    description:
      "Jeddah's leading forklift rental company. Daily, weekly, and monthly forklift rentals with delivery across Jeddah, Saudi Arabia. Over 15 years of experience with 50+ forklifts in fleet.",
    url: BASE_URL,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${BASE_URL}/images/og-image.jpg`,
    logo: `${BASE_URL}/images/logo-final.png`,
    foundingDate: `${SITE_CONFIG.foundedYear}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Province",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.4858,
      longitude: 39.1925,
    },
    areaServed: [
      { "@type": "City", name: "Jeddah" },
      { "@type": "City", name: "Makkah" },
      { "@type": "City", name: "Madinah" },
      { "@type": "City", name: "Rabigh" },
      { "@type": "City", name: "KAEC" },
      { "@type": "City", name: "Taif" },
      { "@type": "City", name: "Yanbu" },
      { "@type": "City", name: "Al Lith" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Forklift Rental Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Daily Forklift Rental",
          description:
            "Short-term daily forklift rentals for projects, events, and temporary needs across Jeddah and Western Saudi Arabia.",
        },
        {
          "@type": "OfferCatalog",
          name: "Weekly Forklift Rental",
          description:
            "Flexible weekly forklift rental plans with delivery and pickup included.",
        },
        {
          "@type": "OfferCatalog",
          name: "Monthly Forklift Rental",
          description:
            "Cost-effective long-term monthly forklift rentals for warehouses, factories, and construction sites.",
        },
        {
          "@type": "OfferCatalog",
          name: "Specialized Forklift Rental",
          description:
            "Reach trucks, pallet jacks, rough terrain forklifts, and other specialized equipment for rent.",
        },
      ],
    },
    sameAs: [
      SITE_CONFIG.socialLinks.facebook,
      SITE_CONFIG.socialLinks.instagram,
      SITE_CONFIG.socialLinks.linkedin,
      SITE_CONFIG.socialLinks.youtube,
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: SITE_CONFIG.name,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logo-final.png`,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Arabic"],
        areaServed: "SA",
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "emergency",
        availableLanguage: ["English", "Arabic"],
        areaServed: "SA",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    sameAs: [
      SITE_CONFIG.socialLinks.facebook,
      SITE_CONFIG.socialLinks.instagram,
      SITE_CONFIG.socialLinks.linkedin,
      SITE_CONFIG.socialLinks.youtube,
    ],
    foundingDate: `${SITE_CONFIG.foundedYear}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Province",
      addressCountry: "SA",
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: SITE_CONFIG.name,
    url: BASE_URL,
    description:
      "ForkliftPro Rentals — Jeddah's leading forklift rental company. Serving Jeddah, Makkah, Madinah, Rabigh, KAEC, Taif, Yanbu, and Al Lith.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url.startsWith("http")
      ? service.url
      : `${BASE_URL}${service.url}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: SITE_CONFIG.name,
    },
    areaServed: {
      "@type": "State",
      name: "Jeddah, Saudi Arabia",
    },
    serviceType: service.name,
  };
}

export function generateFAQSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
