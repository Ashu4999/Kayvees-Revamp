import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import ServicesBento from "@/components/ServicesBento";
import ProjectsGallery from "@/components/ProjectsGallery";
import CeoSection from "@/components/CeoSection";
import BrochureSection from "@/components/BrochureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ClientsMarquee />
      <ServicesBento />
      <ProjectsGallery />
      <CeoSection />
      <BrochureSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
