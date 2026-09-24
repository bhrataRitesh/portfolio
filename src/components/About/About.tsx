"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, statsData, whatIBringData, leetcodeData } from "@/data/portfolioData";
import "./about.css";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += numericPart / steps;
      if (current >= numericPart) {
        current = numericPart;
        clearInterval(timer);
      }
      setDisplayValue(Math.round(current) + suffix);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="stat-card glass-card">
      <span className="stat-value text-accent-gradient">{displayValue}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function WireframeGlobe() {
  return (
    <div className="globe-container">
      <div className="globe-wireframe">
        <div className="globe-ring globe-ring-1" />
        <div className="globe-ring globe-ring-2" />
        <div className="globe-ring globe-ring-3" />
        <div className="globe-ring globe-ring-4" />
        <div className="globe-ring globe-ring-5" />
      </div>
      {whatIBringData.map((item, i) => (
        <div
          key={item}
          className={`globe-badge globe-badge-${i}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            I&apos;m a passionate full-stack developer with a strong foundation in
            modern web technologies, dedicated to creating digital solutions that
            make a real impact.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-summary glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="about-card-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Professional Summary
            </h3>
            <p className="about-text">{personalInfo.summary}</p>
            <p className="about-text">
              Currently exploring advanced backend architectures, cloud services,
              and AI integrations to build the next generation of web applications.
            </p>

            <div className="stats-grid">
              {statsData.map((stat) => (
                <AnimatedCounter
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            <div className="about-resume-box">
              <a
                href="/Ritesh_Yadav_Resume.pdf"
                download="Ritesh_Yadav_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg
                  width="18"
                  height="18"
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
                Download Full Resume (PDF)
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about-bring glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="about-card-title">What I Bring</h3>
            <WireframeGlobe />
          </motion.div>
        </div>

        {/* LeetCode & Problem Solving Showcase */}
        <motion.div
          className="about-leetcode glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <div className="about-leetcode-header">
            <div className="about-leetcode-title-group">
              <div className="about-leetcode-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .349 1.017 5.928 5.928 0 0 0 2.433 2.871l2.365 1.482A5.993 5.993 0 0 0 10.15 21.4c1.398 0 2.743-.487 3.812-1.378l2.091-1.743c.47-.392.536-1.095.145-1.565-.392-.47-1.095-.536-1.565-.145l-2.09 1.743a3.993 3.993 0 0 1-2.542.918c-.934 0-1.831-.326-2.545-.918l-2.365-1.482a3.928 3.928 0 0 1-1.611-1.902 3.527 3.527 0 0 1-.041-1.574 3.266 3.266 0 0 1 .752-1.309l3.854-4.126 5.406-5.788c.414-.444.387-1.144-.06-1.558A1.374 1.374 0 0 0 13.483 0zm-2.88 7.218a1.002 1.002 0 0 0-.709.293L4.99 12.615a1 1 0 0 0 1.414 1.414l4.904-5.104a1 1 0 0 0-.705-1.707zm4.99 3.782h-6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
                </svg>
              </div>
              <div>
                <div className="about-leetcode-title">
                  LeetCode Problem Solving
                  <span className="about-leetcode-badge">Active Solver</span>
                </div>
                <div className="about-leetcode-username">
                  @{leetcodeData.username} • Data Structures & Algorithms
                </div>
              </div>
            </div>

            <a
              href={leetcodeData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="about-leetcode-btn"
            >
              <span>View LeetCode Profile</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V8H8" />
              </svg>
            </a>
          </div>

          <div className="about-leetcode-body">
            <div className="about-leetcode-total">
              <span className="about-leetcode-total-num">
                {leetcodeData.totalSolved}+
              </span>
              <span className="about-leetcode-total-label">Problems Solved</span>
            </div>

            <div className="about-leetcode-stats-wrap">
              <div className="about-leetcode-cards">
                <div className="about-lc-diff-card easy">
                  <div className="about-lc-diff-head">
                    <span>Easy</span>
                    <span style={{ color: "#10b981" }}>
                      {Math.round((leetcodeData.easy / leetcodeData.totalSolved) * 100)}%
                    </span>
                  </div>
                  <div className="about-lc-diff-count">{leetcodeData.easy}</div>
                </div>

                <div className="about-lc-diff-card medium">
                  <div className="about-lc-diff-head">
                    <span>Medium</span>
                    <span style={{ color: "#f59e0b" }}>
                      {Math.round((leetcodeData.medium / leetcodeData.totalSolved) * 100)}%
                    </span>
                  </div>
                  <div className="about-lc-diff-count">{leetcodeData.medium}</div>
                </div>

                <div className="about-lc-diff-card hard">
                  <div className="about-lc-diff-head">
                    <span>Hard</span>
                    <span style={{ color: "#ef4444" }}>
                      {Math.round((leetcodeData.hard / leetcodeData.totalSolved) * 100)}%
                    </span>
                  </div>
                  <div className="about-lc-diff-count">{leetcodeData.hard}</div>
                </div>
              </div>

              <div
                className="about-lc-progress-bar"
                title={`Easy: ${leetcodeData.easy}, Medium: ${leetcodeData.medium}, Hard: ${leetcodeData.hard}`}
              >
                <div
                  className="about-lc-progress-easy"
                  style={{
                    width: `${(leetcodeData.easy / leetcodeData.totalSolved) * 100}%`,
                  }}
                />
                <div
                  className="about-lc-progress-medium"
                  style={{
                    width: `${(leetcodeData.medium / leetcodeData.totalSolved) * 100}%`,
                  }}
                />
                <div
                  className="about-lc-progress-hard"
                  style={{
                    width: `${(leetcodeData.hard / leetcodeData.totalSolved) * 100}%`,
                  }}
                />
              </div>

              <div className="about-leetcode-footer">
                <div>
                  Primary Language:{" "}
                  <span className="about-lc-lang-tag">
                    {leetcodeData.primaryLanguage} ({leetcodeData.primarySolved} Solved)
                  </span>
                </div>
                <span>Focus: Arrays, Trees, Dynamic Programming & Graph Algorithms</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
