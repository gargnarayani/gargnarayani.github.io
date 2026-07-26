/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";

export default function AboutMe() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Scrapbook Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 bg-white/95 border border-amber-100 rounded-3xl p-6 sm:p-10 shadow-[10px_10px_0px_#ffe1e6] relative overflow-hidden"
      >
        {/* Decorative Tape Accent */}
        <div className="absolute top-0 right-1/4 w-28 h-8 bg-amber-100/60 -rotate-12 transform origin-center border-l border-r border-amber-200/50 backdrop-blur-xs select-none pointer-events-none" />

        {/* Left column: Polaroid Photo Card (Takes 5 cols) */}
        <div className="col-span-1 md:col-span-5 flex flex-col items-center">
          <motion.div
            whileHover={{ rotate: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white p-4 pb-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-neutral-100 rounded-lg transform rotate-[-1.5deg] w-full max-w-[280px]"
          >
            <div className="aspect-[3/4] bg-[#fff1f6] rounded-md overflow-hidden border border-neutral-100 relative">
              {imageError ? (
                /* Elegant vector fallback study-themed placeholder */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
                  <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#ea9ab2]" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="15" y="25" width="70" height="55" rx="4" strokeDasharray="3,3" />
                    <circle cx="50" cy="45" r="14" />
                    <path d="M30 75 C30 60, 70 60, 70 75" />
                    <path d="M72 15 L82 25 M85 14 L75 25" stroke="#c8de9d" strokeWidth="3" />
                    <circle cx="20" cy="18" r="3" fill="#e0eea3" />
                  </svg>
                  <p className="font-['Gloria_Hallelujah'] text-xs text-neutral-400 mt-2">me_photo.jpg</p>
                </div>
              ) : (
                <img
                  src="/me_photo.jpg"
                  alt="Narayani Garg"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                 onError={() => setImageError(true)}
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* Right column: Main Biography Text (Takes 7 cols) */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Heading in Bubblegum Sans */}
            <h2 className="font-['Bubblegum_Sans'] text-3xl sm:text-4xl text-[#ea9ab2] leading-tight select-none">
              Hello! I&apos;m Narayani
            </h2>

            {/* Content paragraph blocks */}
            <div className="font-['Happy_Monkey'] text-[#4a4a4a] text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                I am a student at <strong className="text-neutral-700">NC State University</strong> studying{" "}
                <strong>Computer Engineering</strong>,{" "}
                <strong>Electrical Engineering</strong>,{" "}
                <strong>Physics</strong>, and{" "}
                <strong>Business Entrepreneurship</strong>.
              </p>
              
              <p>
                I grew up just outside Charlotte, North Carolina, and was born in India. I’m interested in applying
                AI, embedded systems, and building software and hardware that are scalable and can help the community
                beyond my work.
              </p>

              <p>
                I also enjoy writing, art, music, entrepreneurship, health and wellness, personal development,
                and philosophy.
              </p>
            </div>
          </div>

          {/* Download Resume Link Section */}
          <div className="pt-6">
            <motion.a
              href="resume.pdf"
              download="Narayani_Garg_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block text-center bg-[#ea9ab2] text-white font-['Architects_Daughter'] font-bold px-6 py-3 rounded-xl shadow-[3px_3px_0px_#f7c9d4] hover:bg-[#ffabbf] transition-all hover:translate-y-[-1px] cursor-none"
            >
              Download My Resume
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}