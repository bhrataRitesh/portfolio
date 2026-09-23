"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo, statsData, whatIBringData } from "@/data/portfolioData";
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
      </div>
    </section>
  );
}
