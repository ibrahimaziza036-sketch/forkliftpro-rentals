import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  Clock,
  Truck,
  Wrench,
  GraduationCap,
  ShoppingCart,
  Cog,
  BarChart3,
  Siren,
  CheckCircle,
  Building,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG, SERVICE_AREAS, SERVICES } from "@/lib/constants";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

/* ------------------------------------------------------------------ */
/*  City-specific data                                                 */
/* ------------------------------------------------------------------ */
const CITY_DETAILS: Record<
  string,
  {
    description: string;
    industries: string[];
    highlights: string[];
  }
> = {
  jeddah: {
    description:
      "As our headquarters, Jeddah receives the fastest service and widest selection of forklifts. With our fleet stationed at our main facility, we offer same-day delivery across Jeddah, including all industrial areas and commercial zones. Our team of locally based technicians ensures a 30-minute emergency response time anywhere in the city.",
    industries: [
      "Port and logistics operations",
      "Warehousing and distribution centers",
      "Construction and real estate",
      "Manufacturing facilities",
      "Cold storage and food processing",
      "Retail and commercial operations",
    ],
    highlights: [
      "Same-day forklift delivery across all of Jeddah",
      "30-minute emergency response guaranteed",
      "Dedicated account managers for Jeddah clients",
      "Free on-site consultation and assessment",
    ],
  },
  makkah: {
    description:
      "ForkliftPro provides reliable forklift services across Makkah, supporting the city's massive construction projects, hospitality logistics, and commercial operations. Our team understands the unique material handling demands of this sacred city and provides professional, respectful service.",
    industries: [
      "Construction and development projects",
      "Hospitality and hotel logistics",
      "Commercial warehousing",
      "Retail distribution centers",
      "Infrastructure development",
      "Event and seasonal logistics",
    ],
    highlights: [
      "Fast delivery from our Jeddah hub",
      "Experience with large-scale construction projects",
      "Flexible rental terms for seasonal demand",
      "Certified operators familiar with local regulations",
    ],
  },
  madinah: {
    description:
      "ForkliftPro extends its professional forklift services to Madinah, supporting the city's growing industrial and commercial sectors. From construction projects to warehouse operations, we provide the same reliable service that our Jeddah clients enjoy.",
    industries: [
      "Construction and infrastructure",
      "Warehousing and logistics",
      "Food processing and distribution",
      "Retail and commercial operations",
      "Hospitality sector logistics",
      "Manufacturing facilities",
    ],
    highlights: [
      "Reliable delivery to Madinah",
      "Full range of forklift sizes available",
      "Experienced operators for all job types",
      "Flexible rental durations",
    ],
  },
  rabigh: {
    description:
      "Rabigh's petrochemical and industrial sector demands reliable material handling equipment. ForkliftPro serves Rabigh's refineries, manufacturing plants, and industrial facilities with a comprehensive range of forklift services designed for heavy-duty environments.",
    industries: [
      "Petrochemical and refinery operations",
      "Industrial manufacturing",
      "Construction projects",
      "Logistics and warehousing",
      "Maintenance and turnaround projects",
      "Port and cargo operations",
    ],
    highlights: [
      "Heavy-duty forklift specialists for industrial sites",
      "Experience with petrochemical facility requirements",
      "Custom maintenance plans for continuous operations",
      "Safety-certified operators for industrial environments",
    ],
  },
  kaec: {
    description:
      "King Abdullah Economic City is a rapidly growing hub for manufacturing, logistics, and commerce. ForkliftPro supports KAEC's diverse industrial base with forklift rental services tailored to the economic city's modern facilities and high standards.",
    industries: [
      "Manufacturing and assembly",
      "Logistics and distribution",
      "Pharmaceutical facilities",
      "Food processing plants",
      "Automotive and engineering",
      "Port and shipping operations",
    ],
    highlights: [
      "Service tailored to KAEC's modern industrial zones",
      "Quick deployment from our regional network",
      "Competitive pricing for industrial estate tenants",
      "Full range of 3 to 10 ton forklifts available",
    ],
  },
  taif: {
    description:
      "ForkliftPro provides professional forklift services to Taif's industrial and agricultural sectors. From food processing facilities to construction projects in this highland city, we deliver reliable equipment and experienced operators.",
    industries: [
      "Agricultural processing and packaging",
      "Food and beverage production",
      "Construction and real estate",
      "Industrial manufacturing",
      "Retail and commercial logistics",
      "Government and institutional projects",
    ],
    highlights: [
      "Regular service to Taif from our Jeddah hub",
      "Specialized forklifts for agricultural operations",
      "Competitive pricing for local businesses",
      "Flexible rental terms for project-based work",
    ],
  },
  yanbu: {
    description:
      "Yanbu's major petrochemical complexes and industrial zones require reliable material handling solutions. ForkliftPro delivers premium forklift services to Yanbu, including heavy-duty machines for industrial applications and standard forklifts for warehouse operations.",
    industries: [
      "Petrochemical plants",
      "Refinery operations",
      "Port and cargo handling",
      "Industrial manufacturing",
      "Construction projects",
      "Maintenance and shutdown services",
    ],
    highlights: [
      "Heavy-duty forklifts for industrial applications",
      "Experience with petrochemical and port operations",
      "Dedicated service for shutdown and turnaround projects",
      "Full safety compliance and insurance coverage",
    ],
  },
  "al-lith": {
    description:
      "ForkliftPro extends its forklift rental services to Al Lith, supporting the area's growing commercial and industrial operations. We provide the same professional service and well-maintained equipment that businesses across the region trust.",
    industries: [
      "Commercial operations",
      "Construction projects",
      "Logistics and warehousing",
      "Agricultural operations",
      "Small and medium enterprises",
      "Local industrial facilities",
    ],
    highlights: [
      "Affordable rental plans for local businesses",
      "Service from our Jeddah headquarters",
      "Flexible rental durations",
      "Reliable equipment and professional operators",
    ],
  },
};

