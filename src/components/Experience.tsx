
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Freelancer",
      period: "2020 - Presente",
      description: "Desenvolvimento de aplicações web completas usando React, Node.js e outras tecnologias modernas.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      title: "Consultor em Tecnologia",
      company: "Autônomo",
      period: "2019 - Presente",
      description: "Consultoria em soluções tecnológicas para pequenas e médias empresas.",
      technologies: ["Análise de Sistemas", "Automação", "Integração"]
    }
  ];

  return (
    <section className="py-20 bg-muted/50" id="experience">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça minha trajetória profissional e os projetos que desenvolvi ao longo dos anos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {exp.company} • {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
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
