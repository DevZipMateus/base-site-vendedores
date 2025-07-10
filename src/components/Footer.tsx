import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
          
            
            <span>por Daniel Escobar</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Monte Site. Todos os direitos reservados.
          </div>
          
          <div className="text-xs text-muted-foreground italic">
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;