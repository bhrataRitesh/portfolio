"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolioData";
import Perspective3DCard from "@/components/UI3D/Perspective3DCard";
import "./experience.css";

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="experience-header-wrapper"
        >
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            Hands-on software engineering experience architecting distributed queue pipelines, high-volume marketplace APIs, and resilient cloud backend architectures.
          </p>
        </motion.div>

        <div className="experience-milestone-list">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="exp-milestone-container"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Milestone Track (Rail + Node) */}
              <div className="exp-milestone-rail" aria-hidden="true">
                <div className="exp-milestone-node">
                  <span className="exp-milestone-pulse" />
                </div>
                {index < experienceData.length - 1 && (
                  <div className="exp-milestone-line" />
                )}
              </div>

              {/* Milestone Content */}
              <div className="exp-milestone-content">
                {/* Company Header Block */}
                <div className="exp-company-header-card card">
                  <div className="exp-company-header-top">
                    <div>
                      <span className="exp-period-pill">{exp.period}</span>
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-company-meta">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--accent-primary)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        <span className="exp-company-name">{exp.company}</span>
                        {exp.location && (
                          <span className="exp-company-location">
                            • {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="exp-overview-text">{exp.description}</p>
                  )}

                  {/* Core Technologies Used */}
                  <div className="exp-technologies-wrapper">
                    <span className="exp-tech-label">Stack:</span>
                    <div className="exp-tech-tags">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Structured Engineering Impact Grid (2-column responsive grid) */}
                {exp.carBullets && exp.carBullets.length > 0 && (
                  <div className="exp-impact-grid">
                    {exp.carBullets.map((car, i) => (
                      <Perspective3DCard
                        key={i}
                        maxTilt={3.5}
                        scale={1.006}
                        className={`exp-impact-card ${
                          exp.carBullets && exp.carBullets.length === 1
                            ? "full-width"
                            : ""
                        }`}
                      >
                        <div className="exp-impact-header">
                          <span className="exp-impact-index">
                            #{String(i + 1).padStart(2, "0")}
                          </span>
                          <h4 className="exp-impact-title">{car.title}</h4>
                        </div>
                        <div className="exp-impact-body">
                          <div className="car-row car-challenge">
                            <span className="car-badge">Context</span>
                            <p className="car-text">{car.challenge}</p>
                          </div>
                          <div className="car-row car-action">
                            <span className="car-badge">Action</span>
                            <p className="car-text">{car.action}</p>
                          </div>
                          <div className="car-row car-result">
                            <span className="car-badge">Result</span>
                            <p className="car-text">{car.result}</p>
                          </div>
                        </div>
                      </Perspective3DCard>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
