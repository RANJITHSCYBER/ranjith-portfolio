"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftSpeed: number;
};

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let scrollOffset = 0;

    function resize() {
      if (!canvas || !container) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 768 ? 9000 : 5500;
      const count = Math.round((width * height) / density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.1 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.35,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.015 + 0.004,
      }));
    }

    function onScroll() {
      scrollOffset = window.scrollY;
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        const twinkle = reducedMotion
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(time * s.twinkleSpeed + s.twinklePhase) * 0.25;
        const parallaxY = (s.y + scrollOffset * s.driftSpeed * 0.4) % (height + 20);
        ctx.beginPath();
        ctx.arc(s.x, parallaxY, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 241, 236, ${Math.max(0, Math.min(1, twinkle))})`;
        ctx.fill();
      }
      if (!reducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    if (reducedMotion) {
      draw(0);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
}