const CITY_FAQS: Record<string, { question: string; answer: string }[]> = {
  jeddah: [
    { question: "How much does it cost to rent a forklift in Jeddah?", answer: "Forklift rental in Jeddah starts from competitive daily rates for 3-ton forklifts. Pricing depends on tonnage (3T, 5T, 7T, 10T), rental duration, and whether you need an operator. Contact us for a free custom quote." },
    { question: "Can I get same-day forklift delivery in Jeddah?", answer: "Yes! As our headquarters, Jeddah gets same-day delivery for most forklift types. Call or WhatsApp us before 12 PM for same-day dispatch." },
    { question: "Do you provide forklift operators in Jeddah?", answer: "Yes, every rental includes an experienced, safety-certified operator. You can also rent the forklift standalone if you have your own licensed operators." },
    { question: "What areas in Jeddah do you serve?", answer: "We serve all of Jeddah including Industrial Area, Al Hamdaniyah, Al Safa, Al Rawdah, Al Khalidiyyah, Jeddah Islamic Port, and all commercial zones." },
  ],
  makkah: [
    { question: "Do you deliver forklifts to Makkah?", answer: "Yes, we deliver forklifts from our Jeddah hub to Makkah. Delivery typically takes 2-4 hours depending on location within Makkah." },
    { question: "What types of forklifts are available in Makkah?", answer: "We offer 3-ton, 5-ton, 7-ton, and 10-ton forklifts in Makkah, suitable for construction, warehousing, and commercial operations." },
    { question: "Can I rent a forklift for construction projects in Makkah?", answer: "Absolutely. We specialize in construction site forklift rentals with experienced operators familiar with Makkah's construction requirements." },
    { question: "What is the minimum rental period in Makkah?", answer: "Our minimum rental period is one day. We also offer weekly, monthly, and annual rental plans with better rates for longer commitments." },
  ],
  madinah: [
    { question: "How quickly can I get a forklift in Madinah?", answer: "We typically arrange forklift delivery to Madinah within 24 hours. For urgent needs, contact us directly for fastest availability." },
    { question: "Do you offer long-term forklift rental in Madinah?", answer: "Yes, we offer monthly and annual rental plans in Madinah with significant cost savings compared to daily rates." },
    { question: "What industries do you serve in Madinah?", answer: "We serve construction, warehousing, food processing, retail distribution, hospitality logistics, and manufacturing in Madinah." },
    { question: "Is maintenance included in Madinah forklift rentals?", answer: "Yes, all maintenance and repairs are included at no extra cost. If a forklift has issues, we dispatch a technician or provide a replacement." },
  ],
  rabigh: [
    { question: "Do you serve the Rabigh industrial zone?", answer: "Yes, we serve all industrial areas in Rabigh including petrochemical facilities, refineries, and manufacturing plants." },
    { question: "Can you provide heavy-duty forklifts in Rabigh?", answer: "Yes, we offer up to 10-ton capacity forklifts suitable for heavy industrial applications in Rabigh's petrochemical sector." },
    { question: "What safety certifications do your operators have?", answer: "Our operators hold OSHA-equivalent safety certifications and are trained specifically for industrial environments including petrochemical facilities." },
    { question: "Do you offer emergency forklift service in Rabigh?", answer: "Yes, we provide 24/7 emergency service. Call our hotline for immediate assistance with breakdowns or urgent rental needs." },
  ],
  kaec: [
    { question: "Do you provide forklifts in King Abdullah Economic City?", answer: "Yes, we actively serve KAEC's industrial zones, logistics hubs, and manufacturing facilities with a full range of forklifts." },
    { question: "What makes your KAEC service different?", answer: "We understand KAEC's modern industrial standards and provide well-maintained equipment that meets the economic city's requirements." },
    { question: "Can I rent multiple forklifts for my KAEC facility?", answer: "Yes, we offer fleet rental packages with dedicated account management for multi-forklift operations." },
    { question: "Do you serve KAEC's port operations?", answer: "Yes, we provide forklifts for port and shipping operations within KAEC, including container handling equipment." },
  ],
  taif: [
    { question: "How do you serve Taif from Jeddah?", answer: "We have regular scheduled deliveries to Taif from our Jeddah hub. Delivery typically takes 3-5 hours." },
    { question: "Do you offer forklifts for agricultural operations in Taif?", answer: "Yes, we provide specialized forklifts suitable for Taif's agricultural processing and packaging facilities." },
    { question: "What rental plans are available in Taif?", answer: "We offer daily, weekly, monthly, and annual plans in Taif. Longer commitments receive significantly better rates." },
    { question: "Is operator training included for Taif rentals?", answer: "Yes, our operators come fully trained and certified. We also provide brief on-site safety orientation for your team." },
  ],
  yanbu: [
    { question: "Can you handle petrochemical facility requirements in Yanbu?", answer: "Yes, we have extensive experience serving Yanbu's petrochemical complexes with safety-certified operators and appropriate equipment." },
    { question: "Do you provide forklifts for Yanbu port operations?", answer: "Yes, we offer forklifts for cargo handling, container operations, and port logistics in Yanbu." },
    { question: "What about shutdown and turnaround projects in Yanbu?", answer: "We specialize in providing multiple forklifts for plant shutdown and turnaround projects with flexible rental terms." },
    { question: "Is 24/7 support available in Yanbu?", answer: "Yes, our emergency hotline is available 24/7. For Yanbu clients, we maintain priority response for industrial operations." },
  ],
  "al-lith": [
    { question: "Do you deliver forklifts to Al Lith?", answer: "Yes, we deliver forklifts to Al Lith from our Jeddah headquarters with regular service routes." },
    { question: "What forklift sizes are available in Al Lith?", answer: "We offer our full range of 3-ton to 10-ton forklifts for Al Lith operations." },
    { question: "Are there special rates for Al Lith businesses?", answer: "We offer competitive rates for Al Lith businesses, especially for weekly and monthly rentals." },
    { question: "Can I get an operator with the forklift in Al Lith?", answer: "Yes, experienced operators are included with every rental in Al Lith." },
  ],
};

