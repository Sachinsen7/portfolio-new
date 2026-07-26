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

// Comprehensive tech icon mapping with enhanced coverage
export const techIconMap = {
    // Frontend Frameworks & Libraries
    React: IconBrandReact,
    "Next.js": IconBrandNextjs,
    "Next.js 15": IconBrandNextjs,
    "React 19": IconBrandReact,
    Redux: IconBrandRedux,
    "Material UI": IconBrandReact,
    "DaisyUI": IconBrandTailwind,

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

// Real, punchy brand colors per technology, used to render icons in their
// authentic color instead of a flat monochrome tint.
export const techColorMap = {
    React: "#61DAFB",
    "React 19": "#61DAFB",
    "React Native": "#61DAFB",
    "Next.js": "#71717A",
    "Next.js 14": "#71717A",
    "Next.js 15": "#71717A",
    Redux: "#764ABC",
    "Redux Toolkit": "#764ABC",
    "Material UI": "#007FFF",
    DaisyUI: "#1AD1A5",

    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    Python: "#3776AB",
    HTML: "#E34F26",
    HTML5: "#E34F26",
    CSS: "#1572B6",
    CSS3: "#1572B6",
    Go: "#00ADD8",

    "Tailwind CSS": "#38BDF8",
    "Framer Motion": "#0055FF",

    "Node.js": "#339933",
    Express: "#68A063",
    "Express.js": "#68A063",
    Django: "#44B78B",
    Fastify: "#9CA3AF",
    Bun: "#FBF0DF",

    MongoDB: "#47A248",
    Mongoose: "#880000",
    Prisma: "#5A67D8",
    PostgreSQL: "#4169E1",
    MySQL: "#4479A1",
    Redis: "#DC382D",
    Firebase: "#FFCA28",
    Supabase: "#3ECF8E",

    AWS: "#FF9900",
    Docker: "#2496ED",
    Vercel: "#A1A1AA",
    Cloudflare: "#F38020",
    "Azure AI": "#0089D6",
    Clerk: "#6C47FF",
    "Google Maps API": "#4285F4",
    Razorpay: "#0C2451",

    Git: "#F05032",
    GitHub: "#9CA3AF",
    "VS Code": "#007ACC",
    Figma: "#F24E1E",
    Postman: "#FF6C37",

    "WhatsApp API": "#25D366",
    "Spoonacular API": "#4BAF47",
    "REST API": "#9CA3AF",
    "REST APIs": "#9CA3AF",
    API: "#9CA3AF",
    Cloudinary: "#3448C5",
    "Socket.io": "#9CA3AF",
    "Socket.IO": "#9CA3AF",
    Twilio: "#F22F46",
    JWT: "#FB015B",
    Zod: "#3E67B1",
    Sharp: "#99CC00",

    Web3: "#F16822",
    Blockchain: "#F16822",
    "Smart Contracts": "#F16822",
    PWA: "#5A0FC8",
    "Responsive Design": "#9CA3AF",
    Aspose: "#9CA3AF",
};

// Function to get tech icon component - returns JSX element, colored with
// the technology's real brand color for a punchier, more recognizable look.
export const getTechIcon = (tech, className = "h-4 w-4") => {
    const IconComponent = techIconMap[tech];
    if (!IconComponent) return null;

    const color = techColorMap[tech];
    return <IconComponent className={className} style={color ? { color } : undefined} />;
};

// Function to check if tech has an icon
export const hasTechIcon = (tech) => {
    return techIconMap[tech] !== null && techIconMap[tech] !== undefined;
};

// Get all available tech names
export const getAvailableTech = () => {
    return Object.keys(techIconMap);
};