"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*{}_+/[ ]";

export default function GlitchText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const frameCount = useRef(0);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    frameCount.current = 0;
    const maxFrames = 15; 

    const glitchInterval = setInterval(() => {
      if (frameCount.current >= maxFrames) {
        clearInterval(glitchInterval);
        setDisplayText(text);
        return;
      }

      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            const progress = frameCount.current / maxFrames;
            if (Math.random() < progress) {
              return text[index];
            }

            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      frameCount.current += 1;
    }, 40); // SMOOTH RATE: 40ms updates make the jitter look fluid, not choppy

    return () => clearInterval(glitchInterval);
  }, [text, trigger]);

  useEffect(() => {
    const loopInterval = setInterval(() => {
      setTrigger((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(loopInterval);
  }, []);

  return <>{displayText}</>;
}