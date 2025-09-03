import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";
import profileImage from "@/assets/profile-davi.jpg";

const CanvasHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Classe para as partículas de fumaça
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'rgba(255, 255, 255, 0.05)';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Classe para os lasers (atualizada para ter ângulo e fade out)
    class Laser {
      startX: number;
      startY: number;
      color: string;
      width: number;
      angle: number;
      length: number;
      opacity: number;
      fadeSpeed: number;

      constructor(startX: number, startY: number, color: string, angle: number, length: number) {
        this.startX = startX;
        this.startY = startY;
        this.color = color;
        this.width = 2.5; // Um pouco mais grosso para melhor visualização
        this.angle = angle;
        this.length = length;
        this.opacity = 1;
        this.fadeSpeed = 0.01; // VELOCIDADE REDUZIDA (valor menor = mais lento)
      }

      update() {
        this.opacity -= this.fadeSpeed;
        if (this.opacity < 0) {
          this.opacity = 0;
        }
      }

      draw() {
        if (this.opacity > 0) {
          ctx.strokeStyle = `rgba(${this.color}, ${this.opacity})`;
          ctx.lineWidth = this.width;
          ctx.beginPath();
          ctx.moveTo(this.startX, this.startY);
          const endX = this.startX + Math.cos(this.angle) * this.length;
          const endY = this.startY + Math.sin(this.angle) * this.length;
          ctx.lineTo(endX, endY);
          ctx.stroke();
        }
      }
    }

    let particles: Particle[] = [];
    let lasers: Laser[] = [];

    function handleParticles() {
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.3) {
          particles.splice(i, 1);
          i--;
        }
      }
    }

    function handleLasers() {
      // Chance de criar um novo laser
      if (Math.random() < 0.2) { // MAIS FEIXES (aumentamos a chance de 0.1 para 0.2)
        // --- MUDANÇA DE COR AQUI ---
        const colors = ['0, 0, 205', '0, 191, 255', '255, 255, 255']; // Azul Escuro, Azul Claro e Branco
        
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Sorteia se o laser virá da esquerda ou da direita
        if (Math.random() < 0.5) {
          // Canhão da ESQUERDA INFERIOR
          // Ângulo para cima e para a direita (-90 a 0 graus)
          const angle = Math.random() * (Math.PI / 2) - (Math.PI / 2); 
          lasers.push(new Laser(0, canvas.height, randomColor, angle, canvas.height * 1.5));
        } else {
          // Canhão da DIREITA INFERIOR
          // Ângulo para cima e para a esquerda (-180 a -90 graus)
          const angle = Math.random() * (-Math.PI / 2) - (Math.PI / 2);
          lasers.push(new Laser(canvas.width, canvas.height, randomColor, angle, canvas.height * 1.5));
        }
      }

      // Atualiza, desenha e remove os lasers que já desapareceram
      for (let i = lasers.length - 1; i >= 0; i--) {
        lasers[i].update();
        lasers[i].draw();
        if (lasers[i].opacity <= 0) {
          lasers.splice(i, 1);
        }
      }
    }

    let animationId: number;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      handleLasers();
      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre seus serviços.', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@exemplo.com?subject=Contato via Site', '_blank');
  };

  return (
    <section 
      className="relative w-screen h-screen flex justify-center items-center text-center overflow-hidden"
      style={{ backgroundColor: '#000', color: '#fff' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      {/* Hero Image positioned at bottom */}
      <img 
        src="/lovable-uploads/5f4fa3bb-d6f6-45b7-8e33-1e446a875ad9.png" 
        alt="Hero Image" 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 max-w-full h-auto"
        style={{ zIndex: 3, transform: 'translateX(-50%) scale(2)' }}
      />
      
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2" style={{ zIndex: 2 }}>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center flex-wrap gap-4">
            Bem-vindos ao Show com Parceria
            <a 
              href="https://egestor.com.br/cadastro.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/37a1badb-1091-4172-99d4-65383d0ed586.png" 
                alt="eGestor" 
                className="inline-block h-16 md:h-20 cursor-pointer"
              />
            </a>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CanvasHero;