import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Experience = () => {
  const experiences = [{
    title: "Desenvolvedor Full Stack",
    company: "Freelancer",
    period: "2020 - Presente",
    description: "Desenvolvimento de aplicações web completas usando React, Node.js e outras tecnologias modernas.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"]
  }, {
    title: "Consultor em Tecnologia",
    company: "Autônomo",
    period: "2019 - Presente",
    description: "Consultoria em soluções tecnológicas para pequenas e médias empresas.",
    technologies: ["Análise de Sistemas", "Automação", "Integração"]
  }];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experiência Profissional</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>{exp.company} • {exp.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
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