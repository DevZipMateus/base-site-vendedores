
import CanvasHero from "@/components/CanvasHero";
import Experience from "@/components/Experience";
import Qualifications from "@/components/Qualifications";
import Services from "@/components/Services";
import MonteSiteSection from "@/components/MonteSiteSection";
import EgestorERP from "@/components/EgestorERP";
import NFePlusSection from "@/components/NFePlusSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation to other pages */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        
        
        
      </div>
      
      <CanvasHero />
      <Experience />
      <Qualifications />
      <Services />
      <MonteSiteSection />
      <EgestorERP />
      <NFePlusSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
