import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

interface LandingPageProps {
  onEnter: () => void;
}

const ROLES = [
  "thinker",
  "hardware tinkerer",
  "computer engineer",
  "developer",
  "problem Solver",
  "agentic AI explorer",
  "engineering ambassador",
  "learner",
  "coder",
  "storyteller",
  "reading enthusiast",
  "organizer",
  "question asker",
  "philosophy enthusiast",
  "doer",
  "community leader",
  "observer",
  "music lover",
  "student",
  "writer",
  "grand challenge scholar",
  "planner"
];

export default function LandingPage({ onEnter }: LandingPageProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const currentWord = ROLES[wordIndex];

  const isVowel = (word: string) => {
    if (!word) return false;
    const firstChar = word.trim().charAt(0).toLowerCase();
    return ["a", "e", "i", "o", "u"].includes(firstChar);
  };

  // Ultra-stable and satisfying typewriter loop
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      if (!isDeleting) {
        // Typing forward
        const nextText = currentWord.slice(0, typedText.length + 1);
        setTypedText(nextText);
        setTypingSpeed(80); // Stable forward typing speed

        if (nextText === currentWord) {
          // Finished typing: hold on the word for 2.2 seconds before starting to delete
          setTypingSpeed(2200);
          setIsDeleting(true);
        }
      } else {
        // Deleting backward
        const nextText = currentWord.slice(0, typedText.length - 1);
        setTypedText(nextText);
        setTypingSpeed(40); // Snappy, natural deleting speed

        if (nextText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(300); // Generous delay before typing the next word starts
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, currentWord, typingSpeed]);

  const handleConfetti = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 50,
      origin: { x, y },
      colors: ["#ea9ab2", "#c8de9d", "#f7c9d4", "#e0eea3", "#ffd166"],
    });
  };

  const handleEnterClick = (e: React.MouseEvent) => {
    handleConfetti(e);
    setTimeout(() => {
      onEnter();
    }, 450);
  };

  return (
    <div
      className="h-screen w-screen max-h-screen overflow-hidden relative flex flex-col items-center justify-center p-6 select-none"
      style={{
        backgroundColor: "#FBF9F4",
        backgroundImage: `
          radial-gradient(circle at 12% 15%, rgba(200, 222, 157, 0.45) 0%, transparent 60%),
          radial-gradient(circle at 88% 85%, rgba(234, 154, 178, 0.45) 0%, transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(253, 228, 155, 0.22) 0%, transparent 50%),
          linear-gradient(135deg, #FAF4E8 0%, #FDF9F2 50%, #F5E3E7 100%)
        `
      }}
    >
      {/* Background fine noise texture overlay to simulate beautiful textured paper card */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Handmade paper fiber texture overlay for tactile card-like feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fiberFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='5' result='noise'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6 -2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fiberFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Elegant vector backdrop ribbon (high-quality clean graphic design asset) - Kept because user loves it! */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] text-[#ea9ab2] pointer-events-none select-none z-0" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="none">
        <path 
          d="M -100,500 C 200,200 400,800 600,500 C 800,200 900,600 1100,400" 
          stroke="currentColor" 
          strokeWidth="12" 
          strokeLinecap="round" 
        />
        <path 
          d="M -50,540 C 250,240 450,840 650,540 C 850,240 950,640 1150,440" 
          stroke="#c8de9d" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
      </svg>

      {/* Main Container - Centered, non-scrollable, balanced layout */}
      <div className="relative max-w-4xl w-full text-center flex flex-col items-center justify-center z-10">

        {/* Hello! My name is */}
        <div className="space-y-1">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-['Fredoka_One'] font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-800 tracking-wide"
          >
            Hello! My name is
          </motion.p>

          {/* Overlapping Typography Section - Layered exactly like the inspired design cards */}
          <div className="relative inline-flex items-center justify-center mt-4 py-2">
            {/* Main elegant script text - Resized to be an appropriate centerpiece size */}
            <motion.button
              onClick={handleEnterClick}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 130, damping: 14, delay: 0.15 }}
              whileHover={{ scale: 1.05, rotate: "-1deg" }}
              whileTap={{ scale: 0.98 }}
              className="relative block font-['Alex_Brush'] text-6xl sm:text-7.5xl md:text-9xl font-bold text-[#ea9ab2] hover:text-[#e2839f] select-none cursor-none py-4 outline-none focus:outline-none drop-shadow-[5px_5px_0px_#ffffff] filter hover:drop-shadow-[6px_6px_0px_rgba(234,154,178,0.15)] transition-all z-10"
            >
              Narayani Garg
            </motion.button>
          </div>
        </div>

        {/* Space under name */}
        <div className="h-4 sm:h-6" />

        {/* Dynamic State Typewriter sentence (Bubblegum Sans, correct "I am a/an", and a final period) - Sized down as requested */}
        <div className="h-14 flex items-center justify-center">
          <p className="font-['Bubblegum_Sans'] text-xl sm:text-2xl md:text-3xl text-neutral-800 tracking-wider">
            I am {isVowel(currentWord) ? "an" : "a"}{" "}
            <span className="text-[#ea9ab2] transition-colors">
              {typedText}
            </span>
            <span className="inline-block w-[3px] h-[1.1em] bg-[#ea9ab2] ml-1.5 animate-pulse align-middle" />
            <span className="text-neutral-800">.</span>
          </p>
        </div>

        {/* Space above CTA */}
        <div className="h-4 sm:h-6" />

        {/* Aesthetic CTA Button matching the other pages perfectly */}
        <motion.button
          onClick={handleEnterClick}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-8 py-3 rounded-full font-['Fredoka_One'] font-medium text-sm sm:text-base border-3 border-[#c8de9d] text-neutral-700 bg-[#e0eea3] hover:bg-[#fff1f6] hover:border-[#ea9ab2] hover:text-[#ea9ab2] shadow-[3px_3px_0px_#c8de9d] hover:shadow-[3px_3px_0px_#f7c9d4] transition-all cursor-none flex items-center gap-2.5 z-10"
        >
          enter portfolio
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
