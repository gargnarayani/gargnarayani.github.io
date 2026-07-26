/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  opacity: number;
  speedY: number;
  speedX: number;
}

export default function SparkleCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const pastelColors = [
    "#FF9AA2", // Cute Pink
    "#FFB7B2", // Peach Orange
    "#FFDAC1", // Soft Yellow
    "#E2F0CB", // Mint Green
    "#B5EAD7", // Pastel Green
    "#C7CEEA", // Sweet Lavender
    "#FFFFFF", // Crystal White
    "#F7C9D4", // Cotton Candy Pink
    "#E0EEA3"  // Sweet Lime
  ];

  useEffect(() => {
    let sparkleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Spawn a sparkle with high density (55% chance per mouse move)
      if (Math.random() < 0.55) {
        const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        const size = Math.random() * 11 + 6; // Bigger, more visible sparkles (6px to 17px)
        const newSparkle: Sparkle = {
          id: sparkleId++,
          x: e.pageX,
          y: e.pageY + 2, // slightly offset below pointer
          size,
          color: randomColor,
          rotation: Math.random() * 360,
          opacity: 1.0, // start fully opaque
          speedY: 0.8 + Math.random() * 1.5, // gentle drift down
          speedX: (Math.random() - 0.5) * 1.8 // natural dispersion
        };

        setSparkles((prev) => [...prev.slice(-80), newSparkle]); // Max 80 sparkles for massive, rich trail
      }
    };

    // Add mousemove listener
    window.addEventListener("mousemove", handleMouseMove);

    // Sparkle physics updater loop - slower decay for longer-lasting trails!
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((s) => ({
            ...s,
            y: s.y + s.speedY,
            x: s.x + s.speedX,
            rotation: s.rotation + 5,
            opacity: s.opacity - 0.016 // Slower decay (approx. 60 frames lifetime)
          }))
          .filter((s) => s.opacity > 0)
      );
    }, 30);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 pointer-events-none w-full h-full z-[9999]" id="tinkerbell-sparkle-container">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute pointer-events-none select-none transition-opacity duration-100 ease-out"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.color,
            opacity: s.opacity,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
            clipPath: "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)", // Four-point star
            filter: `drop-shadow(0px 0px 4px ${s.color})`, // Beautiful magical glowing effect
          }}
        />
      ))}
    </div>
  );
}

