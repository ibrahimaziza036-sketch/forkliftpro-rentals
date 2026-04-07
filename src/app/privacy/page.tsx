import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | ForkliftPro Rentals - PDPL Compliant Data Protection",
  description:
    "ForkliftPro Rentals privacy policy. Learn how we collect, use, and protect your personal data in accordance with Saudi Arabia's Personal Data Protection Law (PDPL).",
  alternates: {
    canonical: "https://forkliftprorentals.com/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#1A1A2E] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              1. Introduction
            </h2>
            <p>
              ForkliftPro Rentals (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
              protecting your personal data. This Privacy Policy explains how we collect,
              use, and safeguard your information when you visit our website or use our
              services, in compliance with Saudi Arabia&apos;s Personal Data Protection Law
              (PDPL).
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A2E] mt-10 mb-4">
              2. Information We Collect
            </h2>
            <p>We collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Contact Information:</strong> Name, email address, phone number</li>
              <li><strong>Business Information:</strong> Company name, service requirements</li>
              <li><strong>Communication Data:</strong> Messages you send via our contact form or WhatsApp</li>
              <li><strong>Technical Data:</strong> Browser type, device information, and IP address (collected automatically for security and analytics)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A2E] mt-10 mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>To respond to your inquiries and provide forklift rental quotes</li>
              <li>To deliver our services and communicate about your rental</li>
              <li>To improve our website and services</li>
              <li>To send newsletters (only if you subscribe; you can unsubscribe anytime)</li>
              <li>To comply with legal obligations under Saudi law</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A2E] mt-10 mb-4">
              4. Data Protection
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal data against unauthorized access, alteration, disclosure, or
              destruction. Your data is stored securely and accessed only by authorized
              personnel.
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A2E] mt-10 mb-4">
              5. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. We may share your information with trusted
              third-party services strictly for the purposes described above (e.g., email
              delivery services). All third parties are required to protect your data.
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A2E] mt-10 mb-4">
              6. Your Rights Under PDPL
            </h2>
            <p>Under Saudi Arabia&apos;s Personal Data Protection Law, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Access your personal data held by us</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
              <li>Object to data processing in certain circumstances</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1A1A2E] mt-10 mb-4">
              7. Cookies &amp; Analytics
            </h2>
            <p>
              Our website may use cookies and analytics tools (such as Google Analytics) to
              understand how visitors use our site. These tools collect anonymous usage data
              to help us improve our services. You can control cookie preferences in your
              browser settings.
            </p>

            <h2 className="text-2xl font-bold text-[#1A1A2E] mt-10 mb-4">
              8. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data
              rights, please contact us:
            </p>
            <ul className="list-none pl-0 mt-3 space-y-1">
              <li><strong>Email:</strong> {SITE_CONFIG.email}</li>
              <li><strong>Phone:</strong> {SITE_CONFIG.phoneDisplay}</li>
              <li><strong>Address:</strong> {SITE_CONFIG.address}</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#FF6B00] font-semibold hover:underline"
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
