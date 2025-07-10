
import { CheckCircle, Smartphone, Settings, Search } from "lucide-react";

const MonteSiteBenefits = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: "Design Responsivo",
      description: "Seu site perfeito em qualquer tela — desktop, tablet ou smartphone."
    },
    {
      icon: Settings,
      title: "Personalização Fácil",
      description: "Mude cores, imagens e textos com poucos cliques, sem precisar de conhecimento técnico."
    },
    {
      icon: Search,
      title: "Otimizado para SEO",
      description: "Templates desenvolvidos com foco em performance e visibilidade nos buscadores."
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Por que escolher os sites da Monte Site?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas para sua presença online. Nossos templates foram pensados para facilitar sua vida e impressionar seus visitantes.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-primary text-center">
            Diferenciais:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-glow transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonteSiteBenefits;
