// ============================================================
// PORTFOLIO DATA — Ritesh Yadav's Latest Verified Resume
// ============================================================

export const personalInfo = {
  name: "Ritesh Yadav",
  firstName: "Ritesh",
  title: "Software Engineer",
  typingRoles: [
    "Software Engineer",
    "Node.js & TypeScript Specialist",
    "RabbitMQ & Redis Architect",
    "PostgreSQL & MySQL Engineer",
    "Full-Stack Web Developer",
    "High-Performance Backend Engineer",
  ],
  bio: "Software Engineer specializing in scalable backend architectures, message queues (RabbitMQ), in-memory caching (Redis), relational query optimization (MySQL, PostgreSQL), and reactive full-stack web applications.",
  summary:
    "Software Engineer specializing in scalable backend architectures, message queues (RabbitMQ), in-memory caching (Redis), and relational query optimization (MySQL, PostgreSQL). Proven track record of reducing catalog import latency from 4–5 minutes to ~30 seconds while preventing database connection-pool exhaustion; experienced in building third-party marketplace integrations (Amazon SP-API, eBay, Zoho, Stripe, Razorpay) and reactive full-stack web applications.",
  currentFocus: [
    "Scalable Backend Architectures",
    "RabbitMQ & Queue Processing",
    "Redis Caching & Concurrency",
    "PostgreSQL & Relational Query Tuning",
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
  totalSolved: 115,
  easy: 50,
  medium: 54,
  hard: 11,
  primaryLanguage: "C++",
  primarySolved: 108,
};

export const contactInfo = {
  email: "ratohikumar@gmail.com",
  phone: "+91-8434041818",
  location: "Noida, UP, India",
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
    category: "Languages",
    icon: "code",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL",
      "C++",
    ],
  },
  {
    category: "Backend & Queues",
    icon: "server",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "RabbitMQ",
      "Redis",
    ],
  },
  {
    category: "Databases & Storage",
    icon: "database",
    items: [
      "PostgreSQL (pgvector)",
      "MySQL",
      "MongoDB",
      "Pinecone",
    ],
  },
  {
    category: "Frontend Development",
    icon: "layers",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "DevOps & Testing",
    icon: "cloud",
    items: [
      "Git",
      "GitLab CI/CD",
      "Docker",
      "Linux",
      "Playwright",
    ],
  },
  {
    category: "Integrations & FinTech",
    icon: "globe",
    items: [
      "Amazon SP-API",
      "eBay APIs (Trading API, SOAP/XML)",
      "Zoho APIs",
      "Stripe (Custom Accounts)",
      "Razorpay",
    ],
  },
];

export const experienceData = [
  {
    period: "Feb 2025 – Oct 2026",
    role: "Software Engineer",
    company: "Webkul Software Pvt. Ltd.",
    description:
      "Architected multi-queue asynchronous message brokers, Redis in-memory caching layers with Bloom filter validation, third-party marketplace API connectors, and relational database optimizations for enterprise e-commerce platforms handling lakhs of SKUs.",
    bullets: [
      "Designed a multi-queue RabbitMQ architecture with concurrent workers for asynchronous catalog ingestion (CSV imports, variation creation, and scheduled twice-daily price/stock updates), handling product catalogs containing lakhs of SKUs without database traffic spikes.",
      "Optimized product-feature synchronization by implementing Redis-backed caching with a Bloom Filter check for unknown features, batched bulk upsert operations, and MSET synchronization—reducing 500-product import time from ~4–5 minutes to ~30 seconds and preventing recurring database connection-pool exhaustion.",
      "Engineered third-party marketplace API connectors for Amazon SP-API, eBay APIs (Trading API, SOAP/XML), and Zoho with automated token refresh on expiry; built bulk ASIN chunking (batches of 30) and XML payload parsing for parent-child variation syncing across large catalogs.",
      "Reworked concurrency control from database-level locking to Redis-based coordination during concurrent catalog imports after lock contention caused RabbitMQ consumer heartbeat failures (~2-minute interval).",
      "Designed composite MySQL indexes on product-mapping and junction tables to accelerate relational lookups and feature linking, and integrated Stripe Custom Accounts for automated marketplace seller payouts.",
      "Built a multilingual e-commerce chatbot and RAG pipeline using OpenAI APIs and Pinecone, synchronizing catalog and CMS vector embeddings to generate contextual product recommendations with direct store deep-links.",
      "Diagnosed and resolved production issues across application, database, and queue infrastructure via SSH; recommended separating RabbitMQ and Redis onto dedicated servers under heavy load; automated regression testing with Playwright in GitLab CI/CD across an Agile team of 12 developers and 5 QA engineers.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "RabbitMQ",
      "Redis",
      "MySQL",
      "PostgreSQL",
      "Pinecone",
      "OpenAI APIs",
      "Amazon SP-API",
      "eBay APIs",
      "Zoho APIs",
      "Stripe",
      "Docker",
      "GitLab CI/CD",
      "Playwright",
      "Linux",
    ],
  },
  {
    period: "Oct 2022 – Apr 2023",
    role: "Software Developer (Part-Time)",
    company: "Refresh Infratech Pvt. Ltd.",
    description:
      "Built and deployed a QR-based restaurant ordering system with real-time digital menu browsing, table-side ordering, and instant checkout.",
    bullets: [
      "Built and deployed a QR-based restaurant ordering system with real-time digital menu browsing, table-side ordering, and checkout via Stripe Payments, utilizing Node.js, Express.js, and RESTful APIs.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Stripe Payments",
      "JavaScript",
      "MongoDB",
    ],
  },
];

