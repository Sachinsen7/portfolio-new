import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import LazyImage from "@/components/common/LazyImage";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandVercel,
  IconBrandMongodb,
} from "@tabler/icons-react";
import { useState } from "react";

// Sample projectsData (replace with your actual JSON data)
const projectsData = [
  {
    id: 1,
    title: "Yadav Bus Service Platform",
    image: "/assets/images/yadav-bus.jpg",
    summary: "A full-stack bus management system with ticket booking.",
    description: "Independently designed and implemented a bus management platform with dynamic ticket booking, cab booking, and hotel booking, integrating WhatsApp API, leading to a 90% boost in operational efficiency.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    link: "#",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Management Software Application",
    image: "/assets/images/management-app.jpg",
    summary: "A scalable management tool with real-time analytics.",
    description: "Engineered a management software system with user role-based access and automated workflow management, reducing manual overhead by 85%.",
    tech: ["JavaScript", "React", "MongoDB"],
    link: "#",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Gem Control Jewellery App",
    image: "/assets/images/gem-control.jpg",
    summary: "A jewellery management app with e-commerce features.",
    description: "Developed a full-stack web application for jewellery business management, featuring inventory, sales, and real-time dashboards with barcode generation.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    link: "#",
    category: "fullstack",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "frontend", "backend", "fullstack"];
  const filteredProjects = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="container mx-auto py-16 max-w-4xl" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-2xl text-start mb-8">
        Projects
      </h2>
      <Tabs defaultValue="all" onValueChange={setFilter}>
        <TabsList className="flex justify-start mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="px-4 py-2 text-sm text-foreground">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={filter}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="glass backdrop-blur rounded-2xl p-6">
                <CardHeader>
                  <LazyImage
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <CardTitle className="text-2xl font-bold text-center">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="glass backdrop-blur px-2 py-1 rounded-full text-sm text-foreground"
                      >
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
                        ) : (
                          tech
                        )}
                        {tech}
                      </span>
                    ))}
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
        </TabsContent>
      </Tabs>
    </section>
  );
}