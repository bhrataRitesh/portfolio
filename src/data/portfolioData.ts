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
  totalSolved: 123,
  easy: 54,
  medium: 58,
  hard: 11,
  primaryLanguage: "C++",
  primarySolved: 112,
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
      "PHP",
      "Python",
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
      "Laravel",
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
      "Drizzle ORM",
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
      "Jest & Supertest",
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
        category: "Queues & Async",
        challenge: "Amazon 500-product imports suffered from 4–5 minute latencies, API rate limits, and request timeouts.",
        action: "Engineered an asynchronous RabbitMQ processing pipeline with request batching of up to 30 ASINs per batch.",
        result: "Reduced import time by ~90% down to approximately 30 seconds with zero API rate-limit throttles.",
        tradeOff: "Chose 30-ASIN chunks over blind parallel fan-out so throughput stays pinned right below Amazon SP-API burst quotas without triggering 429 bans.",
        interviewHook: "Ask me how we tuned prefetch counts and jitter backoff when Amazon throttled spikes.",
      },
      {
        title: "Variation Sync Pipeline Architecture",
        category: "Queues & Async",
        challenge: "Managing Amazon catalog variations caused race conditions between parent products and child SKUs.",
        action: "Designed a 3-queue RabbitMQ architecture separating product extraction, parent creation, and variation linking.",
        result: "Guaranteed atomic parent-child relational consistency across high-volume variation catalogs.",
        tradeOff: "Split one overloaded monolithic consumer into 3 staged queues instead of database-level retry loops, eliminating deadlocks cleanly.",
        interviewHook: "Ask me what broke when child SKUs arrived before their parent row committed.",
      },
      {
        title: "Database Concurrency & Connection Pool Relief",
        category: "Database Performance",
        challenge: "Concurrent feature verification and database linking exhausted connection pools, causing missed updates.",
        action: "Restructured synchronous database queries into asynchronous non-blocking background DB processing.",
        result: "Relieved connection pressure, eliminated query blocking, and achieved 100% catalog sync reliability.",
        tradeOff: "Moved non-critical feature checks off request-bound ORM transactions onto batched async workers paired with Redis checks.",
        interviewHook: "Ask me how PM2 metrics helped isolate connection pool exhaustion under concurrent imports.",
      },
      {
        title: "Marketplace Background Synchronization",
        category: "Queues & Async",
        challenge: "Twice-daily bulk catalog updates congested real-time store transactions and checkout response times.",
        action: "Built scheduled background task processors with RabbitMQ, decoupling bulk sync from main application threads.",
        result: "Preserved sub-100ms API response times for customer-facing store requests during peak sync intervals.",
        tradeOff: "Decoupled heavy cron ingestion onto dedicated worker queues rather than scaling primary web dynos vertically.",
        interviewHook: "Ask me how we prioritized live checkout events over background inventory updates.",
      },
      {
        title: "Third-Party Marketplace API Connectors",
        category: "APIs & Connectors",
        challenge: "Frequent OAuth token expirations and brittle XML data schemas caused marketplace synchronization downtime.",
        action: "Developed resilient API connectors for Amazon SP-API, eBay Trading API, and Zoho with automated token refresh and SOAP/XML parsers.",
        result: "Established continuous multi-channel synchronization with automated error handling and failover.",
        tradeOff: "Built defensive schema normalizers and pre-expiry OAuth token refresh middleware instead of reactive retry-on-401 wrappers.",
        interviewHook: "Ask me about handling quirky legacy eBay SOAP/XML edge cases vs. modern SP-API JSON.",
      },
      {
        title: "Production Incident Diagnostics & PM2 Monitoring",
        category: "AWS & Testing",
        challenge: "Unidentified server-level bottlenecks and performance degradations affected live client production environments.",
        action: "Investigated production incidents using PM2 metrics and server diagnostics to isolate root causes and engineer targeted patches.",
        result: "Rapidly restored system stability, minimized downtime, and eliminated application performance bottlenecks.",
        tradeOff: "Invested in structured PM2 telemetry and queue heartbeat monitoring before touching application timeouts.",
        interviewHook: "Ask me about my fastest root-cause trace during a live client production slowdown.",
      },
      {
        title: "AWS Cloud Infrastructure & CI/CD Pipelines",
        category: "AWS & Testing",
        challenge: "Manual deployments and loose environment permissions risked configuration drift and deployment failures.",
        action: "Provisioned AWS EC2 instances, configured least-privilege IAM policies, containerized with Docker, and automated GitLab CI/CD.",
        result: "Streamlined automated build-to-deploy cycle, ensuring reliable, reproducible live environment stability.",
        tradeOff: "Standardized Docker images + least-privilege IAM roles per service rather than shared SSH deployment scripts.",
        interviewHook: "Ask me how we locked down IAM permissions cleanly without slowing down hotfix rollouts.",
      },
      {
        title: "Automated Testing & Code Quality Assurance",
        category: "AWS & Testing",
        challenge: "Frequent API updates and complex multi-role user flows posed recurring regression risks across releases.",
        action: "Developed automated end-to-end user flow and API test suites with Playwright, and conducted structured peer code reviews.",
        result: "Proactively identified regression defects pre-deployment and elevated team code quality and test coverage.",
        tradeOff: "Focused Playwright checks on high-risk revenue and multi-role sync flows rather than brittle cosmetic snapshot tests.",
        interviewHook: "Ask me how running Playwright API suites inside GitLab CI caught schema drift pre-prod.",
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
        category: "APIs & Connectors",
        challenge: "High order latency and manual dining errors from paper-based menu ordering in fast-paced restaurant environments.",
        action: "Built a full-stack QR ordering platform with Node.js and Express.js, integrating table-side digital menus, checkout, and Stripe payments.",
        result: "Replaced physical menus with contactless self-ordering, eliminating ordering errors and accelerating table turnover.",
        tradeOff: "Designed QR table-state URLs with zero-login guest checkout to cut friction at peak dinner rush instead of forcing account sign-up.",
        interviewHook: "Ask me how Stripe webhook reconciliation handled simultaneous table orders cleanly.",
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
  {
    title: "JobSearch — City-Based ATS Scraper & Aggregator",
    period: "2026",
    description:
      "Phase-based Python CLI tool discovering software companies by city via Google Places, Clutch, and Naukri, then scraping Greenhouse, Lever, and Workday ATS APIs with Playwright fallback.",
    carBullets: [
      {
        title: "Multi-ATS Job Aggregation Pipeline",
        challenge: "Manually checking scattered company career pages and inconsistent ATS portals across target cities.",
        action: "Built a phase-based Python CLI pipeline integrating Google Places, Clutch, Naukri, Greenhouse/Lever/Workday scrapers, and Playwright fallback.",
        result: "Delivered an idempotent, deduplicated CSV feed of verified software engineering openings for any city.",
      },
    ],
    bullets: [
      "Multi-ATS Pipeline: Built a phase-based Python CLI discovering software companies and scraping Greenhouse, Lever, and Workday ATS APIs with Playwright fallback.",
    ],
    technologies: ["Python", "Playwright", "BeautifulSoup", "Google Places API", "Greenhouse API", "Lever API"],
    github: "https://github.com/bhrataRitesh/jobsearch",
  },
  {
    title: "Acquisitions — Production Express 5 & Drizzle API",
    period: "2025",
    description:
      "Production-hardened REST API built with Express 5, Neon Serverless PostgreSQL, Drizzle ORM, Zod validation, Arcjet bot/rate-limit defense, Jest + Supertest, and Docker CI/CD.",
    carBullets: [
      {
        title: "Hardened Layered REST Architecture",
        challenge: "Typical Express setups lack strict runtime schema validation, bot/rate-limit protection, and dev/prod container parity.",
        action: "Engineered an Express 5 + Drizzle ORM + Neon Postgres API secured with Arcjet, Helmet, JWT, Zod, Winston logging, and Jest + Supertest.",
        result: "Delivered a containerized, CI-verified backend with automated migrations and strict security posture.",
      },
    ],
    bullets: [
      "Production Security & ORM: Engineered an Express 5 API with Drizzle ORM, Neon Postgres, Zod, Arcjet bot/rate-limit defense, Jest tests, and Docker CI/CD.",
    ],
    technologies: ["Node.js", "Express 5", "PostgreSQL", "Drizzle ORM", "Zod", "Arcjet", "Jest", "Docker"],
    github: "https://github.com/bhrataRitesh/acquisitions",
  },
  {
    title: "Event-Driven Microservices (RabbitMQ + Docker)",
    period: "2025",
    description:
      "Three independent containerized microservices (User, Task, Notification) built with Node.js, Express, MongoDB, and RabbitMQ AMQP messaging orchestrated via Docker Compose.",
    carBullets: [
      {
        title: "Decoupled AMQP Service Topology",
        challenge: "Monolithic APIs block task mutations while waiting on downstream notification delivery.",
        action: "Architected standalone User, Task, and Notification services with isolated MongoDB storage and RabbitMQ AMQP event queues via Docker Compose.",
        result: "Decoupled task creation from notification consumers with single-command containerized orchestration.",
      },
    ],
    bullets: [
      "RabbitMQ Microservices: Architected containerized User, Task, and Notification Node.js services communicating asynchronously via RabbitMQ and MongoDB.",
    ],
    technologies: ["Node.js", "Express.js", "RabbitMQ", "MongoDB", "Docker Compose"],
    github: "https://github.com/bhrataRitesh/microservices",
  },
  {
    title: "CS-Cart Razorpay Payment Gateway (SOLID & GoF LLD)",
    period: "2026",
    description:
      "Enterprise-grade Razorpay payment gateway add-on for CS-Cart & Multi-Vendor engineered with 8 GoF design patterns, strict SOLID principles, fluent SQL QueryBuilder, timing-safe HMAC-SHA256 signatures, and idempotent async webhooks.",
    carBullets: [
      {
        title: "Enterprise LLD & Payment Security",
        challenge: "Procedural e-commerce payment scripts mix SQL, HTTP, and callbacks, creating security and maintenance risks.",
        action: "Architected a PSR-4 PHP add-on using 8 GoF patterns (Strategy, Factory, Facade, Adapter, Repository, Builder, DTO, Observer), hash_equals() HMAC verification, and async webhooks.",
        result: "Delivered a zero-core-overwrite CS-Cart processor supporting UPI, Cards, NetBanking, and automated webhook reconciliation.",
      },
    ],
    bullets: [
      "SOLID & GoF LLD Payment Gateway: Built an enterprise CS-Cart Razorpay add-on using 8 GoF patterns, fluent SQL QueryBuilder, hash_equals() HMAC verification, and async webhooks.",
    ],
    technologies: ["PHP", "CS-Cart", "Razorpay API", "SOLID & GoF LLD", "MySQL", "HMAC-SHA256", "Webhooks"],
    github: "https://github.com/bhrataRitesh/cscart-razorpay-payment-gateway",
  },
  {
    title: "ModCart — Multi-Vendor eCommerce Monorepo",
    period: "2026",
    description:
      "Multi-vendor eCommerce platform built with Node.js, TypeScript, Turborepo, and pnpm workspaces across Storefront, Vendor Panel, and Admin Panel apps with Docker Compose.",
    carBullets: [
      {
        title: "Multi-Portal Turborepo Architecture",
        challenge: "Coupling buyer, seller, and admin workflows into one app slows builds and blurs domain ownership.",
        action: "Structured a Turborepo + pnpm monorepo separating storefront, vendor-panel, and admin-panel with shared @modcart/db packages and Docker Compose.",
        result: "Enabled independent portal workflows backed by shared typed schemas and reproducible setup.",
      },
    ],
    bullets: [
      "Turborepo Multi-Vendor Platform: Built a TypeScript monorepo separating Storefront, Vendor Panel, and Admin Panel with shared @modcart/db packages and Docker Compose.",
    ],
    technologies: ["TypeScript", "Node.js", "Turborepo", "pnpm Workspaces", "Docker Compose"],
    github: "https://github.com/bhrataRitesh/modcart",
  },
  {
    title: "Laravel Marketplace — Multi-Vendor Escrow & Concurrency API",
    period: "2026",
    description:
      "High-concurrency headless multi-vendor marketplace REST API built with Laravel 12, PHP 8.2+, MySQL 8.0, and Sanctum RBAC featuring pessimistic row-level locking (SELECT ... FOR UPDATE), automated escrow settlement, and HMAC-SHA256 webhooks.",
    carBullets: [
      {
        title: "Deadlock-Free Escrow & Inventory Locking",
        challenge: "Concurrent checkouts in multi-vendor marketplaces risk inventory overselling, DB deadlocks, and unverified payout splits.",
        action: "Built a Laravel + MySQL 8.0 API using deterministic SELECT ... FOR UPDATE row locking, Sanctum RBAC, double-entry escrow settlement services, and hash_equals() idempotent webhooks.",
        result: "Guaranteed zero overselling, mathematical deadlock prevention, and automated commission splits with Scramble OpenAPI docs.",
      },
    ],
    bullets: [
      "Pessimistic Locking & Escrow Engine: Built a Laravel + MySQL 8.0 multi-vendor API using SELECT ... FOR UPDATE row locking, double-entry escrow settlements, Sanctum RBAC, and HMAC-SHA256 webhooks.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Sanctum RBAC", "Escrow Ledger", "OpenAPI (Scramble)"],
    github: "https://github.com/bhrataRitesh/laravel-marketplace-escrow-api",
  },
];

