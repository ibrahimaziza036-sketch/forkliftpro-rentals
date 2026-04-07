"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  CalendarRange,
  PackageOpen,
  Weight,
  ArrowLeftRight,
  HardHat,
  Star,
  Zap,
  Shield,
  Truck,
  Fuel,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { SITE_CONFIG, SERVICES, FLEET_TYPES, RENTAL_PLANS } from "@/lib/constants";

const SERVICE_FAQS = [
  {
    question: "What types of forklifts do you offer for rent?",
    answer: "We offer 3-ton, 5-ton, 7-ton, and 10-ton forklifts including diesel and electric models. Our fleet includes standard warehouse forklifts, rough terrain forklifts, and specialized equipment for various industrial applications."
  },
  {
    question: "Do forklift rentals include an operator?",
    answer: "Yes, every forklift rental comes with an experienced, safety-certified operator at no extra charge. You can also rent the equipment standalone if you have your own licensed operators on staff."
  },
  {
    question: "What is the minimum rental period?",
    answer: "Our minimum rental period is one day. We offer daily, weekly, monthly, and annual rental plans. Longer commitments come with significantly better pricing."
  },
  {
    question: "Do you deliver forklifts to the job site?",
    answer: "Yes, we handle all delivery logistics. Same-day delivery is available in Jeddah, and we deliver across the Western Region including Makkah, Madinah, Rabigh, KAEC, Taif, Yanbu, and Al Lith."
  },
  {
    question: "What happens if the forklift breaks down during rental?",
    answer: "All maintenance and repairs are covered at zero extra cost. We dispatch a technician immediately or provide a replacement unit. Your operations never stop due to equipment failure."
  },
  {
    question: "How do I get a quote for forklift rental?",
    answer: "You can get a free quote by calling us, sending a WhatsApp message, or filling out our online contact form. We typically respond within 1-2 hours during business hours."
  },
];

const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  CalendarRange,
  PackageOpen,
  Weight,
  ArrowLeftRight,
  HardHat,
};

const SERVICE_IMAGES = [
  "/images/hero/forklift-hero-1.jpg",
  "/images/hero/forklift-hero-2.jpg",
  "/images/hero/forklift-hero-3.jpg",
  "/images/fleet/forklift-fleet-1.jpeg",
  "/images/fleet/forklift-fleet-2.jpeg",
  "/images/fleet/forklift-fleet-3.jpeg",
];

const SERVICE_ANCHORS = [
  "short-term",
  "long-term",
  "loading",
  "heavy-lifting",
  "moving",
  "operators",
];

