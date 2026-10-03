// ============================================================
// PORTFOLIO DATA — Ritesh Yadav's Latest Verified Resume
// ============================================================

export const personalInfo = {
  name: "Ritesh Yadav",
  firstName: "Ritesh",
  title: "Generative AI & Full-Stack Software Engineer",
  typingRoles: [
    "Generative AI & LLM Engineer",
    "Full-Stack Developer",
    "RAG & Vector DB Specialist",
    "Next.js & React Developer",
    "Backend & Distributed Systems",
    "RabbitMQ & Cloud Architect",
  ],
  bio: "Generative AI & Full-Stack Software Engineer specializing in RAG architectures, multilingual LLM chatbots (OpenAI & Gemini), multimodal vision AI (Virtual Try-On & background removal), and high-throughput backend systems.",
  summary:
    "Generative AI & Full-Stack Software Engineer with production experience at Webkul and Refresh Infratech. Specialized in architecting multilingual conversational AI chatbots using OpenAI (ChatGPT API) and Google Gemini with Vector DBs for semantic search, integrating multimodal vision AI (Virtual Try-On & image background removal), automating agentic testing via MCP (Model Context Protocol), building resilient RabbitMQ queue architectures, and engineering high-scale full-stack web platforms.",
  currentFocus: [
    "RAG & Vector Search Pipelines",
    "Multimodal GenAI & Virtual Try-On",
    "RabbitMQ & Distributed Systems",
    "Agentic AI via MCP",
  ],
  availableStatus: "Open for Opportunities",
  resumeUrl: "/Ritesh_Yadav_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/bhrataRitesh",
  linkedin: "https://www.linkedin.com/in/riteshyadav16/",
  leetcode: "https://leetcode.com/u/iamritesh16/",
  email: "mailto:ratohikumar@gmail.com",
  resume: "/Ritesh_Yadav_Resume.pdf",
  portfolio: "https://ritesh-yadav16.vercel.app",
  whatsapp: "",
  telegram: "",
};

export const leetcodeData = {
  username: "iamritesh16",
  profileUrl: "https://leetcode.com/u/iamritesh16/",
  totalSolved: 116,
  easy: 50,
  medium: 55,
  hard: 11,
  primaryLanguage: "C++",
  primarySolved: 108,
};

export const contactInfo = {
  email: "ratohikumar@gmail.com",
  phone: "+91-8434041818",
  location: "Noida, UP, India / Remote",
};

export const educationData = [
  {
    period: "Oct 2023 – Jun 2025",
    degree: "MCA - Master of Computer Applications",
    institution: "G.L. Bajaj Institute of Technology & Management, Greater Noida, UP, IN",
    description:
      "Advanced postgraduate studies focusing on modern software engineering, system architecture, database design, algorithms, and distributed computing.",
    highlights: ["Grade: 7.4 CGPA"],
  },
  {
    period: "Oct 2020 – May 2023",
    degree: "B.Sc. in Information Technology",
    institution: "St. Xavier College Ranchi, Ranchi, Jharkhand, IN",
    description:
      "Undergraduate degree establishing core foundations in computer science, software development methodologies, relational databases, and object-oriented programming.",
    highlights: ["Grade: 7.0 CGPA"],
  },
];

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "code",
    items: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "C++",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "server",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Redux",
      "Context API",
      "Tailwind CSS",
    ],
  },
  {
    category: "E-Commerce Platforms",
    icon: "shopping-bag",
    items: [
      "CS-Cart (Add-on Dev, Core Hooks, Standards)",
      "OpenCart",
    ],
  },
  {
    category: "Marketplaces & APIs",
    icon: "globe",
    items: [
      "Amazon SP-API",
      "eBay REST & GraphQL APIs",
      "GraphQL",
      "Zoho (Inventory & CRM)",
      "WooCommerce",
      "Wix",
    ],
  },
  {
    category: "Databases & Messaging",
    icon: "database",
    items: [
      "RDBMS (MySQL, PostgreSQL)",
      "Redis (In-Memory Caching)",
      "MongoDB",
      "RabbitMQ",
      "Vector Databases",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    items: [
      "Git",
      "GitHub Actions",
      "GitLab CI/CD",
      "Docker",
      "Kubernetes",
      "AWS (EC2)",
      "Linux",
      "Postman",
      "Playwright (via MCP)",
    ],
  },
  {
    category: "FinTech, AI & Problem Solving",
    icon: "bot",
    items: [
      "Data Structures & Algorithms (LeetCode 116+)",
      "Stripe (Custom Accounts, Webhooks)",
      "Razorpay",
      "Veri*Factu Compliance",
      "LLM Chatbots",
      "MCP (Model Context Protocol)",
      "Semantic Search",
    ],
  },
];

