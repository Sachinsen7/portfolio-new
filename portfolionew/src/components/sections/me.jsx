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
  IconBrandPython,
  IconBrandAws,
  IconBrandGit,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandCloudflare,
  IconApi,
  IconDatabase,
  IconBrain,
  IconCode,
  IconDeviceDesktop,
} from "@tabler/icons-react";



export default function Me() {
  // Core Technical Skills - Top 10+ Best Skills
  const coreSkills = [
    {
      name: "Next.js",
      icon: IconBrandNextjs,
      color: "bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Expert"
    },
    {
      name: "TypeScript",
      icon: IconBrandTypescript,
      color: "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 text-blue-900 dark:text-blue-100 border-blue-300 dark:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Expert"
    },
    {
      name: "React",
      icon: IconBrandReact,
      color: "bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900 dark:to-cyan-800 text-cyan-900 dark:text-cyan-100 border-cyan-300 dark:border-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Expert"
    },
    {
      name: "Node.js",
      icon: IconBrandNodejs,
      color: "bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 text-green-900 dark:text-green-100 border-green-300 dark:border-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Expert"
    },
    {
      name: "JavaScript",
      icon: IconBrandJavascript,
      color: "bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800 text-yellow-900 dark:text-yellow-100 border-yellow-300 dark:border-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Expert"
    },
    {
      name: "Python",
      icon: IconBrandPython,
      color: "bg-gradient-to-r from-blue-50 to-yellow-50 dark:from-blue-900 dark:to-yellow-900 text-blue-900 dark:text-blue-100 border-blue-300 dark:border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Advanced"
    },
    {
      name: "AWS",
      icon: IconBrandAws,
      color: "bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 text-orange-900 dark:text-orange-100 border-orange-300 dark:border-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Advanced"
    },
    {
      name: "Docker",
      icon: IconBrandDocker,
      color: "bg-gradient-to-r from-sky-50 to-sky-100 dark:from-sky-900 dark:to-sky-800 text-sky-900 dark:text-sky-100 border-sky-300 dark:border-sky-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Advanced"
    },
    {
      name: "MongoDB",
      icon: IconBrandMongodb,
      color: "bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 text-emerald-900 dark:text-emerald-100 border-emerald-300 dark:border-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Advanced"
    },
    {
      name: "Prisma",
      icon: IconDatabase,
      color: "bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 text-purple-900 dark:text-purple-100 border-purple-300 dark:border-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
      level: "Advanced"
    }
  ];

  // Additional Professional Skills
  const additionalSkills = [
    { name: "Tailwind CSS", icon: IconBrandTailwind, color: "bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900 dark:to-teal-900 text-cyan-900 dark:text-cyan-100 border-cyan-300 dark:border-cyan-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "Redux", icon: IconBrandRedux, color: "bg-gradient-to-r from-violet-50 to-violet-100 dark:from-violet-900 dark:to-violet-800 text-violet-900 dark:text-violet-100 border-violet-300 dark:border-violet-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "Express", icon: IconBrandNodejs, color: "bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900 dark:to-green-900 text-emerald-900 dark:text-emerald-100 border-emerald-300 dark:border-emerald-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "Django", icon: IconBrandDjango, color: "bg-gradient-to-r from-lime-50 to-green-50 dark:from-lime-900 dark:to-green-900 text-lime-900 dark:text-lime-100 border-lime-300 dark:border-lime-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "Git", icon: IconBrandGit, color: "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 text-red-900 dark:text-red-100 border-red-300 dark:border-red-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "Figma", icon: IconBrandFigma, color: "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900 dark:to-purple-900 text-pink-900 dark:text-pink-100 border-pink-300 dark:border-pink-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "VS Code", icon: IconBrandVscode, color: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 text-blue-900 dark:text-blue-100 border-blue-300 dark:border-blue-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "Vercel", icon: IconBrandVercel, color: "bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "Cloudflare", icon: IconBrandCloudflare, color: "bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 text-orange-900 dark:text-orange-100 border-orange-300 dark:border-orange-600 shadow-md hover:shadow-lg transition-all duration-300" },
    { name: "REST APIs", icon: IconApi, color: "bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900 dark:to-blue-900 text-indigo-900 dark:text-indigo-100 border-indigo-300 dark:border-indigo-600 shadow-md hover:shadow-lg transition-all duration-300" }
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
            <div className="space-y-3">
              <p className="text-sm text-foreground-muted leading-relaxed">
                <span className="font-semibold text-accent">Full-Stack Developer</span> with 1 year of experience building enterprise-grade SaaS platforms and scalable web applications. Specialized in modern JavaScript ecosystem with expertise in Next.js, React, TypeScript, and cloud technologies.
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed">
                I architect and develop comprehensive solutions from AI-powered media processing platforms to complex business management systems. My work spans across <span className="font-medium text-foreground">fintech, e-commerce, education, and enterprise software</span>, delivering solutions that serve thousands of users globally.
              </p>

            </div>
          </div>
        </div>

        {/* Core Skills Section */}
        <div className="w-full space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <IconCode className="h-5 w-5 text-accent" />
              <h4 className="font-bold text-base text-foreground">Core Expertise</h4>

            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {coreSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`group relative flex flex-col items-center gap-2 p-3 rounded-xl text-sm border cursor-pointer ${skill.color}`}
                    title={`${skill.name} - ${skill.level}`}
                  >
                    <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium text-center text-xs">{skill.name}</span>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Skills */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <IconDeviceDesktop className="h-5 w-5 text-foreground-muted" />
              <h4 className="font-semibold text-sm text-foreground">Additional Technologies</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border cursor-pointer ${skill.color}`}
                  >
                    <IconComponent className="h-3.5 w-3.5" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
