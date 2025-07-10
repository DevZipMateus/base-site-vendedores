
import { Button } from "@/components/ui/button";
import { Palette, MessageCircle } from "lucide-react";

const MonteSiteCTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Pronto para criar o site ideal para sua empresa?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Escolha um dos nossos estilos profissionais e comece agora mesmo!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
          >
            <Palette className="mr-2 h-5 w-5" />
            Escolher Estilo
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Fale com um Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonteSiteCTA;
