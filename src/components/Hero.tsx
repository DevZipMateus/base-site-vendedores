import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5555998765432', '_blank');
  };
  const handleEmail = () => {
    window.open('mailto:daniel.escobar@zipline.com.br', '_blank');
  };
  return <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 relative overflow-hidden">
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
              Consultor de Marketing Digital
            </p>
            <p className="text-lg text-muted-foreground">
              Especialista em E-commerce • Santa Maria
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Especialista em marketing digital com foco em e-commerce. Ajudo empresas a 
              aumentarem suas vendas online através de estratégias personalizadas e 
              soluções tecnológicas inovadoras.
            </p>
            
            <blockquote className="text-xl italic text-accent border-l-4 border-primary pl-6">
              "Transformando negócios através do digital"
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
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-50 animate-glow-pulse" />
            <img alt="Daniel Escobar" className="relative w-80 h-80 rounded-full object-cover border-4 border-blue-primary shadow-card" src="/lovable-uploads/ca39ac0f-5132-4e25-9774-1f569c6dd4f8.jpg" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;