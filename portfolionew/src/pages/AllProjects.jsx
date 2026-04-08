import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Clock } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import Header from "@/components/layout/Header";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons.jsx";
import PageTransition from "@/components/common/PageTransition";
import ScrollProgress from "@/components/common/ScrollProgress";
import { motion } from "framer-motion";
import { useViewTransition } from "@/hooks/useViewTransition";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";



export default function AllProjects() {
  const { transitionTo, transitionBack } = useViewTransition();
  return (
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <ScrollProgress />
          <div className="page-backdrop" aria-hidden="true" />
          <div className="light-dot-pattern" aria-hidden="true" />

          <Header />

          <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <button
                onClick={() => transitionBack({ transitionName: 'back-to-home' })}
                className="interactive-text-link inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>

              <div className="text-start mb-8">
                <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl">
                  All Projects
                </h1>
                <p className="max-w-2xl text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                  A comprehensive collection of my work, side projects, and contributions to the development community
                </p>


              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative bg-white/95 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200/60 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:bg-white dark:hover:bg-gray-900/95 transition-all duration-300 shadow-lg hover:shadow-2xl dark:shadow-gray-900/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-800">
                    <LazyImage
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-48 w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:p-4"
                    />

                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Action buttons */}
                    <div className="absolute right-3 top-3 flex gap-2 opacity-100 transition-all duration-300 sm:right-4 sm:top-4 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive-icon p-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive-icon p-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                        aria-label="View source code"
                      >
                        <Github className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                      </a>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 dark:text-gray-300">{project.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 sm:p-6">
                    {/* Header */}
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="mb-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 line-clamp-1 dark:text-gray-100 dark:group-hover:text-blue-400 sm:text-xl">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400 sm:gap-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {project.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/50 font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((tech) => (
                          <div
                            key={tech}
                            className="interactive-surface flex items-center gap-1 bg-gray-100 dark:bg-gray-800/60 px-2 py-1 rounded-lg text-xs text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700/60 transition-colors"
                          >
                            {getTechIcon(tech, "h-3 w-3")}
                            <span className="font-medium">{tech}</span>
                          </div>
                        ))}
                        {project.tech.length > 4 && (
                          <div className="flex items-center px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                            +{project.tech.length - 4} more
                          </div>
                        )}
                      </div>
                    </div>

                    {/* View Details Link */}
                    <button
                      onClick={() => transitionTo(`/project/${project.id}`, {
                        isProject: true,
                        projectId: project.id,
                        transitionName: `project-detail-${project.id}`
                      })}
                      className="interactive-text-link inline-flex w-full items-center justify-between gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 group/link dark:text-blue-400 dark:hover:text-blue-300 sm:w-auto sm:justify-start"
                    >
                      <span>View Details</span>
                      <ArrowLeft className="h-4 w-4 rotate-180 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
                </motion.div>
              ))}
            </div>
            </div>
          </main>
        </div>
      </PageTransition>
  );
}
