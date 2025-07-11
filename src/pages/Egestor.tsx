import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Brain, ShoppingCart, Zap, Search, Image, Package, CreditCard, Paperclip, BarChart3, Target, Palette, Link, Truck, History, User, FileText, Flame, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/egestor-theme.css";
const Egestor = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-gradient-hero egestor-theme">
      {/* Navigation Back */}
      <div className="fixed top-4 left-4 z-50">
        <Button onClick={() => navigate('/')} variant="outline" className="bg-background/80 backdrop-blur-sm border-purple-glow/30 hover:bg-purple-glow/10">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Crie sua Loja Virtual com o{" "}
            <span className="egestor-gradient-text" data-text="eGestor">
              eGestor
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Tudo pronto para você começar a vender!
          </p>
          <div className="text-xl md:text-2xl text-accent font-semibold flex items-center justify-center gap-2">
            <Rocket className="h-6 w-6" />
            Loja virtual 100% configurada para você vender mais, com inteligência artificial, checkout rápido e suporte completo!
          </div>
        </div>

        {/* Bloco 1 - Introdução */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm border-purple-glow/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Você vende na loja física? Agora é hora de vender online sem complicações.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Com o eGestor, você ganha uma loja virtual completa, criada por especialistas, com tudo pronto para começar a vender — sem precisar entender nada de tecnologia.
                </p>
                <p className="text-xl font-semibold text-accent mt-4">
                  Você só cadastra os produtos. A gente cuida do resto.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bloco 2 - Destaques principais */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm border-purple-glow/20">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Destaques Principais
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[{
              icon: CheckCircle,
              text: "Loja criada por especialistas"
            }, {
              icon: Zap,
              text: "Checkout ultrarrápido: compre em até 40 segundos"
            }, {
              icon: Brain,
              text: "Inteligência artificial que descreve produtos e recomenda ofertas"
            }, {
              icon: ShoppingCart,
              text: "Recuperação automática de carrinhos abandonados"
            }, {
              icon: Link,
              text: "Integração com meios de pagamento e logística"
            }, {
              icon: Phone,
              text: "Suporte humano por WhatsApp e ligação"
            }].map((item, index) => <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/30">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Bloco 3 - Nós cuidamos de tudo */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm border-purple-glow/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              
              <h2 className="text-3xl font-bold text-foreground mb-4">
                NÓS CUIDAMOS DE TUDO!
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                Do design ao funcionamento da loja, passando por pagamentos, frete e até comunicação com o cliente — tudo fica por nossa conta.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[{
              icon: "📚",
              title: "Treinamento completo",
              desc: "Para usar sua loja com facilidade"
            }, {
              icon: "👥",
              title: "Suporte direto",
              desc: "Com pessoas reais"
            }, {
              icon: "🔄",
              title: "Atualizações contínuas",
              desc: "Melhorias constantes"
            }].map((item, index) => <div key={index} className="text-center p-6 rounded-lg bg-background/30">
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Bloco 4 - Recursos para alavancar vendas */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm border-purple-glow/20">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Recursos para Alavancar suas Vendas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[{
              icon: Brain,
              text: "Inteligência Artificial: cria descrições e entende o comportamento do cliente"
            }, {
              icon: ShoppingCart,
              text: "Recuperação de Carrinho: aumenta suas vendas automaticamente"
            }, {
              icon: Zap,
              text: "Ultracheckout: finalização de compra em 40 segundos"
            }, {
              icon: Search,
              text: "Busca Inteligente: mostra o produto certo na hora certa"
            }, {
              icon: Image,
              text: "Marca D'água Automática: protege suas fotos"
            }, {
              icon: Package,
              text: "Frete na página do produto: melhora a conversão"
            }, {
              icon: CreditCard,
              text: "Parcelamento visível no catálogo"
            }, {
              icon: Paperclip,
              text: "Anexos e informações completas no produto"
            }, {
              icon: BarChart3,
              text: "Controle de estoque inteligente"
            }, {
              icon: Target,
              text: "Vitrines de recomendação personalizadas em tempo real"
            }].map((item, index) => <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors">
                  <item.icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Bloco 5 - Vantagens Exclusivas */}
        <Card className="mb-12 bg-card/50 backdrop-blur-sm border-purple-glow/20">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Vantagens Exclusivas para seu Negócio
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[{
              icon: Palette,
              text: "Aparência personalizável: você escolhe o visual da sua loja"
            }, {
              icon: Link,
              text: "Integração com ferramentas que você já usa"
            }, {
              icon: Truck,
              text: "Opções de envio flexíveis: motoboy, retirada ou faixas de CEP"
            }, {
              icon: History,
              text: "Histórico de edições com possibilidade de reversão"
            }, {
              icon: User,
              text: "Logar como cliente: veja exatamente o que seu cliente vê"
            }, {
              icon: FileText,
              text: "Formulários personalizados para contato rápido e direto"
            }].map((item, index) => <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background/30">
                  <item.icon className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item.text}</span>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Bloco 6 - CTA Final */}
        <Card className="bg-gradient-primary border-none">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Flame className="h-8 w-8 text-primary-foreground" />
              <h2 className="text-3xl font-bold text-primary-foreground">
                Pronto para começar? Deixe a parte técnica com a gente!
              </h2>
            </div>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto">
              Com o eGestor, você vende mais, se preocupa menos e ainda fortalece sua marca com uma loja própria, profissional e eficiente.
            </p>
            
            <div className="space-y-4">
              <p className="text-lg text-primary-foreground/80 mb-6">
                Entre em contato agora e peça sua loja virtual pronta!<br />
                Ou clique no botão abaixo e comece hoje mesmo!
              </p>
              
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 text-xl px-8 py-6 rounded-xl shadow-glow animate-glow-pulse" onClick={() => window.open('https://wa.me/5555991806026', '_blank')}>
                <MessageCircle className="mr-3 h-6 w-6" />
                Quero saber mais
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Egestor;