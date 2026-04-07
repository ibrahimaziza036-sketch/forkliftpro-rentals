import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ExitIntentPopup from "@/components/ui/ExitIntentPopup";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <ExitIntentPopup />
    </>
  );
}
