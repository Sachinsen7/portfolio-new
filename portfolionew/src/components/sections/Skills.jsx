import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import AnimatedSection  from "@/components/common/AnimatedSection";
import skillsData from "@/assets/data/skills.json";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <TooltipProvider>
          <div className="space-y-4 max-w-2xl mx-auto">
            {skillsData.map((skill, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="flex items-center">
                    <span className="w-32">{skill.name}</span>
                    <motion.div
                      className="flex-1 bg-primary h-6 rounded"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </AnimatedSection>
  );
}