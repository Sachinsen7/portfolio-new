import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/common/LazyImage";
import Header from "@/components/layout/Header";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons";
import PageTransition from "@/components/common/PageTransition";
import { motion } from "framer-motion";



export default function AllProjects() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-accent transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">All Projects</h1>
            <p className="text-gray-600 mt-2">A collection of my work and side projects</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[var(--glass-bg)] backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ y: -3, scale: 1.01 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur rounded-lg hover:bg-black/70 transition-colors"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur rounded-lg hover:bg-black/70 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-[var(--foreground)] group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Tag className="h-3 w-3 text-accent" />
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded text-xs text-[var(--foreground)]"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                {/* View Details Link */}
                <Link
                  to={`/project/${project.id}`}
                  className="text-sm text-accent hover:underline font-medium"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Header />
      </div>
    </PageTransition>
  );
}