export const statsData = [
  { value: "1.5+", label: "Years Experience" },
  { value: "123+", label: "LeetCode Solved" },
  { value: "4-5m→30s", label: "Latency (~90% Cut)" },
  { value: "100%", label: "Sync Reliability" },
];

export interface CapabilityDomain {
  title: string;
  category: string;
  technologies: string[];
  impact: string;
}

export const capabilitiesMatrix: CapabilityDomain[] = [
  {
    title: "Event-Driven Queues & Async Pipelines",
    category: "Distributed Systems",
    technologies: ["RabbitMQ", "BullMQ", "Redis"],
    impact: "Designed 3-queue architectures separating extraction, parent creation, and variation processing.",
  },
  {
    title: "High-Throughput APIs & Marketplace Ingestion",
    category: "Backend Architecture",
    technologies: ["Node.js", "Express.js", "NestJS", "Amazon SP-API", "eBay API"],
    impact: "Engineered batching pipelines of up to 30 ASINs per request, cutting import latency from 5m to 30s.",
  },
  {
    title: "Database Concurrency & Vector Search",
    category: "Data Engineering",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "pgvector", "SQL"],
    impact: "Restructured blocking queries into asynchronous DB processing, eliminating connection pool pressure.",
  },
  {
    title: "Cloud Deployments & Automated Testing",
    category: "DevOps & Quality",
    technologies: ["AWS EC2", "AWS IAM", "Docker", "PM2", "Playwright"],
    impact: "Provisioned AWS EC2 with least-privilege IAM, automated CI/CD, and developed Playwright E2E/API tests.",
  },
];

