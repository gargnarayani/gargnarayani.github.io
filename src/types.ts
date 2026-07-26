/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  link: string;
  linkText: string;
}

export interface WritingItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface TimelineEvent {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

export const SECRET_WORDS = ["FOCUS", "SKILL", "EAGER", "DRIVE", "DREAM", "LOYAL", "ADAPT", "SMART"];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Terminal-Based C Dinosaur Game",
    description: "Built an interactive terminal obstacle game in C featuring dynamic rendering, custom collision logic, and keyboard input handling across modular source files.",
    skills: ["C", "Terminal Graphics", "Data Structures", "Embedded Principles"],
    link: "https://github.com/gargnarayani",
    linkText: "GitHub Repo →"
  },
  {
    id: 2,
    title: "Embedded Edge AI System",
    description: "Developing low-power microcontroller inference pipelines for edge hardware, focusing on local sensor processing and efficient wake routines.",
    skills: ["Edge AI", "C++", "Embedded Systems", "Hardware"],
    link: "https://github.com/gargnarayani",
    linkText: "GitHub Repo →"
  },
  {
    id: 3,
    title: "Interactive Whimsical Portfolio",
    description: "Designed and engineered a custom React, Next.js, and Tailwind CSS portfolio inspired by scrapbooks, featuring dynamic mini-games, dynamic assets, and smooth UI animations.",
    skills: ["React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    link: "https://github.com/gargnarayani/portfolio",
    linkText: "Live Site →"
  },
  {
    id: 4,
    title: "Autonomous Solar Irrigation Network",
    description: "An IoT mesh network of soil sensors and solar valve controllers utilizing predictive environmental modeling for water efficiency in community gardens.",
    skills: ["IoT", "Firmware", "Hardware", "Solar Tech"],
    link: "https://github.com/gargnarayani",
    linkText: "Project Page →"
  },
  {
    id: 5,
    title: "Resilient Smart Grid Controller",
    description: "A decentralized power controller balancing dual battery arrays and grid backup systems with sub-millisecond hardware switching logic.",
    skills: ["Electrical Engineering", "Control Systems", "Power Electronics"],
    link: "https://github.com/gargnarayani",
    linkText: "Research Paper →"
  },
  {
    id: 6,
    title: "BLE Biomedical Wearable",
    description: "Designed a ultra-low-power wearable tracking pulse oximetry and telemetry, transmitting secure biological data over Bluetooth Low Energy.",
    skills: ["Biomedical Tech", "PCB Design", "BLE", "Hardware"],
    link: "https://github.com/gargnarayani",
    linkText: "Hardware Design →"
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 1,
    title: "Computer Engineering Student",
    subtitle: "North Carolina State University | Expected Graduation: May 2029",
    date: "Raleigh, NC | 2025 - Present",
    description: "Pursuing a B.S. in Computer Engineering with an intended dual focus/transition in Electrical Engineering, maintaining a 4.0 GPA. Passionate about bridging hardware circuit design, embedded systems, and full-stack software development."
  },
  {
    id: 2,
    title: "Engineering Ambassador",
    subtitle: "NCSU College of Engineering",
    date: "Raleigh, NC | April 2026 - Present",
    description: "Representing the College of Engineering by supporting prospective student recruitment, organizing campus events, and leading outreach initiatives."
  },
  {
    id: 3,
    title: "Treasurer & Grand Challenge Scholar",
    subtitle: "Grand Challenge Scholars Organization",
    date: "Raleigh, NC | Aug 2025 - Present",
    description: "Selected as a Grand Challenge Scholar addressing complex global engineering challenges; serving as Treasurer starting April 2026 to manage organizational finances and event budgets."
  },
  {
    id: 4,
    title: "Historian",
    subtitle: "Honors & Scholars Council",
    date: "Raleigh, NC | Aug 2025 - Present",
    description: "Documenting council events, managing digital media archives, and fostering student engagement across the honors engineering community."
  }
];

export const WRITING_DATA: WritingItem[] = [
  {
    id: 1,
    title: "Bridging the Gap Between Hardware and Software",
    date: "March 15, 2026",
    excerpt: "Exploring how embedded systems, circuit design, and agentic AI converge to create resilient physical computing devices.",
    content: "When we write software for low-resource processors, the most critical design constraint is hardware awareness. A software loop must respect register access times, power states, and signal noise. By combining circuit design with intelligent software, we create systems that are both computationally capable and physically resilient."
  },
  {
    id: 2,
    title: "The Resilience of Systems & Stoic Philosophy",
    date: "November 3, 2025",
    excerpt: "Intersections of system reliability, edge intelligence, and graceful degradation under hardware brownouts.",
    content: "In low-power hardware systems, devices must gracefully handle brownouts, bit flips, and sensor noise without total system failure. Human resilience mirrors this architecture: designing feedback loops, failing safely, and continuing operation despite external environmental disruptions."
  },
  {
    id: 3,
    title: "Democratizing Edge AI for Local Communities",
    date: "July 12, 2025",
    excerpt: "How low-power microcontrollers running localized neural networks can empower open-source community technology.",
    content: "By deploying microcontrollers equipped with local AI models, we can construct decentralized networks for environmental monitoring, microgrid regulation, and resource distribution that run continuously off tiny solar panels without relying on heavy cloud infrastructure."
  }
];
