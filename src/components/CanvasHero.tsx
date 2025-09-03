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

    // Particle system for smoke effect
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = -Math.random() * 3 - 1;
        this.life = 1;
        this.maxLife = Math.random() * 60 + 40;
        this.size = Math.random() * 4 + 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= 1 / this.maxLife;
        this.vy *= 0.99; // Slow down over time
        this.vx *= 0.99;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const alpha = this.life * 0.3;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(220, 100%, ${50 + Math.random() * 20}%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Laser beam effect
    class Laser {
      x: number;
      y: number;
      angle: number;
      length: number;
      intensity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.random() * Math.PI * 2;
        this.length = Math.random() * 200 + 100;
        this.intensity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.angle += 0.01;
        this.intensity = Math.sin(Date.now() * 0.005) * 0.3 + 0.5;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        ctx.save();
        ctx.globalAlpha = this.intensity;
        ctx.strokeStyle = 'hsl(220, 100%, 60%)';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'hsl(220, 100%, 60%)';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
      }
    }

    const particles: Particle[] = [];
    const lasers: Laser[] = [];

    // Initialize lasers
    for (let i = 0; i < 5; i++) {
      lasers.push(new Laser());
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new particles
      if (Math.random() < 0.3) {
        particles.push(new Particle(
          Math.random() * canvas.width,
          canvas.height + 10
        ));
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw(ctx);

        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }

      // Update and draw lasers
      lasers.forEach(laser => {
        laser.update();
        laser.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

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