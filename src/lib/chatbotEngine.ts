import {
  personalInfo,
  contactInfo,
  socialLinks,
  leetcodeData,
  educationData,
  skillsData,
  experienceData,
  projectsData,
} from "@/data/portfolioData";

export interface BotReply {
  text: string;
  suggestions?: string[];
  actionLink?: { label: string; url: string; isDownload?: boolean };
}

export const initialSuggestions = [
  "30s Backend Pitch",
  "Favorite Engineering Win",
  "How do you debug 2 AM bugs?",
  "Topics to Grill Ritesh On",
  "LeetCode & DSA",
  "Featured Projects",
  "Download Resume",
  "Contact Info",
];

export function getBotResponse(input: string): BotReply {
  const q = input.trim().toLowerCase();
  const cleanQ = q.replace(/[?!.,'"]/g, " ");
  const tokens = cleanQ.split(/\s+/).filter(Boolean);

  const has = (...words: string[]) =>
    words.some((w) =>
      w.length <= 3 ? tokens.includes(w) : cleanQ.includes(w) || tokens.includes(w)
    );

  const hasWord = (...words: string[]) =>
    words.some((w) => tokens.includes(w));

  // 0A. RECRUITER 30-SECOND PITCH / INTERVIEW GRILL TOPICS
  if (has("pitch", "30s", "30-second", "10 seconds", "hire", "why hire")) {
    return {
      text: `🎯 **30-Second Recruiter & Engineering Lead Pitch:**\n\n• **Impact**: Cut 500-product Amazon sync latency by **~90%** (4–5 mins → ~30s) at Webkul using a 3-queue RabbitMQ pipeline + 30-ASIN request batching.\n• **Reliability**: Eliminated DB connection pool exhaustion & race conditions across concurrent catalog syncs (100% sync integrity, sub-100ms checkout response).\n• **Shipping Mindset**: Built **EduYug** (NestJS + pgvector RAG + BullMQ) & **Shramik v2** (live Next.js 16 + Voice AI + Razorpay escrow).\n• **Availability**: Based in Noida, IN • **Open for Backend / Full-Stack opportunities** (Remote / Hybrid).`,
      actionLink: {
        label: "Download ATS Resume (PDF)",
        url: "/Ritesh_Yadav_Resume.pdf",
        isDownload: true,
      },
      suggestions: [
        "Topics to Grill Ritesh On",
        "Favorite Engineering Win",
        "Contact Info",
      ],
    };
  }

  if (has("grill", "round 1", "interview prompt", "interview", "ask")) {
    return {
      text: `💡 **Great Questions to Ask Ritesh on an Interview Call:**\n\n1. **Queue Topology Trade-offs**: *"Why did splitting Webkul syncs into 3 RabbitMQ queues beat single-queue retries when child variations arrived before parent SKUs?"*\n2. **Connection Pool Isolation**: *"How did you use PM2 metrics to separate blocking feature checks into async DB workers cleanly?"*\n3. **Vector Search in Postgres**: *"In EduYug, why keep pgvector cosine similarity inside PostgreSQL 16 instead of adopting Pinecone?"*\n4. **Financial Consistency**: *"How does Shramik's Razorpay double-entry escrow ledger prevent race conditions on duplicate webhooks?"*`,
      suggestions: [
        "30s Backend Pitch",
        "Featured Projects",
        "Download Resume",
        "Contact Info",
      ],
    };
  }

  if (has("favorite", "2 am", "bug", "incident", "pm2", "catalog import latency", "variation sync pipeline", "database concurrency")) {
    return {
      text: `🛠️ **Production War Stories & Debugging Playbook:**\n\n• **The 5-Minute Sync Bottleneck**: Amazon 500-product imports timed out constantly from 1-by-1 API calls. Batching **30 ASINs/req** across a **3-queue RabbitMQ** architecture (extract → parent → variation) dropped syncs to **~30 seconds** with 0 rate-limit bans.\n• **The 2 AM Playbook**: Never guess—pull **PM2 event-loop metrics**, check RabbitMQ unacked depth + MySQL/Postgres pool wait states, isolate locking transactions, patch deterministically, and lock the path with **Playwright E2E/API** CI checks.`,
      suggestions: [
        "Topics to Grill Ritesh On",
        "Technical Skills",
        "Featured Projects",
      ],
    };
  }

  // 1. GREETINGS
  if (
    hasWord("hi", "hello", "hey", "hola", "namaste", "greetings", "sup", "yo")
  ) {
    return {
      text: `Hello! 👋 I'm **Ritesh's AI Assistant**.\n\nI can answer questions about his role as a **${personalInfo.title}**, his work at **Webkul**, his tech stack, featured projects, education, or provide his downloadable resume.\n\nWhat would you like to explore?`,
      suggestions: [
        "Tell me about Ritesh",
        "Work Experience",
        "Technical Skills",
        "Download Resume",
      ],
    };
  }

  // 2. GRATITUDE / COURTESY
  if (has("thanks", "thank", "appreciate", "helpful", "good", "great", "awesome", "cool")) {
    return {
      text: `You're very welcome! 😊 Feel free to ask anything else, or click below to connect directly with Ritesh.`,
      suggestions: ["Contact Info", "Download Resume", "Featured Projects"],
    };
  }

  if (has("bye", "goodbye", "see ya", "cya")) {
    return {
      text: `Thanks for stopping by! Have a wonderful day. Reach out to Ritesh anytime at [${contactInfo.email}](mailto:${contactInfo.email})!`,
    };
  }

  // 3. RESUME / CV
  if (has("resume", "cv", "pdf", "biodata", "curriculum")) {
    return {
      text: `📄 You can download Ritesh Yadav's latest verified resume right here:\n\n• **Title**: ${personalInfo.title}\n• **Last Updated**: October 2026\n• **Format**: PDF Document`,
      actionLink: {
        label: "Download Resume (PDF)",
        url: personalInfo.resumeUrl || "/Ritesh_Yadav_Resume.pdf",
        isDownload: true,
      },
      suggestions: ["Work Experience", "Technical Skills", "Contact Info"],
    };
  }

  // 4. ABOUT / BIO / WHO IS RITESH
  if (
    !has("shramik", "eduyug", "studynotion", "leetcode", "dsa", "webkul", "refresh", "skill", "education") &&
    has("who are you", "who is ritesh", "about", "bio", "background", "summary", "profile", "introduce", "tell me about yourself", "tell me about ritesh")
  ) {
    return {
      text: `👨‍💻 **${personalInfo.name}**\n**${personalInfo.title}**\n\n${personalInfo.summary}\n\n• **Location**: ${contactInfo.location}\n• **Current Status**: ${personalInfo.availableStatus}\n• **Core Areas**: ${personalInfo.currentFocus.join(", ")}`,
      actionLink: {
        label: "Download Full Resume",
        url: "/Ritesh_Yadav_Resume.pdf",
        isDownload: true,
      },
      suggestions: ["Work Experience", "Technical Skills", "Featured Projects", "Contact Info"],
    };
  }

  // 5. EXPERIENCE / WEBKUL / REFRESH INFRATECH
  if (
    has(
      "experience",
      "work",
      "job",
      "career",
      "webkul",
      "refresh",
      "infratech",
      "history",
      "role",
      "company",
      "companies",
      "tenure"
    )
  ) {
    const webkul = experienceData[0];
    const refresh = experienceData[1];

    if (has("webkul") || !has("refresh")) {
      return {
        text: `💼 **${webkul.role}** at **${webkul.company}**\n*${webkul.period}*\n\n${webkul.description}\n\n**Key Achievements:**\n${webkul.bullets
          .map((b) => `• ${b}`)
          .join("\n\n")}\n\n**Technologies:** ${webkul.technologies.join(", ")}`,
        suggestions: ["Refresh Infratech Experience", "Technical Skills", "Download Resume"],
      };
    } else {
      return {
        text: `💼 **${refresh.role}** at **${refresh.company}**\n*${refresh.period}*\n\n${refresh.description}\n\n**Key Achievements:**\n${refresh.bullets
          .map((b) => `• ${b}`)
          .join("\n")}\n\n**Technologies:** ${refresh.technologies.join(", ")}`,
        suggestions: ["Webkul Experience", "Featured Projects", "Contact Info"],
      };
    }
  }

  // 6. PROJECTS / ALL 7 FEATURED CASE STUDIES
  if (
    has(
      "project",
      "projects",
      "eduyug",
      "studynotion",
      "shramik",
      "jobsearch",
      "acquisitions",
      "microservices",
      "razorpay",
      "cs-cart",
      "cscart",
      "modcart",
      "laravel",
      "sanctum",
      "escrow",
      "turborepo",
      "gateway",
      "gof",
      "lld",
      "drizzle",
      "arcjet",
      "scraper",
      "ats",
      "apps",
      "built",
      "build",
      "portfolio"
    )
  ) {
    if (has("laravel", "sanctum", "scramble")) {
      return {
        text: `🏗️ **Laravel Marketplace — Multi-Vendor Escrow & Concurrency API** (2026)\n\nA high-concurrency headless marketplace API built with **Laravel 12**, **PHP 8.2+**, **MySQL 8.0**, and **Sanctum RBAC**, using deterministic \`SELECT ... FOR UPDATE\` pessimistic row locking to eliminate overselling & deadlocks, double-entry escrow settlements, timing-safe HMAC-SHA256 webhooks, and live Scramble OpenAPI docs.\n\n**Stack:** Laravel, PHP, MySQL, Sanctum RBAC, Escrow Ledger, OpenAPI (Scramble)`,
        actionLink: {
          label: "View Laravel Marketplace on GitHub ↗",
          url: "https://github.com/bhrataRitesh/laravel-marketplace-escrow-api",
        },
        suggestions: ["CS-Cart Razorpay Gateway", "ModCart Monorepo", "EduYug Details"],
      };
    }
    if (has("jobsearch", "scraper", "ats", "greenhouse", "lever", "workday")) {
      return {
        text: `🔍 **JobSearch — City-Based ATS Scraper & Aggregator** (2026)\n\nA phase-based Python CLI tool that discovers software companies by city (Google Places API, Clutch.co, Naukri.com), locates career pages, and scrapes **Greenhouse, Lever, and Workday** ATS APIs with **BeautifulSoup + Playwright** fallback.\n\n**Stack:** Python, Playwright, BeautifulSoup, Google Places API, Greenhouse/Lever APIs`,
        actionLink: {
          label: "View JobSearch on GitHub ↗",
          url: "https://github.com/bhrataRitesh/jobsearch",
        },
        suggestions: ["Acquisitions API", "Microservices Repo", "EduYug Details"],
      };
    }

    if (has("acquisitions", "drizzle", "arcjet", "neon")) {
      return {
        text: `🛡️ **Acquisitions — Production Express 5 & Drizzle API** (2025)\n\nA production-hardened layered REST API built with **Express 5**, **Neon Serverless PostgreSQL**, **Drizzle ORM**, **Zod**, **Arcjet** bot/rate-limit protection, **Helmet**, **JWT**, **Winston** logging, **Jest + Supertest** tests, and Docker dev/prod CI/CD.\n\n**Stack:** Node.js, Express 5, PostgreSQL, Drizzle ORM, Zod, Arcjet, Jest, Docker`,
        actionLink: {
          label: "View Acquisitions on GitHub ↗",
          url: "https://github.com/bhrataRitesh/acquisitions",
        },
        suggestions: ["JobSearch Scraper", "Microservices Repo", "Shramik Details"],
      };
    }

    if (has("razorpay", "cs-cart", "cscart", "gateway", "gof", "lld")) {
      return {
        text: `💳 **CS-Cart Razorpay Payment Gateway (SOLID & GoF LLD)** (2026)\n\nAn enterprise PHP add-on for CS-Cart & Multi-Vendor (4.12.x–4.21.x) engineered with **8 GoF Design Patterns** (Strategy, Factory, Facade, Adapter, Repository, Builder, DTO, Observer), timing-safe \`hash_equals()\` HMAC-SHA256 verification, fluent parameterized SQL \`QueryBuilder\`, and idempotent async webhooks.\n\n**Stack:** PHP, CS-Cart, Razorpay API, MySQL, SOLID & GoF LLD`,
        actionLink: {
          label: "View CS-Cart Razorpay on GitHub ↗",
          url: "https://github.com/bhrataRitesh/cscart-razorpay-payment-gateway",
        },
        suggestions: ["ModCart Monorepo", "EduYug Details", "Shramik Details"],
      };
    }

    if (has("modcart", "turborepo", "vendor-panel", "storefront")) {
      return {
        text: `🛒 **ModCart — Multi-Vendor eCommerce Monorepo** (2026)\n\nA multi-vendor eCommerce platform built with **Node.js, TypeScript, Turborepo, pnpm workspaces, and Docker Compose**, separating \`storefront\`, \`vendor-panel\`, and \`admin-panel\` with shared \`@modcart/db\` packages.\n\n**Stack:** TypeScript, Node.js, Turborepo, pnpm Workspaces, Docker Compose`,
        actionLink: {
          label: "View ModCart on GitHub ↗",
          url: "https://github.com/bhrataRitesh/modcart",
        },
        suggestions: ["CS-Cart Razorpay Gateway", "EduYug Details", "Work Experience"],
      };
    }

    if (has("microservices", "notification service", "task service", "user service")) {
      return {
        text: `🐇 **Event-Driven Microservices (RabbitMQ + Docker)** (2025)\n\nThree independent containerized Node.js services (**User Service**, **Task Service**, **Notification Service**) with **MongoDB** persistence and **RabbitMQ** AMQP async event queues orchestrated via Docker Compose.\n\n**Stack:** Node.js, Express.js, RabbitMQ, MongoDB, Docker Compose`,
        actionLink: {
          label: "View Microservices on GitHub ↗",
          url: "https://github.com/bhrataRitesh/microservices",
        },
        suggestions: ["Acquisitions API", "JobSearch Scraper", "EduYug Details"],
      };
    }
    if (has("eduyug", "studynotion", "course", "lms", "edtech")) {
      const p = projectsData.find((x) => x.title.toLowerCase().includes("eduyug")) || projectsData[0];
      return {
        text: `🎓 **${p.title}** (${p.period})\n\n${p.description}\n\n**Key Innovations:**\n${p.bullets?.map((b) => `• ${b}`).join("\n")}\n\n**Stack:** ${p.technologies.join(", ")}`,
        actionLink: {
          label: "View EduYug on GitHub ↗",
          url: p.github || "https://github.com/bhrataRitesh/eduyug",
        },
        suggestions: ["Tell me about Shramik", "Technical Skills", "Work Experience"],
      };
    }

    if (has("shramik")) {
      const p = projectsData.find((x) => x.title.toLowerCase().includes("shramik")) || projectsData[1];
      return {
        text: `🛠️ **${p.title}** (${p.period})\n\n${p.description}\n\n**Key Highlights:**\n${p.bullets?.map((b) => `• ${b}`).join("\n")}\n\n**Stack:** ${p.technologies.join(", ")}\n\n• 🌐 **Live Web App**: [https://shramik-two.vercel.app](https://shramik-two.vercel.app)\n• 💻 **Source Code**: [github.com/bhrataRitesh/shramik](https://github.com/bhrataRitesh/shramik)`,
        actionLink: {
          label: "Open Shramik Live App ↗",
          url: "https://shramik-two.vercel.app",
        },
        suggestions: ["EduYug Details", "Technical Skills", "Contact Info"],
      };
    }

    return {
      text: `🚀 **Featured Projects by Ritesh (8 Case Studies):**\n\n1. **Laravel Marketplace** (2026) — Laravel 12 + MySQL 8.0 API with \`SELECT ... FOR UPDATE\` pessimistic locking, Sanctum RBAC & double-entry escrow settlement.\n2. **CS-Cart Razorpay Gateway** (2026) — Enterprise PHP payment gateway with 8 GoF patterns, fluent QueryBuilder, timing-safe HMAC & async webhooks.\n3. **JobSearch Aggregator** (2026) — Python CLI discovering companies by city & scraping Greenhouse/Lever/Workday ATS + Playwright.\n4. **ModCart** (2026) — TypeScript + Turborepo multi-vendor eCommerce monorepo (\`storefront\`, \`vendor-panel\`, \`admin-panel\`).\n5. **Event-Driven Microservices** (2025) — 3 containerized Node.js services communicating via RabbitMQ AMQP & MongoDB.\n6. **Acquisitions API** (2025) — Express 5 + Drizzle ORM + Neon Postgres + Arcjet security + Jest/Supertest + Docker CI/CD.\n7. **EduYug** (2025) — NestJS 10 + pgvector RAG AI tutoring + BullMQ FFmpeg HLS + Razorpay.\n8. **Shramik v2** ([Live Demo](https://shramik-two.vercel.app)) — Next.js 16 + Voice AI labor marketplace + Razorpay escrow.`,
      suggestions: [
        "Laravel Marketplace",
        "CS-Cart Razorpay Gateway",
        "JobSearch Scraper",
        "EduYug Details",
      ],
    };
  }

  // 7. TECHNICAL SKILLS / STACK
  if (
    has(
      "skill",
      "skills",
      "tech",
      "stack",
      "technologies",
      "language",
      "languages",
      "frontend",
      "backend",
      "framework",
      "frameworks",
      "database",
      "databases",
      "devops",
      "cloud",
      "react",
      "next",
      "node",
      "typescript",
      "javascript",
      "c++",
      "docker",
      "mongodb",
      "postgres",
      "postgresql",
      "mysql",
      "rabbitmq",
      "bullmq",
      "redis",
      "aws",
      "iam",
      "pm2",
      "playwright",
      "python",
      "php",
      "drizzle",
      "turborepo",
      "solid",
      "design pattern",
      "design patterns",
      "copilot",
      "claude"
    )
  ) {
    const list = skillsData
      .map((s) => `• **${s.category}**: ${s.items.join(", ")}`)
      .join("\n");

    return {
      text: `⚡ **Technical Skills Breakdown:**\n\n${list}`,
      suggestions: ["LeetCode & DSA", "Work Experience", "Featured Projects", "Download Resume"],
    };
  }

  // 8. LEETCODE & PROBLEM SOLVING / DSA
  if (
    has(
      "leetcode",
      "dsa",
      "problem",
      "problems",
      "solving",
      "algo",
      "algos",
      "algorithm",
      "algorithms",
      "competitive",
      "structure",
      "structures"
    )
  ) {
    return {
      text: `🧩 **LeetCode & Problem Solving Profile:**\n\n• **Profile**: [@${leetcodeData.username}](${leetcodeData.profileUrl})\n• **Total Problems Solved**: **${leetcodeData.totalSolved}+**\n  - 🟢 **Easy**: ${leetcodeData.easy}\n  - 🟡 **Medium**: ${leetcodeData.medium}\n  - 🔴 **Hard**: ${leetcodeData.hard}\n• **Primary Language**: **${leetcodeData.primaryLanguage}** (${leetcodeData.primarySolved} solved), plus MySQL (${leetcodeData.totalSolved - leetcodeData.primarySolved} solved)\n• **Core Strengths**: Deep understanding of Data Structures & Algorithms, binary trees, dynamic programming, two pointers, graphs, and algorithmic complexity optimization.`,
      actionLink: {
        label: "View LeetCode Profile",
        url: leetcodeData.profileUrl,
      },
      suggestions: ["Technical Skills", "Work Experience", "Featured Projects"],
    };
  }

  // 9. AI / LLM / VECTOR DB / CHATBOT / PINECONE
  if (has("ai", "llm", "llms", "vector", "chatbot", "bot", "semantic", "nlp", "rag", "pgvector", "pinecone", "openai")) {
    return {
      text: `🤖 **AI, Vector Search & RAG Chatbot Expertise:**\n\n• **Multilingual E-Commerce Chatbot**: Built an intelligent RAG pipeline at Webkul using **OpenAI APIs** and **Pinecone**, synchronizing product catalog and CMS vector embeddings to deliver contextual product recommendations with direct store deep-links.\n• **pgvector Native Semantic Search**: Architected into PostgreSQL 16 for EduYug using cosine similarity (<=>) for instant course transcript and lecture retrieval.\n• **Timestamped RAG AI Tutoring**: Engineered real-time contextual question answering with millisecond video seeking deep-links.`,
      suggestions: ["Featured Projects", "Technical Skills", "Work Experience"],
    };
  }

  // 10. BACKEND ARCHITECTURE / RABBITMQ / REDIS / CONNECTORS / STRIPE
  if (
    has(
      "backend",
      "architecture",
      "rabbitmq",
      "queue",
      "queues",
      "redis",
      "caching",
      "bloom",
      "mset",
      "amazon",
      "sp-api",
      "zoho",
      "ebay",
      "connector",
      "connectors",
      "stripe",
      "payout",
      "payouts",
      "latency",
      "mysql",
      "postgres",
      "postgresql"
    )
  ) {
    return {
      text: `⚙️ **Backend Architecture & Distributed Systems Expertise:**\n\nRitesh specializes in high-throughput backend infrastructure, asynchronous messaging, and caching:\n\n• **RabbitMQ Multi-Queue Pipelines**: Designed asynchronous queue architectures with concurrent workers handling product catalogs with lakhs of SKUs without database traffic spikes.\n• **Redis Caching & Bloom Filters**: Implemented Redis caching with Bloom filter validation for unknown features, batched bulk upserts, and MSET synchronization—slashing catalog import latency from **~4–5 minutes to ~30 seconds** and preventing database connection-pool exhaustion.\n• **Marketplace & API Connectors**: Engineered automated connectors for **Amazon SP-API**, **eBay APIs (Trading API, SOAP/XML)**, and **Zoho** with automated token refresh and ASIN chunking (batches of 30).\n• **Concurrency Control**: Replaced database-level locks with **Redis-based coordination** during concurrent imports to eliminate RabbitMQ consumer heartbeat timeouts.\n• **Relational DB Optimization**: Designed composite MySQL indexes on junction tables for sub-millisecond lookups and integrated **Stripe Custom Accounts** for automated seller payouts.\n• **DevOps & Testing**: Production diagnosis via SSH, server isolation, and automated **Playwright regression testing** within GitLab CI/CD pipelines.`,
      suggestions: ["Work Experience", "Technical Skills", "Download Resume"],
    };
  }

  // 11. EDUCATION / DEGREE / COLLEGE
  if (has("education", "college", "degree", "mca", "b.sc", "bsc", "school", "cgpa", "grade", "university", "gl bajaj", "xavier")) {
    const ed = educationData
      .map(
        (e) =>
          `🎓 **${e.degree}**\n🏛️ ${e.institution}\n📅 *${e.period}* — **${e.highlights.join(", ")}**\n${e.description}`
      )
      .join("\n\n");

    return {
      text: `📚 **Education & Academic Background:**\n\n${ed}`,
      suggestions: ["Work Experience", "Technical Skills", "Download Resume"],
    };
  }

  // 12. CONTACT / HIRE / EMAIL / PHONE / LINKEDIN / GITHUB / LEETCODE
  if (
    has(
      "contact",
      "hire",
      "email",
      "phone",
      "mobile",
      "call",
      "reach",
      "message",
      "interview",
      "available",
      "freelance",
      "full time",
      "full-time",
      "remote",
      "location",
      "linkedin",
      "github"
    )
  ) {
    return {
      text: `📫 **Get In Touch with Ritesh Yadav:**\n\n• **Email**: [${contactInfo.email}](mailto:${contactInfo.email})\n• **Phone**: [${contactInfo.phone}](tel:${contactInfo.phone.replace(/[^0-9+]/g, "")})\n• **Location**: ${contactInfo.location}\n• **Status**: ${personalInfo.availableStatus}\n• **LinkedIn**: [linkedin.com/in/riteshyadav16](${socialLinks.linkedin})\n• **GitHub**: [github.com/bhrataRitesh](${socialLinks.github})\n• **LeetCode**: [leetcode.com/u/${leetcodeData.username}](${leetcodeData.profileUrl})`,
      actionLink: {
        label: "Open LinkedIn Profile",
        url: socialLinks.linkedin,
      },
      suggestions: ["Download Resume", "LeetCode & DSA", "Work Experience", "Featured Projects"],
    };
  }

  // 13. GENERAL INTELLIGENT FALLBACK
  return {
    text: `I'm not completely sure about that specific detail, but I'd love to help! You can ask me about:\n\n• Ritesh's **Experience** at Webkul Software or Refresh Infratech\n• His **LeetCode & DSA Profile** (${leetcodeData.totalSolved}+ solved in C++)\n• His **Technical Skills** (Node.js, TypeScript, React, Next.js, RabbitMQ, PostgreSQL, Redis)\n• Featured **Projects** (EduYug & Shramik v2)\n• His **Education** (MCA & B.Sc. IT)\n• Or **Download his Resume** below.`,
    suggestions: [
      "About Ritesh",
      "LeetCode & DSA",
      "Work Experience",
      "Technical Skills",
      "Featured Projects",
      "Download Resume",
      "Contact Info",
    ],
  };
}
