import NFePlusHero from "@/components/NFePlusHero";
import BenefitsSection from "@/components/BenefitsSection";
import ExplanationSections from "@/components/ExplanationSections";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NFePlus = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation back to main site */}
      <div className="fixed top-4 left-4 z-50">
        <Button 
          onClick={() => window.location.href = '/'}
          variant="outline"
          className="border-purple-glow text-purple-glow hover:bg-purple-glow hover:text-background transition-all duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Site
        </Button>
      </div>
      
      <NFePlusHero />
      <BenefitsSection />
      <ExplanationSections />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default NFePlus;