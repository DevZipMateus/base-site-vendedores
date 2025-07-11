
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Shield, Zap, CheckCircle, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const NFePlusSection = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "5555991806026";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Sistema NFe+.");
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
                Sistema NFe+
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                Solução completa para emissão de notas fiscais
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Emissor de nota fiscal eletrônica gratuito, simples e seguro. Perfeito para pequenas empresas e contadores que buscam praticidade e confiabilidade na emissão de NFe.
              </p>
            </div>

            {/* Características */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">100% Gratuito</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Fácil de Usar</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Seguro e Confiável</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Emissão Rápida</span>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/nfe-plus')}
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
                  src="/lovable-uploads/32c21c99-dc8c-4b2f-9324-3265919560f6.png" 
                  alt="Sistema NFe+" 
                  className="w-full h-auto object-contain max-h-[400px] lg:max-h-[500px]"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFePlusSection;
