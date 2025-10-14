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
import { useTheme } from "@/hooks/useTheme";
import { SlideTransition } from "@/components/common/PageTransition";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";
import Header from "../layout/Header";
import { projectsData } from "@/lib/projectsData";

const getTechIcon = (tech) => {
  const iconMap = {
    React: <IconBrandReact className="h-5 w-5" />,
    JavaScript: <IconBrandJavascript className="h-5 w-5" />,
    "Tailwind CSS": <IconBrandTailwind className="h-5 w-5" />,
    "Node.js": <IconBrandNodejs className="h-5 w-5" />,
    MongoDB: <IconBrandMongodb className="h-5 w-5" />,
  };
  return iconMap[tech] || <Code className="h-5 w-5" />;
};

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

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

          {/* Project Image */}
          <div className="mb-6">
            <div className="bg-glass backdrop-blur rounded-lg p-3">
              <LazyImage
                src={project.image}
                alt={`${project.title} screenshot`}
                className="rounded-md object-cover w-full h-48"
              />
            </div>
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
              <div className="text-sm text-gray-600 mb-2">
                <p>
                  {project.duration} • {project.year}
                </p>
              </div>

              <p className="text-sm text-gray-800 dark:text-gray-800 mb-4">{project.summary}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h2 className="font-bold mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <div
                  key={tech}
                  className="bg-glass backdrop-blur flex px-2 py-1 rounded-md text-sm text-foreground"
                >
                  {getTechIcon(tech)}
                  <span className="ml-1">{tech}</span>
                </div>
              ))}
            </div>
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
            <h2 className="font-bold mb-3">Key Features</h2>
            <div className="space-y-2">
              {project.features.slice(0, 6).map((feature, index) => (
                <p key={index} className="text-gray-800 dark:text-gray-300 text-sm">
                  ‣ {feature}
                </p>
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
