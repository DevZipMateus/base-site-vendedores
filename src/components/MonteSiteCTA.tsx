
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const MonteSiteCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991806026";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços do Monte Site.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

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
        
        <div className="flex justify-center">
          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Fale com o Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonteSiteCTA;
