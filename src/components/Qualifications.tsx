
import { Target, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const qualifications = [
  {
    icon: Target,
    title: "Melhor equipe de assessoramento do país",
    description: "Profissionais especializados que oferecem suporte completo e personalizado"
  },
  {
    icon: TrendingUp,
    title: "Soluções simples e intuitivas", 
    description: "Ferramentas desenvolvidas para facilitar o uso e maximizar resultados"
  },
  {
    icon: Users,
    title: "Experiência do Cliente",
    description: "Otimização da jornada do cliente para máxima conversão e satisfação"
  },
  {
    icon: Zap,
    title: "Inovação Constante",
    description: "Sempre atualizado with as últimas tendências e tecnologias do mercado digital"
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
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualifications.map((qual, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-secondary group-hover:bg-gradient-primary transition-all duration-300">
                    <qual.icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
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
