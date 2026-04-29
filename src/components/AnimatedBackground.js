import React, { useEffect, useRef } from "react";

const AnimatedBackground = ({ theme }) => {
  const canvasRef       = useRef(null);
  const cursorCanvasRef = useRef(null);
  const starsRef  = useRef([]);
  const rafRef    = useRef(null);
  const mouseRef  = useRef({ x: null, y: null });

  const isLight = theme.textColor === "#24292f";

  useEffect(() => {
    const canvas       = canvasRef.current;
    const cursorCanvas = cursorCanvasRef.current;
    if (!canvas) return;

    const ctx       = canvas.getContext("2d");
    const cursorCtx = cursorCanvas ? cursorCanvas.getContext("2d") : null;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      if (cursorCanvas) {
        cursorCanvas.width  = window.innerWidth;
        cursorCanvas.height = window.innerHeight;
      }
    };
    resize();

    const STAR_COUNT = isLight ? 50 : 160;
    // Light: soft blue dots · Dark: warm white/cream dots
    const starFill = isLight ? "rgba(88,166,255," : "rgba(240,230,220,";

    class Star {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 1.0 + 0.15;
        this.vx = (Math.random() - 0.5) * 0.12;
        this.vy = (Math.random() - 0.5) * 0.12;
        this.baseOpacity  = Math.random() * 0.45 + (isLight ? 0.05 : 0.15);
        this.twinkleSpeed = Math.random() * 0.01 + 0.003;
        this.twinkleOffset = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width)  this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      draw(t) {
        const opacity = this.baseOpacity +
          Math.sin(t * this.twinkleSpeed + this.twinkleOffset) * (this.baseOpacity * 0.45);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `${starFill}${Math.max(0, Math.min(1, opacity))})`;
        ctx.fill();
      }
    }

    starsRef.current = Array.from({ length: STAR_COUNT }, () => new Star());

    const handleMouseMove  = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const handleMouseLeave = ()  => { mouseRef.current = { x: null,      y: null      }; };
    window.addEventListener("mousemove",  handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Orange cursor in dark mode, blue in light mode
    const cursorAccent = isLight ? "rgba(88,166,255," : "rgba(255,105,0,";

    let t = 0;
    const animate = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsRef.current.forEach((s) => { s.update(); s.draw(t); });

      if (cursorCtx && cursorCanvas) {
        cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
        const { x, y } = mouseRef.current;

        if (x !== null && y !== null) {
          // Lines from nearby stars to cursor
          starsRef.current.forEach((s) => {
            const dx = s.x - x, dy = s.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              cursorCtx.beginPath();
              cursorCtx.moveTo(s.x, s.y);
              cursorCtx.lineTo(x, y);
              cursorCtx.strokeStyle = `${cursorAccent}${(1 - dist / 140) * 0.28})`;
              cursorCtx.lineWidth = 0.8;
              cursorCtx.stroke();
            }
          });

          // Glow ring
          const glow = cursorCtx.createRadialGradient(x, y, 0, x, y, 16);
          glow.addColorStop(0, `${cursorAccent}0.2)`);
          glow.addColorStop(1, `${cursorAccent}0)`);
          cursorCtx.beginPath();
          cursorCtx.arc(x, y, 16, 0, Math.PI * 2);
          cursorCtx.fillStyle = glow;
          cursorCtx.fill();

          // Cursor pointer triangle
          cursorCtx.save();
          cursorCtx.translate(x, y);
          cursorCtx.shadowColor   = "rgba(0,0,0,0.3)";
          cursorCtx.shadowBlur    = 5;
          cursorCtx.shadowOffsetX = 1;
          cursorCtx.shadowOffsetY = 1;
          cursorCtx.beginPath();
          cursorCtx.moveTo(0, 0);
          cursorCtx.lineTo(0, 16);
          cursorCtx.lineTo(11, 11);
          cursorCtx.closePath();
          cursorCtx.fillStyle = isLight
            ? "rgba(88,166,255,0.92)"
            : "rgba(255,105,0,0.92)";
          cursorCtx.fill();
          cursorCtx.shadowColor  = "transparent";
          cursorCtx.strokeStyle  = "rgba(255,255,255,0.88)";
          cursorCtx.lineWidth    = 1.5;
          cursorCtx.stroke();
          cursorCtx.restore();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove",  handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [theme]);

  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <>
      {/* Base background */}
      <div className={`animated-background ${isLight ? "light" : "dark"}`}>
        {!isLight && (
          <>
            {/* Static orange/amber glow layers — no scroll movement */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse 100% 60% at 50% -8%, rgba(255,105,0,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
          </>
        )}
      </div>

      {/* Star field */}
      <canvas ref={canvasRef} aria-hidden="true" style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 1, pointerEvents: "none",
      }} />

      {/* Cursor */}
      {!isTouchDevice && (
        <canvas ref={cursorCanvasRef} aria-hidden="true" style={{
          position: "fixed", top: 0, left: 0,
          width: "100%", height: "100%",
          zIndex: 9999, pointerEvents: "none",
        }} />
      )}
    </>
  );
};

export default AnimatedBackground;
