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

    // Classe para os lasers
    class Laser {
      x: number;
      y: number;
      color: string;
      width: number;
      endX: number;
      endY: number;

      constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 2;
        this.endX = Math.random() * canvas.width;
        this.endY = Math.random() * canvas.height;
      }

      draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
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
      // Limpa os lasers antigos
      lasers = [];

      // Cria novos lasers em intervalos aleatórios
      if (Math.random() < 0.1) {
        lasers.push(new Laser(0, 0, 'lime')); // Laser verde do canto superior esquerdo
      }
      if (Math.random() < 0.1) {
        lasers.push(new Laser(canvas.width, 0, 'purple')); // Laser roxo do canto superior direito
      }

      for (let i = 0; i < lasers.length; i++) {
        lasers[i].draw();
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
      
      <div className="relative" style={{ zIndex: 2 }}>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Bem-vindo ao Show
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Uma experiência incrível espera por você.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <MessageSquare className="w-6 h-6 mr-2" />
              WhatsApp
            </Button>
            
            <Button 
              onClick={handleEmail}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              <Mail className="w-6 h-6 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanvasHero;