import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LazyImage from "@/components/common/LazyImage";
import { ArrowRight, ArrowUpRight, Grid3X3 } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import { getProjectThumbnail } from "@/lib/utils";
import { useViewTransition } from "@/hooks/useViewTransition";

// Homepage stays curated to the strongest work, newest first; the rest live on /projects.
const featuredProjectIds = [11, 12, 0, 1, 2, 3];
const featuredProjects = featuredProjectIds
  .map((id) => projectsData.find((project) => project.id === id))
  .filter(Boolean);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const { transitionTo } = useViewTransition();
  const [hoveredId, setHoveredId] = useState(featuredProjects[0]?.id ?? null);

  const hoveredProject =
    featuredProjects.find((project) => project.id === hoveredId) ?? featuredProjects[0];

  const openProject = (project) =>
    transitionTo(`/project/${project.id}`, {
      isProject: true,
      projectId: project.id,
      transitionName: `project-${project.id}`,
    });

  return (
    <section
      id="projects"
      className="container mx-auto max-w-4xl px-4 py-12 sm:px-6"
      aria-labelledby="projects-heading"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-40px" }}
        variants={fadeUp}
        className="mb-10 flex flex-col items-start gap-3"
      >
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
            across SaaS, developer tooling, and full-stack applications. Hover a
            project to preview it.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
        <div
          className="border-t border-gray-200/80 dark:border-white/10"
          onMouseLeave={() => setHoveredId(featuredProjects[0]?.id ?? null)}
        >
          {featuredProjects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHoveredId(project.id)}
              onFocus={() => setHoveredId(project.id)}
              onClick={() => openProject(project)}
              className="group flex w-full items-center justify-between gap-4 border-b border-gray-200/80 py-5 text-left transition-colors duration-200 dark:border-white/10"
              aria-label={`View ${project.title} project details`}
            >
              <div className="flex min-w-0 items-baseline gap-4">
                <span className="font-tech shrink-0 text-xs text-foreground-muted/60">
                  _{String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h4 className="truncate text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-accent sm:text-xl">
                    {project.title}
                  </h4>
                  <p className="mt-1 truncate text-xs text-foreground-muted sm:text-sm">
                    {project.tech.slice(0, 4).join(" · ")}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-5 w-5 shrink-0 -translate-x-1 text-foreground-muted opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-32 aspect-[3/4] w-full overflow-hidden rounded-sm border border-gray-200/80 bg-gradient-to-br from-gray-100 to-gray-50 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]">
            <AnimatePresence mode="wait">
              {hoveredProject && (
                <motion.div
                  key={hoveredProject.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <LazyImage
                    src={getProjectThumbnail(hoveredProject.image)}
                    alt={`${hoveredProject.title} preview`}
                    className="h-full w-full object-contain p-4"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() =>
            transitionTo("/projects", {
              transitionName: "all-projects",
            })
          }
          className="interactive-surface inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-gray-50/80 px-5 py-3 text-sm text-foreground transition-colors duration-200 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
        >
          <Grid3X3 className="h-4 w-4 text-foreground-muted" />
          <span>See All Projects</span>
          <ArrowRight className="h-4 w-4 text-foreground-muted" />
        </button>
      </div>
    </section>
  );
}
