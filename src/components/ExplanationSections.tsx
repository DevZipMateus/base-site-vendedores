import { FileText, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExplanationSections = () => {
  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* NF-e Explanation */}
          <Card className="bg-card/50 backdrop-blur border-purple-glow/20 hover:border-purple-glow/40 transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">
                O que é Nota Fiscal Eletrônica (NF-e)?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">
                A Nota Fiscal Eletrônica (NF-e) é um documento digital exigido pela Secretaria da Fazenda (SEFAZ) 
                para registrar as vendas e prestações de serviços de uma empresa. Ela é gerada em formato XML e 
                precisa ser autorizada pela SEFAZ para ter validade legal. O sistema NFe+ cuida de todo esse 
                processo, de forma simples, rápida e segura.
              </p>
            </CardContent>
          </Card>

          {/* XML Explanation */}
          <Card className="bg-card/50 backdrop-blur border-purple-glow/20 hover:border-purple-glow/40 transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">
                O que é o arquivo XML?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-base">
                O XML é o arquivo oficial da nota fiscal eletrônica. Ele contém todas as informações detalhadas 
                da nota, organizadas de forma padronizada. Esse arquivo é o que a SEFAZ analisa para aprovar a 
                emissão da NF-e.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExplanationSections;