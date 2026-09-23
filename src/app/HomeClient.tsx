"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/data/portfolioData";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import TechMarquee from "@/components/TechMarquee/TechMarquee";
import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Contact from "@/components/Contact/Contact";
import "./home.css";

interface ProjectData {
  slug: string;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  featured?: boolean;
}

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 14 },
  },
};

export default function HomeClient({ projects }: { projects: ProjectData[] }) {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-wrapper">
      {/* ====== HERO ====== */}
      <section id="home" className="hero-section">
        <div className="bg-glow glow-1" />
        <div className="bg-glow glow-2" />

        <div className="container">
          <div className="hero-grid">
            {/* Left Column */}
            <motion.div
              className="hero-content"
              variants={containerVars}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={itemVars} className="hero-badge">
                <span className="badge-dot" />
                {personalInfo.availableStatus}
              </motion.div>

              <motion.h1 variants={itemVars} className="hero-title">
                Hi, I&apos;m{" "}
                <span className="hero-name">{personalInfo.firstName}</span>
                <span className="hero-role">
                  <TypingEffect words={personalInfo.typingRoles} />
                </span>
              </motion.h1>

              <motion.p variants={itemVars} className="hero-description">
                {personalInfo.bio}
              </motion.p>

              <motion.div variants={itemVars} className="hero-focus">
                <span className="hero-focus-label">Currently Focused On</span>
                {personalInfo.currentFocus.map((item) => (
                  <span key={item} className="focus-tag">
                    {item}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={itemVars} className="hero-cta">
                <a
                  href="#projects"
                  className="btn btn-primary"
                  onClick={(e) => handleScrollToSection(e, "projects")}
                >
                  View Projects →
                </a>
                <a
                  href="/Ritesh_Yadav_Resume.pdf"
                  download="Ritesh_Yadav_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-resume-cta"
                  title="Download Resume PDF"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Resume PDF
                </a>
                <a
                  href="#contact"
                  className="btn btn-secondary"
                  onClick={(e) => handleScrollToSection(e, "contact")}
                >
                  Get In Touch
                </a>
              </motion.div>

              <motion.div variants={itemVars} className="hero-social">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href={socialLinks.email}
                  className="social-icon"
                  aria-label="Email"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column — Code Window Illustration */}
            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="hero-illustration">
                <div className="hero-code-window">
                  <div className="code-window-header">
                    <span className="code-dot red" />
                    <span className="code-dot yellow" />
                    <span className="code-dot green" />
                  </div>
                  <div className="code-window-body">
                    <span className="code-line">
                      <span className="code-keyword">const</span>{" "}
                      <span className="code-variable">developer</span>{" "}
                      <span className="code-bracket">=</span>{" "}
                      <span className="code-bracket">{"{"}</span>
                    </span>
                    <span className="code-line">
                      {"  "}
                      <span className="code-variable">name</span>:{" "}
                      <span className="code-string">&quot;{personalInfo.name}&quot;</span>,
                    </span>
                    <span className="code-line">
                      {"  "}
                      <span className="code-variable">role</span>:{" "}
                      <span className="code-string">&quot;{personalInfo.title}&quot;</span>,
                    </span>
                    <span className="code-line">
                      {"  "}
                      <span className="code-variable">skills</span>:{" "}
                      <span className="code-bracket">[</span>
                      <span className="code-string">&quot;React&quot;</span>,{" "}
                      <span className="code-string">&quot;Next.js&quot;</span>,{" "}
                      <span className="code-string">&quot;FastAPI&quot;</span>,{" "}
                      <span className="code-string">&quot;LLMs&quot;</span>
                      <span className="code-bracket">]</span>,
                    </span>
                    <span className="code-line">
                      {"  "}
                      <span className="code-variable">passion</span>:{" "}
                      <span className="code-string">&quot;Building scalable products&quot;</span>,
                    </span>
                    <span className="code-line">
                      {"  "}
                      <span className="code-function">hireable</span>:{" "}
                      <span className="code-keyword">true</span>,
                    </span>
                    <span className="code-line">
                      <span className="code-bracket">{"}"}</span>;
                    </span>
                    <span className="code-line">&nbsp;</span>
                    <span className="code-line">
                      <span className="code-comment">
                        {"// Let's build something amazing together"}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="hero-float-badge">{"<code />"}</div>
                <div className="hero-float-badge">React & Next.js</div>
                <div className="hero-float-badge">LLMs & Vector DB</div>
                <div className="hero-float-badge">E-Commerce</div>
                <div className="hero-status-badge">🟢 Open for Opportunities</div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TECH MARQUEE ====== */}
      <TechMarquee />

      {/* ====== ABOUT ====== */}
      <About />

      {/* ====== EDUCATION ====== */}
      <Education />

      {/* ====== SKILLS ====== */}
      <Skills />

      {/* ====== EXPERIENCE ====== */}
      <Experience />

      {/* ====== FEATURED PROJECTS ====== */}
      <FeaturedProjects projects={projects} />

      {/* ====== CONTACT ====== */}
      <Contact />
    </div>
  );
}
