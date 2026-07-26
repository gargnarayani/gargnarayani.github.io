/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";
import { SECRET_WORDS } from "../types";

export default function WordPuzzle() {
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Track keyboard letter status map for the on-screen virtual keyboard
  const [letterStatuses, setLetterStatuses] = useState<Record<string, "correct" | "present" | "absent">>({});

  // Initialize a random secret word
  const initGame = useCallback(() => {
    const randomWord = SECRET_WORDS[Math.floor(Math.random() * SECRET_WORDS.length)];
    setTargetWord(randomWord);
    setGuesses(Array(6).fill(""));
    setCurrentGuess("");
    setCurrentRow(0);
    setIsGameOver(false);
    setIsWon(false);
    setStatusMessage("");
    setLetterStatuses({});
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  // Submit a guess
  const submitGuess = useCallback(() => {
    if (currentGuess.length !== 5) {
      setStatusMessage("Word must be 5 letters!");
      setTimeout(() => setStatusMessage(""), 2000);
      return;
    }

    const nextGuesses = [...guesses];
    nextGuesses[currentRow] = currentGuess;
    setGuesses(nextGuesses);

    // Update virtual keyboard statuses
    const nextStatuses = { ...letterStatuses };
    for (let i = 0; i < 5; i++) {
      const char = currentGuess[i];
      if (targetWord[i] === char) {
        nextStatuses[char] = "correct";
      } else if (targetWord.includes(char)) {
        // Only set to present if it's not already correct
        if (nextStatuses[char] !== "correct") {
          nextStatuses[char] = "present";
        }
      } else {
        if (!nextStatuses[char]) {
          nextStatuses[char] = "absent";
        }
      }
    }
    setLetterStatuses(nextStatuses);

    // Check Win/Loss
    if (currentGuess === targetWord) {
      setIsWon(true);
      setIsGameOver(true);
      setStatusMessage("Excellent! You Got It! 🎉");
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else if (currentRow === 5) {
      setIsGameOver(true);
      setStatusMessage(`Oops! Out of tries. The word was: ${targetWord}`);
    } else {
      setCurrentRow((prev) => prev + 1);
      setCurrentGuess("");
    }
  }, [currentGuess, currentRow, guesses, targetWord, letterStatuses]);

  // Handle typing inputs
  const handleInputChar = useCallback(
    (char: string) => {
      if (isGameOver) return;

      const upperChar = char.toUpperCase();
      if (/^[A-Z]$/.test(upperChar)) {
        if (currentGuess.length < 5) {
          setCurrentGuess((prev) => prev + upperChar);
        }
      }
    },
    [currentGuess, isGameOver]
  );

  const handleBackspace = useCallback(() => {
    if (isGameOver) return;
    setCurrentGuess((prev) => prev.slice(0, -1));
  }, [isGameOver]);

  // Handle physical key presses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        submitGuess();
      } else if (e.key === "Backspace") {
        handleBackspace();
      } else {
        handleInputChar(e.key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInputChar, handleBackspace, submitGuess]);

  // Virtual keyboard row configurations
  const keyboardRows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
  ];

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      {/* Title in Bubblegum Sans, no subtitles */}
      <h2 className="font-['Bubblegum_Sans'] text-center text-4xl text-[#ea9ab2] mb-8 select-none">
        Play a Word Game
      </h2>

      {/* Wordle Board Game container */}
      <div className="bg-white border-4 border-[#ffe1e6] rounded-3xl p-6 shadow-[10px_10px_0px_#ffe1e6] mb-8 relative">
        <div className="grid grid-rows-6 gap-2 max-w-[280px] mx-auto mb-6">
          {guesses.map((guess, rIndex) => {
            const isActive = rIndex === currentRow;
            const letters = isActive ? currentGuess.padEnd(5, " ") : guess.padEnd(5, " ");

            return (
              <div key={rIndex} className="grid grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, cIndex) => {
                  const letter = letters[cIndex]?.trim();
                  let tileClass = "border-2 border-neutral-200 text-neutral-700 bg-white";

                  // If submitted, show color states
                  if (rIndex < currentRow) {
                    if (guess[cIndex] === targetWord[cIndex]) {
                      tileClass = "bg-[#c8de9d] border-[#c8de9d] text-white"; // Correct
                    } else if (targetWord.includes(guess[cIndex])) {
                      tileClass = "bg-[#ffd93d] border-[#ffd93d] text-white"; // Present
                    } else {
                      tileClass = "bg-neutral-300 border-neutral-300 text-white"; // Absent
                    }
                  } else if (isActive && letter) {
                    tileClass = "border-[#ea9ab2] text-neutral-800 scale-105"; // Typing state
                  }

                  return (
                    <div
                      key={cIndex}
                      className={`aspect-square flex items-center justify-center font-['Fredoka_One'] text-2xl font-bold rounded-lg transition-all duration-300 select-none ${tileClass}`}
                    >
                      {letter || ""}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Action status banner */}
        <div className="text-center min-h-[28px] mb-4">
          <p className="font-['Happy_Monkey'] text-sm font-semibold text-neutral-700 transition-all duration-200">
            {statusMessage}
          </p>
        </div>

        {/* Cute virtual keyboard */}
        <div className="space-y-1.5 max-w-[340px] mx-auto select-none">
          {keyboardRows.map((row, rIdx) => (
            <div key={rIdx} className="flex justify-center gap-1">
              {row.map((key) => {
                const status = letterStatuses[key];
                let btnColor = "bg-neutral-100 text-neutral-700 hover:bg-neutral-200";

                if (status === "correct") {
                  btnColor = "bg-[#c8de9d] text-white";
                } else if (status === "present") {
                  btnColor = "bg-[#ffd93d] text-white";
                } else if (status === "absent") {
                  btnColor = "bg-neutral-300 text-neutral-500 opacity-60";
                }

                const isSpecial = key === "ENTER" || key === "⌫";

                return (
                  <button
                    key={key}
                    onClick={() => {
                      if (key === "ENTER") submitGuess();
                      else if (key === "⌫") handleBackspace();
                      else handleInputChar(key);
                    }}
                    className={`h-11 ${
                      isSpecial ? "px-2.5 font-['Happy_Monkey'] text-xs font-bold" : "w-8 font-['Fredoka_One'] text-sm"
                    } rounded-md flex items-center justify-center active:scale-95 transition-all cursor-none ${btnColor}`}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Restart Button */}
        {isGameOver && (
          <div className="text-center mt-6">
            <button
              onClick={initGame}
              className="font-['Happy_Monkey'] text-sm text-[#ea9ab2] hover:text-[#ffabbf] underline font-semibold transition-all cursor-none"
            >
              Play Another Puzzle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
