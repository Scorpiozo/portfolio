"use client";
import React, { useEffect, useRef } from "react";

export default function Background() {
  const bloodRef = useRef<HTMLCanvasElement>(null);
  const constellationRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!bloodRef.current || !constellationRef.current) return;
    const bC = bloodRef.current;
    const cC = constellationRef.current;
    const bCtx = bC.getContext("2d")!;
    const cCtx = cC.getContext("2d")!;
    let blood: any[] = [];
    let stars: any[] = [];
    let animationFrameId: number;

    const init = () => {
      bC.width = cC.width = window.innerWidth;
      bC.height = cC.height = window.innerHeight;
      blood = Array.from({ length: 70 }, () => ({
        x: Math.random() * bC.width,
        y: Math.random() * bC.height,
        s: Math.random() * 4 + 1.5,
        v: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.7 + 0.2,
      }));
      stars = Array.from({ length: 60 }, () => ({
        x: Math.random() * cC.width,
        y: Math.random() * cC.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        s: Math.random() * 2,
      }));
    };

    const animate = () => {
      bCtx.clearRect(0, 0, bC.width, bC.height);
      blood.forEach((p) => {
        p.y -= p.v;
        if (p.y < -10) p.y = bC.height + 10;
        bCtx.globalAlpha = p.o;
        bCtx.fillStyle = "#ff0000";
        bCtx.beginPath();
        bCtx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        bCtx.fill();
      });

      cCtx.clearRect(0, 0, cC.width, cC.height);
      stars.forEach((s, i) => {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0 || s.x > cC.width) s.vx *= -1;
        if (s.y < 0 || s.y > cC.height) s.vy *= -1;
        cCtx.fillStyle = "#0055ff";
        cCtx.beginPath();
        cCtx.arc(s.x, s.y, s.s, 0, Math.PI * 2);
        cCtx.fill();
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const d = Math.hypot(s.x - s2.x, s.y - s2.y);
          if (d < 180) {
            cCtx.strokeStyle = `rgba(0, 85, 255, ${1 - d / 180})`;
            cCtx.lineWidth = 0.8;
            cCtx.beginPath();
            cCtx.moveTo(s.x, s.y);
            cCtx.lineTo(s2.x, s2.y);
            cCtx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", init);
    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={bloodRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      <canvas
        ref={constellationRef}
        className="fixed inset-0 z-10 pointer-events-none mix-blend-screen opacity-70"
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black z-20 pointer-events-none" />
    </>
  );
}
