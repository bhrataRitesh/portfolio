import Link from "next/link";
import { getProjectData, getSortedProjectsData } from "@/lib/projects";
import "./project.css";

// Generate static params for all project slugs at build time
export async function generateStaticParams() {
  const projects = getSortedProjectsData();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const projectData = await getProjectData(resolvedParams.slug);

  return (
    <article className="project-detail-wrapper container animate-fade-in">
      <header className="project-header">
        <h1 className="project-title text-gradient">{projectData.title}</h1>
        
        <div className="project-meta text-secondary">
          <time dateTime={projectData.date}>
            {new Date(projectData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>

        <div className="project-tech-stack">
          {projectData.technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </header>

      <div className="project-content glass">
        <div 
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml || '' }} 
        />
      </div>

      <div className="project-footer">
        <Link href="/projects" className="btn btn-secondary">
          &larr; Back to Projects
        </Link>
      </div>
    </article>
  );
}
