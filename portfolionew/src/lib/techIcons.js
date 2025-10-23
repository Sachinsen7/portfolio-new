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
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandDjango,
  IconBrandRedux,
  IconBrandDocker,
  IconBrandAws,
  IconBrandCloudflare,
  IconApi,
  IconDatabase,
  IconCloud,
  IconCode,
} from "@tabler/icons-react";

export const techIconMap = {
  React: IconBrandReact,
  "Next.js": IconBrandNextjs,
  "Next.js 15": IconBrandNextjs,
  "React 19": IconBrandReact,
  Redux: IconBrandRedux,
  "Material UI": IconBrandReact,
  DaisyUI: IconBrandTailwind,

  // Languages
  JavaScript: IconBrandJavascript,
  TypeScript: IconBrandTypescript,
  Python: IconBrandPython,
  HTML: IconBrandHtml5,
  HTML5: IconBrandHtml5,
  CSS: IconBrandCss3,
  CSS3: IconBrandCss3,

  // Styling & UI
  "Tailwind CSS": IconBrandTailwind,
  "Framer Motion": IconBrandFramerMotion,

  // Backend Technologies
  "Node.js": IconBrandNodejs,
  Express: IconBrandNodejs,
  "Express.js": IconBrandNodejs,
  Django: IconBrandDjango,
  Fastify: IconBrandNodejs,

  // Databases & ORMs
  MongoDB: IconBrandMongodb,
  Mongoose: IconBrandMongodb,
  Prisma: IconDatabase,
  PostgreSQL: IconDatabase,

  // Cloud & DevOps
  AWS: IconBrandAws,
  Docker: IconBrandDocker,
  Vercel: IconBrandVercel,
  Cloudflare: IconBrandCloudflare,
  "Azure AI": IconCloud,
  Clerk: IconCode,

  // Tools & Development
  Git: IconBrandGit,
  GitHub: IconBrandGithub,
  "VS Code": IconBrandVscode,
  Figma: IconBrandFigma,
  Postman: IconApi,

  // APIs & Services
  "WhatsApp API": IconApi,
  "Spoonacular API": IconApi,
  "REST API": IconApi,
  "REST APIs": IconApi,
  API: IconApi,
  Cloudinary: IconCloud,

  // Other Technologies
  Web3: IconCode,
  Blockchain: IconCode,
  "Smart Contracts": IconCode,
  PWA: IconCode,
  "Responsive Design": IconCode,
  "Socket.io": IconCode,
  Aspose: IconCode,
};

export const getTechIcon = (tech, className = "h-4 w-4") => {
  const IconComponent = techIconMap[tech];
  if (!IconComponent) return null;

  return IconComponent;
};

export const hasTechIcon = (tech) => {
  return techIconMap[tech] !== null && techIconMap[tech] !== undefined;
};

export const getAvailableTech = () => {
  return Object.keys(techIconMap);
};
