import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  ArrowRight,
  Phone,
  Truck,
  Shield,
  Clock,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas - Forklift Rental & Services Across Jeddah & Western Saudi Arabia",
  description:
    "ForkliftPro Rentals covers Jeddah and Western Saudi Arabia. Forklift rental in Jeddah, Makkah, Madinah, Rabigh, KAEC, Taif, Yanbu, and Al Lith.",
  keywords: [
    "forklift rental Jeddah",
    "forklift rental Makkah",
    "forklift rental Madinah",
    "forklift rental Rabigh",
    "forklift service Saudi Arabia",
    "forklift rental KAEC",
    "forklift hire Jeddah",
  ],
  openGraph: {
    title: "Service Areas | ForkliftPro Rentals - Serving Jeddah & Western Saudi Arabia",
    description:
      "Forklift rental across Jeddah and Western Saudi Arabia. Fast delivery and 24/7 support.",
    type: "website",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/service-areas",
  },
};

const CITY_DESCRIPTIONS: Record<string, string> = {
  jeddah:
    "Our headquarters and primary hub. Same-day delivery for all forklift services across Jeddah and surrounding areas.",
  makkah:
    "Serving Makkah's construction and logistics sector with reliable forklift rental solutions.",
  madinah:
    "Comprehensive forklift services for Madinah's growing industrial and construction projects.",
  rabigh:
    "Supporting Rabigh's industrial and petrochemical sector with a full range of forklift services.",
  kaec:
    "Dedicated forklift support for King Abdullah Economic City's manufacturing and logistics operations.",
  taif:
    "Serving Taif's industrial and agricultural sectors with specialized forklift solutions.",
  yanbu:
    "Premium forklift services for Yanbu's petrochemical, industrial, and port operations.",
  "al-lith":
    "Reliable forklift rental services for Al Lith's growing industrial and commercial operations.",
};

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      {/* Hero Section */}
      <section className="relative bg-[#1A1A2E] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B00] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0066CC] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block bg-[#FF6B00]/20 text-[#FF6B00] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Coverage
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Serving All of
            <br />
            <span className="text-[#FF6B00]">Jeddah &amp; Western Saudi Arabia</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From Jeddah to Makkah, Madinah to Yanbu, ForkliftPro delivers reliable forklift
            services across Western Saudi Arabia. Fast response, local expertise, and 24/7
            emergency support wherever you are.
          </p>
        </div>
      </section>

      {/* Service Coverage Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] mb-6">
              Region-Wide Forklift Services
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With our main hub in Jeddah and service teams strategically positioned across Western Saudi Arabia,
              we guarantee fast forklift delivery and emergency response to every major city and
              industrial zone in the region. Our fleet of {SITE_CONFIG.fleetSize} forklifts and{" "}
              experienced operators are ready to support your
              operations no matter where you are located.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { icon: Truck, label: "Free delivery within Jeddah" },
              { icon: Clock, label: "30-min emergency response" },
              { icon: Shield, label: "24/7 support across the region" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <span className="text-sm font-semibold text-[#1A1A2E]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Cards Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A2E] text-center mb-4">
            Cities We Serve
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Click on any city to learn more about the forklift services we offer in your area,
            including local pricing, availability, and delivery times.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {SERVICE_AREAS.map((area, index) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group block bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#FF6B00]/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B00] transition-colors">
                    <MapPin className="w-5 h-5 text-[#FF6B00] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A2E] group-hover:text-[#FF6B00] transition-colors">
                      {area.city}
                    </h3>
                    {index === 0 && (
                      <span className="text-xs font-semibold text-[#FF6B00]">HQ</span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {CITY_DESCRIPTIONS[area.slug]}
                </p>
                <span className="inline-flex items-center gap-1 text-[#FF6B00] font-semibold text-sm group-hover:gap-2 transition-all">
                  View Services <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Coverage Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#1A1A2E] mb-6">
                Comprehensive Coverage Across the Region
              </h2>
              <p className="text-gray-600 mb-4">
                Our service network covers Jeddah and extends across Western Saudi Arabia.
                With strategically located service teams, we ensure rapid
                response times and reliable delivery schedules regardless of your location.
              </p>
              <p className="text-gray-600 mb-6">
                From the industrial hubs of Jeddah and KAEC to the commercial centers of
                Makkah and Yanbu, our experienced technicians and fleet managers are familiar
                with local conditions and can provide tailored solutions for businesses in every
                city we serve.
              </p>
              <ul className="space-y-3">
                {[
                  "Primary coverage: Jeddah, Makkah, Madinah",
                  "Full service: Rabigh, KAEC, Taif",
                  "Extended coverage: Yanbu, Al Lith",
                  "Custom delivery to any location in Western Saudi Arabia on request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ForkliftPro Service Coverage Map"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B00] to-[#e55f00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Not Sure if We Cover Your Area?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Even if your city is not listed above, we may still be able to serve you. Contact our
            team and we will work out a solution for your forklift needs, wherever you are in
            Saudi Arabia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#FF6B00] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30"
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
