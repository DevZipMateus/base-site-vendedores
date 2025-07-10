
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const NFePlusHero = () => {
  const handleContact = () => {
    window.open('https://wa.me/5555991806026', '_blank');
  };
  return <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(270_85%_15%),transparent_50%)]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-glow opacity-10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Emissor de Nota Fiscal Eletrônica Grátis — NFe+
            </h1>
            <p className="text-xl md:text-2xl text-purple-glow font-medium max-w-4xl mx-auto">
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
    </section>;
};
export default NFePlusHero;
