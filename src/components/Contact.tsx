/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface ContactLink {
  id: number;
  label: string;
  subLabel: string;
  url: string;
  colorClass: string;
}

export default function Contact() {
  const contactLinks: ContactLink[] = [
    {
      id: 1,
      label: "GitHub",
      subLabel: "@gargnarayani",
      url: "https://github.com/gargnarayani",
      colorClass: "hover:bg-[#fff1f6] hover:border-[#ea9ab2] hover:text-[#ea9ab2]"
    },
    {
      id: 2,
      label: "LinkedIn",
      subLabel: "Narayani Garg",
      url: "https://www.linkedin.com/in/gargnarayani/",
      colorClass: "hover:bg-[#e0eea3]/20 hover:border-[#c8de9d] hover:text-[#c8de9d]"
    },
    {
      id: 3,
      label: "LeetCode",
      subLabel: "gargnarayani",
      url: "https://leetcode.com/u/gargnarayani/",
      colorClass: "hover:bg-[#fff1f6] hover:border-[#ea9ab2] hover:text-[#ea9ab2]"
    },
    {
      id: 4,
      label: "DevPost",
      subLabel: "Narayani Garg",
      url: "https://devpost.com",
      colorClass: "hover:bg-[#e0eea3]/20 hover:border-[#c8de9d] hover:text-[#c8de9d]"
    },
    {
      id: 5,
      label: "Instagram",
      subLabel: "@gargnarayani",
      url: "https://www.instagram.com/gargnarayani/",
      colorClass: "hover:bg-[#fff1f6] hover:border-[#ea9ab2] hover:text-[#ea9ab2]"
    },
    {
      id: 6,
      label: "Personal Email",
      subLabel: "gargnarayani1221@gmail.com",
      url: "mailto:gargnarayani1221@gmail.com",
      colorClass: "hover:bg-[#fff1f6] hover:border-[#ea9ab2] hover:text-[#ea9ab2]"
    },
    {
      id: 7,
      label: "School Email",
      subLabel: "ngarg5@ncsu.edu",
      url: "mailto:ngarg5@ncsu.edu",
      colorClass: "hover:bg-[#e0eea3]/20 hover:border-[#c8de9d] hover:text-[#c8de9d]"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-['Caveat']">
      {/* Title strictly in Sacramento font */}
      <h2 className="font-['Sacramento'] text-center text-6xl sm:text-7xl text-[#ea9ab2] mb-12 select-none">
        Contact Me
      </h2>

      {/* Grid of dotted boxes (Everything inside in Caveat) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-2xl">
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className={`flex flex-col items-center justify-center border-3 border-dashed border-[#4a4a4a] rounded-2xl p-6 bg-white shadow-sm transition-all text-center cursor-none ${link.colorClass}`}
          >
            {/* Box Header Label */}
            <span className="font-bold text-3xl mb-1">{link.label}</span>
            {/* Box Sublabel (url/handle) */}
            <span className="text-xl text-neutral-500 font-medium break-all max-w-full">
              {link.subLabel}
            </span>
          </motion.a>
        ))}
      </div>


    </div>
  );
}
