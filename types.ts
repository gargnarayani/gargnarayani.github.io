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
    title: "Embedded Edge AI System",
    description: "Developing microcontrollers with localized neural networks for real-time community assistance using local edge processing. Designed custom low-power wake-on-interrupt routines and efficient sensor inference pipelines.",
    skills: ["AI", "C++", "RTOS", "Embedded Systems", "Hardware"],
    link: "https://github.com/gargnarayani",
    linkText: "GitHub Repo →"
  },
  {
    id: 2,
    title: "Autonomous Solar Irrigation Network",
    description: "An IoT-enabled mesh network of soil sensors and solar valve controllers optimized for high efficiency. Utilizes predictive climate modeling to conserve water in community gardens while monitoring battery chemistry.",
    skills: ["IoT", "Firmware", "Hardware", "Solar Tech", "Business Strategy"],
    link: "https://github.com/gargnarayani",
    linkText: "Project Page →"
  },
  {
    id: 3,
    title: "Quantum Mechanics Collision Simulator",
    description: "Built a mathematical simulation engine from scratch in C++ modeling 2D elastic particle collisions and wave-particle distribution vectors. Designed a high-performance custom canvas visualizer.",
    skills: ["C++", "Physics", "Math Modelling", "Computer Graphics"],
    link: "https://github.com/gargnarayani",
    linkText: "View Simulation →"
  },
  {
    id: 4,
    title: "Resilient Smart Grid Controller",
    description: "A decentralized power controller balancing dual battery arrays and grid backup systems. Developed a sub-millisecond hardware switching logic to prevent voltage sag in critical microgrid nodes.",
    skills: ["Electrical Engineering", "Control Theory", "Power Electronics", "Embedded Systems"],
    link: "https://github.com/gargnarayani",
    linkText: "Research Paper →"
  },
  {
    id: 5,
    title: "BLE Biomedical Wearable",
    description: "Designed a ultra-low-power wearable tracker monitoring pulse oximetry, ECG waveforms, and active temperature. Transmits high-fidelity telemetry securely via Bluetooth Low Energy to an iOS client.",
    skills: ["Biomedical Tech", "PCB Design", "BLE", "iOS Swift", "Hardware"],
    link: "https://github.com/gargnarayani",
    linkText: "Hardware Design →"
  },
  {
    id: 6,
    title: "Mutual Aid Resource Portal",
    description: "A secure web platform and integrated physical locker system allowing communities to share wellness supplies, food, and emergency items. Built custom embedded locking firmware connected to a Node.js API.",
    skills: ["React", "TypeScript", "Node.js", "Firmware", "Community Tech"],
    link: "https://github.com/gargnarayani",
    linkText: "Devpost Entry →"
  },
  {
    id: 7,
    title: "Miniaturized Spectrum Analyzer",
    description: "A handheld device that intercepts radio-frequency signals up to 2.4GHz. Interfaced a high-speed ADC with an STM32 microcontroller to execute Fast Fourier Transforms (FFT) and plot live spectrum curves.",
    skills: ["STM32", "RF Engineering", "Signal Processing", "PCB Design", "Physics"],
    link: "https://github.com/gargnarayani",
    linkText: "Schematic Files →"
  },
  {
    id: 8,
    title: "Automated Wellness Tracker",
    description: "A progressive web app that links philosophical resilience trackers with daily biofeedback parameters. Helps engineering students maintain cognitive wellness through structured micro-habits and stress mapping.",
    skills: ["React", "PWA", "UI/UX Design", "Resilience Coaching", "Wellness Tech"],
    link: "https://github.com/gargnarayani",
    linkText: "Live Application →"
  },
  {
    id: 9,
    title: "Eco-Acoustic Forest Monitor",
    description: "Deployed multi-node solar-powered audio recording stations that use lightweight Convolutional Neural Networks on the edge to detect chainsaw and logging noises, sending real-time warnings via LoRaWAN.",
    skills: ["Edge AI", "LoRaWAN", "Hardware Design", "Conservation Tech"],
    link: "https://github.com/gargnarayani",
    linkText: "GitHub Code →"
  },
  {
    id: 10,
    title: "Haptic Actuator Braille Reader",
    description: "A tactile display using small solenoid-driven pins to dynamically render text into physical braille formats. Leveraged custom shift registers to drive the high-voltage actuator arrays with an Arduino.",
    skills: ["Solenoids", "Arduino", "Shift Registers", "Accessibility", "Mechanical Systems"],
    link: "https://github.com/gargnarayani",
    linkText: "View Prototype →"
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 1,
    title: "Student at NC State University",
    subtitle: "Triple Major: CompE, EE, and Physics. Minor: Business Entrepreneurship",
    date: "Raleigh, NC | 2022 - Present",
    description: "Maintaining a rigorous multi-disciplinary syllabus. Active member in robotics and physics research, exploring quantum dynamics, solid-state electronics, and startup incubation frameworks."
  },
  {
    id: 2,
    title: "AI Embedded Systems Researcher",
    subtitle: "NC State Engineering Labs",
    date: "Raleigh, NC | 2024 - Present",
    description: "Optimizing neural networks to run locally on cortex-M microcontrollers. Re-engineered matrix multiplication blocks in assembly language, yielding a 35% speedup in inference latency for edge devices."
  },
  {
    id: 3,
    title: "Firmware and PCB Design Intern",
    subtitle: "Charlotte Tech Solutions",
    date: "Charlotte, NC | Summer 2023",
    description: "Constructed four-layer printed circuit boards with high-speed digital paths and Bluetooth transceivers. Programmed robust state-machines in C to govern low-power sleep modes for battery nodes."
  },
  {
    id: 4,
    title: "Community mutual aid software lead",
    subtitle: "Raleigh Community Tech Coalition",
    date: "Raleigh, NC | 2023",
    description: "Architected a local web catalog enabling food pantry and wellness kit distribution. Synchronized simple offline-first storage to assist users with unreliable cellular connections."
  },
  {
    id: 5,
    title: "Early Foundations and Creative Endeavors",
    subtitle: "Art, Music & Writing Focus",
    date: "Charlotte, NC | 2020 - 2022",
    description: "Born in India and raised outside Charlotte, NC, combining a rich multicultural background with technical interests. Dedicated time to writing short essays, learning classical piano, and experimenting with charcoal drawings."
  }
];

