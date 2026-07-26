/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PROJECTS_DATA, CERTIFICATIONS_DATA } from "../types";

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
                    className="font-['Happy_Monkey'] text-[11px] text-neutral-600 bg-[#e0eea3]/85 border border-[#c8de9d]/50 px-2.5 py-0.5 rounded-full whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              {project.linkText ? (
                <div className="border-t border-neutral-100 pt-3">
                  <a
                    href={project.link}
                    download={project.link.endsWith('.pdf') ? project.link.substring(project.link.lastIndexOf('/') + 1) : undefined}
                    target={project.link.endsWith('.pdf') ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="font-['Happy_Monkey'] text-sm text-[#ea9ab2] hover:text-[#ffabbf] font-semibold flex items-center gap-1 cursor-none"
                  >
                    {project.linkText}
                  </a>
                </div>
              ) : (
                <div className="border-t border-neutral-100 pt-3">
                  <span className="font-['Happy_Monkey'] text-xs text-neutral-400 italic">
                    Repository/Demo link coming soon!
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mt-20 border-t-5 border-dashed border-[#f7c9d4] pt-12 select-none">
        <h2 className="font-['Bubblegum_Sans'] text-center text-4xl sm:text-5xl text-[#ea9ab2] mb-10 tracking-wide">
          My Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border-3 border-[#c8de9d] hover:border-[#ea9ab2] rounded-2xl p-5 shadow-[4px_4px_0px_#c8de9d] hover:shadow-[4px_4px_0px_#ea9ab2] flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <span className="font-['Fredoka_One'] text-[10px] text-[#ea9ab2] uppercase tracking-wider bg-[#fff1f6] px-2.5 py-1 rounded-full border border-[#f7c9d4]">
                  {cert.issuer}
                </span>
                <h4 className="font-['Fredoka_One'] text-base text-neutral-700 mt-3 leading-snug">
                  {cert.title}
                </h4>
              </div>
              <div className="mt-4 border-t border-dashed border-neutral-100 pt-3">
                <p className="font-['Happy_Monkey'] text-xs text-neutral-500">
                  {cert.date}
                </p>
                {cert.credentialId && (
                  <p className="font-['Happy_Monkey'] text-[10px] text-neutral-400 mt-1 truncate">
                    ID: <span className="font-mono text-neutral-500 bg-neutral-50 px-1.5 py-0.5 rounded border border-neutral-100">{cert.credentialId}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
