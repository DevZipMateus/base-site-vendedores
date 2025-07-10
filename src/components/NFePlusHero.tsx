
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NFePlusHero = () => {
  const handleContact = () => {
    window.open('https://wa.me/5555991806026', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Emissor de Nota Fiscal Eletrônica Grátis — <span className="nfe-plus-gradient-text" data-text="NFe+">NFe+</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-medium max-w-4xl mx-auto">
              Simples, completo e com planos exclusivos para contadores!
            </p>
          </div>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur px-4 py-2 rounded-full border border-purple-glow/30">
              <CheckCircle className="h-5 w-5 text-purple-glow" />
              <span className="text-foreground font-medium">100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur px-4 py-2 rounded-full border border-purple-glow/30">
              <CheckCircle className="h-5 w-5 text-purple-glow" />
              <span className="text-foreground font-medium">Fácil de Usar</span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur px-4 py-2 rounded-full border border-purple-glow/30">
              <CheckCircle className="h-5 w-5 text-purple-glow" />
              <span className="text-foreground font-medium">Seguro e Confiável</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button onClick={handleContact} size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4">
              Falar com Representante
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFePlusHero;
