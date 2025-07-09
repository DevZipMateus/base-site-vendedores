import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Qualifications from "@/components/Qualifications";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation to NFe+ */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={() => window.location.href = '/nfe-plus'}
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
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
