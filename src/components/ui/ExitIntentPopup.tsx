"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Gift } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed && !isVisible) {
        const lastShown = sessionStorage.getItem("exitPopupShown");
        if (!lastShown) {
          setIsVisible(true);
          sessionStorage.setItem("exitPopupShown", "true");
        }
      }
    },
    [dismissed, isVisible]
  );

  useEffect(() => {
    document.addEventListener("mouseout", handleMouseLeave);
    return () => document.removeEventListener("mouseout", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Exit Popup Lead",
          phone: "N/A",
          serviceType: "Forklift Rental",
          email,
          source: "exit-intent-popup",
        }),
      });
    } catch {
      // Still show success — don't block UX for analytics failure
    }

    setSubmitted(true);
    setTimeout(() => {
      setIsVisible(false);
      setDismissed(true);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleDismiss}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-lg"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-primary p-6 text-center relative">
                <button
                  onClick={handleDismiss}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Close popup"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
                <Gift className="w-12 h-12 text-white mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-white mb-1">
                  Wait! Don&apos;t Leave Yet
                </h3>
                <p className="text-white/90 text-sm">
                  Get 10% off your first forklift rental
                </p>
              </div>

              <div className="p-6">
                {!submitted ? (
                  <>
                    <p className="text-gray-600 text-center mb-5 text-sm">
                      Enter your email to claim your exclusive discount. We&apos;ll
                      also send you our free &quot;Forklift Selection Guide&quot;
                      to help you choose the right equipment.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm"
                      />
                      <button
                        type="submit"
                        className="w-full btn-primary py-3 text-sm"
                      >
                        Claim My 10% Discount
                      </button>
                    </form>
                    <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                      <p className="text-gray-500 text-xs mb-2">
                        Or call us now for immediate assistance
                      </p>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-secondary mb-2">
                      Discount Claimed!
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Check your email for the discount code and free guide.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
