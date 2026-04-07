import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { generateLocalBusinessSchema, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forkliftprorentals.com"),
  title: {
    default: "ForkliftPro Rentals | Forklift Rental in Jeddah, Saudi Arabia",
    template: "%s | ForkliftPro Rentals",
  },
  description:
    "Jeddah's leading forklift rental company. Daily, weekly, and monthly forklift rentals with delivery across Jeddah, Saudi Arabia. Flexible plans and 24/7 support.",
  keywords: [
    "forklift rental Jeddah",
    "forklift for hire Saudi Arabia",
    "forklift rental Saudi Arabia",
    "warehouse forklift rental",
    "forklift on rent Jeddah",
    "monthly forklift rental",
    "daily forklift hire",
    "forklift rental near me",
    "industrial forklift rental Jeddah",
    "rent a forklift Saudi Arabia",
  ],
  authors: [{ name: "ForkliftPro Rentals" }],
  creator: "ForkliftPro Rentals",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ForkliftPro Rentals",
    title: "ForkliftPro Rentals | Forklift Rental in Jeddah, Saudi Arabia",
    description:
      "Jeddah's leading forklift rental company. Flexible daily, weekly, and monthly forklift rentals with delivery and 24/7 support.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "ForkliftPro Rentals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ForkliftPro Rentals | Forklift Rental in Jeddah, Saudi Arabia",
    description:
      "Jeddah's leading forklift rental company. Flexible daily, weekly, and monthly forklift rentals with delivery and 24/7 support.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://forkliftprorentals.com",
    languages: {
      "en": "https://forkliftprorentals.com",
      "ar": "https://forkliftprorentals.com/ar",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#FF6B00" />
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_VERIFICATION} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
