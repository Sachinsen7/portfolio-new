import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/common/LazyImage";
import Header from "@/components/layout/Header";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons.jsx";
import PageTransition from "@/components/common/PageTransition";
import ScrollProgress from "@/components/common/ScrollProgress";
import { motion } from "framer-motion";



export default function AllProjects() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Keep the blue accent scroll progress bar */}
        <ScrollProgress />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="text-start mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                All Projects
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
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
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
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
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 line-clamp-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
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
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800/60 px-2 py-1 rounded-lg text-xs text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700/60 transition-colors"
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
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                  >
                    <span>View Details</span>
                    <ArrowLeft className="h-4 w-4 rotate-180 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
        <Header />
      </div>
    </PageTransition>
  );
}
