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
  link?: string;
  linkText?: string;
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
    link: "./Optimizing_ACC_Poster.pdf",
    linkText: "Download Poster Board (PDF) →"
  },
  {
    id: 7,
    title: "Lung Cancer Detection Model Employing 3D CNNs (LUCIA)",
    location: "Mooresville, NC",
    date: "July 2023 - February 2024",
    description: "Leveraged Python to architect, train, and implement LUCIA (LUng Cancer Identification Algorithm), a deep-learning 3D Convolutional Neural Network (CNN) ML and AI solution to detect lung tumor malignancy from 3D CT scans, achieving a 98.9% test accuracy through iterative optimization. Performed extensive DICOM preprocessing, spatial resampling to 1mm isometric resolution, and 3D connected-component lung segmentation filters to isolate region-of-interest air cavities, minimizing overfitting via transfer learning.",
    skills: ["Python", "3D CNN", "Deep Learning", "TensorFlow", "Medical Imaging", "DICOM"],
    link: "./LUCIA_Research_Essay.pdf",
    linkText: "Download Research Essay (PDF) →"
  },
  {
    id: 8,
    title: "Novel Nanotechnology Geiger-Müller Design",
    location: "Mooresville, NC",
    date: "Personal Research Paper",
    description: "Designed a novel carbon nanotube-based Geiger-Müller (CNT-GM) radiation counter utilizing helium ionization and laser micro-welding for advanced wearable, industrial, and environmental monitoring. The system integrated conductive cotton pathways into fabric substrates for wireless data transmission via lightweight microcontrollers, protected by durable ethylene-polyurethane encapsulation. Theoretical simulations validated the counter's adaptability, while a secondary multi-layered CNT-graphite model demonstrated robust radiation shielding for applications in extreme environments.",
    skills: ["Nanotechnology", "Biomedical Engineering", "CNT-GM", "Microcontrollers", "Hardware Design", "Theoretical Simulation"],
    link: "./Geiger_Muller_Nanotech_Paper.pdf",
    linkText: "Download Research Paper (PDF) →"
  },
  {
    id: 9,
    title: "CheerUp: RoBERTa Sentiment Tracker & Coach",
    location: "Mooresville, NC",
    date: "Personal Project",
    description: "Developed \"CheerUp,\" a mental health application utilizing a RoBERTa natural language processing model to analyze user journal entries and deliver personalized, mood-boosting recommendations. The system processes text inputs to calculate positivity, negativity, and neutrality scores, establishing an overall sentiment polarity that triggers an adaptive action plan featuring tailored activities, affirmations, and cognitive exercises. Synthesizing research across systems software and behavioral sciences, the application achieved 100% accuracy during testing against literary benchmarks, outperforming baseline market alternatives.",
    skills: ["RoBERTa NLP", "Sentiment Analysis", "React", "Python", "Mental Health Tech", "Behavioral Science"],
    link: "./CheerUp_Quadchart.pdf",
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
    title: "Internal Project Manager",
    subtitle: "Society of Asian Scientists and Engineers",
    date: "May 2026 - Present | Raleigh, NC",
    description: "Directed cross-functional student teams to execute internal chapter initiatives, professional development workshops, and cultural events. Managed end-to-end event logistics, budget allocations, and resource scheduling for high-attendance campus programs. Collaborated with executive board members to align project milestones with the chapter's strategic growth goals."
  },
  {
    id: 2,
    title: "Engineering Ambassador",
    subtitle: "NC State College of Engineering",
    date: "Apr 2026 - Present | Raleigh, NC",
    description: "Served as a College of Engineering ambassador at open houses, campus tours, and university events to support student recruitment and retention."
  },
  {
    id: 3,
    title: "Treasurer & Appropriations Manager",
    subtitle: "Grand Challenge Scholars Organization",
    date: "Apr 2026 - Present | Raleigh, NC",
    description: "Managed financial appropriations and authored funding proposals to secure capital from the Student Organization Office; developed digital budgeting tools to streamline receipt processing and audit organizational financial documentation."
  },
  {
    id: 4,
    title: "Technical Team Lead & Developer (Atrium Health Internship)",
    subtitle: "Stiegler EdTech",
    date: "Apr 2026 – May 2026 | Charlotte, NC",
    description: "Led a 5-member cross-functional engineering team to build 'Pearl,' an Augmented Reality (AR) medical training and virtual meeting tool utilizing Unity and C#. Accelerated project delivery using Agile methodologies and rapid iterations, designing the application to reduce clinician training overhead by an estimated 32%. Pitched the final product and led a live technical Q&A session for the Atrium Health Board of Directors, securing 1st place overall for project execution and presentation. Promoted to the internship via a competitive return offer after serving as President for a 90+ member Youth Technology Apprenticeship Cohort (YTAC), where our team secured 2nd place in business profits."
  },
  {
    id: 5,
    title: "Student at NC State University",
    subtitle: "Triple Major: CompE, EE, and Physics. Minor: Business Entrepreneurship",
    date: "Aug 2025 - Present | Raleigh, NC",
    description: "Maintaining a rigorous multi-disciplinary syllabus with a perfect academic record. Actively participating in campus leadership, engineering outreach, and professional growth initiatives while exploring quantum mechanics, advanced circuit design, and hardware-software systems."
  },
  {
    id: 6,
    title: "Historian",
    subtitle: "Honors and Scholars Council",
    date: "Aug 2025 - Present | Raleigh, NC",
    description: "Led collaboration among council to design and deliver Honors events and resolving conflicts. Demonstrated creative leadership by aligning diverse perspectives."
  },
  {
    id: 7,
    title: "Grand Challenge Scholar",
    subtitle: "National Academy of Engineering (NAE) Program",
    date: "Aug 2025 - Present | Raleigh, NC",
    description: "Engaging in the National Academy of Engineering (NAE) program to solve complex global challenges. Actively developing competencies across five core pillars: research, interdisciplinarity, entrepreneurship, global dimension, and service learning."
  },
  {
    id: 8,
    title: "Student Ambassador",
    subtitle: "Society of Asian Scientists and Engineers",
    date: "Aug 2025 - Jul 2026 | Raleigh, NC",
    description: "Influenced E-Board and provided organizational direction by proposing ideas for engineering and cultural programming, increasing member participation. Collaborated with diverse teams to promote events and initiatives."
  },
  {
    id: 9,
    title: "Certified Instructor & Administrative Assistant",
    subtitle: "Kumon Learning Center",
    date: "Jun 2024 – Aug 2025 (Summer Seasonal) | Mooresville, NC",
    description: "Managed daily individual progress plans across all mathematics levels, improving homework submission accuracy and student retention rates by 16%. Automated classroom grading queues and coordinated floor operations to improve overall student learning satisfaction metrics by 18%."
  },
  {
    id: 10,
    title: "Founder & Piano Instructor",
    subtitle: "The Piano Prodigy School",
    date: "Jun 2020 – Aug 2025 | Mooresville, NC",
    description: "Founded and operated a private piano teaching business, maintaining a 100% student retention rate and achieving 150% growth through word-of-mouth client referrals. Created 25+ custom interactive piano games and physical practice exercises to adapt complex musical theory concepts to diverse student learning styles. Managed all client billing, scheduling, and progress tracking, demonstrating early entrepreneurial drive, self-motivation, and operational consistency."
  },
  {
    id: 11,
    title: "Executive & Social Media & Marketing Coordinator",
    subtitle: "Mooresville Youth Council",
    date: "Jul 2021 - May 2025 | Mooresville, NC",
    description: "Partnered with the Executive council to ideate and execute service projects; Organized committee roles and subcommittee creation. Created By-Laws, documented and preserved council's activities and grants. Wrote all grant applications; Led 25+ events for the Town of Mooresville (i.e. Classic Christmas, Earth Day, 4th of July).\n\nBuilt Council’s official website; Solo organizer of the annual Dog Mayor election (including nominations, voting, and crowning event); Expanded Instagram 17-fold; Designed annual t-shirt (winning T-Shirt Design Award from the State Youth Council); 4x Gold Commitment Award (100+ hr/yr).\n\n• Lead: Glenwood Arboretum & Trail Project with the Town of Mooresville\nSpearheaded the creation of a commemorative trail with an arboretum and a butterfly bench at a local memorial park in memory of a Town of Mooresville Employee; Grant recipient; Co-Presented to the Board of Commissioners.\n\n• Lead: Little STEM Libraries with the Town of Mooresville\nSpearheaded the creation of 4 little libraries with STEM resources around the Town of Mooresville to increase STEM curiosity and literacy; Grant recipient; Presented to the Board of Commissioners and State Youth Council."
  },
  {
    id: 12,
    title: "IB Diploma Graduate (Summa Cum Laude)",
    subtitle: "South Iredell High School",
    date: "Aug 2021 – May 2025 | Statesville, NC",
    description: "Successfully completed the rigorous IB Diploma Programme with high honors. Ranked in the top 1%. Graduated Summa Cum Laude. Activities and societies: Varsity Tennis Team, Science National Honor Society, Mu Alpha Theta (National Math Honor Society), and IB Student Ambassador."
  }
];

