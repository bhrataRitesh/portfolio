// ============================================================
// PORTFOLIO DATA — Ritesh Yadav's Latest Verified Resume
// ============================================================

export const personalInfo = {
  name: "Ritesh Yadav",
  firstName: "Ritesh",
  title: "Software Analyst & Full-Stack Developer",
  typingRoles: [
    "Software Analyst",
    "Full-Stack Developer",
    "E-Commerce & Connector Architect",
    "LLM & Vector DB Engineer",
    "Next.js & React Developer",
    "FastAPI & Node.js Specialist",
  ],
  bio: "Software Analyst & Full-Stack Developer with hands-on experience building enterprise e-commerce connectors (Amazon SP-API, eBay, Zoho, Wix), RabbitMQ queue architectures, LLM chatbots with vector databases, and scalable full-stack platforms.",
  summary:
    "Software Analyst and Full-Stack Developer with production experience at Webkul and Refresh Infratech. Specialized in developing custom e-commerce connectors for Amazon SP-API, eBay, Zoho Inventory/CRM, and Wix on CS-Cart and OpenCart, building resilient RabbitMQ background queue handlers, engineering Spanish tax Veri*Factu compliance add-ons, and integrating multilingual chatbots using LLMs and vector databases with semantic search.",
  currentFocus: [
    "Enterprise E-Commerce Sync",
    "Amazon SP-API & Marketplaces",
    "RabbitMQ Queue Pipelines",
    "LLMs & Vector Databases",
  ],
  availableStatus: "Open for Opportunities",
  resumeUrl: "/Ritesh_Yadav_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/bhrataRitesh",
  linkedin: "https://www.linkedin.com/in/riteshyadav16/",
  email: "mailto:ratohikumar@gmail.com",
  resume: "/Ritesh_Yadav_Resume.pdf",
  portfolio: "https://ritesh-yadav16.vercel.app",
  whatsapp: "",
  telegram: "",
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
      "eBay REST API",
      "Zoho (Inventory & CRM)",
      "WooCommerce",
      "Wix",
    ],
  },
  {
    category: "Databases & Messaging",
    icon: "database",
    items: [
      "MySQL",
      "PostgreSQL",
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
    ],
  },
  {
    category: "FinTech, AI & Concepts",
    icon: "bot",
    items: [
      "Stripe (Custom Accounts, Webhooks)",
      "Razorpay",
      "Veri*Factu Compliance",
      "LLM Chatbots",
      "Semantic Search",
      "EJS",
    ],
  },
];

export const experienceData = [
  {
    period: "Feb 2025 – Oct 2026",
    role: "Software Analyst (Full-Time) Onsite",
    company: "Webkul",
    description:
      "Spearheading enterprise multi-channel e-commerce connectors, message queue architectures, payment compliances, and LLM-powered conversational search.",
    bullets: [
      "Developed and deployed custom connectors for Amazon SP-API, eBay, Zoho Inventory/CRM, and Wix on CS-Cart and OpenCart, automating multi-channel catalog, order, and inventory synchronization.",
      "Collaborated directly with international clients to gather technical requirements, deliver product demos, and implement tailored production solutions, enhancing customer satisfaction and platform adoption.",
      "Optimized high-volume database queries and added indexing on mapping tables, eliminating sync bottlenecks and resolving race conditions in duplicate SKU and price updates across large catalogs.",
      "Built background queue handlers using RabbitMQ with heartbeat monitoring, single-consumer locking, and memory bounds, ensuring resilient and fault-tolerant data synchronization.",
      "Developed the Veri*Factu Invoice compliance add-on for the Spanish anti-fraud tax agency following strict CS-Cart standards, and integrated Stripe Custom Accounts & Wallet systems with BNPL automation.",
      "Designed and integrated multilingual chatbots using LLMs and semantic search with vector databases, built scalable RESTful APIs, and automated E2E testing using Playwright with GitLab CI/CD pipelines.",
    ],
    technologies: [
      "CS-Cart",
      "OpenCart",
      "Amazon SP-API",
      "eBay API",
      "Zoho APIs",
      "RabbitMQ",
      "LLMs",
      "Vector DB",
      "MySQL",
      "Stripe",
      "Playwright",
      "GitLab CI/CD",
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
    title: "Studynotion — Scalable EdTech Platform",
    period: "May 2025",
    description:
      "A full-stack e-learning platform where instructors create and sell courses, and students enroll, learn, and track progress with personalized dashboards. Integrated Razorpay with webhook verification for secure payments, implemented RESTful APIs, JWT role-based access control, and responsive UI for cross-device usability.",
    bullets: [
      "Developed a full-stack e-learning platform where instructors create and sell courses, and students enroll, learn, and track progress with personalized dashboards.",
      "Integrated Razorpay with webhook verification for secure payments, implemented RESTful APIs, JWT role-based access control, and responsive UI for cross-device usability.",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
    ],
    github: "https://github.com/bhrataRitesh/StudyNotion",
  },
  {
    title: "Shramik — On-Demand Job Marketplace",
    period: "Dec 2024",
    description:
      "An on-demand job marketplace for daily wage workers with real-time hiring, role-based access (admin, employer, worker), and responsive UI using EJS templates. Integrated Stripe for escrow-style secure payments, added rating/review systems for trust, and implemented RESTful APIs with MongoDB for low-latency backend operations.",
    bullets: [
      "Built an on-demand job marketplace for daily wage workers with real-time hiring, role-based access (admin, employer, worker), and responsive UI using EJS templates.",
      "Integrated Stripe for escrow-style secure payments, added rating/review systems for trust, and implemented RESTful APIs with MongoDB for low-latency backend operations.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "JavaScript",
      "Stripe API",
    ],
    github: "https://github.com/bhrataRitesh/shramik",
  },
];

export const statsData = [
  { value: "2+", label: "Years Exp" },
  { value: "10+", label: "Enterprise Connectors" },
  { value: "25+", label: "Technologies & Tools" },
  { value: "100%", label: "Client Satisfaction" },
];

export const whatIBringData = [
  "Full-Stack Dev",
  "Amazon & eBay Sync",
  "RabbitMQ Queues",
  "LLMs & Vector DB",
  "CS-Cart & OpenCart",
  "Stripe & FinTech",
  "DevOps & CI/CD",
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