export const whatIBringData = [
  "Backend & Microservices",
  "RabbitMQ & BullMQ",
  "PostgreSQL & Redis",
  "AWS EC2 & IAM",
  "Playwright E2E Testing",
  "Amazon SP-API & eBay",
  "System Design & LLD",
  "DSA (123+ C++ LeetCode)",
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

export interface IntroPromptItem {
  id: string;
  question: string;
  simpleAnswer: string;
  engineerAnswer: string;
  jumpTarget?: string;
  jumpLabel?: string;
}

export const interactiveIntroPrompts: IntroPromptItem[] = [
  {
    id: "intro",
    question: "Who are you in 10 seconds?",
    simpleAnswer:
      "I'm Ritesh — a Software Engineer who loves taking slow, tangled workflows and turning them into calm, reliable systems. Outside work, I obsess over clean developer UX and solving algorithmic puzzles.",
    engineerAnswer:
      "Backend & full-stack engineer (1.5+ yrs @ Webkul). Core toolkit: Node.js, TypeScript, NestJS/Next.js, RabbitMQ/BullMQ, PostgreSQL (pgvector), Redis, Docker, and AWS EC2. Production track record cutting bulk latency by ~90%.",
    jumpTarget: "#about",
    jumpLabel: "Explore Capabilities & Live LeetCode",
  },
  {
    id: "win",
    question: "What's your favorite engineering win?",
    simpleAnswer:
      "Merchants waited nearly 5 minutes for 500 Amazon items to sync — and half the time it timed out. I redesigned how work moved behind the scenes so it finishes in ~30 seconds without breaking a sweat.",
    engineerAnswer:
      "Replaced synchronous REST calls with a 3-queue RabbitMQ topology (extract -> parent -> variation) + 30-ASIN request batching & non-blocking async DB checks. Cut p95 import latency from 4–5m down to ~30s with 100% sync consistency.",
    jumpTarget: "#experience",
    jumpLabel: "See Webkul CAR Breakdowns",
  },
  {
    id: "debugging",
    question: "How do you handle a 2 AM bug?",
    simpleAnswer:
      "Stay calm, stop guessing, and measure first. Instead of poking random code in the dark, I trace where the traffic is actually piling up and fix the root cause once.",
    engineerAnswer:
      "Pull PM2 event-loop & memory metrics, inspect RabbitMQ unacked queue depths + DB connection pools, isolate the exact locking query or webhook retry storm, patch deterministically, and wrap the regression path in a Playwright API test.",
    jumpTarget: "#experience",
    jumpLabel: "Read Production Incident Story",
  },
  {
    id: "projects",
    question: "What are you building right now?",
    simpleAnswer:
      "7+ production-grade projects spanning full-stack apps (EduYug, Shramik v2, ModCart), enterprise payment gateways (CS-Cart Razorpay with 8 GoF patterns), RabbitMQ microservices, hardened Express 5 APIs, and a Python ATS job scraper.",
    engineerAnswer:
      "EduYug (NestJS + pgvector RAG), Shramik v2 (Next.js 16 + Razorpay escrow), CS-Cart Razorpay (SOLID/GoF LLD), ModCart (Turborepo monorepo), Acquisitions (Express 5 + Drizzle + Arcjet), Microservices (RabbitMQ + Docker), and JobSearch (Python + Playwright).",
    jumpTarget: "#projects",
    jumpLabel: "Inspect All 7 Projects",
  },
];

export const recruiterQuickPitchText = `Ritesh Yadav — Software Engineer (1.5+ yrs exp | Noida / Open to Remote & Hybrid)
• Latency & Queues: Cut 500-product Amazon syncs from 4–5m down to ~30s (~90% reduction) via 3-queue RabbitMQ architecture + 30-ASIN batching.
• DB & Reliability: Eliminated Postgres/MySQL connection pool exhaustion under concurrent syncs (100% reliability, <100ms store API response).
• Integrations & Cloud: Production Amazon SP-API, eBay SOAP/XML, Zoho, Stripe/Razorpay webhooks, AWS EC2/IAM, Docker, GitLab CI/CD, Playwright E2E/API suites.
• Shipping Products: EduYug (NestJS + pgvector RAG + BullMQ) & Shramik v2 (Next.js 16 + Razorpay escrow -> https://shramik-two.vercel.app).
• Contact: ratohikumar@gmail.com | +91-8434041818 | LeetCode: https://leetcode.com/u/iamritesh16/`;