const SERVICE_CONTENT = [
  {
    title: "Short-Term Forklift Rental",
    paragraphs: [
      "When your business faces an urgent deadline, a sudden spike in demand, or an unexpected project, waiting weeks for equipment is not an option. Our short-term forklift rental service is designed for exactly these moments. Whether you need a forklift for a single day, a few days, or up to a week, we deploy the right machine to your site — often within hours of your call. No paperwork headaches, no long-term commitments, just the equipment you need when you need it.",
      "Short-term rentals are ideal for construction phases where different tonnage is required at different stages, seasonal peaks in warehousing and logistics, one-off loading and unloading jobs, and emergency situations where your own equipment has broken down. Our fleet covers everything from compact 1.5-ton electric forklifts for tight warehouse aisles to rugged 10-ton diesel machines for outdoor construction yards.",
      "Every short-term rental comes with a trained, certified operator at no additional cost. Our operators arrive on time, understand site safety protocols, and get to work immediately. You never have to worry about licensing, training, or insurance — we handle all of it. The forklift arrives fueled, inspected, and ready to operate.",
      "Same-day deployment is available across Jeddah, with next-day service to surrounding cities including Makkah, Rabigh, KAEC, and Taif. Call us at 0532 443 262 and your forklift can be on-site before the end of the business day. No deposits, no hidden charges — just straightforward daily or weekly rates that include everything.",
    ],
    benefits: [
      "Same-day deployment in Jeddah",
      "No long-term contracts required",
      "Operator included with every rental",
      "All maintenance and fuel management covered",
      "Flexible hours — extend or shorten as needed",
      "Perfect for emergencies and seasonal peaks",
    ],
  },
  {
    title: "Long-Term Forklift Rental",
    paragraphs: [
      "For businesses with ongoing material handling needs, purchasing a forklift fleet represents a massive capital expenditure — plus the headache of maintenance, operator management, insurance, and depreciation. Our long-term rental program eliminates all of that. With competitive monthly and annual contracts, you get a dedicated forklift and operator at a fraction of the cost of ownership, with savings of up to 40% compared to daily rental rates. Contact us for pricing.",
      "Long-term clients receive dedicated machines that stay on your premises for the duration of the contract. These are not shared or rotated units — they are yours to use exclusively. We assign a primary operator who learns your facility layout, your team's workflow, and your specific requirements. When that operator is on leave, a trained backup is provided so your operations never miss a beat.",
      "Maintenance is entirely our responsibility. We schedule preventive maintenance visits, handle all repairs, and if a machine needs significant workshop time, we swap in a replacement unit within hours. You will never pay for a breakdown, a tire change, or an engine service. Our in-house mechanics keep your equipment running at peak performance so you can focus entirely on your core business.",
      "The flexibility to scale is built into every long-term contract. Need an extra forklift during Ramadan or peak shipping season? We add one to your fleet within 24 hours. Project winding down and you need to reduce? Scale back with 30 days notice. This elasticity is something no owned fleet can offer. Over 60% of our clients are on long-term contracts because the math simply makes sense.",
    ],
    benefits: [
      "Up to 40% savings over daily rates",
      "Dedicated machine stays at your site",
      "Assigned primary operator with trained backup",
      "All maintenance and repairs included",
      "Scale up or down with 30 days notice",
      "No capital expenditure or depreciation",
    ],
  },
  {
    title: "Loading & Unloading Services",
    paragraphs: [
      "Loading and unloading is the backbone of every logistics and warehousing operation. Whether you are receiving containers at a dry port, loading trucks for dispatch, handling palletized cargo in a warehouse, or managing bulk materials at a factory yard, our professional loading and unloading service ensures every item is moved safely, quickly, and without damage. We bring the right forklift and the right operator for your specific cargo type.",
      "Our operators are not just forklift drivers — they are logistics professionals. They understand container geometry, weight distribution, and stacking patterns. They know how to handle fragile goods alongside heavy machinery parts. They coordinate with your warehouse staff and truck drivers to minimize waiting time and maximize throughput. For high-volume operations, we deploy multiple forklifts simultaneously to clear backlogs and keep your supply chain flowing.",
      "We handle every type of cargo: palletized FMCG goods, industrial raw materials, steel coils and pipes, bagged commodities like cement and grain, machinery and heavy equipment, and temperature-sensitive goods in cold storage environments. Our electric forklifts are available for indoor and food-safe environments where emissions are a concern, while our diesel fleet handles the heaviest outdoor loads.",
      "Whether you need us for a single truck unload or daily loading operations at your facility, we offer both on-demand and scheduled service. Many of our logistics clients have standing daily appointments where our forklifts and operators are on-site at a fixed time every morning. This reliability is what keeps major logistics companies across Jeddah partnering with ForkliftPro year after year.",
    ],
    benefits: [
      "Container loading and truck unloading",
      "Experienced logistics-trained operators",
      "Indoor and outdoor capability",
      "Multi-forklift deployment for high volumes",
      "Standing daily appointment scheduling",
      "All cargo types — fragile to heavy industrial",
    ],
  },
  {
    title: "Heavy Lifting — Up to 10 Tons",
    paragraphs: [
      "When standard forklifts are not enough, our heavy lifting division steps in. With machines ranging from 3 tons all the way up to 10 tons capacity, we handle demanding jobs across Jeddah and Western Saudi Arabia. Steel beams, industrial generators, transformer units, heavy machinery, concrete pre-cast elements, shipping containers — if it is heavy, we lift it. Our heavy-duty fleet is maintained to the highest safety standards.",
      "Heavy lifting is not just about having a big machine — it demands precision, planning, and expertise. Our heavy lift team conducts thorough site assessments before every job, evaluating ground conditions, access routes, overhead clearances, and load characteristics. We develop detailed lift plans that account for center of gravity, rigging requirements, and environmental factors. Nothing is left to chance when tons of material are in the air.",
      "Our heavy-duty operators are the most experienced in the industry, each with a minimum of 15 years on heavy equipment. They have lifted everything from 80-ton boilers at power plants to 120-ton molds at manufacturing facilities. They work in coordinated teams when multiple lifts are required, communicating through established protocols that ensure absolute safety for personnel and equipment alike.",
      "Industries we serve for heavy lifting include steel mills, power generation plants, cement factories, automotive manufacturing, shipyards, oil and gas installations, and mega construction projects like bridges and flyovers. If your project involves moving something that seems impossible, call ForkliftPro. We have the fleet, the operators, and the track record to make it happen — safely and on schedule.",
    ],
    benefits: [
      "Capacity from 3 to 10 tons",
      "Detailed lift planning and site assessment",
      "Operators with 15+ years heavy lift experience",
      "Multi-machine coordinated lifts",
      "Serving steel, power, cement, and construction",
      "Full safety compliance and insurance coverage",
    ],
  },
  {
    title: "Moving & Shifting Services",
    paragraphs: [
      "Relocating a factory, reorganizing a warehouse, or shifting heavy equipment from one facility to another is a complex operation that requires more than just forklifts — it requires project management. Our moving and shifting service provides end-to-end support from the initial planning phase through final placement at the destination. We have successfully completed numerous relocations across Jeddah and Western Saudi Arabia, moving everything from light shelving to heavy production lines.",
      "Every relocation project begins with a detailed survey of your current site and the destination. Our project managers create a comprehensive move plan that includes equipment inventory, disassembly sequences, transport logistics, and reassembly schedules. We identify the right forklift types and quantities needed at each stage, coordinate with transport vehicles, and establish safety zones and traffic management on both sites.",
      "During execution, our operators work in synchronized teams. While one team disassembles and loads at the origin, another prepares the destination for receiving. For large factory moves, we deploy anywhere from 3 to 8 forklifts simultaneously, each with its own operator, working under a single project coordinator who ensures everything stays on schedule. Delays cost money — our job is to make sure there are none.",
      "We also handle smaller-scale moving jobs: shifting a single CNC machine within your factory floor, reorganizing warehouse racking and inventory, moving generator sets, or repositioning heavy containers. No job is too small and no job is too large. Our clients trust us because we treat their equipment as if it were our own — with care, precision, and professionalism from start to finish.",
    ],
    benefits: [
      "Complete project management included",
      "Detailed move planning and site survey",
      "Multi-forklift synchronized team deployment",
      "100+ factory relocations completed",
      "Single machine moves to full facility shifts",
      "Zero-damage track record on managed projects",
    ],
  },
  {
    title: "Experienced Operators Provided",
    paragraphs: [
      "A forklift is only as good as the person operating it. That is why every ForkliftPro rental comes with a trained, experienced, and safety-certified operator — included in the rental price at no extra cost. Our operators are not temporary hires or day laborers; they are full-time ForkliftPro employees who have undergone rigorous training, background checks, and ongoing performance evaluation. When our operator arrives at your site, you are getting a professional.",
      "Every operator in our team holds a valid forklift operation certification and completes annual safety refresher courses. They are trained on all forklift types in our fleet — electric, diesel, LPG, reach trucks, and heavy-duty machines. They understand load charts, safe stacking heights, aisle clearances, and emergency procedures. Before being assigned to client sites, each operator completes a minimum of 500 hours of supervised operation under our senior team.",
      "Safety is non-negotiable. Our operators conduct pre-shift inspections on every machine, follow strict speed limits and pedestrian awareness protocols, and refuse to operate if conditions are unsafe. In our 15+ years of operation, this commitment to safety has resulted in zero serious incidents across thousands of projects. We carry full insurance coverage for every operator and every machine, giving you complete peace of mind.",
      "Beyond technical skill, our operators are professional, punctual, and courteous. They arrive in clean ForkliftPro uniforms, follow your site rules, and communicate clearly with your supervisors. Many long-term clients request the same operators repeatedly because of the relationships and efficiency that develop over time. Your team focuses on their work — our operators handle the heavy lifting.",
    ],
    benefits: [
      "Certified and safety-trained operators",
      "500+ hours supervised experience minimum",
      "Background checked and fully insured",
      "Trained on all forklift types",
      "Professional, punctual, and uniformed",
      "Zero serious incidents in 15+ years",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ServicesContent() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/forklift-hero-1.jpg"
          alt="ForkliftPro Rentals - Complete forklift rental solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto px-4 text-center py-20">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-300 mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Complete Forklift Rental Solutions
            <br />
            <span className="text-primary">From 3 to 10 Tons</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            {SITE_CONFIG.name} provides professional forklift rental with
            experienced operators for loading, unloading, heavy lifting, and
            equipment moving across {SITE_CONFIG.region}. Same-day deployment
            available.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              <Truck className="w-5 h-5" />
              Book a Forklift
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== QUICK NAV ========== */}
      <section className="bg-secondary py-6 sticky top-0 z-40 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = ICON_MAP[service.icon] || Truck;
              return (
                <a
                  key={service.slug}
                  href={`#${SERVICE_ANCHORS[idx]}`}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  {service.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SERVICE DETAIL SECTIONS ========== */}
      {SERVICE_CONTENT.map((service, idx) => {
        const isReversed = idx % 2 !== 0;
        const Icon = ICON_MAP[SERVICES[idx].icon] || Truck;

        return (
          <section
            key={SERVICE_ANCHORS[idx]}
            id={SERVICE_ANCHORS[idx]}
            className={`py-16 lg:py-24 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
              >
                {/* Image Side */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={SERVICE_IMAGES[idx]}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm">
                      <Icon className="w-4 h-4" />
                      {SERVICES[idx].title}
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full lg:w-1/2"
                >
                  <motion.div variants={fadeInUp}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary uppercase tracking-wider">
                        {SERVICES[idx].title}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-secondary mb-6">
                      {service.title}
                    </h2>
                  </motion.div>

                  {service.paragraphs.map((p, pIdx) => (
                    <motion.p
                      key={pIdx}
                      variants={fadeInUp}
                      className="text-gray-600 leading-relaxed mb-4"
                    >
                      {p}
                    </motion.p>
                  ))}

                  <motion.div variants={fadeInUp} className="mt-6">
                    <h3 className="text-lg font-bold text-secondary mb-4">
                      Key Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                    >
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ========== PRICING PLANS ========== */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Flexible Pricing
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white mt-2 mb-4">
              Rental Plans to Fit Every Budget
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that works for your project. All plans include a
              certified operator, maintenance, and insurance. No hidden fees.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {RENTAL_PLANS.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative rounded-2xl p-8 card-hover-glow shine-effect ${
                  plan.popular
                    ? "bg-primary text-white ring-4 ring-primary/30 scale-105"
                    : "bg-white text-secondary"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-secondary text-xs font-black uppercase px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-4 ${plan.popular ? "text-white/80" : "text-gray-500"}`}
                >
                  {plan.description}
                </p>
                <div
                  className={`text-2xl font-black mb-6 pb-6 border-b ${
                    plan.popular ? "border-white/20" : "border-gray-200"
                  }`}
                >
                  {plan.priceRange}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? "text-yellow-300" : "text-green-500"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-lg font-bold transition-colors ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary text-white hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FLEET OVERVIEW ========== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Our Fleet
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-secondary mt-2 mb-4">
              {SITE_CONFIG.fleetSize} Forklifts Ready for Deployment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From 3-ton to 10-ton forklifts,
              our fleet covers every tonnage and terrain requirement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLEET_TYPES.map((fleet, idx) => (
              <motion.div
                key={fleet.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 card-hover-glow shine-effect"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={fleet.image}
                    alt={fleet.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <span className="text-white font-bold text-lg">
                      {fleet.name}
                    </span>
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {fleet.tonnage}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Gauge className="w-4 h-4 text-primary" />
                      {fleet.tonnage}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Fuel className="w-4 h-4 text-primary" />
                      {fleet.fuelType}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{fleet.bestFor}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400 uppercase">
                        Daily Rate
                      </span>
                      <p className="text-primary font-bold">{fleet.dailyRate}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                    >
                      Rent Now <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/hero/forklift-hero-2.jpg"
          alt="Book a forklift rental"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-300" />
              <span className="text-white/80 font-bold uppercase tracking-wider text-sm">
                Fast Response
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Book? Get a Free Quote
              <br />
              in 5 Minutes
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
              Tell us what you need — forklift type, tonnage, duration, and
              location. We will send you a detailed quote within minutes. No
              obligations, no hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Truck className="w-5 h-5" />
                Get Free Quote
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-white/70 text-sm">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" /> Fully Insured
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> Same-Day Deployment
              </span>
              <span className="flex items-center gap-1">
                <HardHat className="w-4 h-4" /> Operators Included
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A2E] text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Common questions about our forklift rental services
            </p>
            <div className="space-y-4">
              {SERVICE_FAQS.map((faq, i) => (
                <div key={i} className="bg-[#F8F9FA] rounded-xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-base font-bold text-[#1A1A2E] mb-2 flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed pl-10">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: SERVICE_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
