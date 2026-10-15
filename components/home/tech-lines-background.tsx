"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  colorBase: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  vx: number;
  vy: number;
  opacity: number;
  active: boolean;
}

export function TechLinesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initStars();
    };

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Star particle palette (white, ice cyan, soft blue, pale lavender)
    const colorBases = [
      "255, 255, 255",
      "224, 242, 254",
      "186, 230, 253",
      "199, 210, 254",
      "147, 197, 253",
    ];

    let stars: Star[] = [];

    const initStars = () => {
      // Density based on canvas area
      const count = Math.min(
        Math.max(Math.floor((width * height) / 14000), 50),
        95
      );
      stars = [];

      for (let i = 0; i < count; i++) {
        // Random 360-degree angle and slow drift speed
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.15 + Math.random() * 0.35; // gentle, relaxing drift

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 0.8 + Math.random() * 1.6,
          baseAlpha: 0.35 + Math.random() * 0.55,
          twinkleSpeed: 0.0015 + Math.random() * 0.003,
          twinkleOffset: Math.random() * Math.PI * 2,
          colorBase: colorBases[Math.floor(Math.random() * colorBases.length)],
        });
      }
    };

    initStars();

    // Mouse tracking for interactive constellation linking
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      if (mx >= 0 && mx <= width && my >= 0 && my <= height) {
        mouse.x = mx;
        mouse.y = my;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Shooting stars (meteors)
    const shootingStars: ShootingStar[] = [];

    const spawnShootingStar = () => {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // diagonal downward
      const speed = 7 + Math.random() * 5;
      shootingStars.push({
        x: Math.random() * width * 0.9,
        y: Math.random() * (height * 0.4),
        length: 70 + Math.random() * 60,
        speed,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        opacity: 0.9,
        active: true,
      });
    };

    let lastShootingStarTime = Date.now();
    let nextShootingStarInterval = 4000 + Math.random() * 4000;

    let time = 0;
    const maxConnectionDist = 120; // Distance within which constellation lines form

    const render = () => {
      time = Date.now();
      ctx.clearRect(0, 0, width, height);

      // Check shooting star spawn
      if (time - lastShootingStarTime > nextShootingStarInterval) {
        spawnShootingStar();
        lastShootingStarTime = time;
        nextShootingStarInterval = 4500 + Math.random() * 5500;
      }

      // 1. Draw Constellation Connection Lines between stars
      const starCount = stars.length;
      for (let i = 0; i < starCount; i++) {
        const starA = stars[i];

        for (let j = i + 1; j < starCount; j++) {
          const starB = stars[j];
          const dx = starA.x - starB.x;
          const dy = starA.y - starB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDist) {
            // Dynamic opacity based on proximity
            const lineAlpha = (1 - dist / maxConnectionDist) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(165, 195, 245, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(starA.x, starA.y);
            ctx.lineTo(starB.x, starB.y);
            ctx.stroke();
          }
        }

        // Connection to cursor
        if (mouse.active) {
          const mdx = starA.x - mouse.x;
          const mdy = starA.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(starA.x, starA.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // 2. Update and Draw Stars
      for (let i = 0; i < starCount; i++) {
        const star = stars[i];

        // Move star in its own random 360-degree direction
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around boundaries gracefully
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;
        if (star.y < -10) star.y = height + 10;
        if (star.y > height + 10) star.y = -10;

        // Twinkle calculation
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.35 + 0.65;
        const alpha = Math.min(Math.max(star.baseAlpha * twinkle, 0.1), 1);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.colorBase}, ${alpha})`;
        ctx.shadowColor = `rgba(${star.colorBase}, 0.8)`;
        ctx.shadowBlur = star.radius > 1.4 ? 6 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // 3. Draw and Update Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        if (!s.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        s.x += s.vx;
        s.y += s.vy;
        s.opacity -= 0.016;

        if (s.opacity <= 0 || s.x > width + 100 || s.y > height + 100) {
          s.active = false;
          continue;
        }

        const tailX = s.x - (s.vx / s.speed) * s.length;
        const tailY = s.y - (s.vy / s.speed) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(0.7, `rgba(186, 230, 253, ${s.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // Bright star head
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.shadowColor = "rgba(255, 255, 255, 0.9)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* Deep obsidian dark tech sky */}
      <div className="absolute inset-0 bg-[#07090e]" />

      {/* Atmospheric cosmic ambient glow centered behind avatar */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_35%,rgba(30,41,59,0.5)_0%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.1)_0%,rgba(99,102,241,0.04)_45%,transparent_75%)]" />

      {/* Starry Night Sky & Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-auto"
      />

      {/* Clean hairline tech divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-700/60 to-transparent pointer-events-none" />
    </div>
  );
}
