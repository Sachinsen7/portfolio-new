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
  IconBrandTypescript,
  IconBrandPython,
  IconBrandNextjs,
  IconBrandDjango,
  IconBrandRedux,
  IconBrandDocker,
  IconBrandAws,
  IconBrandCloudflare,
  IconApi,
  IconDatabase,
  IconCloud,
  IconCode,
  IconBrain,
  IconBrandReactNative,
  IconBrandGolang
} from "@tabler/icons-react";

export const basicSkills = [
  "Next.js",
  "TypeScript",
  "React Native",
  "Go",
  "React", 
  "Node.js",
  "JavaScript",
  "Python",
  "AWS",
  "Docker",
  "MongoDB",
  "Prisma",
  "Tailwind CSS",
  "Redux",
];

export const detailedSkills = [
  { name: "Next.js", icon: IconBrandNextjs, category: "Framework", level: "Expert", color: "slate" },
  { name: "TypeScript", icon: IconBrandTypescript, category: "Language", level: "Expert", color: "blue" },
  { name: "React", icon: IconBrandReact, category: "Frontend", level: "Expert", color: "cyan" },
  { name: "React Native", icon: IconBrandReactNative, category: "Frontend", level: "Advanced", color: "cyan" },
  { name: "Node.js", icon: IconBrandNodejs, category: "Backend", level: "Expert", color: "green" },
  { name: "JavaScript", icon: IconBrandJavascript, category: "Language", level: "Expert", color: "yellow" },
  { name: "Go", icon: IconBrandGolang, category: "Language", level: "Advanced", color: "blue" },


  { name: "Python", icon: IconBrandPython, category: "Language", level: "Advanced", color: "blue" },
  { name: "AWS", icon: IconBrandAws, category: "Cloud", level: "Advanced", color: "orange" },
  { name: "Docker", icon: IconBrandDocker, category: "DevOps", level: "Advanced", color: "sky" },
  { name: "MongoDB", icon: IconBrandMongodb, category: "Database", level: "Advanced", color: "emerald" },
  { name: "Prisma", icon: IconDatabase, category: "ORM", level: "Advanced", color: "purple" },

  
  { name: "Tailwind CSS", icon: IconBrandTailwind, category: "Styling", level: "Expert", color: "cyan" },
  { name: "Redux", icon: IconBrandRedux, category: "State Management", level: "Advanced", color: "violet" },

  // Backend Frameworks
  { name: "Express", icon: IconBrandNodejs, category: "Backend", level: "Advanced", color: "emerald" },
  { name: "Django", icon: IconBrandDjango, category: "Framework", level: "Advanced", color: "lime" },

  // Tools & Services
  { name: "Git", icon: IconBrandGit, category: "Version Control", level: "Expert", color: "red" },
  { name: "GitHub", icon: IconBrandGithub, category: "Platform", level: "Expert", color: "gray" },
  { name: "Vercel", icon: IconBrandVercel, category: "Deployment", level: "Advanced", color: "gray" },
  { name: "Cloudflare", icon: IconBrandCloudflare, category: "CDN", level: "Advanced", color: "orange" },
  { name: "VS Code", icon: IconBrandVscode, category: "IDE", level: "Expert", color: "blue" },
  { name: "Figma", icon: IconBrandFigma, category: "Design", level: "Advanced", color: "pink" },

  // APIs & Integration
  { name: "REST APIs", icon: IconApi, category: "API", level: "Expert", color: "indigo" },
  { name: "Cloudinary", icon: IconCloud, category: "Media", level: "Advanced", color: "blue" },
];

export const skillsByCategory = {
  "Core Technologies": [
    { name: "Next.js", icon: IconBrandNextjs, level: "Expert" },
    { name: "TypeScript", icon: IconBrandTypescript, level: "Expert" },
    { name: "React", icon: IconBrandReact, level: "Expert" },
    { name: "Node.js", icon: IconBrandNodejs, level: "Expert" },
    { name: "JavaScript", icon: IconBrandJavascript, level: "Expert" },
    { name: "Go", icon: IconBrandGolang, level: "Advanced" },
    { name: "React Native", icon: IconBrandReactNative, level: "Advanced" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: IconBrandAws, level: "Advanced" },
    { name: "Docker", icon: IconBrandDocker, level: "Advanced" },
    { name: "Vercel", icon: IconBrandVercel, level: "Advanced" },
    { name: "Cloudflare", icon: IconBrandCloudflare, level: "Advanced" },
  ],
  "Database & Backend": [
    { name: "MongoDB", icon: IconBrandMongodb, level: "Advanced" },
    { name: "Prisma", icon: IconDatabase, level: "Advanced" },
    { name: "Express", icon: IconBrandNodejs, level: "Advanced" },
    { name: "Django", icon: IconBrandDjango, level: "Advanced" },
    { name: "REST APIs", icon: IconApi, level: "Expert" },
  ],
  "Frontend & UI": [
    { name: "Tailwind CSS", icon: IconBrandTailwind, level: "Expert" },
    { name: "Redux", icon: IconBrandRedux, level: "Advanced" },
    { name: "Framer Motion", icon: IconCode, level: "Advanced" },
    { name: "Material UI", icon: IconBrandReact, level: "Advanced" },
  ],
  "Development Tools": [
    { name: "Git", icon: IconBrandGit, level: "Expert" },
    { name: "GitHub", icon: IconBrandGithub, level: "Expert" },
    { name: "VS Code", icon: IconBrandVscode, level: "Expert" },
    { name: "Figma", icon: IconBrandFigma, level: "Advanced" },
  ],
  "AI & Integration": [
    { name: "Cloudinary", icon: IconCloud, level: "Advanced" },
    { name: "Azure AI", icon: IconBrain, level: "Advanced" },
    { name: "OpenAI API", icon: IconBrain, level: "Intermediate" },
    { name: "Webhook Integration", icon: IconApi, level: "Advanced" },
  ],
};

export const techStack = [
  { name: "React", icon: IconBrandReact },
  { name: "JavaScript", icon: IconBrandJavascript },
  { name: "Node.js", icon: IconBrandNodejs },
  { name: "Tailwind CSS", icon: IconBrandTailwind },
  { name: "MongoDB", icon: IconBrandMongodb },
  { name: "Vercel", icon: IconBrandVercel },
  { name: "Git", icon: IconBrandGit },
  { name: "GitHub", icon: IconBrandGithub },
  { name: "Figma", icon: IconBrandFigma },
  { name: "VS Code", icon: IconBrandVscode },
];

export const getTechIcon = (tech) => {
  const iconMap = {
    React: IconBrandReact,
    JavaScript: IconBrandJavascript,
    "Tailwind CSS": IconBrandTailwind,
    "Node.js": IconBrandNodejs,
    MongoDB: IconBrandMongodb,
    Vercel: IconBrandVercel,
    Git: IconBrandGit,
    GitHub: IconBrandGithub,
    Figma: IconBrandFigma,
    "VS Code": IconBrandVscode,
  };

  const IconComponent = iconMap[tech];
  return IconComponent ? IconComponent : null;
};
