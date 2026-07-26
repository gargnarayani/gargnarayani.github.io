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
  location?: string;
  date?: string;
  modalType?: "acc" | "lucia" | "geiger" | "cheerup";
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

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export const SECRET_WORDS = ["FOCUS", "SKILL", "EAGER", "DRIVE", "DREAM", "LOYAL", "ADAPT", "SMART"];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "NCSU AI Degree & Career Assistant",
    location: "Mooresville, NC",
    date: "June 2026 – Present",
    description: "Automated degree audit mapping and course trajectory planning as measured by parsing multi-page academic catalogs and student transcripts with 98% extraction accuracy, by implementing an agentic RAG (Retrieval-Augmented Generation) framework built on LangChain, LlamaIndex, and OpenAI API / GPT-4o. Built high-throughput vector similarity search pipelines as measured by delivering contextual academic guidance in sub-second query speeds, by embedding curriculum documentation into ChromaDB using Python, Pandas, and HuggingFace Transformers. Delivered a robust full-stack web application as measured by maintaining sub-100ms API response times across concurrent user queries, by building a modular Flask back-end with Pydantic data validation and a React front-end dashboard version-controlled via Git.",
    skills: ["RAG", "LangChain", "OpenAI API", "ChromaDB", "Python", "Flask", "React", "Git"],
    link: "",
    linkText: ""
  },
  {
    id: 2,
    title: "AI Dermatologist Assistant",
    location: "Mooresville, NC",
    date: "June 2026 – Present",
    description: "Engineered a real-time skin lesion classification engine as measured by achieving a 92.4% validation accuracy and sub-200ms inferencing latency, by training and fine-tuning Convolutional Neural Networks (CNNs) on PyTorch using transfer learning (ResNet-50, EfficientNet) on public dermatological datasets (ISIC Archive). Optimized edge deployment and data processing workflows as measured by reducing raw image payload sizes by 65%, by writing data pipeline transformation scripts in Python (NumPy, OpenCV, PIL) and exposing asynchronous, containerized REST APIs via FastAPI hosted on Docker. Architected a responsive mobile-first diagnostic interface as measured by seamless cross-platform user interactions, by implementing React Native / Next.js, TypeScript, and Tailwind CSS integrated with JWT authentication and Google Cloud Storage for secure patient image handling.",
    skills: ["PyTorch", "CNNs", "FastAPI", "Docker", "React Native", "TypeScript", "Tailwind CSS"],
    link: "",
    linkText: ""
  },
  {
    id: 3,
    title: "Arduino Gesture-Controlled Wearable Keyboard",
    location: "Mooresville, NC",
    date: "July 2026 – Present",
    description: "Engineered a wearable, motion-controlled keyboard using an Arduino microcontroller, integrating an Inertial Measurement Unit (IMU/MPU6050) to capture spatial movement and rotation data across three axes. Developed a translation algorithm to process raw accelerometer and gyroscope data, mapping specific spatial gestures and directional sweeps to alphanumeric keyboard outputs. Implemented real-time HID (Human Interface Device) emulation to stream character inputs via USB/Bluetooth, allowing seamless, driverless typing on any host computer with minimal input latency.",
    skills: ["Arduino", "Embedded Systems", "Hardware", "IMU (MPU6050)", "HID Emulation", "Bluetooth/USB"],
    link: "",
    linkText: ""
  },
  {
    id: 4,
    title: "QuidPro Quota: Multi-Agent API Resiliency Framework",
    location: "Mooresville, NC",
    date: "Jun 2026 – Jul 2026",
    description: "Designed a distributed, fault-tolerant orchestration graph using the Google Agent Development Kit (ADK) to dynamically intercept, route, and handle upstream API rate limits and HTTP 429 exceptions. Developed automated circuit-breaking and security sandboxes with a Supervisor Agent that blacklists exhausted keys for 300 seconds, and a Green Team Agent running local Python backups under strict OS resource limits (2GB RAM, 10% CPU). Engineered a secure token auditing ledger using HMAC-SHA256 cryptographic signatures to log local execution costs, prevent state tampering, and successfully validate system resiliency during the Kaggle and Google Hackathon.",
    skills: ["Google ADK", "Python", "Security Sandbox", "HMAC-SHA256", "API Resiliency", "Fault Tolerance"],
    link: "https://github.com/gargnarayani/quid-pro-quota",
    linkText: "GitHub Repo →"
  },
  {
    id: 5,
    title: "For the Record: Vintage iPod Shuffle Pipeline",
    location: "Mooresville, NC",
    date: "Jul 2026",
    description: "Built a full-stack automated data ingestion pipeline using Python, Flask, and Tailwind CSS to programmatically format, convert, and stream modern audio libraries to legacy flash memory devices. Optimized processing speeds by 65% by implementing a multi-threaded downloading engine with ThreadPoolExecutor and developing an O(1) SQLite lookup cache to eliminate duplicate API calls. Programmed binary-level ID3v2 frames using mutagen to embed raw metadata, utilized FFmpeg to increase device storage capacity by 45%, and wrote a background hardware utility using psutil to silently auto-mount and synchronize USB drives.",
    skills: ["Python", "Flask", "Tailwind CSS", "SQLite", "FFmpeg", "Hardware Sync"],
    link: "https://github.com/gargnarayani/for-the-record",
    linkText: "GitHub Repo →"
  },
  {
    id: 6,
    title: "Optimizing Adaptive Cruise Control for Autonomous Vehicles",
    location: "Raleigh, NC",
    date: "Jan 2026 - May 2026",
    description: "Led the mathematical optimization of Adaptive Cruise Control (ACC) logic using R, balancing passenger safety (Time-to-Collision) with traffic flow stability across multiple velocity profiles. Developed a predictive, kinetic-energy-aware braking algorithm that increased braking gain by 15% for heavy vehicles and utilized coordinate-based spatial filtering to achieve a 100% collision-avoidance rate in simulations. Directed the engineering team to win 1st Place overall in the Engineering Design Day competition by designing a dual-state controller (Urban vs. Highway mode) that can shave 500 ms off sensor loop latency.",
    skills: ["R Language", "Mathematical Optimization", "Control Theory", "Kinetic Modelling", "Autonomous Vehicles"],
    link: "/Optimizing_ACC_Poster.pdf",
    linkText: "Download Poster Board (PDF) →",
  },
  {
    id: 7,
    title: "Lung Cancer Detection Model Employing 3D CNNs (LUCIA)",
    location: "Mooresville, NC",
    date: "July 2023 - February 2024",
    description: "Leveraged Python to architect, train, and implement LUCIA (LUng Cancer Identification Algorithm), a deep-learning 3D Convolutional Neural Network (CNN) ML and AI solution to detect lung tumor malignancy from 3D CT scans, achieving a 98.9% test accuracy through iterative optimization. Performed extensive DICOM preprocessing, spatial resampling to 1mm isometric resolution, and 3D connected-component lung segmentation filters to isolate region-of-interest air cavities, minimizing overfitting via transfer learning.",
    skills: ["Python", "3D CNN", "Deep Learning", "TensorFlow", "Medical Imaging", "DICOM"],
    link: "/LUCIA_Research_Essay.pdf",
    linkText: "Download Research Essay (PDF) →"
  },
  {
    id: 8,
    title: "Novel Nanotechnology Geiger-Müller Design",
    location: "Mooresville, NC",
    date: "Personal Research Paper",
    description: "Designed a novel carbon nanotube-based Geiger-Müller (CNT-GM) radiation counter utilizing helium ionization and laser micro-welding for advanced wearable, industrial, and environmental monitoring. The system integrated conductive cotton pathways into fabric substrates for wireless data transmission via lightweight microcontrollers, protected by durable ethylene-polyurethane encapsulation. Theoretical simulations validated the counter's adaptability, while a secondary multi-layered CNT-graphite model demonstrated robust radiation shielding for applications in extreme environments.",
    skills: ["Nanotechnology", "Biomedical Engineering", "CNT-GM", "Microcontrollers", "Hardware Design", "Theoretical Simulation"],
    link: "/Geiger_Muller_Nanotech_Paper.pdf",
    linkText: "Download Research Paper (PDF) →"
  },
  {
    id: 9,
    title: "CheerUp: RoBERTa Sentiment Tracker & Coach",
    location: "Mooresville, NC",
    date: "Personal Project",
    description: "Developed \"CheerUp,\" a mental health application utilizing a RoBERTa natural language processing model to analyze user journal entries and deliver personalized, mood-boosting recommendations. The system processes text inputs to calculate positivity, negativity, and neutrality scores, establishing an overall sentiment polarity that triggers an adaptive action plan featuring tailored activities, affirmations, and cognitive exercises. Synthesizing research across systems software and behavioral sciences, the application achieved 100% accuracy during testing against literary benchmarks, outperforming baseline market alternatives.",
    skills: ["RoBERTa NLP", "Sentiment Analysis", "React", "Python", "Mental Health Tech", "Behavioral Science"],
    link: "/CheerUp_Quadchart.pdf",
    linkText: "Download Quadchart (PDF) →"
  },
  {
    id: 10,
    title: "COVID Vaccine Smart Contract Using Blockchain",
    location: "Mooresville, NC",
    date: "Personal Project",
    description: "Proposed a decentralized, blockchain-based platform secure from forging for COVID-19 vaccine passports on Ethereum. Uses smart contracts to log records immutably on the ledger, guaranteeing that confidential health records are only viewable by authorized verifiers and individuals. Fits under safety-oriented technologies and cybersecurity framework protocols for public health validation.",
    skills: ["Blockchain", "Ethereum", "Smart Contracts", "Cyber Security", "Solidity", "Web3"],
    link: "",
    linkText: ""
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 1,
    title: "Elements of AI",
    issuer: "University of Helsinki",
    date: "Issued Jul 2026",
    credentialId: "2h7hcbcz8he"
  },
  {
    id: 2,
    title: "Datacom - Software Development Job Simulation",
    issuer: "Forage",
    date: "Issued Jul 2026",
    credentialId: "eftHSut9oRHmDC9nx"
  },
  {
    id: 3,
    title: "[PCEP-30-02] PCEP™ – Certified Entry-Level Python Programmer",
    issuer: "OpenEDG Python Institute",
    date: "Issued Jun 2026",
    credentialId: "9EtE.YGce.7Ytr"
  },
  {
    id: 4,
    title: "Wells Fargo - Software Engineering Internship Simulation",
    issuer: "Forage",
    date: "Issued Jul 2026",
    credentialId: "6a4d3a7f1f5075bf54038602"
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
