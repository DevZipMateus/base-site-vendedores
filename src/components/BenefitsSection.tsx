import { 
  CreditCard, 
  Send, 
  Shield, 
  Mail, 
  Archive, 
  RefreshCw, 
  Globe 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Grátis para até 15 notas por mês",
      description: "Comece a usar sem custos e emita suas primeiras notas fiscais"
    },
    {
      icon: Send,
      title: "Envio ilimitado no plano profissional",
      description: "Emita quantas notas precisar sem limitações"
    },
    {
      icon: Shield,
      title: "Armazenamento seguro e em nuvem",
      description: "Seus dados protegidos com backup automático"
    },
    {
      icon: Mail,
      title: "Envio automático por e-mail",
      description: "XML e DANFE enviados automaticamente para seus clientes"
    },
    {
      icon: Archive,
      title: "Cópias de segurança automáticas",
      description: "Nunca perca suas notas fiscais com backup automático"
    },
    {
      icon: RefreshCw,
      title: "Atualizações constantes e gratuitas",
      description: "Sempre atualizado com as últimas exigências da SEFAZ"
    },
    {
      icon: Globe,
      title: "Compatível com qualquer computador",
      description: "100% online, acesse de qualquer lugar e dispositivo"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Principais Benefícios do NFe+
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para emitir notas fiscais eletrônicas de forma simples e segura
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-purple-glow/20 hover:border-purple-glow/40 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;