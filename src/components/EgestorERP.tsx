
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, TrendingUp, BarChart3, Users, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const EgestorERP = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "5555981311402";
    const message = encodeURIComponent("Olá! Tenho interesse no sistema EgestoERP.");
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
                Egestor
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                Dobre seus lucros otimizando sua gestão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sistema completo de gestão empresarial que integra vendas, estoque, financeiro e muito mais. Transforme sua empresa com tecnologia de ponta e suporte especializado.
              </p>
            </div>

            {/* Características */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Aumento de Lucros</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Relatórios Avançados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Gestão Completa</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Integração Total</span>
              </div>
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => navigate('/egestor')}
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

          {/* Vídeo à direita */}
          <div className="relative">
            <Card className="overflow-hidden shadow-card">
              <CardContent className="p-0">
                <video 
                  className="w-full aspect-video object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png"
                >
                  <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
