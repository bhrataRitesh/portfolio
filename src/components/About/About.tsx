"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, statsData, capabilitiesMatrix } from "@/data/portfolioData";
import { useLeetCode } from "@/hooks/useLeetCode";
import LeetCodeShowcase from "@/components/About/LeetCodeShowcase";
import Perspective3DCard from "@/components/UI3D/Perspective3DCard";
import "./about.css";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const isNumeric = /^([0-9]+(?:\.[0-9]+)?)([%+]?)$/.test(value);
  const [displayValue, setDisplayValue] = useState(() => (isNumeric ? "0" : value));

  useEffect(() => {
    if (!isInView || !isNumeric) return;

    const match = value.match(/^([0-9]+(?:\.[0-9]+)?)([%+]?)$/);
    if (!match) return;

    const targetNum = parseFloat(match[1]);
    const suffix = match[2] || "";
    const isDecimal = match[1].includes(".");
    const decimalPlaces = isDecimal ? (match[1].split(".")[1]?.length || 1) : 0;

    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += targetNum / steps;
      if (current >= targetNum) {
        current = targetNum;
        clearInterval(timer);
      }
      const formatted = isDecimal ? current.toFixed(decimalPlaces) : Math.round(current).toString();
      setDisplayValue(`${formatted}${suffix}`);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, isNumeric]);

  return (
    <div ref={ref} className="stat-card">
      <span className="stat-value">{displayValue}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function CapabilitiesMatrix() {
  return (
    <div className="capabilities-matrix">
      {capabilitiesMatrix.map((item, idx) => (
        <div key={idx} className="capability-matrix-card">
          <div className="capability-matrix-head">
            <span className="capability-matrix-category">{item.category}</span>
            <div className="capability-matrix-techs">
              {item.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="capability-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h4 className="capability-matrix-title">{item.title}</h4>
          <p className="capability-matrix-impact">{item.impact}</p>
        </div>
      ))}
      <div className="capabilities-matrix-footer">
        <span className="matrix-footer-label">Core Engineering Strengths:</span>
        <span className="matrix-footer-pill">115+ LeetCode DSA</span>
        <span className="matrix-footer-pill">PM2 Root Cause Analysis</span>
        <span className="matrix-footer-pill">SOLID & LLD</span>
      </div>
    </div>
  );
}

export default function About() {
  const { profile: leetcodeProfile, isLoading: leetcodeLoading } = useLeetCode();

  const dynamicStats = statsData.map((stat) =>
    stat.label === "LeetCode Solved"
      ? { ...stat, value: `${leetcodeProfile.totalSolved}+` }
      : stat
  );

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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Perspective3DCard maxTilt={5} scale={1.01} className="about-summary card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
                {dynamicStats.map((stat) => (
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
            </Perspective3DCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Perspective3DCard maxTilt={5} scale={1.01} className="about-bring card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <h3 className="about-card-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                Core Technical Capabilities
              </h3>
              <CapabilitiesMatrix />
            </Perspective3DCard>
          </motion.div>
        </div>

        {/* LeetCode & Problem Solving Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
        >
          <LeetCodeShowcase profile={leetcodeProfile} isLoading={leetcodeLoading} />
        </motion.div>
      </div>
    </section>
  );
}
