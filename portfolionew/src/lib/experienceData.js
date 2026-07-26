import logo from "/assets/images/logo.webp";
import agumentik from "/assets/images/agumentikgroup_logo.webp";
import {
  IconBrandAws,
  IconBrandDocker,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconCloud,
  IconDatabase,
} from "@tabler/icons-react";

export const experiences = [
  {
    id: "agumentik",
    company: "Agumentik Software Private Limited",
    role: "Cross Application Developer",
    period: "Feb 2026 - Present",
    location: "Remote",
    link: "https://www.agumentiksoftware.com/",
    logo: agumentik,
    logoAlt: "Agumentik Software Private Limited logo",
    status: "Current Chapter",
    summary:
      "Building cross-platform product flows that connect mobile experiences, web surfaces, APIs, and delivery systems into one cohesive product story.",
    focusAreas: ["Cross-platform product work", "System thinking", "Polished UX delivery"],
    technologies: [
      { label: "React Native", icon: IconBrandReactNative },
      { label: "Next.js", icon: IconBrandNextjs },
      { label: "TypeScript", icon: IconBrandTypescript },
      { label: "React", icon: IconBrandReact },
      { label: "Node.js", icon: IconBrandNodejs },
      { label: "AWS", icon: IconBrandAws },
      { label: "MongoDB", icon: IconBrandMongodb },
      { label: "Prisma", icon: IconDatabase },
      { label: "Docker", icon: IconBrandDocker },
      { label: "Cloudinary", icon: IconCloud },
      { label: "Tailwind CSS", icon: IconBrandTailwind },
      { label: "Vercel", icon: IconBrandVercel },
    ],
    highlights: [
      "Building cross-platform product flows with React Native, Next.js, and TypeScript.",
      "Working across APIs, data layers, and delivery pipelines with Node.js, Prisma, MongoDB, and AWS.",
      "Shipping polished interfaces with a strong focus on usability, system clarity, and maintainable code.",
    ],
  },
  {
    id: "adrs",
    company: "ADRS Technosoft",
    role: "Software Engineer",
    period: "Nov 2025 - Feb 2026",
    location: "On-site, Jabalpur, India",
    link: "https://www.adrstechno.com/",
    logo,
    logoAlt: "ADRS Technosoft logo",
    status: "Foundation Chapter",
    summary:
      "Worked close to real business workflows, turning operational needs into responsive frontend systems, backend-connected tools, and practical product improvements.",
    focusAreas: ["Full-stack execution", "Business systems", "Fast product iteration"],
    technologies: [
      { label: "Next.js", icon: IconBrandNextjs },
      { label: "React", icon: IconBrandReact },
      { label: "Node.js", icon: IconBrandNodejs },
      { label: "MongoDB", icon: IconBrandMongodb },
      { label: "Tailwind CSS", icon: IconBrandTailwind },
      { label: "Vercel", icon: IconBrandVercel },
    ],
    highlights: [
      "Built full-stack business platforms and internal dashboards for day-to-day operational workflows.",
      "Handled frontend implementation, backend integration, and feature refinement across multiple products.",
      "Worked closely on responsive UI, admin tools, and practical systems that improved delivery speed.",
    ],
  },
  {
    id: "adrs-internship",
    company: "ADRS Technosoft",
    role: "Frontend Developer Intern",
    period: "May 2025 - Oct 2025",
    location: "On-site, Jabalpur, India",
    link: "https://www.adrstechno.com/",
    logo,
    logoAlt: "ADRS Technosoft logo",
    status: "Internship Chapter",
    summary:
      "This was the chapter where I learned how production frontend work really feels: translating rough requirements into usable interfaces, improving responsiveness, and understanding how teams actually ship.",
    focusAreas: ["Frontend foundation", "Real-world team flow", "UI craft under guidance"],
    technologies: [
      { label: "Next.js", icon: IconBrandNextjs },
      { label: "React", icon: IconBrandReact },
      { label: "Node.js", icon: IconBrandNodejs },
      { label: "MongoDB", icon: IconBrandMongodb },
      { label: "Tailwind CSS", icon: IconBrandTailwind },
      { label: "Vercel", icon: IconBrandVercel },
    ],
    highlights: [
      "Built and refined frontend screens that helped me understand layout discipline, reusable components, and responsive behavior in a production setting.",
      "Collaborated with the team on fixes, implementation details, and UI polish while learning how feature work moves from task to release.",
      "Used this internship to strengthen my React and Next.js fundamentals before stepping into broader full-stack ownership.",
    ],
  },
];

export const experiencePrinciples = [
  {
    title: "Own the flow end-to-end",
    description:
      "I am comfortable moving between interface work, backend integration, and delivery details when a product needs one person to keep the experience coherent.",
  },
  {
    title: "Make complexity readable",
    description:
      "Most of my work lives in products with real workflow depth, so I focus on shaping interfaces that make advanced behavior feel obvious instead of heavy.",
  },
  {
    title: "Ship with taste, not just speed",
    description:
      "I care about the final feel of the product, not only whether a feature technically works. Clarity, pacing, and polish matter.",
  },
];
