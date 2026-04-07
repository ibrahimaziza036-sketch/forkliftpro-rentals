"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";

const SERVICE_OPTIONS = [
  "Forklift Rental",
  "Repair & Maintenance",
  "Operator Training",
  "Forklift Sales",
  "Spare Parts",
  "Fleet Management",
  "Emergency Service",
] as const;

const quoteSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[\d\s()-]{7,20}$/, "Please enter a valid phone number"),
  serviceType: z.enum(SERVICE_OPTIONS, {
    message: "Please select a service",
  }),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      phone: "",
      serviceType: undefined,
      message: "",
    },
  });

  const onSubmit = async () => {
    setLoading(true);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl sm:p-10">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900">Quote Request Sent!</h3>
        <p className="mb-6 text-gray-600">
          Thank you for your interest. Our team will get back to you within 24 hours with a
          customized quote.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl bg-white p-8 shadow-xl sm:p-10"
    >
      <h3 className="mb-1 text-2xl font-bold text-gray-900">Get a Quick Quote</h3>
      <p className="mb-8 text-gray-500">Fill in the details and we will get back to you shortly.</p>

      {/* Name */}
      <div className="mb-5">
        <label htmlFor="quote-name" className="mb-1.5 block text-sm font-medium text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="quote-name"
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 ${
            errors.name ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="mb-5">
        <label htmlFor="quote-phone" className="mb-1.5 block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="quote-phone"
          type="tel"
          placeholder="+92 300 1234567"
          {...register("phone")}
          className={`w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 ${
            errors.phone ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-gray-300"
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Type */}
      <div className="mb-5">
        <label htmlFor="quote-service" className="mb-1.5 block text-sm font-medium text-gray-700">
          Service Type <span className="text-red-500">*</span>
        </label>
        <select
          id="quote-service"
          {...register("serviceType")}
          defaultValue=""
          className={`w-full appearance-none rounded-lg border bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 ${
            errors.serviceType ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-gray-300"
          }`}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-500">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="quote-message" className="mb-1.5 block text-sm font-medium text-gray-700">
          Message <span className="text-gray-400">(optional)</span>
        </label>
        <textarea
          id="quote-message"
          rows={4}
          placeholder="Tell us about your requirements..."
          {...register("message")}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-500 px-6 py-3.5 text-base font-bold text-gray-900 transition-colors hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Request a Quote"
        )}
      </button>
    </form>
  );
}
