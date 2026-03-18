import profileImage from "/assets/images/me.jpg";
import {
  IconApi,
  IconBrandAws,
  IconBrandCloudflare,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGit,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVercel,
  IconBrandVscode,
  IconCode,
  IconDatabase,
  IconDeviceDesktop,
} from "@tabler/icons-react";

const coreSkills = [
  { name: "Next.js", icon: IconBrandNextjs },
  { name: "TypeScript", icon: IconBrandTypescript },
  { name: "React", icon: IconBrandReact },
  { name: "Node.js", icon: IconBrandNodejs },
  { name: "MongoDB", icon: IconBrandMongodb },
  { name: "Prisma", icon: IconDatabase },
  { name: "Tailwind CSS", icon: IconBrandTailwind },
  { name: "Docker", icon: IconBrandDocker },
  { name: "AWS", icon: IconBrandAws },
  { name: "Python", icon: IconBrandPython },
];

const additionalSkills = [
  { name: "Redux", icon: IconBrandRedux },
  { name: "Git", icon: IconBrandGit },
  { name: "Figma", icon: IconBrandFigma },
  { name: "VS Code", icon: IconBrandVscode },
  { name: "Vercel", icon: IconBrandVercel },
  { name: "Cloudflare", icon: IconBrandCloudflare },
  { name: "REST APIs", icon: IconApi },
];

const focusAreas = [
  "Building polished full-stack products with strong frontend structure and practical backend systems.",
  "Turning complex flows into interfaces that feel simple, fast, and easy to use.",
  "Working across product thinking, UI implementation, API integration, and deployment.",
];

export default function Me() {
  return (
    <section
      className="container mx-auto max-w-4xl px-4 py-10 sm:px-6"
      aria-labelledby="me-heading"
    >
      <div className="flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-3">
          <h2
            id="me-heading"
            className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
          >
            About
          </h2>
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
              Me
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
              A short introduction to how I work, what I focus on, and the tools
              I rely on most.
            </p>
          </div>
        </div>

        <div className="grid w-full gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="rounded-2xl border border-gray-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.03]">
            <img
              src={profileImage}
              alt="Sachin - Full Stack Developer"
              className="h-20 w-20 rounded-2xl object-cover"
            />
            <div className="mt-4">
              <h4 className="text-base font-semibold text-foreground">
                Sachin Sen
              </h4>
              <p className="mt-1 text-sm text-foreground-muted">
                Full-Stack Developer
              </p>
            </div>
            <div className="mt-5 space-y-2 text-sm text-foreground-muted">
              <p>Focused on product-minded web development.</p>
              <p>Interested in clean systems, thoughtful UI, and scalable delivery.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="space-y-4 text-sm leading-relaxed text-foreground-muted sm:text-[0.95rem]">
              <p>
                I build modern web applications with a strong balance between
                visual clarity and technical reliability. My work usually sits at
                the intersection of product thinking, frontend craftsmanship, and
                full-stack execution.
              </p>
              <p>
                Over the last year, I&apos;ve worked on SaaS platforms, internal tools,
                business systems, and developer-focused products using the modern
                JavaScript ecosystem.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-200 bg-gray-50/80 p-3 text-sm leading-relaxed text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full space-y-6">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <IconCode className="h-4 w-4 text-foreground-muted" />
              <h4 className="text-sm font-semibold text-foreground">
                Core Stack
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
              {coreSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="interactive-surface flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  >
                    <IconComponent className="h-4 w-4 text-foreground-muted" />
                    <span className="truncate">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2">
              <IconDeviceDesktop className="h-4 w-4 text-foreground-muted" />
              <h4 className="text-sm font-semibold text-foreground">
                Additional Tools
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="interactive-surface flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-1.5 text-xs text-foreground transition-colors duration-200 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  >
                    <IconComponent className="h-3.5 w-3.5 text-foreground-muted" />
                    <span>{skill.name}</span>
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
