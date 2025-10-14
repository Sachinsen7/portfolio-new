import profileImage from "/assets/images/me_and_bill.png";
import {
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandVercel,
  IconBrandDocker,
  IconBrandRedux,
  IconBrandDjango,
  // ,
  IconApi,
  IconDatabase,
} from "@tabler/icons-react";

import { User } from "lucide-react";

export default function Me() {
  const skills = [
    { name: "Next.js", icon: IconBrandNextjs, color: "bg-slate-100 text-slate-700 border-slate-200" },
    { name: "TypeScript", icon: IconBrandTypescript, color: "bg-blue-100 text-blue-700 border-blue-200" },
    { name: "React", icon: IconBrandReact, color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
    { name: "JavaScript", icon: IconBrandJavascript, color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
    { name: "Node.js", icon: IconBrandNodejs, color: "bg-green-100 text-green-700 border-green-200" },
    { name: "Docker", icon: IconBrandDocker, color: "bg-sky-100 text-sky-700 border-sky-200" },
    { name: "Material UI", icon: IconBrandReact, color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    { name: "Prisma", icon: IconDatabase, color: "bg-purple-100 text-purple-700 border-purple-200" },
    { name: "Postman", icon: IconApi, color: "bg-orange-100 text-orange-700 border-orange-200" },
    { name: "Redux", icon: IconBrandRedux, color: "bg-violet-100 text-violet-700 border-violet-200" },
    { name: "Express", icon: IconBrandNodejs, color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
    { name: "Fastify", icon: IconBrandNodejs, color: "bg-teal-100 text-teal-700 border-teal-200" },
    { name: "DaisyUI", icon: IconBrandTailwind, color: "bg-pink-100 text-pink-700 border-pink-200" },
    { name: "Django", icon: IconBrandDjango, color: "bg-lime-100 text-lime-700 border-lime-200" },
    { name: "Tailwind CSS", icon: IconBrandTailwind, color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
    { name: "MongoDB", icon: IconBrandMongodb, color: "bg-green-100 text-green-700 border-green-200" },
    { name: "Vercel", icon: IconBrandVercel, color: "bg-gray-100 text-gray-700 border-gray-200" },
  ];

  return (
    <section
      className="container mx-auto py-8 max-w-4xl"
      aria-labelledby="me-heading"
    >
      <div className="flex flex-col items-start gap-6">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <h2 id="me-heading" className="text-xl text-start">
            About
          </h2>
          <h3 className="text-2xl font-semibold text-foreground flex justify-center items-center">
            {/* <User className="h-6 w-6 mr-2 text-accent" aria-hidden="true" /> */}
            Me
          </h3>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Sachin - Full Stack Developer"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto sm:mx-0"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-lg text-foreground mb-2">
              Sachin Sen
            </h4>
            <p className="text-sm text-foreground-muted leading-relaxed mb-4">
              A passionate full-stack developer crafting modern web experiences
              with React and Web3. I specialize in building scalable
              applications that solve real-world problems and deliver
              exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full">
          <h4 className="font-bold text-base text-foreground mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm border ${skill.color}`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
