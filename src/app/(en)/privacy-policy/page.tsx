import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | ForkliftPro Rentals",
  description:
    "Read the ForkliftPro Rentals privacy policy. Learn how we collect, use, and protect your personal information when you use our forklift rental services in Saudi Arabia.",
  openGraph: {
    title: "Privacy Policy | ForkliftPro Rentals",
    description: "Read the ForkliftPro Rentals privacy policy. Learn how we collect, use, and protect your personal information.",
    images: [{ url: "https://forkliftprorentals.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://forkliftprorentals.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-lg">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray max-w-none">
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            ForkliftPro Rentals (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;) is committed to protecting the privacy and security
            of your personal information. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit
            our website, use our services, or interact with us in any way. This
            policy applies to all customers, visitors, and users of our forklift
            rental services operating from Jeddah, Saudi Arabia.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect information that you provide directly to us, as well as
            information collected automatically when you use our website and
            services.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Personal Information You Provide
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Contact Details:</strong> Full name, company name, email
              address, phone number, WhatsApp number, and physical address when
              you request a quote, book a service, or contact us.
            </li>
            <li>
              <strong>Business Information:</strong> Company registration
              details, Commercial Registration (CR) number, industry type, and warehouse or
              site locations relevant to service delivery.
            </li>
            <li>
              <strong>Service Records:</strong> Information about forklifts
              rented, purchased, or serviced, including equipment serial numbers,
              maintenance history, and operator training records.
            </li>
            <li>
              <strong>Payment Information:</strong> Bank account details, payment
              receipts, and billing addresses for processing transactions. We do
              not store credit or debit card numbers on our servers.
            </li>
            <li>
              <strong>Communication Records:</strong> Records of your
              correspondence with us via email, phone, WhatsApp, or our website
              contact forms.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Information Collected Automatically
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Device Information:</strong> IP address, browser type and
              version, operating system, device type, and screen resolution.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on pages,
              referral URLs, click patterns, and search queries used on our
              website.
            </li>
            <li>
              <strong>Location Data:</strong> Approximate geographic location
              based on IP address to provide region-specific service information.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. Use of Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Service Delivery:</strong> To process and fulfill forklift
              rental bookings, sales orders, repair requests, spare parts orders,
              and operator training enrollments.
            </li>
            <li>
              <strong>Communication:</strong> To respond to your inquiries, send
              service confirmations, delivery updates, maintenance reminders, and
              important notices about your account or equipment.
            </li>
            <li>
              <strong>Billing and Payments:</strong> To generate invoices,
              process payments, manage accounts receivable, and maintain
              financial records as required by Saudi tax regulations.
            </li>
            <li>
              <strong>Safety and Compliance:</strong> To maintain operator
              training and certification records, equipment safety logs, and
              comply with workplace safety regulations applicable in Saudi Arabia.
            </li>
            <li>
              <strong>Fleet Management:</strong> For customers using our fleet
              management services, to provide GPS tracking, maintenance
              scheduling, fuel monitoring, and performance analytics for rented
              or managed forklifts.
            </li>
            <li>
              <strong>Service Improvement:</strong> To analyze usage patterns,
              improve our website functionality, develop new services, and
              enhance customer experience.
            </li>
            <li>
              <strong>Marketing:</strong> With your consent, to send promotional
              offers, service updates, industry news, and information about new
              forklift models or services. You may opt out at any time.
            </li>
            <li>
              <strong>Legal Obligations:</strong> To comply with applicable laws,
              regulations, and legal processes under the jurisdiction of the Kingdom of Saudi Arabia,
              including tax reporting requirements under applicable Saudi tax laws
              and VAT regulations.
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Data Protection
          </h2>
          <p className="text-gray-600 mb-4">
            We take the security of your personal information seriously and
            implement appropriate technical and organizational measures to
            protect it against unauthorized access, alteration, disclosure, or
            destruction.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              All data transmitted through our website is encrypted using SSL/TLS
              (Secure Socket Layer/Transport Layer Security) technology.
            </li>
            <li>
              Access to personal information is restricted to authorized
              employees and contractors who need the information to perform their
              duties.
            </li>
            <li>
              We maintain physical, electronic, and procedural safeguards in
              compliance with applicable data protection standards.
            </li>
            <li>
              Customer payment data is processed through secure, PCI-compliant
              payment gateways. We do not store full payment card details on our
              systems.
            </li>
            <li>
              Regular security audits and vulnerability assessments are conducted
              to identify and address potential risks.
            </li>
            <li>
              Employee access to customer data is logged and monitored, and all
              staff members are trained on data handling best practices.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            While we strive to protect your personal information, no method of
            transmission over the Internet or electronic storage is 100% secure.
            We cannot guarantee absolute security but are committed to promptly
            addressing any data breach in accordance with applicable law.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600 mb-4">
            Our website uses cookies and similar tracking technologies to enhance
            your browsing experience and collect usage information.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Types of Cookies We Use
          </h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to
              function properly. These enable core features such as page
              navigation, form submissions, and access to secure areas. These
              cookies cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> We use Google Analytics to
              understand how visitors interact with our website. These cookies
              collect information such as the number of visitors, pages visited,
              and traffic sources. This data is aggregated and anonymous.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These remember your
              preferences such as language selection, region, and previously
              viewed services to provide a more personalized experience.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant
              advertisements and track the effectiveness of our marketing
              campaigns. These may be set by third-party advertising partners.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            You can control cookie settings through your browser preferences.
            Disabling certain cookies may affect the functionality of our
            website. Most browsers allow you to refuse cookies or alert you when
            cookies are being sent.
          </p>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Third-Party Services
          </h2>
          <p className="text-gray-600 mb-4">
            We may share your information with trusted third-party service
            providers who assist us in operating our business. These parties are
            contractually obligated to protect your information and use it only
            for the purposes we specify.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Google Services:</strong> Google Analytics for website
              analytics, Google Maps for service area information and delivery
              route planning, and Google Ads for marketing campaigns.
            </li>
            <li>
              <strong>Payment Processors:</strong> Secure payment gateways for
              processing online and bank transfer payments for our services.
            </li>
            <li>
              <strong>Communication Platforms:</strong> WhatsApp Business API for
              customer communication, email service providers for transactional
              and marketing emails.
            </li>
            <li>
              <strong>GPS and Telematics Providers:</strong> For customers using
              our fleet management service, third-party GPS tracking and
              telematics providers may process equipment location and operational
              data.
            </li>
            <li>
              <strong>Cloud Hosting:</strong> Our website and customer data are
              hosted on secure, reputable cloud infrastructure providers with
              data centers that maintain industry-standard security
              certifications.
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            We do not sell, rent, or trade your personal information to third
            parties for their marketing purposes. We may disclose your
            information if required by law, court order, or governmental
            authority in Saudi Arabia.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. Contact Information
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal data, please contact
            us:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <p className="text-gray-700 font-semibold mb-2">
              {SITE_CONFIG.name}
            </p>
            <p className="text-gray-600">{SITE_CONFIG.address}</p>
            <p className="text-gray-600 mt-2">
              Email:{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-yellow-600 hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
            <p className="text-gray-600">
              Phone:{" "}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-yellow-600 hover:underline"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </p>
            <p className="text-gray-600">
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                className="text-yellow-600 hover:underline"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </p>
          </div>
          <p className="text-gray-600 mb-4">
            You have the right to request access to, correction of, or deletion
            of your personal data held by us. To exercise these rights, please
            contact us using the details above. We will respond to your request
            within 30 business days.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. Updates to This Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, services, or applicable laws. When we make
            material changes, we will notify you by updating the &quot;Last
            updated&quot; date at the top of this page and, where appropriate,
            providing additional notice through our website or via email.
          </p>
          <p className="text-gray-600 mb-4">
            We encourage you to review this Privacy Policy periodically to stay
            informed about how we protect your information. Your continued use of
            our website and services after any modifications to this policy
            constitutes your acknowledgment of the changes and your consent to
            abide by the updated policy.
          </p>
          <p className="text-gray-600 mb-8">
            This Privacy Policy is governed by the laws of the Kingdom of Saudi Arabia,
            including applicable data protection and cybercrime regulations. Any disputes
            arising from this policy shall be subject to the exclusive
            jurisdiction of the courts in Jeddah, Saudi Arabia.
          </p>

          {/* Back link */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <Link
              href="/"
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
