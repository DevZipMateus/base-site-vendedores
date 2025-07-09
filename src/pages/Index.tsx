import NFePlusHero from "@/components/NFePlusHero";
import BenefitsSection from "@/components/BenefitsSection";
import ExplanationSections from "@/components/ExplanationSections";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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

export default Index;
