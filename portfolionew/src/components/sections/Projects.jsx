import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
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
  IconBrandVercel,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { GithubIcon, Globe } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Yadav Bus Service Platform",
    image: yadav_bus,
    summary: "A full-stack bus management system with ticket booking.",
    description: "Built a bus platform with ticket, cab, and hotel booking + WhatsApp API, boosting efficiency by 90%.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    link: "#",
  },
  {
    id: 2,
    title: "Management Software",
    image: ecommerce,
    summary: "A scalable management tool with real-time analytics.",
    description: "Created role-based management software with automated workflows, cutting manual work by 85%.",
    tech: ["JavaScript", "React", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "ADRS Gem Control",
    image: gem_control,
    summary: "A jewellery management app with e-commerce features.",
    description: "Developed a full-stack web application for jewellery business management, featuring inventory, sales, and real-time dashboards with barcode generation.",
    tech: ["React", "Redux", "Material UI", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 4,
    title: "Course Selling App",
    image: learnsphere,
    summary: "Online learning plateform.",
    description: "Developed a full-stack web application for jewellery business management, featuring inventory, sales, and real-time dashboards with barcode generation.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    id: 5,
    title: "Dish Descovery App",
    image: recipe_finder,
    summary: "Recipe Finder App",
    description: "Developed a full-stack web application for jewellery business management, featuring inventory, sales, and real-time dashboards with barcode generation.",
    tech: ["React", "Tailwind CSS", "Spooncular API"],
    link: "#",
  },
  {
    id: 6,
    title: "Melody Heven",
    image: music_player,
    summary: "Music Player",
    description: "Developed a full-stack web application for jewellery business management, featuring inventory, sales, and real-time dashboards with barcode generation.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    id: 6,
    title: "Netflix Clone",
    image: netflix,
    summary: "Netflix",
    description: "Developed a full-stack web application for jewellery business management, featuring inventory, sales, and real-time dashboards with barcode generation.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto py-8 max-w-4xl" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-2xl text-start mb-8 font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projectsData.map((project) => (
          <Card key={project.id} className="glass backdrop-blur rounded-2xl p-1 md:p-4">
            <CardHeader>
              <LazyImage
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="rounded-md object-cover mx-auto mb-4"
              />
              <CardTitle className="text-xl text-start flex items-center justify-between">
                {project.title}
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 cursor-pointer" />
                  <GithubIcon className="h-4 w-4 cursor-pointer" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base text-start text-gray-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 flex-col justify-center">
                <h2 className="font-bold text-start">Technologies</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-glass backdrop-blur flex px-2 py-1 rounded-md text-sm text-foreground">
                      {tech === "React" ? (
                        <IconBrandReact className="h-4 w-4 mr-1" />
                      ) : tech === "JavaScript" ? (
                        <IconBrandJavascript className="h-4 w-4 mr-1" />
                      ) : tech === "Tailwind CSS" ? (
                        <IconBrandTailwind className="h-4 w-4 mr-1" />
                      ) : tech === "Node.js" ? (
                        <IconBrandNodejs className="h-4 w-4 mr-1" />
                      ) : tech === "Vercel" ? (
                        <IconBrandVercel className="h-4 w-4 mr-1" />
                      ) : tech === "MongoDB" ? (
                        <IconBrandMongodb className="h-4 w-4 mr-1" />
                      ) : null}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-accent hover:underline"
                aria-label={`View ${project.title} project`}
              >
                View Project
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
