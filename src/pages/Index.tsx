import { FC } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

interface IndexProps {
  // Add any props here if needed
}

const Index: FC<IndexProps> = () => {
  return (
    <div className="min-h-screen bg-brand-deepest-blue text-white">
      <Navbar />
      <main className="flex flex-col">
        <Hero id="hero" />
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
