export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Tips" | "Industry News" | "Safety" | "Guides";
  readTime: string;
  date: string;
  isoDate: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ultimate-guide-to-forklift-rental",
    title: "Ultimate Guide to Forklift Rental",
    excerpt:
      "Everything you need to know about renting a forklift in Saudi Arabia. From choosing the right type and tonnage for your project to understanding rental agreements and hidden costs, this comprehensive guide covers it all.",
    category: "Guides",
    readTime: "12 min read",
    date: "March 28, 2026",
    isoDate: "2026-03-28",
    author: "ForkliftPro Team",
  },
  {
    slug: "forklift-rental-checklist-before-you-sign",
    title: "Forklift Rental Checklist: 10 Things to Verify Before You Sign",
    excerpt:
      "Before signing a forklift rental agreement, make sure you've checked these 10 critical items. From rental terms and insurance coverage to delivery timelines and maintenance responsibilities, this checklist keeps you protected.",
    category: "Tips",
    readTime: "8 min read",
    date: "March 20, 2026",
    isoDate: "2026-03-20",
    author: "ForkliftPro Team",
  },
  {
    slug: "electric-vs-diesel-forklift-which-one-is-right",
    title: "Electric vs Diesel Forklift: Which One Is Right?",
    excerpt:
      "The electric vs diesel debate is one of the most common questions we get from customers. This guide breaks down the pros, cons, and total cost of ownership for each type to help you make an informed decision for your operation.",
    category: "Guides",
    readTime: "10 min read",
    date: "March 14, 2026",
    isoDate: "2026-03-14",
    author: "ForkliftPro Team",
  },
  {
    slug: "how-much-does-it-cost-to-rent-a-forklift",
    title: "How Much Does It Cost to Rent a Forklift?",
    excerpt:
      "Forklift rental costs vary widely based on type, duration, and location. We break down the real pricing structure in Saudi Arabia, including daily, weekly, and monthly rates, plus tips on how to negotiate the best deal for your budget.",
    category: "Guides",
    readTime: "7 min read",
    date: "March 6, 2026",
    isoDate: "2026-03-06",
    author: "ForkliftPro Team",
  },
  {
    slug: "benefits-of-renting-vs-buying-a-forklift",
    title: "Benefits of Renting vs Buying a Forklift",
    excerpt:
      "Should you rent or buy a forklift? For most businesses, renting offers flexibility, lower upfront costs, and zero maintenance hassle. We break down the financial and operational advantages of forklift rental over ownership.",
    category: "Tips",
    readTime: "6 min read",
    date: "February 25, 2026",
    isoDate: "2026-02-25",
    author: "ForkliftPro Team",
  },
  {
    slug: "forklift-rental-safety-essentials",
    title: "Forklift Rental Safety: What Every Renter Must Know",
    excerpt:
      "Renting a forklift comes with safety responsibilities. From pre-delivery inspections to operator requirements, learn the essential safety practices that protect your team and keep your rental in top shape.",
    category: "Safety",
    readTime: "9 min read",
    date: "February 18, 2026",
    isoDate: "2026-02-18",
    author: "ForkliftPro Team",
  },
  {
    slug: "how-to-choose-the-right-forklift-for-your-business",
    title: "How to Choose the Right Forklift for Your Business",
    excerpt:
      "Selecting the wrong forklift can cost your business thousands in lost productivity and unnecessary expenses. This step-by-step guide helps you evaluate your needs, compare options, and pick the perfect forklift for your operation.",
    category: "Guides",
    readTime: "11 min read",
    date: "February 10, 2026",
    isoDate: "2026-02-10",
    author: "ForkliftPro Team",
  },
  {
    slug: "why-forklift-rental-demand-is-surging-in-saudi-arabia",
    title: "Why Forklift Rental Demand Is Surging in Saudi Arabia",
    excerpt:
      "Forklift rental demand in Saudi Arabia has grown significantly in the past two years. We explore the market trends, economic factors, and industry shifts driving more businesses to choose rental over ownership.",
    category: "Industry News",
    readTime: "8 min read",
    date: "February 3, 2026",
    isoDate: "2026-02-03",
    author: "ForkliftPro Team",
  },
  {
    slug: "short-term-vs-long-term-forklift-rental",
    title: "Short-Term vs Long-Term Forklift Rental: Which Saves More?",
    excerpt:
      "Choosing between a daily rental and a long-term lease can significantly impact your bottom line. This guide compares pricing structures, flexibility, and total cost so you can pick the rental plan that fits your project.",
    category: "Guides",
    readTime: "10 min read",
    date: "January 27, 2026",
    isoDate: "2026-01-27",
    author: "ForkliftPro Team",
  },
];