export const WRITING_DATA: WritingItem[] = [
  {
    id: 1,
    title: "The Private Journals of Julian Vane",
    date: "Spring 2026",
    excerpt: "HON 355: Honors Final Project. Developed for the interdisciplinary seminar 'Feelings of/from Technology: Analog Bodies in Digital Spaces'. A fictional short story examining automation and true humanity through Hannah Arendt's philosophical framework.",
    content: "Automation was intended to offload work and labor to liberate the human capacity for action. However, as AI-simulated companionship and algorithmic decision-making encroach on these activities, does it reveal a preference for a frictionless existence over the true humanity Arendt defines as our need to reveal our unique selves through unexpected speech and deeds? My goal is to analyze how contemporary integration of automation goes beyond automating work and labor to take over human action as the unique, unpredictable, and communicative speech/deeds that define true human existence. Using Hannah Arendt’s framework of labor->work->action, this project will investigate the consequences of automating this highest form of human activity.\n\nMain question: Does the encroachment of automation into the realm of action (the distinctively human nature of spontaneous speech and deeds) reveal a desire to escape the inherent burdens of our nature, and if so, does delegating this agency to algorithms indicate a modern move towards the total surrender of our human essence or perhaps destroy the capacity for meaningful human life?\n\nThis project will be a fictional short story that will explore the question of what happens if we let machines do all the thinking and feeling for us and since these are the fundamental things that build human nature, are we as humans driving to escape the struggle of our own nature? I am using Hannah Arendt's three types of human activities: work (the making of long-lasting artifacts), labour (biological and emotional maintenance), and action (speaking and doing unique things) to show how we are slowly giving up our human nature to automation.",
    link: "./The_Private_Journals_of_Julian_Vane.pdf",
    linkText: "Download PDF of Julian Vane Journals"
  }
];
