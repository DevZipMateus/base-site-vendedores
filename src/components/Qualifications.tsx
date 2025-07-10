
import { Target, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const qualifications = [
  {
    icon: Target,
    title: "Estratégias Personalizadas",
    description: "Desenvolvimento de soluções únicas para cada tipo de negócio e público-alvo"
  },
  {
    icon: TrendingUp,
    title: "Foco em Resultados",
    description: "Orientação para ROI e crescimento sustentável das vendas online"
  },
  {
    icon: Users,
    title: "Experiência do Cliente",
    description: "Otimização da jornada do cliente para máxima conversão e satisfação"
  },
  {
    icon: Zap,
    title: "Inovação Constante",
    description: "Sempre atualizado com as últimas tendências e tecnologias do mercado digital"
  }
];

const Qualifications = () => {
  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(220_100%_90%),transparent_50%)] opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Diferenciais
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que me torna único no mercado de marketing digital e e-commerce
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualifications.map((qual, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-primary group-hover:animate-glow-pulse">
                    <qual.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {qual.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {qual.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
