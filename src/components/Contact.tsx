
import { MessageCircle, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(55) 99180-6026",
    action: () => window.open('https://wa.me/5555991806026', '_blank'),
    primary: true
  },
  {
    icon: Mail,
    title: "Email",
    value: "daniel.escobar@zipline.com.br",
    action: () => window.open('mailto:daniel.escobar@zipline.com.br', '_blank'),
    primary: false
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(55) 99180-6026",
    action: () => window.open('tel:+5555991806026', '_blank'),
    primary: false
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Santa Maria, RS",
    action: () => {},
    primary: false
  }
];

const Contact = () => {
  const handleInstagram = () => {
    window.open('https://www.instagram.com/danielescobar_closer/?locale=pl&hl=am-et', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-background to-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(220_100%_90%),transparent_50%)] opacity-40" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialista em posicionamento digital pronto para transformar seu negócio online em uma máquina de vendas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className={`bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-primary/50 transition-all duration-300 hover:shadow-glow group cursor-pointer ${
                method.primary ? 'ring-2 ring-blue-primary/30' : ''
              }`}
              onClick={method.action}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 rounded-full ${
                    method.primary ? 'bg-gradient-primary animate-glow-pulse' : 'bg-secondary group-hover:bg-gradient-primary'
                  } transition-all duration-300`}>
                    <method.icon className={`h-6 w-6 ${
                      method.primary ? 'text-primary-foreground' : 'text-foreground group-hover:text-primary-foreground'
                    }`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {method.title}
                </h3>
                <p className={`${
                  method.primary ? 'text-blue-primary font-medium' : 'text-muted-foreground'
                }`}>
                  {method.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Pronto para acelerar suas vendas online?
            </h3>
            <p className="text-muted-foreground">
              Clique no botão abaixo e vamos conversar sobre como posso transformar seu negócio
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://wa.me/5555991806026?text=Olá Daniel! Vi seu portfólio e gostaria de conversar sobre marketing digital para meu e-commerce.', '_blank')}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 animate-glow-pulse"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Começar Projeto
            </Button>
            
            <Button 
              onClick={handleInstagram}
              variant="outline"
              size="lg"
              className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-background transition-all duration-300 text-lg px-8 py-4"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
