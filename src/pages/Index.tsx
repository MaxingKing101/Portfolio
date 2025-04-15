import { FC } from 'react';
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WorkSection from "@/components/sections/WorkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

interface IndexProps {
  // Add any props here if needed
}

/**
 * Main index page component
 */
const Index: FC<IndexProps> = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="flex flex-col">
        <HeroSection id="hero" />
        <WorkSection id="work" />
        <ServicesSection id="services" />
        <ClientsSection id="clients" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