export const experienceData = [
  {
    period: "Feb 2025 – Present",
    role: "Software Engineer (Software Analyst) (Full-Time) Onsite",
    company: "Webkul",
    description:
      "Spearheading enterprise multi-channel e-commerce connectors, message queue architectures, payment compliances, and LLM-powered conversational search.",
    bullets: [
      "Developed and deployed custom connectors for Amazon SP-API, eBay, Zoho Inventory/CRM, and Wix on CS-Cart and OpenCart, automating multi-channel catalog, order, and inventory synchronization using REST and GraphQL APIs.",
      "Collaborated directly with international clients to gather technical requirements, deliver product demos, and implement tailored production solutions, enhancing customer satisfaction and platform adoption.",
      "Optimized high-volume RDBMS queries (MySQL) and designed indexing on mapping tables, leveraging Redis caching to eliminate sync bottlenecks and race conditions across 100K+ SKUs.",
      "Built background queue handlers using RabbitMQ with heartbeat monitoring, single-consumer locking, and memory bounds, ensuring resilient and fault-tolerant data synchronization.",
      "Developed the Veri*Factu Invoice compliance add-on for the Spanish anti-fraud tax agency following strict CS-Cart standards, and integrated Stripe Custom Accounts & Wallet systems with BNPL automation.",
      "Designed and integrated multilingual chatbots using LLMs and semantic search with vector databases, built scalable backend APIs, and automated E2E testing by leveraging MCP (Model Context Protocol) and Playwright with GitLab CI/CD pipelines.",
    ],
    technologies: [
      "Node.js",
      "RDBMS (MySQL)",
      "Redis",
      "RabbitMQ",
      "GraphQL",
      "Amazon SP-API",
      "eBay API",
      "Zoho APIs",
      "LLMs & Vector DB",
      "MCP (Model Context Protocol)",
      "Playwright",
      "GitLab CI/CD",
      "CS-Cart / OpenCart",
      "Stripe",
    ],
  },
  {
    period: "Oct 2022 – Apr 2023",
    role: "Software Developer (Part-Time) Onsite",
    company: "Refresh Infratech Pvt. Ltd.",
    description:
      "Built a contactless restaurant ordering and live dining solution with real-time backend order dispatching.",
    bullets: [
      "Built a QR-based restaurant ordering system allowing customers to browse live digital menus, place orders, and pay via Stripe directly from their table.",
      "Developed real-time backend workflows and order routing with EJS templating and Node.js/Express, deploying the platform live for automated dine-in experiences.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "JavaScript",
      "Stripe API",
    ],
  },
];

export const projectsData = [
  {
    title: "EduYug — AI-Augmented Course Marketplace & Learning Platform",
    period: "May 2025",
    description:
      "A high-scale modular monolith course marketplace built with NestJS 10, Next.js 14, PostgreSQL 16 (pgvector), Redis 7, and BullMQ. Features native pgvector semantic search, timestamped in-browser RAG AI tutoring with video deep-linking, adaptive bitrate HLS.js streaming, and an immutable double-entry ledger with Razorpay.",
    bullets: [
      "Architected a modular monolith in Turborepo with NestJS 10, Next.js 14, and PostgreSQL 16, embedding native semantic search via pgvector cosine similarity (<=>).",
      "Engineered an in-browser timestamped RAG AI Tutor with millisecond video deep-linking, an adaptive bitrate HLS.js player with BullMQ/FFmpeg transcoding, and an immutable double-entry ledger with Razorpay HMAC verification.",
    ],
    technologies: [
      "NestJS 10",
      "Next.js 14",
      "PostgreSQL (pgvector)",
      "Redis 7",
      "BullMQ",
      "FastAPI (Python)",
      "TypeScript",
      "Docker",
      "Razorpay",
      "HLS.js",
    ],
    github: "https://github.com/bhrataRitesh/eduyug",
  },
  {
    title: "Shramik v2 — Real-Time Labor Marketplace & Voice AI",
    period: "Dec 2024 – Present",
    description:
      "A next-generation labor marketplace engineered with Next.js 16, React 19, and TypeScript. Features Voice AI conversational job matching for low-literacy workers, government e-Shram & mobile OTP verification, and a double-entry ledger with Razorpay escrow payments.",
    bullets: [
      "Re-architected from legacy monolith to Next.js 16 (App Router) and TypeScript, integrating Voice AI conversational job matching for low-literacy informal workers.",
      "Engineered e-Shram and OTP identity verification, a double-entry ledger transaction engine with Razorpay escrow payouts, and secured backend routes using Zod validation and stateless JWT auth.",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "MongoDB",
      "Razorpay",
      "Voice AI",
      "Cloudinary",
      "Zod",
    ],
    github: "https://github.com/bhrataRitesh/shramik",
    liveUrl: "https://shramik-two.vercel.app",
  },
];

export const statsData = [
  { value: "2+", label: "Years Exp" },
  { value: "116+", label: "LeetCode Solved" },
  { value: "10+", label: "Enterprise Connectors" },
  { value: "25+", label: "Tech & Tools" },
];

export const whatIBringData = [
  "Full-Stack Dev",
  "Amazon & eBay Sync",
  "RabbitMQ Queues",
  "LLMs & Vector DB",
  "CS-Cart & OpenCart",
  "Stripe & FinTech",
  "DSA & LeetCode (C++)",
  "Playwright E2E",
];

export const techMarqueeItems = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "C++",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "CS-Cart",
  "OpenCart",
  "Amazon SP-API",
  "eBay REST API",
  "Zoho APIs",
  "RabbitMQ",
  "LLMs",
  "Vector DB",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "AWS",
  "Stripe",
  "Razorpay",
  "Playwright",
  "GitLab CI/CD",
  "Tailwind CSS",
];
