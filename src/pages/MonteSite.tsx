
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MonteSiteHero from "@/components/MonteSiteHero";
import MonteSiteBenefits from "@/components/MonteSiteBenefits";
import MonteSiteCTA from "@/components/MonteSiteCTA";
import Footer from "@/components/Footer";

const MonteSite = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation back to home */}
      <div className="fixed top-4 left-4 z-50">
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
          className="bg-background/80 backdrop-blur-sm border-border/30 hover:bg-accent/10"
        >
          ← Voltar ao Início
        </Button>
      </div>

      {/* Navigation to other pages */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button 
          onClick={() => navigate('/egestor')}
          variant="outline"
          className="bg-background/80 backdrop-blur-sm border-border/30 hover:bg-accent/10"
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
      
      <MonteSiteHero />
      <MonteSiteBenefits />
      <MonteSiteCTA />
      <Footer />
    </div>
  );
};

export default MonteSite;
