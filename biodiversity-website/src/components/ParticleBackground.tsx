import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePositions';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;     // The "base" horizontal speed
  speedY: number;     // The "base" vertical speed
  vx: number;         // Current horizontal velocity (base speed + mouse push)
  vy: number;         // Current vertical velocity (base speed + mouse push)
  opacity: number;
  hue: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  
  // We need to track the PREVIOUS mouse position to calculate movement speed
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const mousePosition = useMousePosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // --- INITIALIZATION ---
    if (particlesRef.current.length === 0) {
      const particleCount = 80;
      particlesRef.current = Array.from({ length: particleCount }, () => {
        const sX = (Math.random() - 0.5) * 0.5;
        const sY = (Math.random() - 0.5) * 0.5;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: sX,
          speedY: sY,
          vx: sX, // Initially, velocity is just the base speed
          vy: sY,
          opacity: Math.random() * 0.5 + 0.2,
          hue: Math.random() > 0.7 ? 91 : 199,
        };
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(8, 15, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. CALCULATE MOUSE SPEED (Delta)
      const mouseVX = mousePosition.x - prevMouseRef.current.x;
      const mouseVY = mousePosition.y - prevMouseRef.current.y;
      
      // Update previous mouse position for the next frame
      prevMouseRef.current = { x: mousePosition.x, y: mousePosition.y };

      particlesRef.current.forEach((particle) => {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // 2. APPLY MOUSE MOMENTUM
        // If the mouse is close AND moving, add some of the mouse velocity to the particle
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.vx += mouseVX * force * 0.2; // 0.2 is the "sensitivity" of the push
          particle.vy += mouseVY * force * 0.2;
        }

        // 3. APPLY FRICTION & BASE SPEED
        // This gradually pulls the particle back toward its original slow speed
        particle.vx += (particle.speedX - particle.vx) * 0.05;
        particle.vy += (particle.speedY - particle.vy) * 0.05;

        // 4. UPDATE POSITION
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Screen Wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw Particle & Glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 50%, ${particle.opacity})`;
        ctx.fill();

        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 4);
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 50%, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw Connections
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsla(91, 100%, 50%, ${(1 - distance / 120) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(180deg, hsl(150, 30%, 5%) 0%, hsl(153, 46%, 8%) 100%)' }}
    />
  );
};

export default ParticleBackground;