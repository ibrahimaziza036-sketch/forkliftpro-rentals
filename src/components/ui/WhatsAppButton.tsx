"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsapp.replace('+', '')}?text=Hi,%20I'm%20interested%20in%20renting%20a%20forklift%20in%20Jeddah`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-shadow hover:shadow-xl"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />

      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        className="relative h-7 w-7 fill-white"
      >
        <path d="M87.184 0C39.04 0 0 39.04 0 87.184c0 16.368 4.544 31.664 12.4 44.784L0 175.552l45.024-11.792A86.87 86.87 0 0 0 87.184 174.4c48.144 0 87.184-39.04 87.184-87.184S135.328 0 87.184 0zm0 160.048a72.67 72.67 0 0 1-37.088-10.16l-2.656-1.584-27.536 7.232 7.344-26.832-1.728-2.768A72.59 72.59 0 0 1 14.4 87.184c0-40.144 32.64-72.784 72.784-72.784s72.784 32.64 72.784 72.784-32.64 72.864-72.784 72.864zm39.92-54.528c-2.192-1.088-12.944-6.384-14.944-7.12-2.016-.736-3.472-1.088-4.944 1.088-1.472 2.192-5.68 7.12-6.976 8.592-1.28 1.472-2.576 1.664-4.768.576-2.192-1.088-9.248-3.408-17.616-10.864-6.512-5.808-10.912-12.976-12.192-15.168-1.28-2.192-.128-3.376 .96-4.464 .976-.976 2.192-2.56 3.28-3.84 1.088-1.28 1.472-2.192 2.192-3.664.736-1.472.368-2.768-.192-3.856-.56-1.088-4.944-11.92-6.768-16.32-1.776-4.288-3.584-3.712-4.944-3.776-1.28-.064-2.752-.08-4.224-.08-1.472 0-3.856.56-5.872 2.752-2.016 2.192-7.68 7.504-7.68 18.304s7.872 21.248 8.96 22.72c1.088 1.472 15.472 23.632 37.488 33.136 5.248 2.256 9.344 3.6 12.528 4.608 5.264 1.664 10.048 1.424 13.84 .864 4.224-.64 12.944-5.296 14.768-10.4 1.824-5.12 1.824-9.504 1.28-10.4-.544-.912-2.016-1.472-4.208-2.56z" />
      </svg>

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
