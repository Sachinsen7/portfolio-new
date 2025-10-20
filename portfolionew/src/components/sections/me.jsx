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



export default function Me() {
  const skills = [
    { name: "Next.js", icon: IconBrandNextjs, color: "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-400 dark:border-slate-600 shadow-sm" },
    { name: "TypeScript", icon: IconBrandTypescript, color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-400 dark:border-blue-600 shadow-sm" },
    { name: "React", icon: IconBrandReact, color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 border-cyan-400 dark:border-cyan-600 shadow-sm" },
    { name: "JavaScript", icon: IconBrandJavascript, color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-400 dark:border-yellow-600 shadow-sm" },
    { name: "Node.js", icon: IconBrandNodejs, color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-400 dark:border-green-600 shadow-sm" },
    { name: "Docker", icon: IconBrandDocker, color: "bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 border-sky-400 dark:border-sky-600 shadow-sm" },
    { name: "Material UI", icon: IconBrandReact, color: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 border-indigo-400 dark:border-indigo-600 shadow-sm" },
    { name: "Prisma", icon: IconDatabase, color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-400 dark:border-purple-600 shadow-sm" },
    { name: "Postman", icon: IconApi, color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-400 dark:border-orange-600 shadow-sm" },
    { name: "Redux", icon: IconBrandRedux, color: "bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 border-violet-400 dark:border-violet-600 shadow-sm" },
    { name: "Express", icon: IconBrandNodejs, color: "bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 border-emerald-400 dark:border-emerald-600 shadow-sm" },
    { name: "Fastify", icon: IconBrandNodejs, color: "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 border-teal-400 dark:border-teal-600 shadow-sm" },
    { name: "DaisyUI", icon: IconBrandTailwind, color: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 border-pink-400 dark:border-pink-600 shadow-sm" },
    { name: "Django", icon: IconBrandDjango, color: "bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200 border-lime-400 dark:border-lime-600 shadow-sm" },
    { name: "Tailwind CSS", icon: IconBrandTailwind, color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 border-cyan-400 dark:border-cyan-600 shadow-sm" },
    { name: "MongoDB", icon: IconBrandMongodb, color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-400 dark:border-green-600 shadow-sm" },
    { name: "Vercel", icon: IconBrandVercel, color: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-400 dark:border-gray-600 shadow-sm" },
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
