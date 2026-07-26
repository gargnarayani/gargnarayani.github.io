/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PROJECTS_DATA } from "../types";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Title in Bubblegum Sans, centered, no emoji */}
      <h2 className="font-['Bubblegum_Sans'] text-center text-4xl sm:text-5xl text-[#ea9ab2] mb-12 tracking-wide select-none">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="flex flex-col justify-between bg-white border-3 border-[#c8de9d] hover:border-[#ea9ab2] rounded-2xl p-6 shadow-[4px_4px_0px_#c8de9d] hover:shadow-[4px_4px_0px_#ea9ab2] transition-all"
          >
            <div>
              {/* Project Title - Bubblegum Sans */}
              <h3 className="font-['Bubblegum_Sans'] text-xl sm:text-2xl text-neutral-700 mb-3 leading-snug">
                {project.title}
              </h3>

              {/* Project Description - Happy Monkey */}
              <p className="font-['Happy_Monkey'] text-neutral-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Bottom skills & links metadata */}
            <div>
              {/* Green Skill Tabs */}
              <div className="flex flex-wrap gap-1.5 mb-4 select-none">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-['Happy_Monkey'] text-xs text-neutral-600 bg-[#e0eea3]/80 border border-[#c8de9d]/50 px-2.5 py-0.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Project Links (opens in new tab) */}
              <div className="border-t border-neutral-100 pt-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Happy_Monkey'] text-sm text-[#ea9ab2] hover:text-[#ffabbf] font-semibold flex items-center gap-1 cursor-none"
                >
                  {project.linkText}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
