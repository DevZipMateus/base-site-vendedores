import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Web Designer Junior",
    company: "Zipline",
    period: "2025 - Atual",
    description: "Desenvolvimento de interfaces web modernas e responsivas, criação de landing pages de alta conversão"
  },
  {
    role: "Programador de Robô de Solda",
    company: "Indústria Metalúrgica",
    period: "2024",
    description: "Programação e operação de robôs industriais para processos de solda automatizada"
  },
  {
    role: "Estagiário de Logística",
    company: "Empresa de Distribuição",
    period: "2023",
    description: "Gestão de estoque, controle de entrada e saída de produtos, otimização de processos"
  },
  {
    role: "Militar",
    company: "Forças Armadas",
    period: "2022",
    description: "Desenvolvimento de disciplina, trabalho em equipe e liderança em ambiente militar"
  },
  {
    role: "Motoboy",
    company: "Serviços de Entrega",
    period: "2021",
    description: "Entrega de produtos com agilidade e responsabilidade, conhecimento da cidade"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(270_85%_20%),transparent_60%)] opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground">
            Uma trajetória diversificada que me trouxe perspectivas únicas
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card/40 backdrop-blur-sm border-border/50 hover:border-purple-glow/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-primary group-hover:animate-glow-pulse">
                        <Briefcase className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-accent font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-purple-glow">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;