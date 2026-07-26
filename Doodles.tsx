/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Doodles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none">
      {/* Pink Hand-drawn Swirl / Wave */}
      <motion.div
        className="absolute"
        style={{ top: "12%", left: "4%", width: "110px", height: "110px" }}
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-45">
          <path
            d="M50,10 C70,10 80,30 50,50 C20,70 30,90 50,90 C70,90 85,75 75,60 C65,45 45,45 40,55 C35,65 50,75 55,65"
            stroke="#ea9ab2"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Green Dotted Ring */}
      <motion.div
        className="absolute"
        style={{ bottom: "10%", right: "6%", width: "130px", height: "130px" }}
        animate={{
          y: [0, 22, 0],
          x: [0, -15, 0],
          rotate: [360, 0],
          scale: [0.92, 1.08, 0.92],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-45">
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="#c8de9d"
            strokeWidth="3.5"
            strokeDasharray="8,5"
          />
        </svg>
      </motion.div>

      {/* Cute Hand-drawn Heart Doodle (New!) */}
      <motion.div
        className="absolute"
        style={{ top: "32%", left: "8%", width: "80px", height: "80px" }}
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          rotate: [-15, 15, -15],
          scale: [0.95, 1.1, 0.95],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-50">
          <path
            d="M50,30 C35,10 10,25 50,80 C90,25 65,10 50,30 Z"
            stroke="#ea9ab2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Soft Yellow Star / Sparkle Doodle */}
      <motion.div
        className="absolute"
        style={{ top: "45%", right: "3%", width: "80px", height: "80px" }}
        animate={{
          y: [0, -28, 0],
          x: [0, 12, 0],
          rotate: [0, -360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-55">
          <path
            d="M50 10 L60 38 L90 38 L65 55 L75 85 L50 68 L25 85 L35 55 L10 38 L40 38 Z"
            fill="none"
            stroke="#FFF59D"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Floating Pastel Cloud (New!) */}
      <motion.div
        className="absolute"
        style={{ top: "22%", right: "10%", width: "120px", height: "70px" }}
        animate={{
          x: [0, -30, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-40">
          <path
            d="M25,60 C20,60 15,55 15,48 C15,40 22,35 30,35 C33,25 45,20 55,25 C65,22 75,30 75,40 C82,40 88,46 88,52 C88,60 80,65 70,65 L25,65 Z"
            stroke="#B2E2F2"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Blue Dotted Ribbon / Spring */}
      <motion.div
        className="absolute"
        style={{ bottom: "28%", left: "5%", width: "100px", height: "100px" }}
        animate={{
          y: [0, 18, 0],
          x: [0, 18, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-40">
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            rx="12"
            stroke="#B2E2F2"
            strokeWidth="3.5"
            strokeDasharray="5,4"
            transform="rotate(15, 50, 50)"
          />
        </svg>
      </motion.div>

      {/* Cute Orange Flower Doodle */}
      <motion.div
        className="absolute"
        style={{ top: "6%", right: "28%", width: "60px", height: "60px" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-45">
          <path
            d="M50,35 C50,20 65,20 65,35 C80,35 80,50 65,50 C65,65 50,65 50,50 C35,50 35,35 50,35"
            stroke="#FFCCBB"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="57" cy="42" r="5" fill="#FFCCBB" />
        </svg>
      </motion.div>

      {/* Small grid tick accents */}
      <div className="absolute top-[35%] left-[45%] opacity-15 select-none">
        <svg width="40" height="40" viewBox="0 0 40 40" stroke="#ea9ab2" strokeWidth="2.5">
          <line x1="20" y1="5" x2="20" y2="35" strokeDasharray="3,3" />
          <line x1="5" y1="20" x2="35" y2="20" strokeDasharray="3,3" />
        </svg>
      </div>

      <div className="absolute bottom-[40%] right-[35%] opacity-15 select-none">
        <svg width="40" height="40" viewBox="0 0 40 40" stroke="#c8de9d" strokeWidth="2.5">
          <line x1="20" y1="5" x2="20" y2="35" strokeDasharray="3,3" />
          <line x1="5" y1="20" x2="35" y2="20" strokeDasharray="3,3" />
        </svg>
      </div>
    </div>
  );
}
