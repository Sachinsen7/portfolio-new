// Import project images
import ecommerce from "../../public/assets/images/ecommerce.png";
import gem_control from "../../public/assets/images/gem_control.png";
import yadav_bus from "../../public/assets/images/yadav_bus.png";
import recipe_finder from "../../public/assets/images/recipefinder.png";
import netflix from "../../public/assets/images/netflix.png";
import music_player from "../../public/assets/images/music_player.png";
import learnsphere from "../../public/assets/images/learnsphere.png";

export const projectsData = [
  {
    id: 1,
    title: "Yadav Bus Service Platform",
    image: yadav_bus,
    description: "Bus platform with ticket, cab, and hotel booking + WhatsApp API integration",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    year: "2024",
    summary: "A comprehensive bus management system with multi-service booking capabilities",
    fullDescription: "Built a comprehensive bus platform with ticket, cab, and hotel booking capabilities integrated with WhatsApp API, boosting operational efficiency by 90%. The platform features real-time seat availability, automated booking confirmations, and integrated payment processing.",
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
    githubLink: "https://github.com/username/yadav-bus-service",
    timeline: [
      { phase: "Planning & Design", duration: "2 weeks", status: "completed" },
      { phase: "Backend Development", duration: "4 weeks", status: "completed" },
      { phase: "Frontend Development", duration: "3 weeks", status: "completed" },
      { phase: "API Integration", duration: "2 weeks", status: "completed" },
      { phase: "Testing & Deployment", duration: "1 week", status: "completed" }
    ],
    team: "Solo Project",
    role: "Full Stack Developer",
    status: "Live & Maintained",
    duration: "3 months"
  },
  {
    id: 2,
    title: "Management Software",
    image: ecommerce,
    description: "Role-based management software with automated workflows",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Enterprise",
    year: "2024",
    summary: "Enterprise-grade management tool with automated workflows",
    fullDescription: "Created role-based management software with automated workflows, cutting manual work by 85%. Features comprehensive workflow management, real-time analytics, and customizable dashboards.",
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
    githubLink: "https://github.com/username/management-software",
    timeline: [
      { phase: "Requirements Analysis", duration: "1 week", status: "completed" },
      { phase: "System Architecture", duration: "2 weeks", status: "completed" },
      { phase: "Core Development", duration: "8 weeks", status: "completed" },
      { phase: "Workflow Engine", duration: "3 weeks", status: "completed" },
      { phase: "Testing & Optimization", duration: "2 weeks", status: "completed" }
    ],
    team: "Solo Project",
    role: "Full Stack Developer & System Architect",
    status: "Production Ready",
    duration: "4 months"
  },
  {
    id: 3,
    title: "ADRS Gem Control",
    image: gem_control,
    description: "Jewellery business management with inventory and barcode generation",
    tech: ["React", "Node.js", "MongoDB"],
    category: "E-commerce",
    year: "2023",
    summary: "Comprehensive jewellery business management with e-commerce integration",
    fullDescription: "Developed a full-stack web application for jewellery business management, featuring inventory, sales, and real-time dashboards with barcode generation.",
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
    githubLink: "https://github.com/username/gem-control",
    timeline: [
      { phase: "Business Analysis", duration: "2 weeks", status: "completed" },
      { phase: "Database Design", duration: "1 week", status: "completed" },
      { phase: "Backend Development", duration: "6 weeks", status: "completed" },
      { phase: "Frontend Development", duration: "8 weeks", status: "completed" },
      { phase: "Barcode Integration", duration: "2 weeks", status: "completed" },
      { phase: "Testing & Deployment", duration: "1 week", status: "completed" }
    ],
    team: "Solo Project",
    role: "Full Stack Developer",
    status: "Client Delivered",
    duration: "5 months"
  },
  {
    id: 4,
    title: "Course Selling App",
    image: learnsphere,
    description: "Online learning platform with course management and progress tracking",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Education",
    year: "2024",
    summary: "Online learning platform",
    fullDescription: "LearnSphere is a comprehensive online learning platform that enables educators to create, manage, and sell courses while providing students with an engaging learning experience. Features include video streaming, progress tracking, quizzes, and certification systems.",
    features: [
      "Course creation and management",
      "Video streaming and playback",
      "Student progress tracking",
      "Interactive quizzes and assessments",
      "Certificate generation",
      "Payment processing for course sales"
    ],
    challenges: [
      "Implementing video streaming infrastructure",
      "Building comprehensive progress tracking system",
      "Creating interactive assessment tools",
      "Designing user-friendly course creation interface"
    ],
    liveLink: "https://learnsphere-demo.vercel.app",
    githubLink: "https://github.com/username/learnsphere",
    timeline: [
      { phase: "UI/UX Design", duration: "1 week", status: "completed" },
      { phase: "Frontend Development", duration: "3 weeks", status: "completed" },
      { phase: "Backend API", duration: "2 weeks", status: "completed" },
      { phase: "Video Integration", duration: "1 week", status: "completed" },
      { phase: "Testing & Launch", duration: "1 week", status: "completed" }
    ],
    team: "Solo Project",
    role: "Full Stack Developer",
    status: "Portfolio Project",
    duration: "2 months"
  },
  {
    id: 5,
    title: "Dish Discovery App",
    image: recipe_finder,
    description: "Recipe finder with nutritional information and cooking instructions",
    tech: ["React", "Tailwind CSS"],
    category: "Lifestyle",
    year: "2024",
    summary: "Recipe Finder App",
    fullDescription: "A feature-rich recipe discovery platform that helps users find, save, and share recipes. Integrated with the Spoonacular API to provide access to thousands of recipes with detailed nutritional information, cooking instructions, and ingredient lists.",
    features: [
      "Recipe search and filtering",
      "Nutritional information display",
      "Ingredient-based recipe suggestions",
      "Favorite recipes collection",
      "Cooking timer and instructions",
      "Dietary restriction filters"
    ],
    challenges: [
      "Integrating third-party recipe API",
      "Implementing efficient search and filtering",
      "Creating responsive recipe card layouts",
      "Managing large datasets of recipe information"
    ],
    liveLink: "https://dish-discovery-demo.vercel.app",
    githubLink: "https://github.com/username/dish-discovery",
    timeline: [
      { phase: "API Research", duration: "3 days", status: "completed" },
      { phase: "Frontend Development", duration: "2 weeks", status: "completed" },
      { phase: "API Integration", duration: "1 week", status: "completed" },
      { phase: "UI Polish", duration: "3 days", status: "completed" }
    ],
    team: "Solo Project",
    role: "Frontend Developer",
    status: "Portfolio Project",
    duration: "1 month"
  },
  {
    id: 6,
    title: "Melody Heaven",
    image: music_player,
    description: "Music streaming platform with playlist management",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Entertainment",
    year: "2024",
    summary: "Music Player",
    fullDescription: "Melody Heaven is a sophisticated music streaming platform that combines beautiful design with powerful functionality. Features include playlist creation, social sharing, music discovery, and high-quality audio streaming with a focus on user experience.",
    features: [
      "High-quality music streaming",
      "Playlist creation and management",
      "Music discovery algorithms",
      "Social sharing features",
      "Offline listening capability",
      "Artist and album information"
    ],
    challenges: [
      "Implementing audio streaming infrastructure",
      "Building playlist management system",
      "Creating music discovery algorithms",
      "Designing intuitive user interface"
    ],
    liveLink: "https://melody-heaven-demo.vercel.app",
    githubLink: "https://github.com/username/melody-heaven",
    timeline: [
      { phase: "Design & Prototyping", duration: "1 week", status: "completed" },
      { phase: "Audio System Setup", duration: "2 weeks", status: "completed" },
      { phase: "Frontend Development", duration: "3 weeks", status: "completed" },
      { phase: "Backend & Database", duration: "2 weeks", status: "completed" },
      { phase: "Testing & Optimization", duration: "1 week", status: "completed" }
    ],
    team: "Solo Project",
    role: "Full Stack Developer",
    status: "Portfolio Project",
    duration: "2 months"
  },
  {
    id: 7,
    title: "Netflix Clone",
    image: netflix,
    description: "Streaming platform clone with user authentication and video playback",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Entertainment",
    year: "2024",
    summary: "Netflix Clone",
    fullDescription: "A comprehensive Netflix clone that replicates the core functionality and design of the popular streaming platform. Features include user authentication, content browsing, video streaming, and personalized recommendations with a responsive design.",
    features: [
      "User authentication and profiles",
      "Video streaming and playback",
      "Content categorization and browsing",
      "Search functionality",
      "Responsive design",
      "Recommendation system"
    ],
    challenges: [
      "Replicating Netflix's complex UI design",
      "Implementing video streaming functionality",
      "Building recommendation algorithms",
      "Creating responsive grid layouts"
    ],
    liveLink: "https://netflix-clone-demo.vercel.app",
    githubLink: "https://github.com/username/netflix-clone",
    timeline: [
      { phase: "UI Replication", duration: "2 weeks", status: "completed" },
      { phase: "Authentication System", duration: "1 week", status: "completed" },
      { phase: "Video Integration", duration: "2 weeks", status: "completed" },
      { phase: "Responsive Design", duration: "1 week", status: "completed" },
      { phase: "Final Polish", duration: "1 week", status: "completed" }
    ],
    team: "Solo Project",
    role: "Frontend Developer",
    status: "Portfolio Project",
    duration: "2 months"
  },
];