const SERVICE_ICON_MAP: Record<string, React.ElementType> = {
  Truck,
  Wrench,
  GraduationCap,
  ShoppingCart,
  Cog,
  BarChart3,
  Siren,
};

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */
export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === city);
  if (!area) {
    return { title: "Service Area Not Found" };
  }
  return {
    title: `Forklift Rental & Services in ${area.city} | ForkliftPro`,
    description: `Professional forklift rental in ${area.city}. Fast delivery, 24/7 support, and experienced operators. Contact ForkliftPro Rentals today.`,
    keywords: [
      `forklift rental ${area.city}`,
      `forklift hire ${area.city}`,
      `forklift services ${area.city}`,
      `رافعة شوكية للإيجار ${area.city === "Jeddah" ? "جدة" : area.city === "Makkah" ? "مكة" : area.city === "Madinah" ? "المدينة" : area.city}`,
      `تأجير رافعة شوكية ${area.city === "Jeddah" ? "جدة" : area.city === "Makkah" ? "مكة" : area.city === "Madinah" ? "المدينة" : area.city}`,
    ],
    openGraph: {
      title: `Forklift Rental & Services in ${area.city} | ForkliftPro`,
      description: `Professional forklift rental in ${area.city}. Jeddah's trusted forklift rental partner.`,
      type: "website",
    },
    alternates: {
      canonical: `https://forkliftprorentals.com/service-areas/${city}`,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  City page component                                                */
/* ------------------------------------------------------------------ */
export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === city);

  if (!area) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">City Not Found</h1>
          <p className="text-gray-600 mb-6">
            We could not find information for this service area.
          </p>
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e55f00] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> View All Service Areas
          </Link>
        </div>
      </main>
    );
  }

  const details = CITY_DETAILS[area.slug] || {
    description: `ForkliftPro provides professional forklift rental services in ${area.city}.`,
    industries: [
      "Manufacturing",
      "Warehousing",
      "Construction",
      "Logistics",
      "Agriculture",
      "Retail",
    ],
    highlights: [
      "Full range of forklift services available",
      "Competitive pricing for local businesses",
      "Certified operators and technicians",
      "24/7 emergency support hotline",
    ],
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      {(CITY_FAQS[area.slug] || []).length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(CITY_FAQS[area.slug])),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Service Areas", url: "/service-areas" },
            { name: area.city, url: `/service-areas/${area.slug}` },
          ])),
        }}
      />

      {/* Hero */}
      <section className="relative bg-[#1A1A2E] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B00] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0066CC] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF6B00] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Service Areas
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <span className="text-[#FF6B00] font-semibold text-sm uppercase tracking-wider">
              Service Area
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Forklift Services in
            <br />
            <span className="text-[#FF6B00]">{area.city}</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Professional forklift rental in {area.city}.
            Backed by {SITE_CONFIG.fleetSize} forklifts and experienced operators across Western Saudi Arabia.
          </p>
        </div>
      </section>

      {/* City Description */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-6">
                About Our {area.city} Operations
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {details.description}
              </p>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
                Why Choose ForkliftPro in {area.city}?
              </h3>
              <ul className="space-y-3">
                {details.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-[#FF6B00]" />
                  Industries We Serve
                </h3>
                <ul className="space-y-2.5">
                  {details.industries.map((industry) => (
                    <li key={industry} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] text-center mb-4">
            Services Available in {area.city}
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We offer our full range of forklift services in {area.city}. Click on any service to
            learn more about what we provide.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICON_MAP[service.icon] || Truck;
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group block bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#FF6B00]/30 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6B00] transition-colors">
                    <Icon className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A2E] mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{service.shortDescription}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] text-center mb-4">
              Frequently Asked Questions — {area.city}
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Common questions about forklift rental in {area.city}
            </p>
            <div className="space-y-4">
              {(CITY_FAQS[area.slug] || []).map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-base font-bold text-[#1A1A2E] mb-2 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pr-10">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] mb-6 text-center">
              Contact Us in {area.city}
            </h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-8">
              Get in touch with our {area.city} service team. Whether you need a quick quote or
              want to discuss a long-term rental plan, we are here to help.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex flex-col items-center text-center p-5 bg-[#F8F9FA] rounded-xl hover:bg-[#FF6B00]/5 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF6B00] transition-colors">
                  <Phone className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-[#1A1A2E]">Call Us</span>
                <span className="text-sm text-gray-600 mt-1">{SITE_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex flex-col items-center text-center p-5 bg-[#F8F9FA] rounded-xl hover:bg-[#FF6B00]/5 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF6B00] transition-colors">
                  <Mail className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-[#1A1A2E]">Email Us</span>
                <span className="text-sm text-gray-600 mt-1">{SITE_CONFIG.email}</span>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-5 bg-[#F8F9FA] rounded-xl hover:bg-[#FF6B00]/5 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF6B00] transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#FF6B00] group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-semibold text-[#1A1A2E]">WhatsApp</span>
                <span className="text-sm text-gray-600 mt-1">Quick Chat</span>
              </a>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
              <Clock className="w-4 h-4 inline-block mr-1" />
              Office Hours: {SITE_CONFIG.officeHours.weekdays} (Mon-Fri) | {SITE_CONFIG.officeHours.saturday} (Sat) | Emergency: 24/7
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B00] to-[#e55f00]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Need a Forklift in {area.city}?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Get a free, no-obligation quote for forklift rental in{" "}
            {area.city}. Our team will respond within one business hour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#FF6B00] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30"
            >
              <Phone className="w-5 h-5" />
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-[#1A1A2E] mb-8">
            We Also Serve These Cities
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {SERVICE_AREAS.filter((a) => a.slug !== area.slug).map((otherArea) => (
              <Link
                key={otherArea.slug}
                href={`/service-areas/${otherArea.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F8F9FA] text-gray-700 text-sm font-medium hover:bg-[#FF6B00] hover:text-white transition-colors border border-gray-200 hover:border-[#FF6B00]"
              >
                <MapPin className="w-3.5 h-3.5" />
                {otherArea.city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
