"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/portfolioData";
import "./education.css";

export default function Education() {
  return (
    <section id="education" className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My <span className="highlight">Education</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            My academic journey and foundational learning experience.
          </p>
        </motion.div>

        <div className="education-timeline">
          <div className="timeline-line" />
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`education-card glass-card ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot" />
              <span className="edu-period">{edu.period}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-description">{edu.description}</p>
              {edu.highlights && (
                <div className="edu-highlights">
                  {edu.highlights.map((h, i) => (
                    <span key={i} className="edu-highlight-badge">
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
