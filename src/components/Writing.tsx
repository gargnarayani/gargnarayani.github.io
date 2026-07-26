/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WRITING_DATA, WritingItem } from "../types";

export default function Writing() {
  const [selectedEssay, setSelectedEssay] = useState<WritingItem | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title - Bubblegum Sans */}
      <h2 className="font-['Bubblegum_Sans'] text-center text-4xl sm:text-5xl text-[#ea9ab2] mb-2 select-none">
        My Writing
      </h2>

      {/* Subtitle - Bubblegum Sans */}
      <p className="font-['Bubblegum_Sans'] text-center text-xl sm:text-2xl text-neutral-500 mb-12 select-none">
        More coming soon!
      </p>

      {/* Essays Grid */}
      <div className="grid grid-cols-1 max-w-xl mx-auto gap-6">
        {WRITING_DATA.map((essay, index) => (
          <motion.div
            key={essay.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col justify-between bg-white border-2 border-dashed border-[#ea9ab2] rounded-2xl p-6 shadow-[6px_6px_0px_#fff1f6] hover:shadow-[6px_6px_0px_#ffe1e6] transition-all"
          >
            <div>
              {/* Date */}
              <span className="font-['Bad_Script'] text-xs text-neutral-400 block mb-2 select-none">
                {essay.date}
              </span>

              {/* Title - Bubblegum Sans */}
              <h3 className="font-['Bubblegum_Sans'] text-xl text-neutral-800 leading-snug mb-3">
                {essay.title}
              </h3>

              {/* Excerpt - Happy Monkey */}
              <p className="font-['Happy_Monkey'] text-neutral-600 text-sm leading-relaxed mb-6">
                {essay.excerpt}
              </p>
            </div>

            {/* Read & Download Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <button
                onClick={() => setSelectedEssay(essay)}
                className="font-['Caveat'] text-xl text-[#ea9ab2] hover:text-[#ffabbf] font-bold inline-flex items-center gap-1 cursor-none hover:underline"
              >
                Read Overview →
              </button>
              {essay.link && (
                <a
                  href={essay.link}
                  download="The_Private_Journals_of_Julian_Vane.pdf"
                  className="font-['Caveat'] text-xl text-[#ea9ab2] hover:text-[#ffabbf] font-bold inline-flex items-center gap-1 cursor-none hover:underline"
                >
                  Download PDF →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive overlay to read the full essay */}
      <AnimatePresence>
        {selectedEssay && (
          <div className="fixed inset-0 z-[10100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEssay(null)}
              className="absolute inset-0 bg-[#f9f1db]/80 backdrop-blur-xs"
            />

            {/* Essay Card Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border-4 border-[#ffe1e6] rounded-3xl p-6 sm:p-8 shadow-[12px_12px_0px_#ffe1e6] max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 relative cursor-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEssay(null)}
                className="absolute top-4 right-4 bg-neutral-100 hover:bg-[#fff1f6] border border-neutral-200 text-neutral-500 rounded-full w-8 h-8 flex items-center justify-center font-bold font-sans active:scale-90 transition-all cursor-none"
                aria-label="Close"
              >
                &times;
              </button>

              {/* Meta information */}
              <span className="font-['Bad_Script'] text-xs text-[#ea9ab2] block mb-2 select-none">
                Published on {selectedEssay.date}
              </span>

              {/* Full Title */}
              <h3 className="font-['Bubblegum_Sans'] text-2xl sm:text-3xl text-neutral-800 leading-tight mb-6">
                {selectedEssay.title}
              </h3>

              {/* Scrollable Essay Content - Caveat/Happy Monkey */}
              <div className="font-['Happy_Monkey'] text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line border-t border-dashed border-neutral-100 pt-6">
                {selectedEssay.content}
              </div>

              {/* Footer signature accent */}
              <div className="mt-8 pt-6 border-t border-dashed border-neutral-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {selectedEssay.link && (
                  <a
                    href={selectedEssay.link}
                    download="The_Private_Journals_of_Julian_Vane.pdf"
                    className="font-['Caveat'] text-xl text-[#ea9ab2] hover:text-[#ffabbf] font-bold inline-flex items-center gap-1 cursor-none hover:underline"
                  >
                    Download Essay PDF →
                  </a>
                )}
                <span className="font-['Sacramento'] text-3xl text-[#ea9ab2] select-none ml-auto">
                  Narayani Garg
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
