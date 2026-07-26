/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TIMELINE_DATA, TimelineEvent } from "../types";

export default function Journey() {
  // Helper function to convert start dates (e.g., "Jun 2020", "Aug 2021", "Apr 2026") into numeric timestamps
  const parseStartDate = (dateStr: string): number => {
    const monthMap: Record<string, number> = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };

    const match = dateStr.match(/([a-zA-Z]{3})?\s*(\d{4})/);
    if (!match) return 0;

    const monthStr = match[1] ? match[1].toLowerCase() : "jan";
    const year = parseInt(match[2], 10);
    const month = monthMap[monthStr] ?? 0;

    return new Date(year, month).getTime();
  };

  // Sort events chronologically from oldest (Piano Prodigy School in 2020) to newest (2026)
  const sortedTimelineData = [...TIMELINE_DATA].sort((a, b) => {
    return parseStartDate(a.date) - parseStartDate(b.date);
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Title with generous spacing underneath */}
      <h2 className="font-['Bubblegum_Sans'] text-center text-4xl sm:text-5xl text-[#ea9ab2] mb-16 tracking-wide select-none">
        My Journey
      </h2>

      {/* Scrollable Timeline Stream */}
      <div className="relative border-l-4 border-dashed border-[#f7c9d4] pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-12 pb-8">
        {sortedTimelineData.map((event: TimelineEvent, index: number) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 14,
              delay: index * 0.1,
            }}
            className="relative"
          >
            {/* Dotted indicator dot on the left line */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.4, backgroundColor: "#ea9ab2" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: index * 0.1 + 0.3
              }}
              className="absolute -left-[37px] sm:-left-[53px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white border-4 border-[#ea9ab2] shadow-xs z-10 select-none cursor-none"
            />

            {/* Scrapbook Timeline Box Card */}
            <motion.div
              whileHover={{
                scale: 1.025,
                rotate: index % 2 === 0 ? 0.6 : -0.6,
                boxShadow: "7px 7px 0px #ea9ab2",
                borderColor: "#ea9ab2",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="bg-white border-2 border-[#c8de9d] rounded-2xl p-6 shadow-[5px_5px_0px_#c8de9d] relative transition-colors duration-200"
            >
              {/* Event Date - Fredoka One */}
              <span className="font-['Fredoka_One'] text-xs uppercase tracking-wider text-[#ea9ab2] block mb-1">
                {event.date}
              </span>

              {/* Event Title - Fredoka One */}
              <h3 className="font-['Fredoka_One'] text-lg sm:text-xl text-neutral-800 leading-snug">
                {event.title}
              </h3>

              {/* Event Subtitle - Happy Monkey */}
              <h4 className="font-['Happy_Monkey'] text-sm text-neutral-500 font-semibold mt-0.5 mb-3">
                {event.subtitle}
              </h4>

              {/* Event Description - Happy Monkey */}
              <p className="font-['Happy_Monkey'] text-neutral-600 text-sm leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
