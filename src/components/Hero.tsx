
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5555991806026', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:daniel.escobar@zipline.com.br', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(220_100%_90%),transparent_50%)]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-primary opacity-10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Daniel Escobar
            </h1>
            <p className="text-xl md:text-2xl text-blue-primary font-medium">
              Closer
            </p>
            <p className="text-lg text-muted-foreground">
              Atuo em toda região nacional.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Ajudo sua empresa a crescer mais com soluções para gestão da sua empresa e
              posicionamento digital da sua marca para alavancar suas vendas e torna-la visível no mercado onde atua.
            </p>
            
            <blockquote className="text-xl italic text-accent border-l-4 border-primary pl-6">
              "Soluções que te ajuda a crescer!"
            </blockquote>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleWhatsApp} className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-6 py-3">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Button>
            
            <Button variant="outline" onClick={handleEmail} className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-background transition-all duration-300 text-lg px-6 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center h-full">
          <div className="relative h-full flex items-end">
            <img 
              alt="Daniel Escobar" 
              className="h-[95vh] w-auto max-w-full object-cover object-bottom" 
              src="/lovable-uploads/c8a5b401-2e69-42e6-a5e0-e64816bbeb21.png" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
