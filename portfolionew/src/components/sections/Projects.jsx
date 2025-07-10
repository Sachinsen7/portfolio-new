import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import projectsData from "@/assets/data/projects.json";


export default function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "frontend", "backend", "fullstack"];
  const filteredProjects = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <AnimatedSection id="projects" className="section">
      <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
            <Tabs defaultValue="all" onValueChange={setFilter}>
                <TabsList className="flex justify-center mb-8">
                    {categories.map((category) => (
                    <TabsTrigger key={category} value={category} className="px-4 py-2">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </TabsTrigger>
                    ))}
                </TabsList>
                <TabsContent value={filter}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                        <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Card className="cursor-pointer hover:shadow-xl transition-shadow">
                                        <CardHeader>
                                            <CardTitle>{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded" />
                                            <p className="mt-2">{project.summary}</p>
                                        </CardContent>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="bg-[var(--card-bg)] p-6 rounded-lg max-w-2xl">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary">
                                        View Project
                                    </a>
                                </DialogContent>
                            </Dialog>
                        </motion.div>
                     ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </AnimatedSection>
  );
}