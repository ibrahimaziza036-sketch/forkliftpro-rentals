"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  AlertTriangle,
  PhoneCall,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import TurnstileWidget from "@/components/ui/TurnstileWidget";

/* ------------------------------------------------------------------ */
/*  Zod schema                                                         */
/* ------------------------------------------------------------------ */
const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+\d\s()-]+$/, "Please enter a valid phone number"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  preferredContact: z.enum(["phone", "email", "whatsapp"], {
    message: "Please select a preferred contact method",
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  privacyConsent: z.literal(true, {
    message: "You must agree to the privacy policy to submit",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ------------------------------------------------------------------ */
/*  Service options                                                    */
/* ------------------------------------------------------------------ */
const SERVICE_OPTIONS = [
  "Short-Term Rental",
  "Long-Term Rental",
  "Loading & Unloading",
  "Heavy Lifting",
  "Moving & Shifting",
  "Operators Provided",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Contact Info Card                                                   */
/* ------------------------------------------------------------------ */
function ContactCard({
  icon: Icon,
  title,
  children,
  href,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <>
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="font-semibold text-secondary text-sm mb-1">{title}</p>
        <div className="text-gray-600 text-sm">{children}</div>
      </div>
    </>
  );

  const cls = `flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow border-glow ${href ? "cursor-pointer" : ""}`;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {inner}
      </a>
    );
  }

  return <div className={cls}>{inner}</div>;
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: "phone",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          service: data.serviceNeeded,
          preferredContact: data.preferredContact,
          message: data.message,
          turnstileToken,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
      reset();
    } catch {
      // Form error — show user-friendly message
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ---- Hero Section ---- */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom section-padding relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold uppercase tracking-wider mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Get in Touch{" "}
            <span className="text-primary">&mdash;</span>{" "}
            <span className="block mt-2">We&apos;re Ready to Help</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Whether you need a forklift rental or just have a question &mdash;
            our team is standing by to assist you.
          </motion.p>
        </div>
      </section>

      {/* ---- Contact Form + Info ---- */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-5 gap-12"
          >
            {/* ---- LEFT: Contact Form ---- */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 2 hours
                  during business hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your message and get
                      back to you within 2 hours during business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-secondary mb-2"
                      >
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Ahmed Rashid"
                        {...register("fullName")}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.fullName
                            ? "border-danger focus:ring-danger"
                            : "border-gray-200 focus:ring-primary"
                        } focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors text-sm`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    {/* Email & Phone row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-secondary mb-2"
                        >
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          {...register("email")}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email
                              ? "border-danger focus:ring-danger"
                              : "border-gray-200 focus:ring-primary"
                          } focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors text-sm`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-danger">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-secondary mb-2"
                        >
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="0532 443 262"
                          {...register("phone")}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone
                              ? "border-danger focus:ring-danger"
                              : "border-gray-200 focus:ring-primary"
                          } focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors text-sm`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-danger">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service Needed */}
                    <div>
                      <label
                        htmlFor="serviceNeeded"
                        className="block text-sm font-semibold text-secondary mb-2"
                      >
                        Service Needed <span className="text-danger">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        {...register("serviceNeeded")}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.serviceNeeded
                            ? "border-danger focus:ring-danger"
                            : "border-gray-200 focus:ring-primary"
                        } focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors text-sm bg-white`}
                      >
                        <option value="">Select a service...</option>
                        {SERVICE_OPTIONS.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.serviceNeeded && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.serviceNeeded.message}
                        </p>
                      )}
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-3">
                        Preferred Contact Method <span className="text-danger">*</span>
                      </label>
                      <div className="flex flex-wrap gap-6">
                        {[
                          { value: "phone", label: "Phone", icon: Phone },
                          { value: "email", label: "Email", icon: Mail },
                          { value: "whatsapp", label: "WhatsApp", icon: MessageCircle },
                        ].map((method) => {
                          const MethodIcon = method.icon;
                          return (
                            <label
                              key={method.value}
                              className="flex items-center gap-2 cursor-pointer group"
                            >
                              <input
                                type="radio"
                                value={method.value}
                                {...register("preferredContact")}
                                className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                              />
                              <MethodIcon className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                              <span className="text-sm text-gray-600 group-hover:text-secondary transition-colors">
                                {method.label}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      {errors.preferredContact && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.preferredContact.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-secondary mb-2"
                      >
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your requirements — type of forklift, duration, location, etc."
                        {...register("message")}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message
                            ? "border-danger focus:ring-danger"
                            : "border-gray-200 focus:ring-primary"
                        } focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors text-sm resize-y`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Privacy Consent */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          {...register("privacyConsent")}
                          className="w-4 h-4 mt-0.5 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-secondary transition-colors">
                          I agree that my data will be used to process my inquiry and
                          contact me regarding my request, in accordance with Saudi Arabia&apos;s
                          Personal Data Protection Law (PDPL).{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </span>
                      </label>
                      {errors.privacyConsent && (
                        <p className="mt-1 text-sm text-danger">
                          {errors.privacyConsent.message}
                        </p>
                      )}
                    </div>

                    {/* CAPTCHA */}
                    <TurnstileWidget
                      onVerify={(token) => setTurnstileToken(token)}
                      onExpire={() => setTurnstileToken("")}
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* ---- RIGHT: Contact Information ---- */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Contact Information
              </h2>

              <ContactCard
                icon={Phone}
                title="Phone (Click to Call)"
                href={`tel:${SITE_CONFIG.phone}`}
              >
                <p className="text-primary font-semibold">{SITE_CONFIG.phoneDisplay}</p>
                <p className="text-xs text-gray-400 mt-1">Tap to call directly</p>
              </ContactCard>

              <ContactCard
                icon={MessageCircle}
                title="WhatsApp"
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              >
                <p className="text-primary font-semibold">{SITE_CONFIG.phoneDisplay}</p>
                <p className="text-xs text-gray-400 mt-1">
                  Chat with us on WhatsApp
                </p>
              </ContactCard>

              <ContactCard
                icon={Mail}
                title="Email"
                href={`mailto:${SITE_CONFIG.email}`}
              >
                <p className="text-accent font-semibold">{SITE_CONFIG.email}</p>
                <p className="text-xs text-gray-400 mt-1">
                  We respond within 2 hours
                </p>
              </ContactCard>

              <ContactCard icon={MapPin} title="Office Address">
                <p>{SITE_CONFIG.address}</p>
              </ContactCard>

              <ContactCard icon={Clock} title="Office Hours">
                <div className="space-y-1">
                  <p>
                    <span className="font-medium">Mon – Fri:</span>{" "}
                    {SITE_CONFIG.officeHours.weekdays}
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span>{" "}
                    {SITE_CONFIG.officeHours.saturday}
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span>{" "}
                    {SITE_CONFIG.officeHours.sunday}
                  </p>
                </div>
              </ContactCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ---- Google Maps ---- */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Find Us on the Map
            </h2>
            <p className="text-gray-600">
              Visit our main office in Jeddah.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
          >
            <iframe
              src={SITE_CONFIG.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ForkliftPro Rentals Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* ---- Emergency Service CTA ---- */}
      <section className="bg-danger/5 border-t-4 border-danger">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-danger" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              For Emergency Service
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Forklift breakdown? Our 24/7 emergency team is ready. We offer{" "}
              <span className="font-bold text-secondary">same-day</span>{" "}
              response in Jeddah.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-3 bg-danger hover:bg-danger/90 text-white font-bold text-xl px-8 py-5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              <PhoneCall className="w-7 h-7 animate-pulse" />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Available 24 hours a day, 7 days a week, 365 days a year.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
