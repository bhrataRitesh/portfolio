// ============================================================
// PORTFOLIO DATA — Ritesh Yadav's Updated Resume Information
// ============================================================

export const personalInfo = {
  name: "Ritesh Yadav",
  firstName: "Ritesh",
  title: "Software Analyst & Full-Stack Developer",
  typingRoles: [
    "Software Analyst",
    "Full-Stack Developer",
    "Next.js & React Engineer",
    "E-Commerce & AI Specialist",
    "FastAPI & Node.js Developer",
  ],
  bio: "Software Analyst & Full-Stack Developer with hands-on experience building scalable e-commerce solutions, custom API connectors (Zoho, eBay), LLM-powered multilingual chatbots, and full-stack platforms.",
  summary:
    "Results-driven Software Analyst and Full-Stack Developer with hands-on production experience at Webkul and Refresh Infratech. Specialized in developing custom e-commerce connectors (Zoho Inventory, Zoho CRM, eBay) on CS-Cart and OpenCart, engineering multilingual chatbots powered by LLMs and vector databases with semantic search, and architecting modern full-stack web applications with React, Next.js, Node.js, Express, and FastAPI.",
  currentFocus: [
    "Full-Stack Engineering",
    "LLMs & Vector DB",
    "E-Commerce Connectors",
    "DevOps & Cloud",
  ],
  availableStatus: "Open for Opportunities",
  resumeUrl: "/Ritesh_Yadav_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/bhrataRitesh",
  linkedin: "https://www.linkedin.com/in/riteshyadav16/",
  email: "mailto:ratohikumar@gmail.com",
  resume: "/Ritesh_Yadav_Resume.pdf",
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
    items: ["JavaScript", "TypeScript", "C++", "PHP"],
  },
  {
    category: "Web Technologies",
    icon: "globe",
    items: ["HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Frameworks & Backend",
    icon: "server",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "State Management",
    icon: "cpu",
    items: ["Redux", "Redux Toolkit", "Context API"],
  },
  {
    category: "Databases & AI",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Vector Databases"],
  },
  {
    category: "E-Commerce Platforms",
    icon: "shopping-bag",
    items: [
      "CS-Cart (Add-on Dev & Customization)",
      "OpenCart",
      "Zoho APIs",
      "eBay API",
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    items: [
      "CI/CD (GitHub Actions)",
      "Docker",
      "Kubernetes",
      "Minikube",
      "AWS (EC2)",
      "Linux",
      "Vercel",
      "Netlify",
    ],
  },
  {
    category: "Architectures & Concepts",
    icon: "layers",
    items: [
      "Microservices",
      "Serverless",
      "RESTful APIs",
      "Semantic Search",
      "SEO Best Practices",
      "Performance Optimization",
    ],
  },
  {
    category: "Other Skills & Integrations",
    icon: "bot",
    items: [
      "LLM-based Chatbot Integration",
      "Multilingual Support",
      "Vector Databases",
      "Stripe Integration",
      "Razorpay Payment",
      "Postman",
      "Git / GitHub",
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
      "Spearheading enterprise e-commerce integrations, custom connectors, and AI-driven conversational solutions.",
    bullets: [
      "Developed and deployed custom connectors for Zoho Inventory, Zoho CRM, and eBay on platforms like Cs-Cart and OpenCart, streamlining multi-channel e-commerce operations for global clients.",
      "Collaborated with international clients to gather requirements, deliver demos, and implement tailored solutions, enhancing customer satisfaction and engagement.",
      "Designed and integrated a multilingual chatbot using LLMs with semantic search capability, powered by an in-house vector database for improved contextual understanding and response accuracy.",
      "Contributed to architectural decisions and performance tuning in client projects, gaining cross-platform expertise and strengthening debugging and deployment workflows.",
    ],
    technologies: [
      "Cs-Cart",
      "OpenCart",
      "Zoho APIs",
      "eBay API",
      "LLMs",
      "Vector DB",
      "JavaScript",
      "MySQL",
    ],
  },
  {
    period: "Oct 2022 — Apr 2023",
    role: "Software Developer (Part-Time) Onsite",
    company: "Refresh Infratech Pvt. Ltd.",
    description:
      "Engineered backend workflows and customer-facing dining solutions for automated restaurant operations.",
    bullets: [
      "Built a QR-based restaurant ordering system allowing customers to browse menus, place orders, and pay via Stripe from their table.",
      "Developed real-time backend workflows with EJS templating and deployed the platform live for automated dine-in experiences.",
    ],
    technologies: [
      "Node.js",
      "MongoDB",
      "EJS",
      "JavaScript",
      "Stripe API",
    ],
  },
];

export const projectsData = [
  {
    title: "Studynotion — Full-Stack EdTech Platform",
    period: "May 2025",
    description:
      "A comprehensive full-stack e-learning platform where instructors create and sell courses, and students enroll, learn, and track progress with personalized dashboards. Integrated Razorpay with webhook handling for secure payments, implemented REST APIs, role-based access, and responsive UI for cross-device usability.",
    bullets: [
      "Developed full-stack e-learning platform with instructor course creation and student tracking dashboards.",
      "Integrated Razorpay with webhook handling for secure payments.",
      "Implemented REST APIs, role-based access (Student, Instructor, Admin), and responsive UI with Tailwind CSS.",
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
    title: "Shramik — Real-Time Job Marketplace",
    period: "Dec 2024",
    description:
      "A job marketplace for daily wage workers with real-time hiring, role-based access (admin, employer, worker), and responsive UI using EJS templates. Integrated Stripe for secure payments, added rating/review systems for trust, and implemented REST APIs with MongoDB for backend operations.",
    bullets: [
      "Built job marketplace for daily wage workers with real-time hiring and role-based access.",
      "Integrated Stripe for secure payments and added rating/review systems for community trust.",
      "Implemented REST APIs with MongoDB for efficient backend operations and EJS templates for dynamic UI.",
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
  { value: "10+", label: "Projects & Connectors" },
  { value: "20+", label: "Tech Stack" },
  { value: "100%", label: "Client Satisfaction" },
];

export const whatIBringData = [
  "Full-Stack Dev",
  "LLMs & Vector DB",
  "E-Commerce Connectors",
  "CS-Cart & OpenCart",
  "Payment Gateways",
  "DevOps & Docker",
  "Microservices",
  "Performance Tuning",
];

export const techMarqueeItems = [
  "JavaScript",
  "TypeScript",
  "C++",
  "PHP",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "CS-Cart",
  "OpenCart",
  "LLMs",
  "Vector DB",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "AWS",
  "Stripe",
  "Razorpay",
  "Tailwind CSS",
  "CI/CD",
  "Git",
];
