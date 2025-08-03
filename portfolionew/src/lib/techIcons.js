import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandVercel,
  IconBrandGit,
  IconBrandGithub,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandFramerMotion,
} from "@tabler/icons-react";

// Comprehensive tech icon mapping
export const techIconMap = {
  // Frontend Technologies
  "React": IconBrandReact,
  "JavaScript": IconBrandJavascript,
  "HTML": IconBrandHtml5,
  "HTML5": IconBrandHtml5,
  "CSS": IconBrandCss3,
  "CSS3": IconBrandCss3,
  "Tailwind CSS": IconBrandTailwind,
  "Framer Motion": IconBrandFramerMotion,
  
  // Backend Technologies
  "Node.js": IconBrandNodejs,
  "Express": null,
  "Express.js": null,
  
  // Databases
  "MongoDB": IconBrandMongodb,
  "Mongoose": IconBrandMongodb,
  
  // Tools & Deployment
  "Git": IconBrandGit,
  "GitHub": IconBrandGithub,
  "Vercel": IconBrandVercel,
  "VS Code": IconBrandVscode,
  "Figma": IconBrandFigma,
  
  // APIs & Services
  "WhatsApp API": null,
  "Spoonacular API": null,
  "REST API": null,
  "API": null,
  
  // Other Technologies
  "Web3": null,
  "Blockchain": null,
  "Smart Contracts": null,
  "PWA": null,
  "Responsive Design": null,
};

// Function to get tech icon component
export const getTechIcon = (tech, className = "h-4 w-4") => {
  const IconComponent = techIconMap[tech];
  // return IconComponent ? <IconComponent className={className} /> : null;
};

// Function to check if tech has an icon
export const hasTechIcon = (tech) => {
  return techIconMap[tech] !== null && techIconMap[tech] !== undefined;
};

// Get all available tech names
export const getAvailableTech = () => {
  return Object.keys(techIconMap);
};
