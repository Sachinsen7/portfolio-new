import { useParams, useNavigate } from "react-router-dom";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/common/LazyImage";
import ImageCarousel from "@/components/common/ImageCarousel";

import { SlideTransition } from "@/components/common/PageTransition";
import Header from "../layout/Header";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons.jsx";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();


  const project = projectsData.find((p) => p.id === parseInt(id));
  const currentIndex = projectsData.findIndex((p) => p.id === parseInt(id));
  const nextProject = projectsData[currentIndex + 1];
  const prevProject = projectsData[currentIndex - 1];

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <section className="container mx-auto py-8 max-w-4xl">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-6">
              The project you're looking for doesn't exist.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-glass backdrop-blur"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
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
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl"
          aria-labelledby="project-heading"
        >
          {/* Navigation */}
          <div className="flex justify-between items-center mb-6">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="bg-glass backdrop-blur border-white/20 hover:bg-white/10 text-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>

            {/* Project Navigation */}
            <div className="flex gap-2">
              {prevProject && (
                <Button
                  onClick={() => navigate(`/project/${prevProject.id}`)}
                  variant="outline"
                  className="bg-glass backdrop-blur border-white/20 hover:bg-white/10 text-sm"
                  title={`Previous: ${prevProject.title}`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              )}
              {nextProject && (
                <Button
                  onClick={() => navigate(`/project/${nextProject.id}`)}
                  variant="outline"
                  className="bg-glass backdrop-blur border-white/20 hover:bg-white/10 text-sm"
                  title={`Next: ${nextProject.title}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Project Header */}
          <div className="flex flex-col items-start gap-4 mb-8">
            <div className="flex items-center gap-2">
              <h2 id="project-heading" className="text-xl text-start">
                Project Details
              </h2>
              <div className="bg-glass backdrop-blur px-2 py-1 rounded-md text-xs text-foreground">
                <Tag className="h-3 w-3 mr-1 inline" />
                {project.category}
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground">
              {project.title}
            </h3>
          </div>

          {/* Project Images Carousel */}
          <div className="mb-6">
            <ImageCarousel
              images={[project.image]}
              projectTitle={project.title}
            />
          </div>

          {/* Project Info */}
          <div className="flex items-start gap-4 mb-6">
            <div className="flex flex-col w-full">
              {/* Header Row: Links */}
              <div className="flex items-center gap-2 mb-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent cursor-pointer"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>

              {/* Duration & Year */}
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <p>
                  {project.duration} • {project.year}
                </p>
              </div>

              <p className="text-sm text-gray-800 dark:text-gray-300 mb-4">{project.summary}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h2 className="font-bold mb-4 flex items-center gap-2 text-lg">
              <Code className="h-5 w-5 text-accent" />
              Technologies & Tools
            </h2>

            {/* Core Technologies */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Core Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.tech.slice(0, 6).map((tech, index) => {
                  const colors = [
                    "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-700",
                    "from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 text-green-900 dark:text-green-100 border-green-200 dark:border-green-700",
                    "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-900 dark:text-purple-100 border-purple-200 dark:border-purple-700",
                    "from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-900 dark:text-orange-100 border-orange-200 dark:border-orange-700",
                    "from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 text-cyan-900 dark:text-cyan-100 border-cyan-200 dark:border-cyan-700",
                    "from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 text-pink-900 dark:text-pink-100 border-pink-200 dark:border-pink-700"
                  ];
                  return (
                    <div
                      key={tech}
                      className={`bg-gradient-to-r ${colors[index % colors.length]} backdrop-blur-sm flex items-center gap-3 px-4 py-3 rounded-xl text-sm border shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {getTechIcon(tech, "h-5 w-5")}
                      </div>
                      <span className="font-semibold">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Technologies */}
            {project.tech.length > 6 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Additional Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(6).map((tech) => (
                    <div
                      key={tech}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/40 dark:to-gray-700/40 backdrop-blur-sm flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-gray-600/40 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      {getTechIcon(tech, "h-3.5 w-3.5")}
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="font-bold mb-3">Overview</h2>
            <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed mb-3">
              {project.description}
            </p>
            <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h2 className="font-bold mb-4 text-lg flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.slice(0, 8).map((feature, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 p-3 rounded-lg border border-green-200/30 dark:border-green-700/20">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div className="mb-6">
              <h2 className="font-bold mb-3">Technical Challenges</h2>
              <div className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <p key={index} className="text-gray-800 dark:text-gray-300 text-sm">
                    ‣ {challenge}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Timeline Section */}
          <div className="mb-6">
            <h2 className="font-bold mb-3">Project Timeline</h2>
            <div className="bg-glass backdrop-blur rounded-lg p-4">
              <div className="space-y-3">
                {project.timeline.map((phase, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${phase.status === "completed"
                          ? "bg-green-500"
                          : "bg-gray-400"
                          }`}
                      ></div>
                      <span className="text-sm font-medium">{phase.phase}</span>
                    </div>
                    <span className="text-xs text-gray-600">
                      {phase.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="mb-6">
            <h2 className="font-bold mb-3">Project Information</h2>
            <div className="bg-glass backdrop-blur rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-accent" />
                  <div>
                    <span className="text-sm font-medium">Team: </span>
                    <span className="text-sm text-gray-600">
                      {project.team}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-accent" />
                  <div>
                    <span className="text-sm font-medium">Role: </span>
                    <span className="text-sm text-gray-600">
                      {project.role}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <div>
                    <span className="text-sm font-medium">Status: </span>
                    <span className="text-sm text-gray-600">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-accent" />
                  <div>
                    <span className="text-sm font-medium">Duration: </span>
                    <span className="text-sm text-gray-600">
                      {project.duration} • {project.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Header />
      </div>
    </SlideTransition>
  );
}
