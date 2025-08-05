
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Tag, Code, ChevronLeft, ChevronRight, Calendar, Users, User, CheckCircle } from 'lucide-react';
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
import Header from '../layout/Header';
const projectsData = [
  {
    id: 1,
    title: "Yadav Bus Service Platform",
    image: "/assets/images/yadav_bus.png",
    summary: "A comprehensive bus management system with multi-service booking capabilities",
    description: "Built a comprehensive bus platform with ticket, cab, and hotel booking capabilities integrated with WhatsApp API, boosting operational efficiency by 90%. The platform features real-time seat availability, automated booking confirmations, and integrated payment processing.",
    fullDescription: "This full-stack application revolutionizes bus service management by providing a complete ecosystem for transportation booking. The platform includes advanced features like dynamic pricing, route optimization, real-time GPS tracking, and comprehensive admin dashboards. The WhatsApp API integration enables seamless customer communication and booking confirmations, making it a one-stop solution for all transportation needs.",
    tech: ["React", "Node.js", "MongoDB", "WhatsApp API", "Tailwind CSS"],
    features: [
      "Real-time seat booking system with live availability",
      "WhatsApp API integration for instant notifications",
      "Multi-service booking (Bus, Cab, Hotel)",
      "Admin dashboard with comprehensive analytics",
      "Secure payment gateway integration",
      "Route management and optimization system",
      "Customer management and booking history",
      "Dynamic pricing based on demand and season"
    ],
    challenges: [
      "Implementing real-time seat availability across multiple buses",
      "Integrating WhatsApp API for seamless customer communication",
      "Building a scalable booking system handling concurrent users",
      "Creating an intuitive admin dashboard for operations management"
    ],
    liveLink: "https://yadav-bus-demo.vercel.app",
    githubLink: "https://github.com/Sachinsen7/yadavBusServiceFullStack.git",
    category: "Front End",
    duration: "1 month",
    year: "2025",
    timeline: [
      { phase: "Planning & Design", duration: "2 weeks", status: "completed" },
      { phase: "Backend Development", duration: "1 week", status: "completed" },
      { phase: "Frontend Development", duration: "3 weeks", status: "completed" },
      { phase: "API Integration", duration: "2 weeks", status: "incomplete" },
      { phase: "Testing & Deployment", duration: "1 week", status: "incomplete" }
    ],
    team: "Solo Project",
    role: "Front End Developer",
    status: "Live & Maintained"
  },
  {
    id: 2,
    title: "Management Software",
    image: "/assets/images/ecommerce.png",
    summary: "Enterprise-grade management tool with automated workflows",
    description: "Created role-based management software with automated workflows, cutting manual work by 85%. Features comprehensive workflow management, real-time analytics, and customizable dashboards.",
    fullDescription: "Enterprise-grade management software designed to streamline business operations through intelligent automation and role-based access control. The system features comprehensive workflow management, real-time analytics, and customizable dashboards tailored to different user roles. Built with scalability in mind to handle large organizations with complex hierarchies.",
    tech: ["React", "Node.js", "Express"],
    features: [
      "Role-based access control with granular permissions",
      "Automated workflow engine with custom triggers",
      "Real-time analytics dashboard with interactive charts",
      "Document management system with version control",
      "Task assignment and progress tracking",
      "Performance metrics and detailed reporting",
      "Email notifications and alerts system",
      "Multi-tenant architecture support"
    ],
    challenges: [
      "Designing flexible role-based permission system",
      "Building automated workflow engine from scratch",
      "Implementing real-time data synchronization",
      "Creating responsive dashboards with complex data visualization"
    ],
    liveLink: "https://management-software-demo.vercel.app",
    githubLink: "https://github.com/Sachinsen7/managementSoftware.git",
    category: "Enterprise",
    duration: "2 months",
    year: "2025",
    timeline: [
      { phase: "Requirements Analysis", duration: "1 week", status: "completed" },
      { phase: "System Architecture", duration: "2 weeks", status: "completed" },
      { phase: "Core Development", duration: "3 weeks", status: "completed" },
      { phase: "Workflow Engine", duration: "3 weeks", status: "incomplete" },
      { phase: "Testing & Optimization", duration: "2 weeks", status: "incomplete" }
    ],
    team: "Solo Project",
    role: "Full Stack Developer & System Architect",
    status: "-"
  },
  {
    id: 3,
    title: "ADRS Gem Control",
    image: "/assets/images/gem_control.png",
    summary: "Comprehensive jewellery business management with e-commerce integration",
    description: "Developed a full-stack web application for jewellery business management, featuring inventory, sales, and real-time dashboards with barcode generation.",
    fullDescription: "Comprehensive jewellery business management system that combines inventory control, sales tracking, and customer management. Features advanced barcode generation for product tracking, real-time inventory updates, and integrated e-commerce capabilities for online sales. The system handles complex jewellery specifications including weight, purity, and certification details.",
    tech: ["React", "Redux", "Material UI", "Node.js", "MongoDB"],
    features: [
      "Advanced inventory management with barcode generation",
      "Sales tracking and comprehensive analytics",
      "Customer relationship management system",
      "E-commerce integration with online catalog",
      "Real-time dashboard with business insights",
      "Product catalog with detailed specifications",
      "Invoice generation and billing system",
      "Multi-location inventory tracking"
    ],
    challenges: [
      "Handling complex jewellery product specifications",
      "Implementing barcode generation and scanning system",
      "Building real-time inventory synchronization",
      "Creating intuitive UI for non-technical users"
    ],
    liveLink: "https://gem-control-demo.vercel.app",
    githubLink: "https://github.com/Sachinsen7/Gem-Control.git",
    category: "Management Software",
    duration: "3 months",
    year: "2025",
    timeline: [
      { phase: "Business Analysis", duration: "2 weeks", status: "completed" },
      { phase: "Database Design", duration: "1 week", status: "completed" },
      { phase: "Backend Development", duration: "4 weeks", status: "completed" },
      { phase: "Frontend Development", duration: "4 weeks", status: "completed" },
      { phase: "Barcode Integration", duration: "2 weeks", status: "completed" },
      { phase: "Testing & Deployment", duration: "1 week", status: "completed" }
    ],
    team: "Team Project",
    role: "Full Stack Developer",
    status: "Client Delivered"
  },
  {
    id: 4,
    title: "Course Selling App",
    image: "/assets/images/learnsphere.png",
    summary: "Online learning platform.",
    description: "Modern e-learning platform with course management, student progress tracking, and interactive learning features.",
    fullDescription: "LearnSphere is a comprehensive online learning platform that enables educators to create, manage, and sell courses while providing students with an engaging learning experience. Features include video streaming, progress tracking, quizzes, and certification systems.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "Course creation and management",
      "Video streaming and playback",
      "Student progress tracking",
      "Interactive quizzes and assessments",
      "Certificate generation",
      "Payment processing for course sales"
    ],
    liveLink: "https://learnsphere-demo.vercel.app",
    githubLink: "https://github.com/Sachinsen7/course-selling-app.git",
    category: "Education",
    timeline: [
      { phase: "UI/UX Design", duration: "1 week", status: "completed" },
      { phase: "Frontend Development", duration: "3 weeks", status: "completed" },
      { phase: "Backend API", duration: "2 weeks", status: "completed" },
      { phase: "Video Integration", duration: "1 week", status: "completed" },
      { phase: "Testing & Launch", duration: "1 week", status: "incomplete" }
    ],
    team: "Solo Project",
    role: "Full Stack Developer",
    status: "Portfolio Project"
  },
  {
    id: 5,
    title: "Dish Discovery App",
    image: "/assets/images/recipefinder.png",
    summary: "Recipe Finder App",
    description: "Discover and explore recipes from around the world with this intuitive recipe finder application.",
    fullDescription: "A feature-rich recipe discovery platform that helps users find, save, and share recipes. Integrated with the Spoonacular API to provide access to thousands of recipes with detailed nutritional information, cooking instructions, and ingredient lists.",
    tech: ["React", "Tailwind CSS", "Spoonacular API"],
    features: [
      "Recipe search and filtering",
      "Nutritional information display",
      "Ingredient-based recipe suggestions",
      "Favorite recipes collection",
      "Cooking timer and instructions",
      "Dietary restriction filters"
    ],
    liveLink: "https://dishdishcovery.vercel.app/",
    githubLink: "https://github.com/Sachinsen7/recipefinder.git",
    category: "Lifestyle",
    timeline: [
      { phase: "API Research", duration: "3 days", status: "completed" },
      { phase: "Frontend Development", duration: "2 weeks", status: "completed" },
      { phase: "API Integration", duration: "1 week", status: "completed" },
      { phase: "UI Polish", duration: "3 days", status: "completed" }
    ],
    team: "Solo Project",
    role: "Frontend Developer",
    status: "Portfolio Project"
  },
  {
    id: 6,
    title: "Melody Heaven",
    image: "/assets/images/music_player.png",
    summary: "Music Player",
    description: "A modern music streaming application with playlist management and social features.",
    fullDescription: "Melody Heaven is a sophisticated music streaming platform that combines beautiful design with powerful functionality. Features include playlist creation, social sharing, music discovery, and high-quality audio streaming with a focus on user experience.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: [
      "High-quality music streaming",
      "Playlist creation and management",
      "Music discovery algorithms",
      "Social sharing features",
      "Offline listening capability",
      "Artist and album information"
    ],
    liveLink: "https://melodyheaven.vercel.app/",
    githubLink: "https://github.com/Sachinsen7/melodyheaven.git",
    category: "Entertainment",
    timeline: [
      { phase: "Design & Prototyping", duration: "1 week", status: "completed" },
      { phase: "Audio System Setup", duration: "2 weeks", status: "completed" },
      { phase: "Frontend Development", duration: "3 weeks", status: "completed" },
      { phase: "Backend & Database", duration: "2 weeks", status: "completed" },
      { phase: "Testing & Optimization", duration: "1 week", status: "completed" }
    ],
    team: "Solo Project",
    role: "Full Stack Developer",
    status: "Portfolio Project"
  },
  {
    id: 7,
    title: "Netflix Clone",
    image: "/assets/images/netflix.png",
    summary: "Netflix Clone",
    description: "A pixel-perfect Netflix clone with streaming capabilities and user authentication.",
    fullDescription: "A comprehensive Netflix clone that replicates the core functionality and design of the popular streaming platform. Features include user authentication, content browsing, video streaming, and personalized recommendations with a responsive design.",
    tech: ["React", "Tailwind CSS"],
    features: [
      "User authentication and profiles",
      "Video streaming and playback",
      "Content categorization and browsing",
      "Search functionality",
      "Responsive design",
      "Recommendation system"
    ],
    liveLink: "https://netflix-clone-topaz-sigma.vercel.app/",
    githubLink: "https://github.com/Sachinsen7/netflix-clone.git",
    category: "Entertainment",
    timeline: [
      { phase: "UI Replication", duration: "2 weeks", status: "completed" },
      { phase: "Authentication System", duration: "1 week", status: "completed" },
      { phase: "Video Integration", duration: "2 weeks", status: "incomplete" },
      { phase: "Responsive Design", duration: "1 week", status: "completed" },
      { phase: "Final Polish", duration: "1 week", status: "completed" }
    ],
    team: "Solo Project",
    role: "Frontend Developer",
    status: "Portfolio Project"
  }
];

