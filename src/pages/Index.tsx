import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Qualifications from "@/components/Qualifications";
import Services from "@/components/Services";
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
        <Button 
          onClick={() => navigate('/egestor')}
          variant="outline"
          className="bg-background/80 backdrop-blur-sm border-purple-glow/30 hover:bg-purple-glow/10"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          eGestor
        </Button>
        <Button 
          onClick={() => navigate('/nfe-plus')}
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Sistema NFe+
        </Button>
      </div>
      
      <Hero />
      <Experience />
      <Qualifications />
      <Services />
      <EgestorERP />
      <NFePlusSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
