import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5555981311402', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:davi.moraes@zipline.com.br', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(270_85%_15%),transparent_50%)]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-glow opacity-10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Davi Schonardie Moraes
            </h1>
            <p className="text-xl md:text-2xl text-purple-glow font-medium">
              Web Designer Junior
            </p>
            <p className="text-lg text-muted-foreground">
              Estagiário mais bolado • Santa Maria
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Web designer com uma vasta experiência de 1 mês. Já fui programador de robô de solda, 
              estagiário na área de logística, militar, auxiliar de pintor, servente de pedreiro, motoboy... 
              Sempre me esforçando para ser o melhor naquilo que faço.
            </p>
            
            <blockquote className="text-xl italic text-accent border-l-4 border-primary pl-6">
              "O que é um peido para quem já está cagado"
            </blockquote>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={handleWhatsApp}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-6 py-3"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleEmail}
              className="border-purple-glow text-purple-glow hover:bg-purple-glow hover:text-background transition-all duration-300 text-lg px-6 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-glow-pulse" />
            <img 
              src="/lovable-uploads/7470d62d-5d02-4789-a2ad-c33268969743.png" 
              alt="Davi Schonardie Moraes" 
              className="relative w-80 h-80 rounded-full object-cover border-4 border-purple-glow shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;