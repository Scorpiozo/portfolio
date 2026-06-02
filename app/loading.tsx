"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [hex, setHex] = useState("0x000000");
  const [timestamp, setTimestamp] = useState("00:00:00");

  useEffect(() => {
    // Increased duration to 750ms so the breach sequence is actually visible and satisfying
    const duration = 750; 
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);

      // Fast-flickering hexadecimal generator
      setHex(
        "0x" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
            .toUpperCase()
      );

      // System clock time tracking
      const now = new Date();
      setTimestamp(
        now.toTimeString().split(" ")[0] + "." + now.getMilliseconds().toString().padStart(3, "0")
      );

      if (elapsed >= duration) {
        clearInterval(timer);
        setProgress(100);
      }
    }, 30); // Balanced at 30ms intervals to optimize CPU cycles

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center font-mono overflow-hidden"
    >
      {/* SCANLINES CRIT EXTRACTION */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_4px,4px_100%]" />

      {/* Main Container Container */}
      <div className="w-[90%] max-w-[850px] relative z-10">
        
        {/* TOP SECTION */}
        <div className="flex justify-between items-end mb-4 border-b-2 border-red-900/40 pb-4">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] md:text-[16px] text-red-600 leading-none tracking-[0.4em] font-black uppercase drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
              System_Breach_Sequence
            </span>
            <span className="text-[10px] md:text-[12px] text-zinc-500 uppercase italic font-bold">
              NODE_DECRYPT: <span className="text-zinc-300">{hex}</span>
            </span>
          </div>
          <div className="text-right">
            <span className="text-6xl md:text-9xl font-black italic text-white tracking-tighter leading-none">
              {Math.floor(progress)}
              <span className="text-xl md:text-3xl text-red-600 not-italic ml-2">%</span>
            </span>
          </div>
        </div>

        {/* LOADING BAR FRAME */}
        <div className="h-[8px] md:h-[12px] w-full bg-zinc-900/80 relative overflow-hidden backdrop-blur-md border border-white/5">
          <div
            style={{ width: `${progress}%` }}
            className="absolute inset-y-0 left-0 bg-red-600 shadow-[0_0_30px_#ff0000] z-10 transition-all duration-75 ease-out"
          />
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"
          />
        </div>

        {/* BOTTOM METADATA GRID */}
        <div className="mt-6 grid grid-cols-3 gap-8 text-[9px] md:text-[12px] text-zinc-400 uppercase tracking-[0.2em] font-bold">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-600">PACKET_LOSS</span>
              <span className="text-red-600">0%</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-600">ENCRYPTION</span>
              <span className="text-zinc-300">AES-256</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <span className="animate-pulse text-red-600 bg-red-950/30 px-3 py-1 border border-red-900/50 rounded-sm text-[10px] md:text-[11px]">
              ● LIVE_FEED
            </span>
            <span className="text-[9px] md:text-[10px] text-zinc-500 font-mono">
              SEC_ALLOW: {progress > 80 ? <span className="text-red-500 font-bold">ROOT_ACCESS</span> : "LOCAL_USER"}
            </span>
          </div>

          <div className="flex flex-col gap-2 text-right">
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-600">BUFFER</span>
              <span className="text-zinc-300">1024KB</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-1">
              <span className="text-zinc-600">LOCAL_TS</span>
              <span className="text-zinc-400 font-mono">{timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      {/* STRONGER VIGNETTE LAYER */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)] pointer-events-none z-20" />
    </motion.div>
  );
}