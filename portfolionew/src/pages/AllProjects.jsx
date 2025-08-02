import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import LazyImage from "@/components/common/LazyImage";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
} from "@tabler/icons-react";
import Header from "@/components/layout/Header";

// Import project images
import ecommerce from "../../public/assets/images/ecommerce.png";
import gem_control from "../../public/assets/images/gem_control.png";
import yadav_bus from "../../public/assets/images/yadav_bus.png";
import recipe_finder from "../../public/assets/images/recipefinder.png";
import netflix from "../../public/assets/images/netflix.png";
import music_player from "../../public/assets/images/music_player.png";
import learnsphere from "../../public/assets/images/learnsphere.png";

const projectsData = [
  {
    id: 1,
    title: "Yadav Bus Service Platform",
    image: yadav_bus,
    description: "Bus platform with ticket, cab, and hotel booking + WhatsApp API integration",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    year: "2024",
    liveLink: "https://yadav-bus-demo.vercel.app",
    githubLink: "https://github.com/username/yadav-bus-service"
  },
  {
    id: 2,
    title: "Management Software",
    image: ecommerce,
    description: "Role-based management software with automated workflows",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Enterprise",
    year: "2024",
    liveLink: "https://management-software-demo.vercel.app",
    githubLink: "https://github.com/username/management-software"
  },
  {
    id: 3,
    title: "ADRS Gem Control",
    image: gem_control,
    description: "Jewellery business management with inventory and barcode generation",
    tech: ["React", "Node.js", "MongoDB"],
    category: "E-commerce",
    year: "2023",
    liveLink: "https://gem-control-demo.vercel.app",
    githubLink: "https://github.com/username/gem-control"
  },
  {
    id: 4,
    title: "Course Selling App",
    image: learnsphere,
    description: "Online learning platform with course management and progress tracking",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Education",
    year: "2024",
    liveLink: "https://learnsphere-demo.vercel.app",
    githubLink: "https://github.com/username/learnsphere"
  },
  {
    id: 5,
    title: "Dish Discovery App",
    image: recipe_finder,
    description: "Recipe finder with nutritional information and cooking instructions",
    tech: ["React", "Tailwind CSS"],
    category: "Lifestyle",
    year: "2024",
    liveLink: "https://dish-discovery-demo.vercel.app",
    githubLink: "https://github.com/username/dish-discovery"
  },
  {
    id: 6,
    title: "Melody Heaven",
    image: music_player,
    description: "Music streaming platform with playlist management",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Entertainment",
    year: "2024",
    liveLink: "https://melody-heaven-demo.vercel.app",
    githubLink: "https://github.com/username/melody-heaven"
  },
  {
    id: 7,
    title: "Netflix Clone",
    image: netflix,
    description: "Streaming platform clone with user authentication and video playback",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Entertainment",
    year: "2024",
    liveLink: "https://netflix-clone-demo.vercel.app",
    githubLink: "https://github.com/username/netflix-clone"
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

export default function AllProjects() {
  return (
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
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[var(--glass-bg)] backdrop-blur-lg border border-white/10 dark:border-white/5 rounded-xl overflow-hidden hover:bg-white/5 transition-all duration-300 group"
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
            </div>
          ))}
        </div>
      </div>
          <Header />
    </div>
  );
}
