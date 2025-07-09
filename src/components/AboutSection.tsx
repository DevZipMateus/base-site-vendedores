import { Building2, Calendar, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Desde 2001",
      description: "Mais de 20 anos de experiência"
    },
    {
      icon: Users,
      title: "Micro e Pequenas Empresas",
      description: "Especialistas no seu segmento"
    },
    {
      icon: Shield,
      title: "Sistemas Seguros",
      description: "Dados protegidos e atualizados"
    },
    {
      icon: Building2,
      title: "Soluções Online",
      description: "Acesse de qualquer lugar"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Quem Somos
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O NFe+ é um produto da <span className="text-purple-glow font-semibold">Zipline Tecnologia Ltda</span>, 
              empresa especializada em soluções online para micro e pequenas empresas desde 2001.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com foco na simplicidade e eficiência, nossos sistemas são seguros, atualizados e pensados 
              para facilitar a rotina de quem empreende.
            </p>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-purple-glow/20 hover:border-purple-glow/40 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-glow-pulse">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;