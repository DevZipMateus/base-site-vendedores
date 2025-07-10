
import NFePlusHero from "@/components/NFePlusHero";
import BenefitsSection from "@/components/BenefitsSection";
import ExplanationSections from "@/components/ExplanationSections";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "@/styles/nfe-plus-theme.css";

const NFePlus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background nfe-plus-theme">
      {/* Navigation back to main site */}
      <div className="fixed top-4 left-4 z-50">
        <Button 
          onClick={() => navigate('/')}
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
