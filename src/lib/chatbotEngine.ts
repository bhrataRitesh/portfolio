import {
  personalInfo,
  contactInfo,
  socialLinks,
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
      text: `📄 You can download Ritesh Yadav's latest verified resume right here:\n\n• **Title**: ${personalInfo.title}\n• **Last Updated**: September 2026\n• **Format**: PDF Document`,
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

  // 6. PROJECTS / STUDYNOTION / SHRAMIK
  if (has("project", "projects", "studynotion", "shramik", "apps", "built", "build", "portfolio")) {
    if (has("studynotion")) {
      const p = projectsData.find((x) => x.title.toLowerCase().includes("studynotion")) || projectsData[0];
      return {
        text: `🚀 **${p.title}** (${p.period})\n\n${p.description}\n\n**Key Highlights:**\n${p.bullets?.map((b) => `• ${b}`).join("\n")}\n\n**Stack:** ${p.technologies.join(", ")}`,
        actionLink: {
          label: "View StudyNotion on GitHub",
          url: p.github || "https://github.com/bhrataRitesh/StudyNotion",
        },
        suggestions: ["Tell me about Shramik", "Technical Skills", "Work Experience"],
      };
    }

    if (has("shramik")) {
      const p = projectsData.find((x) => x.title.toLowerCase().includes("shramik")) || projectsData[1];
      return {
        text: `🛠️ **${p.title}** (${p.period})\n\n${p.description}\n\n**Key Highlights:**\n${p.bullets?.map((b) => `• ${b}`).join("\n")}\n\n**Stack:** ${p.technologies.join(", ")}`,
        actionLink: {
          label: "View Shramik on GitHub",
          url: p.github || "https://github.com/bhrataRitesh/shramik",
        },
        suggestions: ["Tell me about StudyNotion", "Technical Skills", "Contact Info"],
      };
    }

    return {
      text: `🚀 **Featured Projects by Ritesh:**\n\n1. **StudyNotion** (May 2025)\nFull-stack EdTech platform with role-based dashboards, video courses, and Razorpay webhook integration.\n*Stack: React.js, Tailwind CSS, Node.js, Express, MongoDB, Razorpay*\n\n2. **Shramik** (Dec 2024)\nReal-time job marketplace for daily wage workers with role-based access and Stripe payouts.\n*Stack: Node.js, Express.js, MongoDB, EJS, JavaScript, Stripe API*`,
      suggestions: [
        "StudyNotion Details",
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
      "fastapi",
      "typescript",
      "javascript",
      "python",
      "c++",
      "php",
      "docker",
      "kubernetes",
      "mongodb",
      "postgres",
      "mysql",
      "aws"
    )
  ) {
    const list = skillsData
      .map((s) => `• **${s.category}**: ${s.items.join(", ")}`)
      .join("\n");

    return {
      text: `⚡ **Technical Skills Breakdown:**\n\n${list}`,
      suggestions: ["Work Experience", "Featured Projects", "Download Resume"],
    };
  }

  // 8. AI / LLM / VECTOR DB / CHATBOT
  if (has("ai", "llm", "llms", "vector", "chatbot", "bot", "semantic", "nlp", "rag")) {
    return {
      text: `🤖 **AI & LLM Integration Expertise:**\n\nAt Webkul, Ritesh designed and deployed a **multilingual chatbot powered by LLMs with semantic search**, backed by an in-house **vector database**.\n\n• Fast semantic document search & vector embeddings retrieval\n• Contextual prompt engineering for high answer accuracy\n• Multilingual query understanding and natural language responses`,
      suggestions: ["Work Experience", "Technical Skills", "Featured Projects"],
    };
  }

  // 9. E-COMMERCE / CS-CART / OPENCART / AMAZON / ZOHO / EBAY
  if (
    has(
      "ecommerce",
      "e-commerce",
      "cs-cart",
      "cscart",
      "opencart",
      "amazon",
      "sp-api",
      "zoho",
      "ebay",
      "wix",
      "woocommerce",
      "connector",
      "connectors",
      "rabbitmq",
      "verifactu"
    )
  ) {
    return {
      text: `🛒 **E-Commerce & Custom Connectors Expertise:**\n\nRitesh specializes in developing scalable add-ons and automated multi-channel integrations:\n\n• **CS-Cart & OpenCart**: Add-on development, core hooks, standard architectures, and performance tuning.\n• **Marketplaces & Connectors**: Automated catalog, order, and inventory sync for **Amazon SP-API**, **eBay REST API**, **Zoho (Inventory & CRM)**, **WooCommerce**, and **Wix**.\n• **Queue Synchronization**: Fault-tolerant **RabbitMQ** background queue handlers with heartbeat monitoring and single-consumer locking.\n• **FinTech Compliance**: Built the Spanish tax agency **Veri*Factu Invoice** compliance add-on and integrated **Stripe Custom Accounts/BNPL**.\n• **Global Clients**: Collaborated directly with international clients to deliver tailored production solutions.`,
      suggestions: ["Work Experience", "Technical Skills", "Download Resume"],
    };
  }

  // 10. EDUCATION / DEGREE / COLLEGE
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

  // 11. CONTACT / HIRE / EMAIL / PHONE / LINKEDIN / GITHUB
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
      text: `📫 **Get In Touch with Ritesh Yadav:**\n\n• **Email**: [${contactInfo.email}](mailto:${contactInfo.email})\n• **Phone**: [${contactInfo.phone}](tel:${contactInfo.phone.replace(/[^0-9+]/g, "")})\n• **Location**: ${contactInfo.location}\n• **Status**: ${personalInfo.availableStatus}\n• **LinkedIn**: [linkedin.com/in/riteshyadav16](${socialLinks.linkedin})\n• **GitHub**: [github.com/bhrataRitesh](${socialLinks.github})`,
      actionLink: {
        label: "Open LinkedIn Profile",
        url: socialLinks.linkedin,
      },
      suggestions: ["Download Resume", "Work Experience", "Featured Projects"],
    };
  }

  // 12. GENERAL INTELLIGENT FALLBACK
  return {
    text: `I'm not completely sure about that specific detail, but I'd love to help! You can ask me about:\n\n• Ritesh's **Experience** at Webkul or Refresh Infratech\n• His **Technical Skills** (React, Next.js, Node.js, FastAPI, LLMs)\n• Featured **Projects** (StudyNotion & Shramik)\n• His **Education** (MCA & B.Sc. IT)\n• Or **Download his Resume** below.`,
    suggestions: [
      "About Ritesh",
      "Work Experience",
      "Technical Skills",
      "Featured Projects",
      "Download Resume",
      "Contact Info",
    ],
  };
}
