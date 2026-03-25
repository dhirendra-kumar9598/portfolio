import React, { useEffect, useRef } from "react";

const AnimatedBackground = ({ theme }) => {
  const backgroundCanvasRef = useRef(null);
  const cursorCanvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const bgCanvas = backgroundCanvasRef.current;
    if (!bgCanvas) return;

    const bgCtx = bgCanvas.getContext('2d');
    const cursorCanvas = cursorCanvasRef.current;
    const cursorCtx = cursorCanvas ? cursorCanvas.getContext('2d') : null;

    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    if (cursorCanvas) {
      cursorCanvas.width = window.innerWidth;
      cursorCanvas.height = window.innerHeight;
    }

    // Check if it's light mode
    const isLight = theme.textColor === "#1e293b";
    
    // Particle settings
    const particleCount = 80;
    const connectionDistance = 150;
    const mouseConnectionDistance = 200;
    const mouseRepelDistance = 100;
    const particleColor = isLight ? 'rgba(74, 72, 255, 0.6)' : 'rgba(139, 92, 246, 0.7)';
    const lineColor = isLight ? 'rgba(74, 72, 255, 0.15)' : 'rgba(139, 92, 246, 0.2)';
    const mouseLineColor = isLight ? 'rgba(74, 72, 255, 0.4)' : 'rgba(139, 92, 246, 0.5)';

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * bgCanvas.width;
        this.y = Math.random() * bgCanvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.originalVx = this.vx;
        this.originalVy = this.vy;
      }

      update() {
        // Mouse interaction - repel particles
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = this.x - mouseRef.current.x;
          const dy = this.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRepelDistance) {
            const force = (mouseRepelDistance - distance) / mouseRepelDistance;
            this.vx += (dx / distance) * force * 0.5;
            this.vy += (dy / distance) * force * 0.5;
          }
        }

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;

        // Gradually return to original velocity (maintain movement)
        this.vx += (this.originalVx - this.vx) * 0.02;
        this.vy += (this.originalVy - this.vy) * 0.02;

        // Bounce off edges with velocity preservation
        if (this.x <= 0 || this.x >= bgCanvas.width) {
          this.vx = -this.vx;
          this.x = Math.max(0, Math.min(bgCanvas.width, this.x));
        }
        if (this.y <= 0 || this.y >= bgCanvas.height) {
          this.vy = -this.vy;
          this.y = Math.max(0, Math.min(bgCanvas.height, this.y));
        }

        // Ensure minimum velocity to prevent particles from stopping
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const minSpeed = 0.3;
        if (speed < minSpeed && speed > 0) {
          this.vx = (this.vx / speed) * minSpeed;
          this.vy = (this.vy / speed) * minSpeed;
        }
      }

      draw() {
        bgCtx.beginPath();
        bgCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        bgCtx.fillStyle = particleColor;
        bgCtx.fill();
      }
    }

    // Initialize particles
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
      if (cursorCtx && cursorCanvas) {
        cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
      }

      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            bgCtx.beginPath();
            bgCtx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            bgCtx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            const opacity = 1 - (distance / connectionDistance);
            bgCtx.strokeStyle = lineColor.replace('0.15', `${0.15 * opacity}`).replace('0.2', `${0.2 * opacity}`);
            bgCtx.lineWidth = 1;
            bgCtx.stroke();
          }
        }
      }

      if (cursorCtx && cursorCanvas && mouseRef.current.x !== null && mouseRef.current.y !== null) {
        // Connect nearby particles to mouse
        particlesRef.current.forEach(particle => {
          const dx = particle.x - mouseRef.current.x;
          const dy = particle.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseConnectionDistance) {
            cursorCtx.beginPath();
            cursorCtx.moveTo(particle.x, particle.y);
            cursorCtx.lineTo(mouseRef.current.x, mouseRef.current.y);
            const opacity = 1 - (distance / mouseConnectionDistance);
            cursorCtx.strokeStyle = mouseLineColor.replace('0.4', `${0.4 * opacity}`).replace('0.5', `${0.5 * opacity}`);
            cursorCtx.lineWidth = 2;
            cursorCtx.stroke();
          }
        });

        // Draw custom cursor - outer glow
        const gradient = cursorCtx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 20
        );
        gradient.addColorStop(0, isLight ? 'rgba(74, 72, 255, 0.4)' : 'rgba(139, 92, 246, 0.5)');
        gradient.addColorStop(0.5, isLight ? 'rgba(74, 72, 255, 0.2)' : 'rgba(139, 92, 246, 0.3)');
        gradient.addColorStop(1, 'rgba(74, 72, 255, 0)');
        
        cursorCtx.beginPath();
        cursorCtx.arc(mouseRef.current.x, mouseRef.current.y, 20, 0, Math.PI * 2);
        cursorCtx.fillStyle = gradient;
        cursorCtx.fill();

        // Draw cursor pointer (triangle)
        cursorCtx.save();
        cursorCtx.translate(mouseRef.current.x, mouseRef.current.y);
        
        // Draw shadow
        cursorCtx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        cursorCtx.shadowBlur = 8;
        cursorCtx.shadowOffsetX = 2;
        cursorCtx.shadowOffsetY = 2;
        
        cursorCtx.beginPath();
        cursorCtx.moveTo(0, 0);
        cursorCtx.lineTo(0, 20);
        cursorCtx.lineTo(14, 14);
        cursorCtx.closePath();
        cursorCtx.fillStyle = isLight ? 'rgba(74, 72, 255, 0.9)' : 'rgba(139, 92, 246, 0.95)';
        cursorCtx.fill();
        
        // Draw white border
        cursorCtx.shadowColor = 'transparent';
        cursorCtx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        cursorCtx.lineWidth = 2;
        cursorCtx.stroke();
        
        cursorCtx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      bgCanvas.width = window.innerWidth;
      bgCanvas.height = window.innerHeight;
      if (cursorCanvas) {
        cursorCanvas.width = window.innerWidth;
        cursorCanvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  const isLight = theme.textColor === "#1e293b";
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return (
    <>
      <div className={`animated-background ${isLight ? "light" : "dark"}`} />
      {/* Background canvas for network animation */}
      <canvas
        ref={backgroundCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      {/* Cursor canvas on top - hide on touch devices */}
      {!isTouchDevice && (
        <canvas
          ref={cursorCanvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            pointerEvents: 'none',
            cursor: 'none'
          }}
        />
      )}
    </>
  );
};

export default AnimatedBackground;
