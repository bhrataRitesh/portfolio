import { getSortedProjectsData } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import "./projects.css";

export default function Projects() {
  const allProjectsData = getSortedProjectsData();

  return (
    <div className="projects-wrapper container">
      <header className="projects-header animate-fade-in">
        <h1 className="text-accent-gradient">My Work</h1>
        <p className="text-secondary">
          Explore my latest projects, experiments, and open-source contributions.
        </p>
      </header>

      <div className="projects-grid">
        {allProjectsData.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