export const projectsData = [
  {
    title: "EduYug — Course Platform",
    period: "2025",
    description:
      "A modular monolith course platform built with NestJS, Next.js, and PostgreSQL. Features native pgvector semantic search over course content, an asynchronous background worker pipeline using BullMQ and Redis for FFmpeg-based video transcoding with adaptive-bitrate HLS streaming, and an immutable double-entry ledger with Razorpay.",
    bullets: [
      "Architected a modular monolith backend with NestJS, Next.js, and PostgreSQL, integrating semantic search via pgvector cosine similarity over course content.",
      "Built an asynchronous background worker pipeline using BullMQ and Redis for FFmpeg-based video transcoding with adaptive-bitrate HLS streaming and an immutable double-entry ledger with Razorpay.",
    ],
    technologies: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "BullMQ",
      "FFmpeg",
      "Razorpay",
    ],
    github: "https://github.com/bhrataRitesh/eduyug",
  },
  {
    title: "Shramik v2 — Real-Time Labor Marketplace",
    period: "2024 – 2025",
    description:
      "A full-stack labor marketplace platform engineered with Next.js, React, and TypeScript. Features stateless JWT authentication, OTP verification, Zod schema validation, and transactional escrow payout workflows with Razorpay ledger state tracking.",
    bullets: [
      "Developed a full-stack platform with Next.js, React, and TypeScript, securing API routes with stateless JWT authentication, OTP verification, and Zod schema validation.",
      "Engineered transactional escrow payout workflows and ledger state tracking with Razorpay integration.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Razorpay",
      "Zod",
      "JWT",
    ],
    github: "https://github.com/bhrataRitesh/shramik",
    liveUrl: "https://shramik-two.vercel.app",
  },
];

export const statsData = [
  { value: "2+", label: "Years Exp" },
  { value: "115+", label: "LeetCode Solved" },
  { value: "4-5m→30s", label: "Latency Optimized" },
  { value: "100K+", label: "SKUs Handled" },
];

export const whatIBringData = [
  "Backend Architecture",
  "RabbitMQ Queues",
  "Redis Caching & Bloom",
  "PostgreSQL & MySQL",
  "Pinecone & RAG AI",
  "Amazon SP-API & eBay",
  "Stripe & Razorpay FinTech",
  "DSA (115+ C++ LeetCode)",
];

export const techMarqueeItems = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "NestJS",
  "React.js",
  "Next.js",
  "RabbitMQ",
  "Redis",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Pinecone",
  "OpenAI APIs",
  "SQL",
  "C++",
  "Docker",
  "Linux",
  "GitLab CI/CD",
  "Playwright",
  "Amazon SP-API",
  "eBay APIs",
  "Zoho APIs",
  "Stripe",
  "Razorpay",
  "Tailwind CSS",
];

