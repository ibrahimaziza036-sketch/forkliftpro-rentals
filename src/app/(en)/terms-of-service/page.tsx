import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | ForkliftPro Rentals",
  description:
    "Terms and conditions for ForkliftPro Rentals. Understand the terms governing forklift rental services in Saudi Arabia.",
  alternates: {
    canonical: "https://forkliftprorentals.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300 text-lg">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray max-w-none">
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Welcome to ForkliftPro Services. These Terms of Service
            (&quot;Terms&quot;) govern your use of our website, products, and
            services including but not limited to forklift rental, sales, repair
            and maintenance, spare parts supply, operator training, fleet
            management, and emergency services. By engaging our services or using
            our website, you agree to be bound by these Terms. Please read them
            carefully.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            1. Service Terms
          </h2>
          <p className="text-gray-600 mb-4">
            ForkliftPro Services provides industrial material handling equipment
            services throughout Jeddah and Western Saudi Arabia. The following general terms
            apply to all services:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              All services are subject to availability and confirmation by
              ForkliftPro Services. Submitting a request or booking through our
              website or other channels does not guarantee service until
              explicitly confirmed by our team in writing or via electronic
              communication.
            </li>
            <li>
              Service quotations are valid for 15 days from the date of issuance
              unless otherwise specified. Prices are subject to change based on
              market conditions, fuel costs, and equipment availability.
            </li>
            <li>
              ForkliftPro Services reserves the right to refuse service to any
              client whose site conditions are deemed unsafe, whose intended use
              of equipment violates safety regulations, or whose account has
              outstanding overdue payments.
            </li>
            <li>
              Clients must provide accurate and complete information regarding
              their requirements, including site conditions, load specifications,
              operating environment, and any hazardous materials present at the
              worksite.
            </li>
            <li>
              All services are performed during standard business hours
              ({SITE_CONFIG.officeHours.weekdays} weekdays,{" "}
              {SITE_CONFIG.officeHours.saturday} Saturday) unless an emergency
              service agreement is in place. After-hours and weekend services may
              incur additional charges.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            2. Rental Terms
          </h2>
          <p className="text-gray-600 mb-4">
            The following terms apply specifically to forklift rental agreements:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Rental Period:</strong> The rental period begins upon
              delivery of the forklift to the client&apos;s designated site and
              ends upon collection by ForkliftPro Services. The minimum rental
              period is one (1) day. Daily, weekly, and monthly rates are
              available as specified in the rental agreement.
            </li>
            <li>
              <strong>Security Deposit:</strong> A refundable security deposit is
              required before delivery of any rental equipment. The deposit
              amount varies based on equipment type and rental duration. The
              deposit is returned within 7 business days of equipment return,
              minus any deductions for damages, excessive wear, or outstanding
              charges.
            </li>
            <li>
              <strong>Operator Responsibility:</strong> The client is responsible
              for ensuring that only trained and certified operators operate the
              rented equipment. Damage caused by untrained or unauthorized
              operators will be charged to the client at full repair or
              replacement cost.
            </li>
            <li>
              <strong>Maintenance During Rental:</strong> ForkliftPro Services
              will perform routine maintenance on rented equipment at no
              additional cost for rentals exceeding 30 days. The client must
              perform daily pre-operation checks as outlined in the operator
              manual provided with the equipment.
            </li>
            <li>
              <strong>Equipment Condition:</strong> Rented equipment must be
              returned in the same condition as received, subject to normal wear
              and tear. The client shall be liable for any damage, loss, or theft
              of the rented equipment during the rental period.
            </li>
            <li>
              <strong>Delivery and Collection:</strong> Delivery within Jeddah
              is included in the rental rate. Delivery to other
              locations in the region incurs transport charges calculated based on
              distance. The client must provide suitable access for equipment
              delivery and collection vehicles.
            </li>
            <li>
              <strong>Extension:</strong> Rental extensions must be requested at
              least 24 hours before the scheduled return date. Unauthorized
              extensions will be billed at the applicable daily rate plus a 25%
              surcharge.
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            3. Payment Terms
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Invoicing:</strong> Invoices are issued upon service
              completion or at the beginning of each rental period for ongoing
              rentals. All amounts are quoted in Saudi Riyals (SAR) and are
              exclusive of applicable taxes unless stated otherwise.
            </li>
            <li>
              <strong>Payment Methods:</strong> We accept bank transfers, online
              bank payments, cheques (subject to clearance), and cash payments at
              our office. Payment details are provided on each invoice.
            </li>
            <li>
              <strong>Payment Due Date:</strong> Payment is due within 15 days of
              the invoice date unless alternative terms are agreed upon in
              writing. For new clients, the first three transactions require
              advance payment.
            </li>
            <li>
              <strong>Late Payments:</strong> Overdue invoices are subject to a
              late payment surcharge of 2% per month on the outstanding balance.
              ForkliftPro Services reserves the right to suspend services and
              recall rented equipment if payments remain overdue for more than 30
              days.
            </li>
            <li>
              <strong>Taxes:</strong> All applicable taxes including Sales Tax,
              Withholding Tax, and any other government levies as per the laws of
              Saudi Arabia shall be borne by the client unless explicitly included in
              the quoted price.
            </li>
            <li>
              <strong>Disputed Invoices:</strong> Any invoice disputes must be
              raised in writing within 7 days of receipt. Undisputed portions of
              invoices must be paid by the due date regardless of any dispute on
              other line items.
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            4. Liability
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Equipment Liability:</strong> ForkliftPro Services warrants
              that all equipment provided is in safe working condition at the
              time of delivery. We are not liable for any damage, injury, or loss
              arising from the improper use, misuse, or unauthorized modification
              of our equipment.
            </li>
            <li>
              <strong>Operator Liability:</strong> The client assumes full
              responsibility for the actions of operators using our equipment.
              ForkliftPro Services is not liable for any property damage,
              personal injury, or third-party claims resulting from the operation
              of rented or purchased equipment by the client&apos;s personnel.
            </li>
            <li>
              <strong>Insurance:</strong> Clients are strongly advised to
              maintain comprehensive insurance coverage for rented equipment,
              including coverage for damage, theft, third-party liability, and
              worker compensation. ForkliftPro Services may require proof of
              insurance before releasing high-value equipment.
            </li>
            <li>
              <strong>Limitation of Liability:</strong> To the maximum extent
              permitted by the laws of Saudi Arabia, ForkliftPro Rentals&apos; total
              liability for any claim arising from our services shall not exceed
              the total amount paid by the client for the specific service giving
              rise to the claim. We shall not be liable for any indirect,
              incidental, consequential, or punitive damages, including but not
              limited to loss of profit, business interruption, or loss of data.
            </li>
            <li>
              <strong>Force Majeure:</strong> ForkliftPro Services shall not be
              liable for any delay or failure in performance resulting from
              causes beyond our reasonable control, including but not limited to
              natural disasters, government actions, strikes, civil unrest,
              pandemics, or supply chain disruptions.
            </li>
            <li>
              <strong>Indemnification:</strong> The client agrees to indemnify,
              defend, and hold harmless ForkliftPro Services, its officers,
              employees, and agents from any claims, damages, losses, or expenses
              arising from the client&apos;s use of our equipment or services,
              violation of these Terms, or breach of any applicable law.
            </li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            5. Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Rental Cancellations:</strong> Cancellations made more than
              48 hours before the scheduled delivery date will receive a full
              refund of any advance payment. Cancellations made within 48 hours
              of delivery are subject to a cancellation fee equal to one
              day&apos;s rental charge.
            </li>
            <li>
              <strong>Service Cancellations:</strong> Scheduled repair,
              maintenance, or training services may be cancelled or rescheduled
              at no charge with at least 24 hours&apos; notice. Cancellations
              with less than 24 hours&apos; notice are subject to a cancellation
              fee of 50% of the quoted service charge.
            </li>
            <li>
              <strong>Sales Cancellations:</strong> Orders for new or refurbished
              forklifts may be cancelled within 48 hours of order confirmation
              for a full refund of the deposit. After 48 hours, the deposit is
              non-refundable. Custom orders or specially sourced equipment cannot
              be cancelled once the order has been placed with the manufacturer
              or supplier.
            </li>
            <li>
              <strong>Early Termination of Rental:</strong> For monthly or
              long-term rental contracts, early termination requires 14
              days&apos; written notice. An early termination fee equivalent to
              the remaining rental charges for the notice period may apply.
            </li>
            <li>
              <strong>Cancellation by ForkliftPro:</strong> We reserve the right
              to cancel or suspend services if the client breaches these Terms,
              fails to make timely payments, or if continuing service would pose
              a safety risk. In such cases, the client will be liable for all
              charges incurred up to the date of cancellation.
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            6. Dispute Resolution
          </h2>
          <p className="text-gray-600 mb-4">
            In the event of any dispute, controversy, or claim arising out of or
            relating to these Terms or the breach thereof, the parties agree to
            the following dispute resolution process:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>
              <strong>Negotiation:</strong> The parties shall first attempt to
              resolve the dispute through good-faith negotiation. Either party
              may initiate negotiations by sending a written notice describing
              the dispute to the other party. The parties shall endeavor to
              resolve the dispute within 30 days of such notice.
            </li>
            <li>
              <strong>Mediation:</strong> If the dispute is not resolved through
              negotiation, the parties agree to submit the dispute to mediation
              administered by a mutually agreed mediator in Jeddah, Saudi Arabia. The
              costs of mediation shall be shared equally between the parties.
            </li>
            <li>
              <strong>Arbitration:</strong> If mediation fails to resolve the
              dispute within 60 days, the dispute shall be referred to and
              finally resolved by arbitration under the applicable arbitration laws of
              Saudi Arabia. The arbitration shall be conducted in Jeddah by a sole
              arbitrator mutually agreed upon by the parties. The language of
              arbitration shall be English. The arbitrator&apos;s decision shall
              be final and binding on both parties.
            </li>
            <li>
              <strong>Urgent Relief:</strong> Nothing in this clause prevents
              either party from seeking urgent interim or injunctive relief from
              a court of competent jurisdiction in Jeddah where necessary to
              protect its rights or property.
            </li>
          </ul>

          {/* Section 7 */}
          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
            7. Governing Law
          </h2>
          <p className="text-gray-600 mb-4">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the Kingdom of Saudi Arabia,
            including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
            <li>Saudi Commercial Law</li>
            <li>Saudi Arbitration Law</li>
            <li>Saudi Companies Law</li>
            <li>
              Anti-Cyber Crime Law (for online transactions and digital
              communications)
            </li>
            <li>
              All applicable tax legislation including VAT regulations
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            The courts in Jeddah, Saudi Arabia shall have exclusive
            jurisdiction over any matter arising from or related to these Terms
            that is not resolved through the dispute resolution process described
            above.
          </p>
          <p className="text-gray-600 mb-4">
            If any provision of these Terms is held to be invalid or
            unenforceable by a court of competent jurisdiction, the remaining
            provisions shall continue in full force and effect. The failure of
            ForkliftPro Services to enforce any right or provision of these Terms
            shall not constitute a waiver of such right or provision.
          </p>

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl p-6 mt-12 mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Questions About These Terms?
            </h3>
            <p className="text-gray-600 mb-2">
              If you have any questions or concerns about these Terms of Service,
              please contact us:
            </p>
            <p className="text-gray-700 font-semibold mb-1">
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
          </div>

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