export const WRITING_DATA: WritingItem[] = [
  {
    id: 1,
    title: "The Resilience of Engineering & The Engineering of Resilience",
    date: "March 15, 2026",
    excerpt: "Exploring the intersections of solid-state electronics, system reliability, and stoic philosophy in solving persistent community-scale problems.",
    content: "When we write software for low-resource embedded processors, the most critical design constraint is not processing power—it is resilience. The device must recover from random brownouts, cosmic-ray bit flips, and sensor drift. In the same way, human resilience is an active system of loops, feedback, and error correction. By studying engineering, we learn how to design systems that fail gracefully, reload states, and continue serving their community. Philosophy provides the firmware; engineering provides the hardware."
  },
  {
    id: 2,
    title: "Scaling Community Impact through Decentralized Hardware",
    date: "November 3, 2025",
    excerpt: "How low-power edge systems and LoRa mesh networks can serve communities at a scalable level beyond typical commercial workflows.",
    content: "Too often, modern smart-city technology is designed for luxury, not survival. By deploying low-power microcontrollers equipped with local AI models, we can construct decentralized systems for microgrids, mutual aid locker management, and localized crop diagnosis. These technologies cost under thirty dollars but run continuously, powered by tiny solar panels. This is scalable social technology—democratized, durable, and highly accessible."
  },
  {
    id: 3,
    title: "The Harmony of Physics, Electromagnetism, and Business",
    date: "July 12, 2025",
    excerpt: "Finding the shared resonance between physical vectors, solid-state charge propagation, and entrepreneurial resource allocation.",
    content: "In physics, we look at the flow of current, forces, and entropy. In business, we examine the flow of capital, friction, and efficiency. By applying thermodynamic principles to entrepreneurial design, we can create business models that are highly sustainable, working with the existing social and physical forces rather than fighting against them. A successful startup is simply a low-friction conduit that converts latent human energy into positive community progress."
  }
];
