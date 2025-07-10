
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [{
  role: "Consultor de Marketing Digital",
  company: "Zipline",
  period: "2023 - Atual",
  description: "Desenvolvimento de estratégias de marketing digital para e-commerce, gestão de campanhas e otimização de conversões"
}, {
  role: "Especialista em E-commerce",
  company: "Agência Digital Premium",
  period: "2021 - 2023",
  description: "Criação e gestão de lojas virtuais, implementação de estratégias de vendas online e análise de performance"
}, {
  role: "Analista de Marketing Digital",
  company: "TechSolutions",
  period: "2019 - 2021",
  description: "Gestão de redes sociais, criação de conteúdo digital e campanhas de marketing para diversos segmentos"
}, {
  role: "Assistente de Marketing",
  company: "StartUp Inovadora",
  period: "2018 - 2019",
  description: "Suporte em campanhas digitais, análise de métricas e desenvolvimento de estratégias de crescimento"
}, {
  role: "Estagiário de Marketing",
  company: "Empresa Regional",
  period: "2017 - 2018",
  description: "Primeira experiência profissional, aprendizado em marketing tradicional e digital"
}];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,hsl(220_100%_90%),transparent_50%)] opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 5 anos transformando negócios através do marketing digital
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-full bg-secondary group-hover:bg-gradient-primary transition-all duration-300">
                      <Briefcase className="h-8 w-8 text-foreground group-hover:text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-blue-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      
                      <div className="flex items-center text-muted-foreground mt-2 lg:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
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
