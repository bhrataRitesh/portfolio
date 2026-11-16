"use client";

import Link from "next/link";
import { ProjectData } from "@/lib/projects";
import Perspective3DCard from "@/components/UI3D/Perspective3DCard";

export default function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <Perspective3DCard
      className="project-card-wrapper"
      maxTilt={6}
      scale={1.015}
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="project-card"
        style={{ cursor: "pointer", height: "100%", position: "relative", display: "flex", flexDirection: "column" }}
      >
        <div className="project-card-content">
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
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tech-badge">+{project.technologies.length - 4}</span>
            )}
          </div>
        </div>

        <div className="project-hover-effect">
          <span>Read Case Study &rarr;</span>
          {project.liveUrl && (
            <span style={{ color: "var(--accent-primary)", fontWeight: 600, fontSize: "0.85rem" }}>
              Live App ↗
            </span>
          )}
        </div>
      </Link>
    </Perspective3DCard>
  );
}
