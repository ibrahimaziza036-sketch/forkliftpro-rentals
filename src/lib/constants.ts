export const SITE_CONFIG = {
  name: "ForkliftPro Rentals",
  tagline: "Your Trusted Partner for Reliable Forklift Rentals",
  phone: "+966532443262",
  phoneDisplay: "0532 443 262",
  whatsapp: "+966532443262",
  email: "info@forkliftprorentals.com",
  address: "Jeddah, Saudi Arabia",
  postalCode: "23334",
  city: "Jeddah",
  region: "Jeddah, Saudi Arabia",
  serviceArea: "Jeddah and surrounding areas",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236208.05498798628!2d39.01831!3d21.48581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1",
  foundedYear: 2010,
  clientCount: "500+",
  projectsCompleted: "10,000+",
  experienceYears: "15+",
  fleetSize: "50+",
  maxTonnage: "10",
  socialLinks: {
    facebook: "https://facebook.com/forkliftprorentals",
    instagram: "https://instagram.com/forkliftprorentals",
    linkedin: "https://linkedin.com/company/forkliftprorentals",
    youtube: "https://youtube.com/@forkliftprorentals",
  },
  officeHours: {
    weekdays: "24/7",
    saturday: "24/7",
    sunday: "24/7",
    display: "Open 24 Hours — 7 Days a Week",
  },
} as const;

export const SERVICES = [
  {
    title: "Short-Term Rental",
    slug: "short-term-rental",
    shortDescription:
      "Daily and weekly forklift rentals for urgent projects, seasonal peaks, or temporary needs. Fast deployment to your site.",
    icon: "Clock",
    href: "/services#short-term",
  },
  {
    title: "Long-Term Rental",
    slug: "long-term-rental",
    shortDescription:
      "Monthly and annual contracts with significant cost savings. Dedicated machines maintained by our team throughout.",
    icon: "CalendarRange",
    href: "/services#long-term",
  },
  {
    title: "Loading & Unloading",
    slug: "loading-unloading",
    shortDescription:
      "Professional forklift operators and machines for container loading, truck unloading, and cargo handling at your facility.",
    icon: "PackageOpen",
    href: "/services#loading",
  },
  {
    title: "Heavy Lifting",
    slug: "heavy-lifting",
    shortDescription:
      "Forklifts from 3 to 10 tons capacity. Machinery, steel, concrete, and industrial equipment handled safely.",
    icon: "Weight",
    href: "/services#heavy-lifting",
  },
  {
    title: "Moving & Shifting",
    slug: "moving-shifting",
    shortDescription:
      "Factory relocation, warehouse reorganization, and equipment shifting. We move your heavy assets safely and efficiently.",
    icon: "ArrowLeftRight",
    href: "/services#moving",
  },
  {
    title: "Operators Provided",
    slug: "operators-provided",
    shortDescription:
      "Every rental comes with experienced, safety-certified operators. Your team stays focused while we handle the heavy lifting.",
    icon: "HardHat",
    href: "/services#operators",
  },
] as const;

export const FLEET_TYPES = [
  {
    name: "3 Ton Forklift",
    tonnage: "3 Ton",
    fuelType: "Diesel / Electric",
    bestFor: "Warehouses, small factories, light cargo, pallets",
    dailyRate: "Contact for pricing",
    image: "/images/real/hyundai-3ton-yellow.jpeg",
  },
  {
    name: "5 Ton Forklift",
    tonnage: "5 Ton",
    fuelType: "Diesel",
    bestFor: "Medium warehouses, construction sites, container loading",
    dailyRate: "Contact for pricing",
    image: "/images/real/tcm-5ton-white.jpeg",
  },
  {
    name: "7 Ton Forklift",
    tonnage: "7 Ton",
    fuelType: "Diesel",
    bestFor: "Heavy cargo, industrial sites, steel & machinery handling",
    dailyRate: "Contact for pricing",
    image: "/images/real/heli-7ton-orange.jpeg",
  },
  {
    name: "10 Ton Forklift",
    tonnage: "10 Ton",
    fuelType: "Diesel",
    bestFor: "Heavy industry, ports, mega projects, large machinery",
    dailyRate: "Contact for pricing",
    image: "/images/real/heli-10ton-red.jpeg",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Khalid Al-Harbi",
    company: "Al-Harbi Logistics",
    content:
      "ForkliftPro has been our trusted rental partner for over 4 years. Whenever we need a forklift for container loading at short notice, they deliver within hours. Well-maintained machines and professional operators every time.",
    rating: 5,
  },
  {
    name: "Mohammed Al-Zahrani",
    company: "Zahrani Warehousing",
    content:
      "We rent multiple forklifts on a long-term contract. The machines are always in excellent condition, and any issue is resolved the same day. Their flexible rental plans have saved us significantly compared to purchasing.",
    rating: 5,
  },
  {
    name: "Abdullah Siddiqui",
    company: "Siddiqui Construction Co.",
    content:
      "For our construction projects across Jeddah, we need reliable forklifts that can handle heavy loads. ForkliftPro always delivers the right machine on time. Their operators are skilled and safety-conscious.",
    rating: 5,
  },
  {
    name: "Fahad Al-Otaibi",
    company: "Al-Otaibi Industrial",
    content:
      "When we needed to move heavy machinery for our factory setup, ForkliftPro managed the entire operation. 3 forklifts, experienced crew, zero damage. Their professionalism is unmatched in Jeddah.",
    rating: 5,
  },
  {
    name: "Hassan Al-Ghamdi",
    company: "Ghamdi Trading Est.",
    content:
      "We have been renting from ForkliftPro for 3 years. Their flexible plans let us scale up during busy seasons and reduce during quiet periods. Best forklift rental service in Jeddah, hands down.",
    rating: 5,
  },
] as const;

