import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock3,
  ExternalLink,
  FolderOpen,
  Github,
  Layers3,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import LazyImage from "@/components/common/LazyImage";
import Header from "@/components/layout/Header";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons.jsx";
import PageTransition from "@/components/common/PageTransition";
import { useViewTransition } from "@/hooks/useViewTransition";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";

const uniqueCategories = new Set(projectsData.map((project) => project.category)).size;
const liveProjects = projectsData.filter((project) => project.status === "Live & Maintained").length;

const introMetrics = [
  { label: "Projects", value: `${projectsData.length}`, icon: FolderOpen },
  { label: "Categories", value: `${uniqueCategories}`, icon: Layers3 },
  { label: "Live now", value: `${liveProjects}`, icon: Sparkles },
];

export default function AllProjects() {
  const { transitionTo, transitionBack } = useViewTransition();

  return (
    <ViewTransitionWrapper
      transitionKey="all-projects-page"
      fallbackAnimation="slide"
      className="min-h-screen"
    >
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <div className="page-backdrop" aria-hidden="true" />

          <Header />

          <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
            <section className="container mx-auto max-w-6xl px-4 pb-8 sm:px-6">
              <button
                type="button"
                onClick={() => transitionBack({ transitionName: "back-to-home" })}
                className="interactive-text-link inline-flex items-center gap-2 text-sm text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to home</span>
              </button>

              <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_380px]">
                <div className="max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Project Archive
                  </p>
                  <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
                    A cleaner view of the products, systems, and experiments I have built.
                  </h1>
                  <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
                    This page collects the broader body of work behind the portfolio. It is not
                    just a gallery of thumbnails. It is a map of the kinds of problems I like
                    solving across SaaS, developer tools, mobile apps, and full-stack systems.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {introMetrics.map((metric) => {
                      const Icon = metric.icon;

                      return (
                        <div
                          key={metric.label}
                          className="rounded-sm border border-gray-200/80 bg-white/75 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.03]"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
                              {metric.label}
                            </p>
                            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-200 bg-gray-50/80 dark:border-white/10 dark:bg-white/[0.04]">
                              <Icon className="h-4 w-4 text-foreground-muted" />
                            </span>
                          </div>
                          <p className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">
                            {metric.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-sm border border-accent/30 bg-gradient-to-br from-accent/10 via-white to-accent/5 p-6 shadow-[0_18px_50px_rgba(29,185,84,0.12)] dark:border-accent/20 dark:from-accent/10 dark:via-white/[0.03] dark:to-accent/5">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
                  <p className="text-[11px] uppercase tracking-[0.18em] text-accent dark:text-accent">
                    Design direction
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-foreground">
                    Boxy, calm, and information-rich.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                    I reshaped this page to match the rest of the website more closely: less glossy
                    card noise, stronger structure, and a more editorial reading flow.
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {[
                      "Project cards now use the same square geometry as the rest of the portfolio.",
                      "Metadata is clearer, so every project reads faster before you open the case study.",
                      "The page feels richer through hierarchy, not extra decoration.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-sm border border-white/70 bg-white/70 px-3.5 py-3 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.04]"
                      >
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto max-w-6xl px-4 pb-16 sm:px-6">
              <div className="grid gap-5 lg:grid-cols-2">
                {projectsData.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: index * 0.05 }}
                    className="group relative overflow-hidden rounded-sm border border-gray-200/80 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="border-b border-gray-200/80 px-5 py-4 dark:border-white/10 sm:px-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-sm border border-gray-200 bg-gray-50/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground-muted dark:border-white/10 dark:bg-white/[0.04]">
                          {project.category}
                        </span>
                        <span className="rounded-sm border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-accent dark:border-accent/30 dark:bg-accent/10 dark:text-accent">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="overflow-hidden rounded-sm border border-gray-200/80 bg-gradient-to-br from-gray-100 to-white dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]">
                        <LazyImage
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="h-56 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02] sm:h-64"
                        />
                      </div>

                      <div className="mt-5 flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h2 className="text-2xl font-semibold text-foreground">
                              {project.title}
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                              {project.summary || project.description}
                            </p>
                          </div>

                          <div className="hidden shrink-0 items-center gap-2 text-foreground-muted sm:flex">
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} live demo`}
                                className="interactive-icon inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gray-200 bg-white/82 hover:border-gray-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} GitHub repository`}
                                className="interactive-icon inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gray-200 bg-white/82 hover:border-gray-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>

                        <div className="grid gap-3 border-y border-gray-200/80 py-4 dark:border-white/10 sm:grid-cols-3">
                          <div className="rounded-sm border border-gray-200/80 bg-gray-50/80 px-3.5 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                            <div className="flex items-center gap-2 text-foreground-muted">
                              <Calendar className="h-3.5 w-3.5" />
                              <span className="text-[11px] uppercase tracking-[0.16em]">Year</span>
                            </div>
                            <p className="mt-2 text-sm font-medium text-foreground">{project.year}</p>
                          </div>

                          <div className="rounded-sm border border-gray-200/80 bg-gray-50/80 px-3.5 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                            <div className="flex items-center gap-2 text-foreground-muted">
                              <Clock3 className="h-3.5 w-3.5" />
                              <span className="text-[11px] uppercase tracking-[0.16em]">Duration</span>
                            </div>
                            <p className="mt-2 text-sm font-medium text-foreground">{project.duration}</p>
                          </div>

                          <div className="rounded-sm border border-gray-200/80 bg-gray-50/80 px-3.5 py-3 dark:border-white/10 dark:bg-white/[0.04]">
                            <div className="flex items-center gap-2 text-foreground-muted">
                              <FolderOpen className="h-3.5 w-3.5" />
                              <span className="text-[11px] uppercase tracking-[0.16em]">Role</span>
                            </div>
                            <p className="mt-2 text-sm font-medium text-foreground">{project.role}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-foreground">Stack snapshot</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.slice(0, 5).map((tech) => (
                              <div
                                key={tech}
                                className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-white/85 px-3 py-2 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.04]"
                              >
                                <span className="text-foreground-muted">
                                  {getTechIcon(tech, "h-5 w-5")}
                                </span>
                                <span className="font-tech text-[0.76rem]">{tech}</span>
                              </div>
                            ))}
                            {project.tech.length > 5 && (
                              <span className="inline-flex items-center rounded-sm border border-gray-200 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-foreground-muted dark:border-white/10">
                                +{project.tech.length - 5} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-2 text-foreground-muted sm:hidden">
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} live demo`}
                                className="interactive-icon inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gray-200 bg-white/82 hover:border-gray-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} GitHub repository`}
                                className="interactive-icon inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gray-200 bg-white/82 hover:border-gray-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              transitionTo(`/project/${project.id}`, {
                                isProject: true,
                                projectId: project.id,
                                transitionName: `project-detail-${project.id}`,
                              })
                            }
                            className="interactive-surface inline-flex w-full items-center justify-between gap-2 rounded-sm border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm font-medium text-foreground hover:border-gray-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 sm:w-auto"
                          >
                            <span>Open case study</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </PageTransition>
    </ViewTransitionWrapper>
  );
}
