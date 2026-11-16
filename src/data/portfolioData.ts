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
    carBullets: [
      {
        title: "Catalog Import Latency Optimization",
        challenge: "Amazon 500-product imports suffered from 4–5 minute latencies, API rate limits, and request timeouts.",
        action: "Engineered an asynchronous RabbitMQ processing pipeline with request batching of up to 30 ASINs per batch.",
        result: "Reduced import time by ~90% down to approximately 30 seconds with zero API rate-limit throttles.",
      },
      {
        title: "Variation Sync Pipeline Architecture",
        challenge: "Managing Amazon catalog variations caused race conditions between parent products and child SKUs.",
        action: "Designed a 3-queue RabbitMQ architecture separating product extraction, parent creation, and variation linking.",
        result: "Guaranteed atomic parent-child relational consistency across high-volume variation catalogs.",
      },
      {
        title: "Database Concurrency & Connection Pool Relief",
        challenge: "Concurrent feature verification and database linking exhausted connection pools, causing missed updates.",
        action: "Restructured synchronous database queries into asynchronous non-blocking background DB processing.",
        result: "Relieved connection pressure, eliminated query blocking, and achieved 100% catalog sync reliability.",
      },
      {
        title: "Marketplace Background Synchronization",
        challenge: "Twice-daily bulk catalog updates congested real-time store transactions and checkout response times.",
        action: "Built scheduled background task processors with RabbitMQ, decoupling bulk sync from main application threads.",
        result: "Preserved sub-100ms API response times for customer-facing store requests during peak sync intervals.",
      },
      {
        title: "Third-Party Marketplace API Connectors",
        challenge: "Frequent OAuth token expirations and brittle XML data schemas caused marketplace synchronization downtime.",
        action: "Developed resilient API connectors for Amazon SP-API, eBay Trading API, and Zoho with automated token refresh and SOAP/XML parsers.",
        result: "Established continuous multi-channel synchronization with automated error handling and failover.",
      },
      {
        title: "Production Incident Diagnostics & PM2 Monitoring",
        challenge: "Unidentified server-level bottlenecks and performance degradations affected live client production environments.",
        action: "Investigated production incidents using PM2 metrics and server diagnostics to isolate root causes and engineer targeted patches.",
        result: "Rapidly restored system stability, minimized downtime, and eliminated application performance bottlenecks.",
      },
      {
        title: "AWS Cloud Infrastructure & CI/CD Pipelines",
        challenge: "Manual deployments and loose environment permissions risked configuration drift and deployment failures.",
        action: "Provisioned AWS EC2 instances, configured least-privilege IAM policies, containerized with Docker, and automated GitLab CI/CD.",
        result: "Streamlined automated build-to-deploy cycle, ensuring reliable, reproducible live environment stability.",
      },
      {
        title: "Automated Testing & Code Quality Assurance",
        challenge: "Frequent API updates and complex multi-role user flows posed recurring regression risks across releases.",
        action: "Developed automated end-to-end user flow and API test suites with Playwright, and conducted structured peer code reviews.",
        result: "Proactively identified regression defects pre-deployment and elevated team code quality and test coverage.",
      },
    ],
    bullets: [
      "Latency Optimization: Addressed 4–5 minute import latencies for 500 products by engineering a RabbitMQ asynchronous processing pipeline with batching of up to 30 ASINs per request, cutting import time to 30 seconds.",
      "Variation Sync Architecture: Resolved catalog variation synchronization race conditions by designing a 3-queue RabbitMQ architecture (separating extraction, parent creation, and variation processing), ensuring atomic parent-child relationships.",
      "Database Optimization: Mitigated database connection pool exhaustion and missed updates under concurrent traffic by restructuring feature checks into asynchronous database operations, eliminating query blocking and ensuring 100% sync reliability.",
      "Background Decoupling: Protected web application response times during peak twice-daily marketplace syncs by building scheduled RabbitMQ background consumers, fully decoupling long-running updates from main application threads.",
      "Marketplace Connectors: Prevented marketplace synchronization downtime by building third-party API connectors for Amazon SP-API, eBay Trading API, and Zoho, featuring automated token refresh, response validation, and resilient SOAP/XML parsing.",
      "Production Diagnostics: Resolved critical production incidents by analyzing PM2 metrics and server-level diagnostics to identify root-cause bottlenecks, implementing rapid patches that restored system stability and minimized downtime.",
      "Cloud Infrastructure: Standardized live environment releases by provisioning AWS EC2 instances with least-privilege IAM configuration, containerizing services via Docker, and building automated GitLab CI/CD test and deployment pipelines.",
      "Automated Quality Assurance: Prevented regression defects across production releases by developing Playwright automated test suites covering critical user flows and APIs, while upholding team code quality through structured peer reviews.",
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
    carBullets: [
      {
        title: "Full-Stack QR Digital Ordering Platform",
        challenge: "High order latency and manual dining errors from paper-based menu ordering in fast-paced restaurant environments.",
        action: "Built a full-stack QR ordering platform with Node.js and Express.js, integrating table-side digital menus, checkout, and Stripe payments.",
        result: "Replaced physical menus with contactless self-ordering, eliminating ordering errors and accelerating table turnover.",
      },
    ],
    bullets: [
      "Full-Stack Digital Ordering: Modernized dine-in operations by replacing error-prone paper menus with a full-stack QR ordering platform built with Node.js and Express.js, integrating table-side digital menus, checkout, and Stripe payments.",
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
    carBullets: [
      {
        title: "Modular Backend Architecture",
        challenge: "Monolithic coupling in EdTech platforms leading to tangled business logic and difficult testability.",
        action: "Architected modular backend services using NestJS and PostgreSQL, enforcing separation of responsibilities and clean architectural boundaries.",
        result: "Delivered decoupled, maintainable domain modules for courses, enrollment, and payment processing.",
      },
      {
        title: "Asynchronous Background Processing",
        challenge: "Heavy media and background operations blocking the main HTTP request-response thread.",
        action: "Implemented an asynchronous background job pipeline using BullMQ and Redis with automated retries and dead-letter queues.",
        result: "Preserved sub-50ms API response latency by offloading background tasks outside the main request loop.",
      },
      {
        title: "Vector Semantic Search & Payments",
        challenge: "Keyword search limitations on learning queries and security risks in course payment verification.",
        action: "Implemented semantic search using PostgreSQL pgvector cosine similarity and integrated Razorpay cryptographic webhook verification.",
        result: "Delivered accurate lecture discovery and 100% verified transactional course enrollment provisioning.",
      },
    ],
    bullets: [
      "Modular Architecture: Solved monolithic coupling by developing modular backend functionality using NestJS and PostgreSQL, enforcing strict separation of responsibilities for scalable and maintainable application design.",
      "Asynchronous Worker Pipeline: Prevented HTTP thread blocking during heavy media processing by implementing asynchronous background job queues using BullMQ and Redis, keeping API response latency under 50ms.",
      "Semantic Search & Payments: Overcame keyword-search limitations by implementing vector semantic search directly in PostgreSQL with pgvector, while securing financial course enrollments via Razorpay payment workflows.",
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
    carBullets: [
      {
        title: "Real-Time Labor Matching",
        challenge: "Daily wage workers faced high idle search times and lack of formal digital hiring channels.",
        action: "Built a full-stack platform with Next.js, React, and TypeScript featuring role-based portals (Workers, Employers, Admins) and live job broadcasting.",
        result: "Connected laborers with verified local contractors in real-time, reducing idle search time significantly.",
      },
      {
        title: "Secure Escrow Payouts",
        challenge: "Wage insecurity and non-payment disputes frequently compromised trust between workers and employers.",
        action: "Engineered transactional escrow payout workflows and ledger state tracking integrated with Razorpay/Stripe webhooks.",
        result: "Guaranteed wage release upon job completion and established verified community accountability.",
      },
    ],
    bullets: [
      "Real-Time Matching: Developed a full-stack platform with Next.js, React, and TypeScript, connecting daily wage laborers with verified contractors in real-time.",
      "Escrow Payouts: Engineered transactional escrow payout workflows and ledger state tracking with Razorpay integration, securing wage payments upon job completion.",
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

