"use client";

import { useRef } from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectData } from "@/lib/projects";
// Inherits standard styles from the projects.css
// The class names here correspond to the previously established DOM structure.

export default function ProjectCard({ project }: { project: ProjectData }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the background image
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.03}
      gyroscope={true}
      className="project-card-tilt-wrapper"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Link ref={ref} href={`/projects/${project.slug}`} className="project-card glass" style={{ cursor: "pointer", height: "100%", position: "relative", overflow: "hidden" }}>
        
        {/* Parallax 3D Background Image */}
        {project.imageUrl && (
          <motion.div 
            style={{ 
              y: bgY,
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: "-20%",
              left: "-10%",
              right: "-10%",
              bottom: "-20%",
              zIndex: 0,
              opacity: 0.35,
              filter: "brightness(0.8) contrast(1.2)"
            }}
          />
        )}
        
        {/* Overlay gradient to ensure text readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, var(--bg-primary) 0%, rgba(0,0,0,0) 100%)",
          zIndex: 1,
          opacity: 0.8
        }} />

        <div className="project-card-content" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <time dateTime={project.date} className="project-date text-tertiary">
              {new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            {project.liveUrl && (
              <span className="featured-live-badge" style={{ pointerEvents: "none" }}>
                <span className="live-dot" /> Live Demo
              </span>
            )}
          </div>
          <h2>{project.title}</h2>
          <p className="project-desc text-secondary">{project.description}</p>
          
          <div className="project-tech">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-badge">+{project.technologies.length - 3}</span>
            )}
          </div>
        </div>
        <div className="project-hover-effect" style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Read Case Study &rarr;</span>
          {project.liveUrl && (
            <span style={{ color: "var(--accent-primary)", fontWeight: 600, fontSize: "0.85rem" }}>
              Live App ↗
            </span>
          )}
        </div>
      </Link>
    </Tilt>
  );
}
