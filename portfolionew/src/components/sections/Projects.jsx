import LazyImage from "@/components/common/LazyImage";
import ecommerce from "../../../public/assets/images/ecommerce.png";
import gem_control from "../../../public/assets/images/gem_control.png";
import yadav_bus from "../../../public/assets/images/yadav_bus.png";
import recipe_finder from "../../../public/assets/images/recipefinder.png";
import netflix from "../../../public/assets/images/netflix.png";
import music_player from "../../../public/assets/images/music_player.png";
import learnsphere from "../../../public/assets/images/learnsphere.png";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { ExternalLink, Github, ArrowRight, Grid3X3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Yadav Bus Service Platform",
    image: yadav_bus,
    description: "Bus platform with ticket, cab, and hotel booking + WhatsApp API integration",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    year: "2024"
  },
  {
    id: 2,
    title: "Management Software",
    image: ecommerce,
    description: "Role-based management software with automated workflows",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Enterprise",
    year: "2024"
  },
  {
    id: 3,
    title: "ADRS Gem Control",
    image: gem_control,
    description: "Jewellery business management with inventory and barcode generation",
    tech: ["React", "Node.js", "MongoDB"],
    category: "E-commerce",
    year: "2023"
  },
  {
    id: 4,
    title: "Course Selling App",
    image: learnsphere,
    description: "Online learning platform with course management and progress tracking",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Education",
    year: "2024"
  },
  {
    id: 5,
    title: "Dish Discovery App",
    image: recipe_finder,
    description: "Recipe finder with nutritional information and cooking instructions",
    tech: ["React", "Tailwind CSS"],
    category: "Lifestyle",
    year: "2024"
  },
  {
    id: 6,
    title: "Melody Heaven",
    image: music_player,
    description: "Music streaming platform with playlist management",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Entertainment",
    year: "2024"
  },
  {
    id: 7,
    title: "Netflix Clone",
    image: netflix,
    description: "Streaming platform clone with user authentication and video playback",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Entertainment",
    year: "2024"
  },
];

const getTechIcon = (tech) => {
  const iconMap = {
    "React": <IconBrandReact className="h-4 w-4" />,
    "JavaScript": <IconBrandJavascript className="h-4 w-4" />,
    "Tailwind CSS": <IconBrandTailwind className="h-4 w-4" />,
    "Node.js": <IconBrandNodejs className="h-4 w-4" />,
    "MongoDB": <IconBrandMongodb className="h-4 w-4" />,
  };
  return iconMap[tech] || null;
};

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl" aria-labelledby="projects-heading">
      <div className="flex flex-col items-start gap-4 mb-8">
        <h2 id="projects-heading" className="text-xl text-start">
          Featured
        </h2>
        <h3 className="text-2xl font-semibold text-foreground">
          Projects
        </h3>
      </div>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <div key={project.id} className="group">
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
                      <span className="text-xs text-gray-600 bg-glass backdrop-blur px-2 py-1 rounded">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-600">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4 text-gray-500 hover:text-accent cursor-pointer" />
                    <Github className="h-4 w-4 text-gray-500 hover:text-accent cursor-pointer" />
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <div key={tech} className="flex items-center gap-1 bg-glass backdrop-blur px-2 py-1 rounded text-xs text-foreground">
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
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
          </div>
        ))}
      </div>

      {/* Show All Projects Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/projects"
          className="flex items-center gap-2 bg-glass backdrop-blur px-6 py-3 rounded-lg text-foreground hover:bg-white/10 transition-all duration-200 border border-white/20"
        >
          <Grid3X3 className="h-4 w-4" />
          <span>Show All Projects</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
