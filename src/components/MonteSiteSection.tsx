
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Globe, Palette, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MonteSiteSection = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991806026";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços do Monte Site.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto à esquerda */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Monte Site
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                Sites Institucionais Profissionais
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Escolha o estilo que mais combina com o seu negócio! Templates modernos, responsivos e prontos para destacar sua marca na internet. Implantação rápida e suporte especializado.
              </p>
            </div>

            {/* Características */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Design Responsivo</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Palette className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Estilos Personalizáveis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Implantação Rápida</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Suporte Especializado</span>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/monte-site')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                Ver Mais Detalhes
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="border-primary text-primary hover:bg-primary/10"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale com o Especialista
              </Button>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="relative">
            <Card className="overflow-hidden shadow-card">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/32a288e6-c2ac-447d-a100-fb5a9f472c84.png"
                  alt="Monte Site - Template de site institucional"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonteSiteSection;
