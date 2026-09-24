"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "./featured-projects.css";

interface FeaturedProjectsProps {
  projects: Array<{
    slug: string;
    title: string;
    date: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    featured?: boolean;
    liveUrl?: string;
    githubUrl?: string;
  }>;
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h2>
          <div className="section-underline" />
          <p className="section-subtitle">
            A selection of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="featured-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="featured-card glass-card"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="featured-card-image"
                tabIndex={-1}
                aria-label={project.title}
              >
                {project.imageUrl && (
                  <div
                    className="featured-bg"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                    }}
                  />
                )}
                <div className="featured-overlay" />
              </Link>
              <div className="featured-card-content">
                <div className="featured-card-top">
                  <div className="featured-badges">
                    {project.featured && (
                      <span className="featured-badge">⭐ Featured</span>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-live-badge"
                        title="Open live web app"
                      >
                        <span className="live-dot" />
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                  <time
                    dateTime={project.date}
                    className="featured-date"
                  >
                    {new Date(project.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </time>
                </div>
                <h3 className="featured-title">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="featured-desc">{project.description}</p>
                <div className="featured-tech">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <div className="featured-card-footer">
                  <Link href={`/projects/${project.slug}`} className="featured-link">
                    <span>View Case Study</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-live-btn"
                    >
                      <span>Live Demo</span>
                      <svg
                        width="13"
                        height="13"
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
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="featured-view-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/projects" className="btn btn-secondary">
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
