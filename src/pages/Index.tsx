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
        <Hero />
        <WorkSection />
        <ServicesSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
