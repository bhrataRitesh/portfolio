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

        {(projectData.liveUrl || projectData.githubUrl) && (
          <div className="project-actions">
            {projectData.liveUrl && (
              <a
                href={projectData.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Launch Live App ↗
              </a>
            )}
            {projectData.githubUrl && (
              <a
                href={projectData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                View on GitHub
              </a>
            )}
          </div>
        )}
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
        {projectData.liveUrl && (
          <a
            href={projectData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Launch Live App ↗
          </a>
        )}
      </div>
    </article>
  );
}
