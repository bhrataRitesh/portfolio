"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolioData";
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
            <span className="highlight">Experience</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            Professional software engineering experience building distributed architectures, asynchronous event queues, and high-volume marketplace integrations.
          </p>
        </motion.div>

        <div className="experience-timeline">
          <div className="exp-timeline-line" />
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`exp-card card ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="exp-timeline-dot">
                <span className="exp-dot-inner" />
              </div>
              <span className="exp-period">{exp.period}</span>
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">
                {exp.company} {exp.location ? `• ${exp.location}` : ""}
              </p>
              {exp.description && (
                <p className="exp-description">{exp.description}</p>
              )}

              {/* CAR Structured Breakdown */}
              {exp.carBullets && exp.carBullets.length > 0 ? (
                <div className="exp-car-list">
                  {exp.carBullets.map((car, i) => (
                    <div key={i} className="exp-car-card">
                      <div className="exp-car-header">
                        <span className="exp-car-index">0{i + 1}</span>
                        <h4 className="exp-car-title">{car.title}</h4>
                      </div>
                      <div className="exp-car-body">
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
                    </div>
                  ))}
                </div>
              ) : (
                exp.bullets &&
                exp.bullets.length > 0 && (
                  <ul className="exp-bullets">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="exp-bullet-item">
                        <span className="bullet-point">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )
              )}

              <div className="exp-technologies">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
