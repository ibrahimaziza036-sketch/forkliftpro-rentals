import type { Metadata } from "next";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schema";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: `Forklift Rental Services | ${SITE_CONFIG.name} — Loading, Unloading, Heavy Lifting`,
  description: `Professional forklift rental services in ${SITE_CONFIG.city}: short-term & long-term rental, loading/unloading, heavy lifting up to ${SITE_CONFIG.maxTonnage} tons, moving & shifting, with experienced operators. Same-day deployment across ${SITE_CONFIG.region}.`,
  openGraph: {
    title: `Complete Forklift Rental Solutions — 1 to ${SITE_CONFIG.maxTonnage} Tons | ${SITE_CONFIG.name}`,
    description: `Rent forklifts with operators in ${SITE_CONFIG.region}. Daily, weekly & monthly plans. Loading, unloading, heavy lifting, factory relocation. ${SITE_CONFIG.fleetSize} forklifts ready.`,
    images: ["/images/hero/forklift-hero-1.jpg"],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/services",
    languages: { en: "https://forkliftprorentals.com/services", ar: "https://forkliftprorentals.com/ar/services" },
  },
};

export default function ServicesPage() {
  return (
    <>
      {SERVICES.map((service) => (
        <script
          key={service.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateServiceSchema({
                name: service.title,
                description: service.shortDescription,
                url: `/services#${service.slug}`,
              })
            ),
          }}
        />
      ))}
      <ServicesContent />
    </>
  );
}
