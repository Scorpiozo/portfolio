"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  // Track coordinates for the text display
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Update coordinates state for the readout
      setCoords({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest("a, button"));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. THE BRACKETS & SCANNER DATA */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="z-[1000000] pointer-events-none"
      >
        <motion.div
          animate={{
            width: isHovered ? 80 : 40,
            height: isHovered ? 80 : 40,
            rotate: isHovered ? 90 : 0,
          }}
          className="relative flex items-center justify-center transition-all duration-300"
        >
          {/* Precise Corners */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-crimson" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-nitro" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-nitro" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-crimson" />

          {/* THE NEW SCANNER READOUT PANEL */}
          <div className="absolute left-full ml-4 top-0 flex flex-col gap-0.5 whitespace-nowrap">
            <div className="flex gap-2 items-center">
              <span className="text-[7px] font-mono text-white/30 uppercase tracking-tighter">
                X-AXIS
              </span>
              <span className="text-[9px] font-mono text-nitro tabular-nums">
                {Math.round(coords.x)}
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-[7px] font-mono text-white/30 uppercase tracking-tighter">
                Y-AXIS
              </span>
              <span className="text-[9px] font-mono text-crimson tabular-nums">
                {Math.round(coords.y)}
              </span>
            </div>
            <div className="w-10 h-[1px] bg-white/10 my-1" />
            <span className="text-[7px] font-mono text-white/60 animate-pulse uppercase">
              {isHovered ? "LOCK_SIG" : "SCAN_SIG"}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* 2. THE LENS (The stable smooth follow) */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="z-[999999] pointer-events-none mix-blend-difference"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 1 : 0.5,
          }}
          className="w-8 h-8 rounded-full border border-white flex items-center justify-center"
        >
          <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
        </motion.div>
      </motion.div>
    </>
  );
}
