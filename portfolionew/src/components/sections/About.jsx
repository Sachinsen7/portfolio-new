import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import logo from "/assets/images/logo.png";
import agumentik from "/assets/images/agumentikgroup_logo.jpg";
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
    company: "Agumentik Software Private Limited",
    role: "Cross Application Developer",
    period: "Feb 2026 - Present",
    location: "Remote",
    link: "https://www.agumentiksoftware.com/",
    logo: agumentik,
    logoAlt: "Agumentik Software Private Limited logo",
    status: "Current",
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
    company: "ADRS Technosoft",
    role: "Full Stack Developer",
    period: "May 2025 - Feb 2026",
    location: "Remote",
    link: "https://www.adrstechno.com/",
    logo,
    logoAlt: "ADRS Technosoft logo",
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
];

export default function About() {
  const [openCompany, setOpenCompany] = useState(experiences[0].company);

  return (
    <section
      className="container mx-auto max-w-4xl px-4 py-8 sm:px-6"
      aria-labelledby="about-heading"
    >
      <div className="mb-10 flex flex-col items-start gap-3">
        <h2
          id="about-heading"
          className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
        >
          Featured
        </h2>
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            Experience
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            A closer look at the teams I&apos;ve worked with, the tools I&apos;ve used,
            and the kind of product work I&apos;ve been trusted to ship.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {experiences.map((experience) => {
          const isOpen = openCompany === experience.company;

          return (
            <article
              key={experience.company}
              className="rounded-sm border border-gray-200/80 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenCompany((current) =>
                    current === experience.company ? null : experience.company
                  )
                }
                className="flex w-full flex-col gap-5 p-4 text-left transition-colors duration-200 hover:bg-gray-50/70 dark:hover:bg-white/[0.02] sm:p-5 md:flex-row md:items-start md:justify-between"
                aria-expanded={isOpen}
              >
                <div className="flex min-w-0 items-start gap-4">
                  <img
                    src={experience.logo}
                    alt={experience.logoAlt}
                    className="h-14 w-14 rounded-2xl border border-gray-200 bg-white p-2 object-contain dark:border-white/10 dark:bg-white/[0.04] sm:h-16 sm:w-16"
                  />

                  <div className="min-w-0">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-semibold text-foreground sm:text-lg">
                        {experience.company}
                      </h4>
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-foreground-muted transition-colors duration-200 hover:border-gray-400 hover:text-foreground dark:border-white/10 dark:hover:border-white/20"
                        aria-label={`Visit ${experience.company}`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                      {/* {experience.status && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                          <span className="h-2 w-2 rounded-full bg-green-500" />
                          {experience.status}
                        </span>
                      )} */}
                    </div>
                    <p className="text-sm text-foreground-muted">
                      {experience.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 md:justify-end">
                  <div className="text-sm text-foreground-muted md:text-right">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-foreground-muted transition-all duration-300 dark:border-white/10 ${
                      isOpen ? "rotate-180 text-foreground" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200/80 px-4 pb-5 pt-4 dark:border-white/10 sm:px-5 md:pl-[5.5rem]">
                      <div>
                        <h5 className="mb-3 text-sm font-semibold text-foreground">
                          Skills & Tools
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => {
                            const Icon = tech.icon;

                            return (
                              <div
                                key={tech.label}
                                className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 text-sm text-foreground transition-colors duration-200 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                              >
                                <Icon className="h-4 w-4 text-foreground-muted" />
                                <span className="font-tech text-[0.82rem]">{tech.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <ul className="mt-5 space-y-3">
                        {experience.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted sm:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
