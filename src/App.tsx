/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SparkleCursor from "./components/SparkleCursor";
import Doodles from "./components/Doodles";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WordPuzzle from "./components/WordPuzzle";
import Journey from "./components/Journey";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";

type Tab = "about" | "projects" | "play" | "resume" | "writing" | "contact";

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("about");

  const navItems = [
    { id: "about" as Tab, label: "About Me" },
    { id: "projects" as Tab, label: "Projects" },
    { id: "play" as Tab, label: "Play" },
    { id: "resume" as Tab, label: "My Resume" },
    { id: "writing" as Tab, label: "My Writing" },
    { id: "contact" as Tab, label: "Contact Me" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutMe key="about" />;
      case "projects":
        return <Projects key="projects" />;
      case "play":
        return <WordPuzzle key="play" />;
      case "resume":
        return <Journey key="resume" />;
      case "writing":
        return <Writing key="writing" />;
      case "contact":
        return <Contact key="contact" />;
    }
  };

  return (
    <div 
      className="min-h-screen relative flex flex-col justify-between select-none"
      style={{
        backgroundColor: "var(--bg-cream)",
        backgroundImage: `
          linear-gradient(90deg, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
          linear-gradient(rgba(255, 255, 255, 0.4) 50%, transparent 50%)
        `,
        backgroundSize: "60px 60px"
      }}
    >
      {/* Background doodles & sparkles cursor overlay */}
      <Doodles />
      <SparkleCursor />

      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full flex-grow flex items-center justify-center"
          >
            <LandingPage onEnter={() => setShowLanding(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full flex-grow flex flex-col justify-between"
          >
            <div>
              {/* White Scrapbook Header with Dashed Pink Border */}
              <header className="bg-white px-4 py-12 md:py-16 text-center border-b-5 border-dashed border-[#f7c9d4] shadow-xs relative">
                {/* Logo - clickable to take to home (About Me) */}
                <button
                  onClick={() => {
                    setShowLanding(true);
                    setActiveTab("about");
                  }}
                  className="logo-container inline-block focus:outline-none cursor-none group"
                  aria-label="Home"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="logo select-none text-center font-['Alex_Brush'] text-5xl sm:text-6xl md:text-7xl leading-none flex flex-col font-bold"
                  >
                    <span className="bg-gradient-to-br from-[#ea9ab2] to-[#c8de9d] bg-clip-text text-transparent pb-1 tracking-wide">
                      Narayani
                    </span>
                    <span className="bg-gradient-to-br from-[#ea9ab2] to-[#c8de9d] bg-clip-text text-transparent pb-1 tracking-wide">
                      Garg
                    </span>
                  </motion.div>
                </button>

                {/* Navigation Items */}
                <nav className="mt-8 max-w-4xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4 px-2 select-none">
                  {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`px-5 py-2.5 rounded-full font-['Fredoka_One'] font-medium text-sm md:text-base border-3 shadow-[3px_3px_0px_var(--shadow-color)] transition-all hover:-translate-y-0.5 active:translate-y-0.5 cursor-none ${
                          isActive
                            ? "bg-[#fff1f6] border-[#ea9ab2] text-[#ea9ab2] [--shadow-color:#f7c9d4]"
                            : "bg-[#e0eea3] border-[#c8de9d] text-neutral-600 hover:bg-[#fff1f6] hover:border-[#ea9ab2] hover:text-[#ea9ab2] [--shadow-color:#c8de9d] hover:[--shadow-color:#f7c9d4]"
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </header>

              {/* Core Layout Main Component Stage */}
              <main className="relative mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>

            {/* Cozy Footer */}
            <footer className="text-center mt-12 pb-16 select-none">
              <p className="font-['Happy_Monkey'] text-black text-sm">
                Made with ♥ by <strong className="font-bold">Narayani Garg</strong>
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
