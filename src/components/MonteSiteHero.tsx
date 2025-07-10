
import { Button } from "@/components/ui/button";

const MonteSiteHero = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Monte Site
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
              Lançamento de Estilos Profissionais para Sites Institucionais
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-xl md:text-2xl font-medium text-accent">
              Lançamento de Estilos Profissionais
            </h3>
            <p className="text-lg md:text-xl text-foreground font-medium">
              Escolha o estilo que mais combina com o seu negócio!
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Apresentamos nossa nova linha de templates para sites institucionais — modernos, responsivos e prontos para destacar sua marca na internet. Conte com uma implantação rápida e suporte especializado da equipe Monte Site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonteSiteHero;
