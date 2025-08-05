import LazyImage from "@/components/common/LazyImage";
import { ExternalLink, Github, ArrowRight, Grid3X3, Folder} from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons";
import { motion } from "framer-motion";



export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-8 max-w-4xl" aria-labelledby="projects-heading">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h2 id="projects-heading" className="text-xl text-start">
          Featured
        </h2>
        <h3 className="text-2xl font-semibold text-foreground flex items-center justify-center">
         <Folder className="h-6 w-6 mr-2 text-accent" aria-hidden="true" /> Projects
        </h3>
      </div>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            className="group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-glass hover:backdrop-blur transition-all duration-300">
              {/* Project Image */}
              <div className="flex-shrink-0">
                <LazyImage
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  className="w-full sm:w-16 h-32 sm:h-16 rounded-md object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-base text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-foreground-muted bg-glass backdrop-blur px-2 py-1 rounded border border-glass-border">
                        {project.category}
                      </span>
                      <span className="text-xs text-foreground-muted">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-foreground-muted hover:text-accent cursor-pointer" />
                    <Github className="h-4 w-4 text-foreground-muted hover:text-accent cursor-pointer" />
                  </div>
                </div>

                <p className="text-sm text-foreground-muted mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <div key={tech} className="flex items-center gap-1 bg-glass backdrop-blur px-2 py-1 rounded text-xs text-foreground border border-glass-border">
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-foreground-muted px-2 py-1">
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

            {/* Separator line */}
            {index < projectsData.length - 1 && (
              <div className="h-px bg-gray-200 dark:bg-gray-700 my-4 opacity-50" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Show All Projects Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/projects"
          className="flex items-center gap-2 bg-glass backdrop-blur px-6 py-3 rounded-lg text-foreground hover:bg-button-hover transition-all duration-200 border border-glass-border"
        >
          <Grid3X3 className="h-4 w-4" />
          <span>Show All Projects</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
