import { ShoppingCart, TrendingUp, Users, Megaphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const services = [{
  icon: ShoppingCart,
  title: "Criação de E-commerce",
  description: "Desenvolvimento completo de lojas virtuais otimizadas para conversão",
  features: ["Design responsivo", "Integração de pagamentos", "SEO otimizado"]
}, {
  icon: TrendingUp,
  title: "Otimização de Conversões",
  description: "Análise e melhoria da performance de vendas do seu e-commerce",
  features: ["A/B Testing", "Analytics avançado", "UX/UI optimization"]
}, {
  icon: Users,
  title: "Estratégia de Marketing",
  description: "Planejamento estratégico para aumentar vendas e engajamento",
  features: ["Redes sociais", "Email marketing", "Campanhas pagas"]
}, {
  icon: Megaphone,
  title: "Consultoria Digital",
  description: "Orientação especializada para transformação digital do seu negócio",
  features: ["Análise de mercado", "Plano de ação", "Acompanhamento"]
}];
const Services = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5555991806026?text=Olá Daniel! Gostaria de saber mais sobre os serviços de marketing digital.', '_blank');
  };
  return <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(220_100%_90%),transparent_50%)] opacity-40" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Serviços Oferecidos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de marketing digital para e-commerce com a expertise de quem já transformou diversos negócios
          </p>
        </div>
        
        
        
        <div className="text-center">
          <Button onClick={handleWhatsApp} size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;