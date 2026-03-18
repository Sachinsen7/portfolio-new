import LazyImage from "@/components/common/LazyImage";
import { ExternalLink, Github, ArrowRight, Grid3X3 } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons.jsx";
import { useViewTransition } from "@/hooks/useViewTransition";

export default function Projects() {
  const { transitionTo } = useViewTransition();

  return (
    <section
      id="projects"
      className="container mx-auto max-w-4xl px-4 py-12 sm:px-6"
      aria-labelledby="projects-heading"
    >
      <div className="mb-10 flex flex-col items-start gap-3">
        <h2
          id="projects-heading"
          className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
        >
          Featured
        </h2>
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            Selected Projects
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            A focused look at the products, systems, and interfaces I&apos;ve built
            across SaaS, developer tooling, and full-stack applications.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="interactive-surface group rounded-2xl border border-gray-200/80 bg-white/70 p-4 transition-colors duration-200 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 sm:p-5"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border border-gray-200/80 bg-gradient-to-br from-gray-100 to-gray-50 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02] sm:h-32 sm:w-48 sm:aspect-auto md:h-36 md:w-52">
                <LazyImage
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="h-full w-full object-contain p-2 sm:p-3"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-foreground-muted">
                      <span className="rounded-full border border-gray-200 px-2.5 py-1 dark:border-white/10">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>
                    <h4 className="mt-2 text-base font-semibold text-foreground sm:text-lg">
                      {project.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-end gap-2 text-foreground-muted">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="interactive-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-colors duration-200 hover:border-gray-400 hover:text-foreground dark:border-white/10 dark:hover:border-white/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="interactive-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-colors duration-200 hover:border-gray-400 hover:text-foreground dark:border-white/10 dark:hover:border-white/20"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <p className="mb-4 max-w-2xl text-sm leading-relaxed text-foreground-muted">
                  {project.summary || project.description}
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-1.5 text-[11px] text-foreground dark:border-white/10 dark:bg-white/[0.03] sm:text-xs"
                      >
                        <span className="text-foreground-muted">{getTechIcon(tech, "h-3.5 w-3.5")}</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="inline-flex items-center rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-foreground-muted dark:border-white/10">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      transitionTo(`/project/${project.id}`, {
                        isProject: true,
                        projectId: project.id,
                        transitionName: `project-${project.id}`,
                      })
                    }
                    className="interactive-text-link inline-flex w-full items-center justify-between gap-2 text-sm font-medium text-foreground-muted transition-colors duration-200 hover:text-foreground sm:w-auto sm:justify-start"
                    aria-label={`View ${project.title} project details`}
                  >
                    View case study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() =>
            transitionTo("/projects", {
              transitionName: "all-projects",
            })
          }
          className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-5 py-3 text-sm text-foreground transition-colors duration-200 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
        >
          <Grid3X3 className="h-4 w-4 text-foreground-muted" />
          <span>See All Projects</span>
          <ArrowRight className="h-4 w-4 text-foreground-muted" />
        </button>
      </div>
    </section>
  );
}