export const CLIENT_LOGOS = [
  "Al-Harbi Logistics",
  "Zahrani Warehousing",
  "Siddiqui Construction",
  "Al-Otaibi Industrial",
  "Ghamdi Trading",
  "Jeddah Port Services",
  "Al-Madinah Foods",
  "Saudi Steel Works",
  "Red Sea Logistics",
  "KAEC Industries",
] as const;

export const SERVICE_AREAS = [
  { city: "Jeddah", slug: "jeddah" },
  { city: "Makkah", slug: "makkah" },
  { city: "Madinah", slug: "madinah" },
  { city: "Rabigh", slug: "rabigh" },
  { city: "KAEC", slug: "kaec" },
  { city: "Taif", slug: "taif" },
  { city: "Yanbu", slug: "yanbu" },
  { city: "Al Lith", slug: "al-lith" },
] as const;

export const FAQ_ITEMS = [
  {
    category: "Rental",
    question: "How much does it cost to rent a forklift in Jeddah?",
    answer:
      "Forklift rental pricing depends on the tonnage, rental duration, and whether you need an operator. We offer competitive rates for 3, 5, 7, and 10 ton forklifts. Contact us via WhatsApp or phone for an instant quote tailored to your project.",
  },
  {
    category: "Rental",
    question: "What is the minimum rental period?",
    answer:
      "Our minimum rental period is one day. We offer flexible daily, weekly, monthly, and annual plans. Longer commitments receive better pricing and guaranteed availability.",
  },
  {
    category: "Rental",
    question: "Do you deliver the forklift to my site?",
    answer:
      "Yes — we deliver across Jeddah and surrounding areas including Makkah, Rabigh, KAEC, and Taif. Delivery is arranged at the time of booking and our team handles all transport logistics.",
  },
  {
    category: "Rental",
    question: "Do your rentals come with operators?",
    answer:
      "Yes! Every forklift rental includes an experienced, safety-certified operator. Our drivers come with all required safety documentation. You can also rent the machine standalone if you have your own licensed operators.",
  },
  {
    category: "Rental",
    question: "What if the forklift breaks down during my rental?",
    answer:
      "We handle all maintenance and breakdowns at zero extra cost. If a forklift develops any issue, we dispatch a technician or provide a replacement unit quickly. Your operations never stop.",
  },
  {
    category: "Capacity",
    question: "What forklift sizes do you offer?",
    answer:
      "We offer 3 ton, 5 ton, 7 ton, and 10 ton forklifts. This range covers everything from standard warehouse pallets to heavy industrial machinery, construction materials, and port cargo handling.",
  },
  {
    category: "Capacity",
    question: "Can you handle factory relocation and equipment moving?",
    answer:
      "Absolutely. Factory shifting and machinery relocation is one of our specialties. We deploy multiple forklifts with experienced operators, plan the move, and execute safely. We have completed numerous relocations across Jeddah.",
  },
  {
    category: "General",
    question: "Which areas do you serve?",
    answer:
      "We primarily serve Jeddah and surrounding areas including Makkah, Madinah, Rabigh, KAEC, Taif, Yanbu, and Al Lith. Contact us to discuss availability for your specific location.",
  },
  {
    category: "General",
    question: "How quickly can I get a forklift?",
    answer:
      "For Jeddah, same-day deployment is available for most forklift types. For surrounding cities, we typically arrange delivery within 24 hours. For urgent needs, call or WhatsApp us directly for the fastest response.",
  },
  {
    category: "General",
    question: "What industries do you serve?",
    answer:
      "We serve warehouses, factories, construction sites, logistics companies, cold storage facilities, ports, steel works, food processing plants, and any business that needs to load, unload, shift, or move heavy materials.",
  },
] as const;

export const RENTAL_PLANS = [
  {
    name: "Daily Rental",
    description: "Perfect for one-off jobs, emergencies, or short projects",
    priceRange: "Contact for Quote",
    features: [
      "Same-day deployment available",
      "Experienced operator included",
      "All maintenance covered",
      "Flexible hours",
    ],
    popular: false,
  },
  {
    name: "Weekly Rental",
    description: "Ideal for construction phases, events, or seasonal work",
    priceRange: "Best Value",
    features: [
      "Significant savings over daily rate",
      "Dedicated operator",
      "Delivery included in Jeddah",
      "24/7 support line",
      "Replacement guarantee",
    ],
    popular: true,
  },
  {
    name: "Monthly Rental",
    description: "Best for ongoing operations and long-term projects",
    priceRange: "Custom Plans",
    features: [
      "Maximum cost savings",
      "Dedicated operator & backup",
      "Delivery across the region",
      "Priority support",
      "Replacement guarantee",
      "Full maintenance included",
    ],
    popular: false,
  },
] as const;
