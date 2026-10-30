import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import LazyImage from "@/components/common/LazyImage";
import Header from "@/components/layout/Header";
import { projectsData } from "@/lib/projectsData";
import { getProjectThumbnail } from "@/lib/utils";
import PageTransition from "@/components/common/PageTransition";
import { useViewTransition } from "@/hooks/useViewTransition";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";

const liveCount = projectsData.filter((project) => project.liveLink).length;

const summaryChips = [`${projectsData.length} projects`, `${liveCount} live`];

const VISIBLE_TECH = 4;

const statusTone = (status = "") => {
  if (/live/i.test(status)) {
    return "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-300";
  }
  if (/develop|progress/i.test(status)) {
    return "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300";
  }
  return "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300";
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const iconLink =
  "interactive-icon inline-flex h-9 w-9 items-center justify-center rounded-sm border border-gray-200 bg-white/82 text-foreground-muted hover:border-gray-300 hover:text-foreground dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20";

export default function AllProjects() {
  const { transitionTo, transitionBack } = useViewTransition();

  const openProject = (project) =>
    transitionTo(`/project/${project.id}`, {
      isProject: true,
      projectId: project.id,
      transitionName: `project-detail-${project.id}`,
    });

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

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-40px" }}
                variants={fadeUp}
                className="mt-8"
              >
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Work
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                  Projects
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                  Products, tools and experiments I have built across SaaS, developer tooling,
                  mobile and full-stack work.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {summaryChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-gray-200 bg-white/75 px-3 py-1 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="container mx-auto max-w-6xl px-4 pb-16 sm:px-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex flex-col overflow-hidden rounded-sm border border-gray-200/80 bg-white/80 transition-colors duration-200 hover:border-accent/40 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="block overflow-hidden border-b border-gray-200/80 bg-gradient-to-br from-gray-100 to-white text-left dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]"
                      aria-label={`Open ${project.title}`}
                    >
                      <LazyImage
                        src={getProjectThumbnail(project.image)}
                        alt={`${project.title} preview`}
                        className="h-40 w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </button>

                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
                        <span
                          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] ${statusTone(project.status)}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-foreground-muted">
                        {project.category} - {project.year}
                      </p>

                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground-muted">
                        {project.summary || project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, VISIBLE_TECH).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-gray-200 bg-gray-50/80 px-2.5 py-1 text-[11px] text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > VISIBLE_TECH && (
                          <span className="rounded-full border border-dashed border-gray-300 px-2.5 py-1 text-[11px] text-foreground-muted dark:border-white/15">
                            +{project.tech.length - VISIBLE_TECH}
                          </span>
                        )}
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                        <button
                          type="button"
                          onClick={() => openProject(project)}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
                        >
                          <span>Case study</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} live demo`}
                              className={iconLink}
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
                              className={iconLink}
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
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
