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
  "About Ritesh",
  "LeetCode & DSA",
  "Work Experience",
  "Technical Skills",
  "Featured Projects",
  "Download Resume",
  "Education",
  "Contact Info",
];

export function getBotResponse(input: string): BotReply {
  const q = input.trim().toLowerCase();
  const cleanQ = q.replace(/[?!.,'"]/g, " ");
  const tokens = cleanQ.split(/\s+/).filter(Boolean);

  const has = (...words: string[]) =>
    words.some((w) => cleanQ.includes(w) || tokens.includes(w));

  // 1. GREETINGS
  if (
    has("hi", "hello", "hey", "hola", "namaste", "greetings", "sup", "yo") ||
    cleanQ === "hi" ||
    cleanQ === "hello"
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

  // 6. PROJECTS / EDUYUG / SHRAMIK
  if (has("project", "projects", "eduyug", "studynotion", "shramik", "apps", "built", "build", "portfolio")) {
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
      text: `🚀 **Featured Projects by Ritesh:**\n\n1. **EduYug** (May 2025)\nAI-augmented course marketplace built with NestJS 10, Next.js 14, PostgreSQL 16 (pgvector), and Redis 7, featuring timestamped in-browser RAG AI tutoring and adaptive bitrate HLS.js streaming.\n*Stack: NestJS 10, Next.js 14, pgvector, Redis, BullMQ, FastAPI, Docker, Razorpay*\n\n2. **Shramik v2** (Dec 2024 – Present) — [Live Demo](https://shramik-two.vercel.app)\nReal-time labor marketplace with Voice AI search for daily wage workers, government e-Shram verification, and Razorpay escrow ledger.\n*Stack: Next.js 16, React 19, TypeScript, MongoDB, Razorpay, Voice AI*`,
      suggestions: [
        "EduYug Details",
        "Shramik Details",
        "Technical Skills",
        "Download Resume",
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
      "redis",
      "playwright"
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
