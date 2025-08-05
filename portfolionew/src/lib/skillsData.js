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
} from "@tabler/icons-react";


export const basicSkills = ["React", "Tailwind CSS", "JavaScript", "Node.js", "Web3"];

export const detailedSkills = [
  { name: "React", icon: IconBrandReact, category: "Frontend" },
  { name: "JavaScript", icon: IconBrandJavascript, category: "Language" },
  { name: "Node.js", icon: IconBrandNodejs, category: "Backend" },
  { name: "Tailwind CSS", icon: IconBrandTailwind, category: "Styling" },
  { name: "MongoDB", icon: IconBrandMongodb, category: "Database" },
  { name: "Vercel", icon: IconBrandVercel, category: "Deployment" },
  { name: "Git", icon: IconBrandGit, category: "Tools" },
  { name: "GitHub", icon: IconBrandGithub, category: "Tools" },
  { name: "Figma", icon: IconBrandFigma, category: "Design" },
  { name: "VS Code", icon: IconBrandVscode, category: "Tools" },
];


export const skillsByCategory = {
  "Frontend": [
    { name: "React", icon: IconBrandReact },
    { name: "JavaScript", icon: IconBrandJavascript },
    { name: "Tailwind CSS", icon: IconBrandTailwind },
    { name: "HTML5", icon: null },
    { name: "CSS3", icon: null },
  ],
  "Backend": [
    { name: "Node.js", icon: IconBrandNodejs },
    { name: "Express.js", icon: null },
    { name: "REST APIs", icon: null },
    { name: "Authentication", icon: null },
  ],
  "Database": [
    { name: "MongoDB", icon: IconBrandMongodb },
    { name: "Mongoose", icon: null },
    { name: "Database Design", icon: null },
  ],
  "Tools & Deployment": [
    { name: "Git", icon: IconBrandGit },
    { name: "GitHub", icon: IconBrandGithub },
    { name: "Vercel", icon: IconBrandVercel },
    { name: "VS Code", icon: IconBrandVscode },
    { name: "Figma", icon: IconBrandFigma },
  ],
  "Emerging Tech": [
    { name: "Web3", icon: null },
    { name: "Blockchain", icon: null },
    { name: "Smart Contracts", icon: null },
  ]
};


export const techStack = [
  { name: "React", icon: IconBrandReact },
  { name: "JavaScript", icon: IconBrandJavascript },
  { name: "Node.js", icon: IconBrandNodejs },
  { name: "Tailwind CSS", icon: IconBrandTailwind },
  { name: "MongoDB", icon: IconBrandMongodb },
  { name: "Vercel", icon: IconBrandVercel },
];


export const getTechIcon = (tech) => {
  const iconMap = {
    "React": IconBrandReact,
    "JavaScript": IconBrandJavascript,
    "Tailwind CSS": IconBrandTailwind,
    "Node.js": IconBrandNodejs,
    "MongoDB": IconBrandMongodb,
    "Vercel": IconBrandVercel,
    "Git": IconBrandGit,
    "GitHub": IconBrandGithub,
    "Figma": IconBrandFigma,
    "VS Code": IconBrandVscode,
  };
  
  const IconComponent = iconMap[tech];
  return IconComponent ? IconComponent : null;
};
