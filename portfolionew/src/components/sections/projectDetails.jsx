import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Tag,
  Code,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  User,
  CheckCircle,
  Clock3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/common/ImageCarousel";
import { SlideTransition } from "@/components/common/PageTransition";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons.jsx";
import { useViewTransition } from "@/hooks/useViewTransition";

function DetailCard({ title, icon: Icon, children }) {
  return (
    <section className="rounded-2xl border border-gray-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-foreground-muted" />
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const { transitionTo } = useViewTransition();

  const project = projectsData.find((p) => p.id === Number.parseInt(id, 10));
  const currentIndex = projectsData.findIndex((p) => p.id === Number.parseInt(id, 10));
  const nextProject = projectsData[currentIndex + 1];
  const prevProject = projectsData[currentIndex - 1];

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--background)] pt-10 text-[var(--foreground)]">
        <section className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200/80 bg-white/70 p-8 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <h1 className="mb-3 text-xl font-semibold">Project Not Found</h1>
            <p className="mb-6 text-sm text-foreground-muted">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button
              onClick={() => transitionTo("/", { transitionName: "back-to-home" })}
              variant="outline"
              className="border-gray-200 bg-gray-50/80 text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <SlideTransition>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <section
          className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8"
          aria-labelledby="project-heading"
        >
          <div className="mb-6 flex items-center justify-between gap-3">
            <Button
              onClick={() => transitionTo("/", { transitionName: "back-to-home" })}
              variant="outline"
              className="border-gray-200 bg-gray-50/80 text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>

            <div className="flex items-center gap-2">
              {prevProject && (
                <button
                  type="button"
                  onClick={() =>
                    transitionTo(`/project/${prevProject.id}`, {
                      isProject: true,
                      projectId: prevProject.id,
                      transitionName: `project-${prevProject.id}`,
                    })
                  }
                  className="interactive-icon inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50/80 text-foreground-muted hover:border-gray-400 hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  title={`Previous: ${prevProject.title}`}
                  aria-label={`Previous project: ${prevProject.title}`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {nextProject && (
                <button
                  type="button"
                  onClick={() =>
                    transitionTo(`/project/${nextProject.id}`, {
                      isProject: true,
                      projectId: nextProject.id,
                      transitionName: `project-${nextProject.id}`,
                    })
                  }
                  className="interactive-icon inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50/80 text-foreground-muted hover:border-gray-400 hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  title={`Next: ${nextProject.title}`}
                  aria-label={`Next project: ${nextProject.title}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <header className="mb-8 rounded-2xl border border-gray-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-foreground-muted">
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1 dark:border-white/10">
                <Tag className="h-3 w-3" />
                {project.category}
              </span>
              <span className="rounded-full border border-gray-200 px-2.5 py-1 dark:border-white/10">
                {project.year}
              </span>
              <span className="rounded-full border border-gray-200 px-2.5 py-1 dark:border-white/10">
                {project.status}
              </span>
            </div>

            <h1 id="project-heading" className="text-2xl font-semibold text-foreground sm:text-3xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:text-base">
              {project.summary}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
                <Clock3 className="h-4 w-4" />
                {project.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
                <Users className="h-4 w-4" />
                {project.team}
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
                <User className="h-4 w-4" />
                {project.role}
              </span>
            </div>
          </header>

          <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200/80 bg-white/70 p-3 dark:border-white/10 dark:bg-white/[0.03]">
            <ImageCarousel images={[project.image]} projectTitle={project.title} />
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
            >
              <ExternalLink className="h-4 w-4 text-foreground-muted" />
              Live demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
            >
              <Github className="h-4 w-4 text-foreground-muted" />
              Source code
            </a>
          </div>

          <div className="grid gap-6">
            <DetailCard title="Technologies & Tools" icon={Code}>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  >
                    <span className="text-foreground-muted">{getTechIcon(tech, "h-4 w-4")}</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </DetailCard>

            <DetailCard title="Overview" icon={Tag}>
              <div className="space-y-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                <p>{project.description}</p>
                <p>{project.fullDescription}</p>
              </div>
            </DetailCard>

            <DetailCard title="Key Features" icon={CheckCircle}>
              <div className="grid gap-3 md:grid-cols-2">
                {project.features.slice(0, 8).map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-gray-200 bg-gray-50/70 p-3 text-sm leading-relaxed text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <div className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </DetailCard>

            {project.challenges && (
              <DetailCard title="Technical Challenges" icon={Code}>
                <div className="space-y-3">
                  {project.challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className="rounded-xl border border-gray-200 bg-gray-50/70 p-3 text-sm text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      {challenge}
                    </div>
                  ))}
                </div>
              </DetailCard>
            )}

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <DetailCard title="Project Timeline" icon={Calendar}>
                <div className="space-y-3">
                  {project.timeline.map((phase) => (
                    <div
                      key={`${phase.phase}-${phase.duration}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50/70 p-3 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            phase.status === "completed" ? "bg-green-500" : "bg-gray-400"
                          }`}
                        />
                        <span className="text-sm text-foreground">{phase.phase}</span>
                      </div>
                      <span className="text-xs text-foreground-muted">{phase.duration}</span>
                    </div>
                  ))}
                </div>
              </DetailCard>

              <DetailCard title="Project Information" icon={Users}>
                <div className="space-y-3 text-sm text-foreground-muted">
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
                    <span>Team</span>
                    <span className="text-foreground">{project.team}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
                    <span>Role</span>
                    <span className="text-foreground">{project.role}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
                    <span>Status</span>
                    <span className="text-foreground">{project.status}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
                    <span>Duration</span>
                    <span className="text-foreground">{project.duration}</span>
                  </div>
                </div>
              </DetailCard>
            </div>
          </div>
        </section>
      </div>
    </SlideTransition>
  );
}
