"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeSandbox, setActiveSandbox] = useState<{ title: string; url: string } | null>(null);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Close sandbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSandbox(null);
      }
    };
    if (activeSandbox) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSandbox]);

  const openSandbox = (title: string, url: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIframeLoading(true);
    setActiveSandbox({ title, url });
  };

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
            A selection of my recent full-stack applications and live deployments.
          </p>
        </motion.div>

        <div className="featured-grid">
          {projects.map((project, index) => {
            const displayUrl = project.liveUrl
              ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
              : project.githubUrl
              ? project.githubUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
              : "github.com/bhrataRitesh";

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="featured-card glass-card"
              >
                {/* Browser Mockup Image Container */}
                <div className="featured-card-browser">
                  {/* macOS Top Chrome Header */}
                  <div className="browser-top-bar">
                    <div className="browser-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="browser-url-pill">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span className="browser-url-text">{displayUrl}</span>
                    </div>
                    {project.liveUrl ? (
                      <button
                        type="button"
                        onClick={(e) => openSandbox(project.title, project.liveUrl!, e)}
                        className="browser-live-tag"
                        title="Open interactive sandbox"
                      >
                        <span className="pulse-dot" /> Live Embed
                      </button>
                    ) : project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="browser-github-tag"
                        title="View GitHub Repository"
                      >
                        GitHub ↗
                      </a>
                    ) : (
                      <span className="browser-dummy-space" />
                    )}
                  </div>

                  {/* Visual Screenshot / Preview Area */}
                  <div className="featured-card-image-box">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="featured-card-image-link"
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

                    {/* Hover Action Overlay */}
                    <div className="featured-image-hover-overlay">
                      {project.liveUrl ? (
                        <button
                          type="button"
                          className="btn-overlay-interactive"
                          onClick={(e) => openSandbox(project.title, project.liveUrl!, e)}
                        >
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
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          <span>Interactive Live Sandbox</span>
                        </button>
                      ) : project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-overlay-interactive"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                          <span>Explore on GitHub ↗</span>
                        </a>
                      ) : null}
                      <Link href={`/projects/${project.slug}`} className="btn-overlay-study">
                        <span>View Details →</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="featured-card-content">
                  <div className="featured-card-top">
                    <div className="featured-badges">
                      {project.featured && (
                        <span className="featured-badge">⭐ Featured</span>
                      )}
                      {project.liveUrl && (
                        <button
                          type="button"
                          onClick={(e) => openSandbox(project.title, project.liveUrl!, e)}
                          className="featured-live-badge"
                          title="Test live app inside interactive sandbox"
                        >
                          <span className="live-dot" />
                          Live Interactive ⚡
                        </button>
                      )}
                    </div>
                    <time dateTime={project.date} className="featured-date">
                      {new Date(project.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </time>
                  </div>

                  <h3 className="featured-title">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
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

                    <div className="featured-card-actions">
                      {project.liveUrl ? (
                        <>
                          <button
                            type="button"
                            onClick={(e) => openSandbox(project.title, project.liveUrl!, e)}
                            className="featured-sandbox-btn"
                            title="Interactive Live Sandbox"
                          >
                            <span>Live Embed</span>
                            <span className="pulse-dot" />
                          </button>

                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="featured-live-btn"
                            title="Open in new window"
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
                        </>
                      ) : project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="featured-github-btn"
                          title="View Source on GitHub"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                          <span>GitHub ↗</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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

      {/* Interactive Live Embed Modal Sandbox */}
      <AnimatePresence>
        {activeSandbox && (
          <motion.div
            className="sandbox-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveSandbox(null)}
          >
            <motion.div
              className="sandbox-modal-window"
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sandbox Top Chrome */}
              <div className="sandbox-header">
                <div className="sandbox-dots">
                  <button
                    type="button"
                    className="sandbox-dot sandbox-dot-red"
                    onClick={() => setActiveSandbox(null)}
                    title="Close Sandbox"
                  />
                  <span className="sandbox-dot sandbox-dot-yellow" />
                  <span className="sandbox-dot sandbox-dot-green" />
                </div>

                <div className="sandbox-address-bar">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="sandbox-url-text">{activeSandbox.url}</span>
                  <span className="sandbox-live-pill">
                    <span className="pulse-dot" /> LIVE
                  </span>
                </div>

                <div className="sandbox-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setIframeLoading(true);
                      const ifr = document.getElementById("sandbox-active-iframe") as HTMLIFrameElement;
                      if (ifr) ifr.src = ifr.src;
                    }}
                    className="sandbox-action-btn"
                    title="Reload page"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 4v6h-6" />
                      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                    </svg>
                  </button>
                  <a
                    href={activeSandbox.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sandbox-action-btn"
                    title="Open full site in new tab"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                  <button
                    type="button"
                    className="sandbox-close-btn"
                    onClick={() => setActiveSandbox(null)}
                    title="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Sandbox iFrame Area */}
              <div className="sandbox-iframe-container">
                {iframeLoading && (
                  <div className="sandbox-loading-overlay">
                    <div className="sandbox-spinner" />
                    <p className="sandbox-loading-text">
                      Connecting to <strong>{activeSandbox.title}</strong> live deployment...
                    </p>
                  </div>
                )}
                <iframe
                  id="sandbox-active-iframe"
                  src={activeSandbox.url}
                  title={activeSandbox.title}
                  className="sandbox-iframe"
                  onLoad={() => setIframeLoading(false)}
                  allow="camera; microphone; geolocation"
                />
              </div>

              {/* Sandbox Footer Toolbar */}
              <div className="sandbox-footer">
                <div className="sandbox-footer-tip">
                  <span className="tip-badge">Interactive Mode</span>
                  <span>You can search, click artisans, test workflows, and scroll through the live web application.</span>
                </div>
                <a
                  href={activeSandbox.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sandbox-footer-link"
                >
                  Open in Browser ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
