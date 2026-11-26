"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolioData";
import { usePortfolio } from "@/context/PortfolioContext";
import "./experience.css";

const DOMAIN_FILTERS = [
  "All",
  "Queues & Async",
  "APIs & Connectors",
  "Database Performance",
  "AWS & Testing",
] as const;

type DomainFilter = (typeof DOMAIN_FILTERS)[number];

interface CarBullet {
  title: string;
  category?: string;
  challenge: string;
  action: string;
  result: string;
  tradeOff?: string;
  interviewHook?: string;
}

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState<DomainFilter>("All");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [copiedSummary, setCopiedSummary] = useState(false);

  const { askAssistant, markExplored } = usePortfolio();

  const toggleExpand = (cardKey: string) => {
    const next = !expandedCards[cardKey];
    setExpandedCards((prev) => ({ ...prev, [cardKey]: next }));
    if (next) {
      markExplored("war-story");
    }
  };

  const handleCopyFilteredPitch = async () => {
    const webkulBullets = (experienceData[0]?.carBullets || []) as CarBullet[];
    const matching =
      activeFilter === "All"
        ? webkulBullets
        : webkulBullets.filter((b) => b.category === activeFilter);

    const formatted = [
      `Ritesh Yadav — Webkul Software Highlights (${activeFilter})`,
      ...matching.map(
        (b) => `• ${b.title}: ${b.challenge} -> ${b.action} -> ${b.result}`
      ),
      "Contact: ratohikumar@gmail.com | +91-8434041818",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2000);
    } catch {
      // Ignore clipboard restriction
    }
  };

  return (
    <section id="experience" className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="experience-header-wrapper"
        >
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            Filter achievements by team focus, inspect architectural trade-offs behind each win, or copy tailored notes directly for your hiring team.
          </p>

          {/* Interactive Role-Fit Filter & Copy Bar */}
          <div className="exp-filter-bar">
            <div className="exp-filter-chips" role="tablist" aria-label="Filter experience by engineering domain">
              {DOMAIN_FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === filter}
                  className={`exp-filter-chip ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleCopyFilteredPitch}
              className="exp-copy-pitch-btn"
              title="Copy structured CAR summary for this focus area"
            >
              {copiedSummary ? "✓ Copied Notes for Team" : "Copy Focus Summary"}
            </button>
          </div>
        </motion.div>

        <div className="experience-milestone-list">
          {experienceData.map((exp, index) => {
            const bullets = (exp.carBullets || []) as CarBullet[];
            const filteredBullets =
              activeFilter === "All"
                ? bullets
                : bullets.filter((b) => b.category === activeFilter);

            if (filteredBullets.length === 0) return null;

            return (
              <motion.div
                key={exp.company}
                className="exp-milestone-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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

                  {/* Structured Engineering Impact Grid */}
                  <div className="exp-impact-grid">
                    {filteredBullets.map((car, i) => {
                      const cardKey = `${index}-${car.title}`;
                      const isExpanded = !!expandedCards[cardKey];

                      return (
                        <div
                          key={cardKey}
                          className={`exp-impact-card ${
                            filteredBullets.length === 1 ? "full-width" : ""
                          }`}
                        >
                          <div className="exp-impact-header">
                            <div className="exp-impact-title-row">
                              <span className="exp-impact-index">
                                #{String(i + 1).padStart(2, "0")}
                              </span>
                              <h4 className="exp-impact-title">{car.title}</h4>
                            </div>
                            {car.category && (
                              <span className="exp-cat-tag">{car.category}</span>
                            )}
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

                          {/* Expandable Curiosity / Architectural Trade-off Drawer */}
                          {(car.tradeOff || car.interviewHook) && (
                            <div className="exp-curiosity-section">
                              <button
                                type="button"
                                className="exp-curiosity-toggle"
                                onClick={() => toggleExpand(cardKey)}
                                aria-expanded={isExpanded}
                              >
                                <span>
                                  {isExpanded
                                    ? "Hide Architecture Note"
                                    : "Engineering Trade-off & Call Hook"}
                                </span>
                                <span aria-hidden="true">
                                  {isExpanded ? "−" : "+"}
                                </span>
                              </button>

                              {isExpanded && (
                                <div className="exp-curiosity-drawer">
                                  {car.tradeOff && (
                                    <div className="exp-tradeoff-block">
                                      <strong>Why this approach:</strong>{" "}
                                      {car.tradeOff}
                                    </div>
                                  )}
                                  {car.interviewHook && (
                                    <div className="exp-hook-block">
                                      <strong>Interview prompt:</strong>{" "}
                                      {car.interviewHook}
                                    </div>
                                  )}
                                  <button
                                    type="button"
                                    className="exp-ask-btn"
                                    onClick={() => askAssistant(car.title)}
                                  >
                                    Ask Assistant About This →
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
