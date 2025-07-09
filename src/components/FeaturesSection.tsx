import { 
  TestTube, 
  Package, 
  Users, 
  Mail, 
  Download, 
  FileEdit 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: TestTube,
      title: "Ambiente de testes e produção",
      description: "Ideal para aprender sem erros antes de emitir notas com valor fiscal."
    },
    {
      icon: Package,
      title: "Cadastro de produtos",
      description: "Preencha dados tributários como ICMS, NCM, PIS, COFINS e outros."
    },
    {
      icon: Users,
      title: "Cadastro de contatos",
      description: "Salve clientes, fornecedores e transportadoras com todas as informações exigidas pela SEFAZ."
    },
    {
      icon: Mail,
      title: "Envio por e-mail",
      description: "Envio automático das notas fiscais para seus clientes."
    },
    {
      icon: Download,
      title: "Importação de XMLs",
      description: "Receba e armazene notas dos seus fornecedores."
    },
    {
      icon: FileEdit,
      title: "Carta de correção e eventos",
      description: "Registre correções e ocorrências direto no sistema."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Funcionalidades do Sistema NFe+
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recursos completos e poderosos para facilitar sua gestão fiscal
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-purple-glow/20 hover:border-purple-glow/40 transition-all duration-300 hover:shadow-glow group h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow-pulse">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;