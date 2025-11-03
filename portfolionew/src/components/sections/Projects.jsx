import LazyImage from "@/components/common/LazyImage";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Grid3X3,
  Folder,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons.jsx";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto py-12 max-w-4xl"
      aria-labelledby="projects-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start gap-2 mb-10">
        <h2
          id="projects-heading"
          className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
        >
          Featured
        </h2>
        <h3 className="text-3xl font-semibold text-foreground">Projects</h3>
      </div>

      {/* Project Cards */}
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-900/50 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300">
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-full sm:w-36 h-36 sm:h-24 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                <LazyImage
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title & Links */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/60 px-2.5 py-1 rounded-full border border-gray-300/60 dark:border-gray-700">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="h-4 w-4 text-gray-600 dark:text-gray-400 hover:text-accent transition-colors" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="h-4 w-4 text-gray-600 dark:text-gray-400 hover:text-accent transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack & View Link */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800/60 backdrop-blur px-2 py-1 rounded text-xs text-gray-800 dark:text-gray-200 border border-gray-300/60 dark:border-gray-700"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-gray-600 dark:text-gray-400 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-1 text-sm text-accent hover:gap-2 transition-all duration-200"
                    aria-label={`View ${project.title} project details`}
                  >
                    View
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {index < projectsData.length - 1 && (
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-6" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Show All Projects */}
      <div className="flex justify-center mt-12 mb-14">
        <Link
          to="/projects"
          className="flex items-center gap-2 bg-gray-50 dark:bg-gray-900/60 backdrop-blur px-6 py-3 rounded-lg text-gray-900 dark:text-gray-100 hover:text-accent border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
        >
          <Grid3X3 className="h-4 w-4" />
          <span>Show All Projects</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
