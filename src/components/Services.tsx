
import { ShoppingCart, TrendingUp, Users, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ShoppingCart,
    title: "Posicionamento digital",
    description: "Estratégias completas para fortalecer sua presença online e destacar sua marca no mercado digital",
    features: ["Análise de mercado", "Estratégia de marca", "Presença digital"]
  },
  {
    icon: TrendingUp,
    title: "Sites profissionais e intuitivos",
    description: "Desenvolvimento de websites modernos, responsivos e otimizados para conversão",
    features: ["Design responsivo", "UX/UI otimizado", "Performance garantida"]
  },
  {
    icon: Users,
    title: "Soluções para sua gestão",
    description: "Ferramentas e sistemas integrados para otimizar a gestão do seu negócio",
    features: ["Automação de processos", "Relatórios detalhados", "Integração completa"]
  }
];

const Services = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5555991806026?text=Olá Daniel! Gostaria de saber mais sobre os serviços de marketing digital.', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(220_100%_90%),transparent_50%)] opacity-40" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Serviços Oferecidos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           Posicionamento digital Site profissionais e intuitivos Soluções para sua gestão
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardHeader>
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-secondary group-hover:bg-gradient-primary transition-all duration-300">
                    <service.icon className="h-8 w-8 text-foreground group-hover:text-primary-foreground" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-blue-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleWhatsApp} 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
