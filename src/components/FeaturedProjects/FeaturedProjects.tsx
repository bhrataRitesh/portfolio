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
            >
              <Link
                href={`/projects/${project.slug}`}
                className="featured-card glass-card"
              >
                <div className="featured-card-image">
                  {project.imageUrl && (
                    <div
                      className="featured-bg"
                      style={{
                        backgroundImage: `url(${project.imageUrl})`,
                      }}
                    />
                  )}
                  <div className="featured-overlay" />
                </div>
                <div className="featured-card-content">
                  <div className="featured-card-top">
                    {project.featured && (
                      <span className="featured-badge">⭐ Featured</span>
                    )}
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
                  <h3 className="featured-title">{project.title}</h3>
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
                  <span className="featured-link">
                    View Project
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
                  </span>
                </div>
              </Link>
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