const getTechIcon = (tech) => {
  const iconMap = {
    "React": <IconBrandReact className="h-5 w-5" />,
    "JavaScript": <IconBrandJavascript className="h-5 w-5" />,
    "Tailwind CSS": <IconBrandTailwind className="h-5 w-5" />,
    "Node.js": <IconBrandNodejs className="h-5 w-5" />,
    "MongoDB": <IconBrandMongodb className="h-5 w-5" />,
  };
  return iconMap[tech] || <Code className="h-5 w-5" />;
};

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const project = projectsData.find(p => p.id === parseInt(id));
  const currentIndex = projectsData.findIndex(p => p.id === parseInt(id));
  const nextProject = projectsData[currentIndex + 1];
  const prevProject = projectsData[currentIndex - 1];

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <section className="container mx-auto py-8 max-w-4xl">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/')} className="bg-glass backdrop-blur">
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl" aria-labelledby="project-heading">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-6">
          <Button
            onClick={() => navigate('/')}
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
            <p>{project.duration} • {project.year}</p>
          </div>

          <p className="text-sm text-gray-600 mb-4">{project.summary}</p>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h2 className="font-bold mb-3">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <div key={tech} className="bg-glass backdrop-blur flex px-2 py-1 rounded-md text-sm text-foreground">
              {getTechIcon(tech)}
              <span className="ml-1">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="font-bold mb-3">Overview</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {project.description}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.fullDescription}
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-6">
        <h2 className="font-bold mb-3">Key Features</h2>
        <div className="space-y-2">
          {project.features.slice(0, 6).map((feature, index) => (
            <p key={index} className="text-gray-600 text-sm">
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
              <p key={index} className="text-gray-600 text-sm">
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
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${phase.status === 'completed' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  <span className="text-sm font-medium">{phase.phase}</span>
                </div>
                <span className="text-xs text-gray-600">{phase.duration}</span>
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
                <span className="text-sm text-gray-600">{project.team}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-accent" />
              <div>
                <span className="text-sm font-medium">Role: </span>
                <span className="text-sm text-gray-600">{project.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-4 w-4 text-accent" />
              <div>
                <span className="text-sm font-medium">Status: </span>
                <span className="text-sm text-gray-600">{project.status}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-accent" />
              <div>
                <span className="text-sm font-medium">Duration: </span>
                <span className="text-sm text-gray-600">{project.duration} • {project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
      <Header/>
      </div>
    </SlideTransition>
  );
}
