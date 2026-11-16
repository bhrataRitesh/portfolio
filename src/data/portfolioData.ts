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
    "RabbitMQ & BullMQ Architect",
    "PostgreSQL & Redis Engineer",
    "Full-Stack Web Developer",
    "AWS & Distributed Systems Engineer",
  ],
  bio: "Software Engineer with 1.5+ years of professional experience building backend systems, REST APIs, and third-party integrations using Node.js, JavaScript, TypeScript, and SQL/NoSQL databases.",
  summary:
    "Software Engineer with 1.5+ years of professional experience building backend systems, REST APIs, and third-party integrations using Node.js, JavaScript, TypeScript, and SQL/NoSQL databases. Experienced in distributed processing with RabbitMQ, database performance optimization, production incident investigation, and Docker-based deployments. Hands-on experience with AWS EC2, IAM configuration, Playwright automation testing, CI/CD workflows, system design, and AI-assisted development.",
  currentFocus: [
    "Scalable Backend Architectures",
    "RabbitMQ & BullMQ Queue Processing",
    "Database Performance & Optimization",
    "AWS Cloud Infrastructure & CI/CD",
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
  phone: "+91-9508505872",
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
      "PHP",
      "SQL",
      "C++",
    ],
  },
  {
    category: "Backend & Messaging",
    icon: "server",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "Microservices",
      "RabbitMQ",
      "BullMQ",
      "Asynchronous Processing",
    ],
  },
  {
    category: "Frontend Development",
    icon: "layers",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases & Caching",
    icon: "database",
    items: [
      "MongoDB",
      "PostgreSQL (pgvector)",
      "Redis",
      "MySQL",
    ],
  },
  {
    category: "Cloud, DevOps & Testing",
    icon: "cloud",
    items: [
      "AWS EC2",
      "AWS IAM",
      "Docker",
      "PM2",
      "Git",
      "GitLab CI/CD",
      "GitHub Actions",
      "Linux",
      "Playwright (E2E & API)",
    ],
  },
  {
    category: "Engineering & Integrations",
    icon: "globe",
    items: [
      "System Design & LLD",
      "SOLID Principles & Design Patterns",
      "Root Cause Analysis & Debugging",
      "Amazon SP-API",
      "eBay Trading API (SOAP/XML)",
      "Stripe & Razorpay",
      "Claude Code & GitHub Copilot",
    ],
  },
];

export const experienceData = [
  {
    period: "Feb 2025 – Oct 2026",
    role: "Software Engineer",
    company: "Webkul Software Pvt. Ltd.",
    location: "Noida, India",
    description:
      "Engineered high-throughput backend systems, asynchronous RabbitMQ message queues, third-party marketplace API integrations (Amazon SP-API, eBay, Zoho), and database optimizations, while managing AWS EC2 deployments, incident investigations, and automated Playwright testing.",
    bullets: [
      "Optimized an Amazon product-import workflow taking ~4–5 minutes for 500 products by implementing RabbitMQ-based asynchronous processing and API batching of up to 30 ASINs per request, reducing import time to approximately 30 seconds.",
      "Designed a three-queue RabbitMQ processing workflow to handle Amazon catalog imports, separating product extraction, parent-product creation, and variation processing to coordinate parent-child product relationships and asynchronous API operations.",
      "Resolved database connection pressure and missed product updates caused by concurrent feature checks and database linking by improving the workflow with asynchronous database processing, reducing blocking and improving synchronization reliability.",
      "Supported twice-daily marketplace product synchronization through scheduled RabbitMQ-backed background processing, separating long-running update operations from the main application flow.",
      "Developed and maintained third-party integrations involving Amazon SP-API, eBay Trading API, and Zoho, handling API authentication, token refresh, response processing, and SOAP/XML parsing to support marketplace data synchronization.",
      "Independently investigated production incidents, identified root causes, and implemented fixes for application and synchronization issues. Used PM2 and server-level diagnostics to monitor application behavior and investigate performance bottlenecks.",
      "Deployed client applications on AWS EC2 and configured IAM. Worked with Docker and GitLab CI/CD to support application testing, build, and deployment workflows for live environments.",
      "Used Playwright to develop automated tests covering frontend user flows and API behavior. Participated in code reviews and incorporated reviewer feedback to maintain code quality and team development standards.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "SQL",
      "RabbitMQ",
      "Redis",
      "MySQL",
      "PostgreSQL",
      "AWS EC2",
      "AWS IAM",
      "Docker",
      "PM2",
      "Amazon SP-API",
      "eBay Trading API",
      "Zoho",
      "Stripe",
      "GitLab CI/CD",
      "Playwright",
      "Linux",
    ],
  },
  {
    period: "Oct 2022 – Apr 2023",
    role: "Software Developer (Part-Time)",
    company: "Refresh Infratech Pvt. Ltd.",
    location: "India",
    description:
      "Developed a QR-based restaurant ordering application using Node.js and Express.js, replacing manual menu-based ordering with digital menus, table-side ordering, checkout, and Stripe payment integration.",
    bullets: [
      "Developed a QR-based restaurant ordering application using Node.js and Express.js, replacing manual menu-based ordering with digital menus, table-side ordering, checkout, and Stripe payment integration.",
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
    title: "EduYug — Course Management Platform",
    period: "2025",
    description:
      "A modular backend course management platform built using NestJS, Next.js, and PostgreSQL. Features asynchronous background job processing using BullMQ and Redis, semantic course-content search using PostgreSQL with pgvector, and Razorpay payment workflows.",
    bullets: [
      "Developed modular backend functionality using NestJS and PostgreSQL, applying separation of responsibilities and maintainable application design.",
      "Implemented asynchronous background job processing using BullMQ and Redis to handle tasks outside the main request flow.",
      "Implemented semantic course-content search using PostgreSQL with pgvector and integrated Razorpay payment workflows.",
    ],
    technologies: [
      "NestJS",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "pgvector",
      "Razorpay",
      "TypeScript",
      "Docker",
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
  { value: "1.5+", label: "Years Exp" },
  { value: "115+", label: "LeetCode Solved" },
  { value: "4-5m→30s", label: "Latency Optimized" },
  { value: "100%", label: "Sync Reliability" },
];

export const whatIBringData = [
  "Backend & Microservices",
  "RabbitMQ & BullMQ",
  "PostgreSQL & Redis",
  "AWS EC2 & IAM",
  "Playwright E2E Testing",
  "Amazon SP-API & eBay",
  "System Design & LLD",
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
  "Redux Toolkit",
  "RabbitMQ",
  "BullMQ",
  "Redis",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "AWS EC2",
  "AWS IAM",
  "Docker",
  "PM2",
  "Playwright",
  "Linux",
  "GitLab CI/CD",
  "GitHub Actions",
  "Amazon SP-API",
  "eBay Trading API",
  "Zoho",
  "Stripe",
  "Razorpay",
  "Claude Code",
  "GitHub Copilot",
  "C++",
  "SQL",
  "Tailwind CSS",
];

