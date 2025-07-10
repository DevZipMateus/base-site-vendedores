
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5555998765432', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:daniel.escobar@zipline.com.br', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+5555998765432', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(220_100%_90%),transparent_50%)]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-primary opacity-10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Card className="bg-card/20 backdrop-blur border-blue-primary/30 shadow-glow">
          <CardContent className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato comigo e descubra como o NFe+ pode revolucionar a emissão das suas notas fiscais eletrônicas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleEmail}
                size="lg"
                className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-background transition-all duration-300 text-lg px-8 py-4"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handlePhone}
                size="lg"
                className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-background transition-all duration-300 text-lg px-8 py-4"
              >
                <Phone className="mr-2 h-5 w-5" />
                Telefone
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-blue-primary/20">
              <p className="text-muted-foreground">
                <span className="font-semibold text-blue-primary">Daniel Escobar</span><br />
                Consultor de Marketing Digital<br />
                Santa Maria, RS
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
