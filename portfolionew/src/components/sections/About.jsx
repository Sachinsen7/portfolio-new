import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Globe } from "lucide-react";
import { experiences } from "@/lib/experienceData";
import { techColorMap } from "@/lib/techIcons.jsx";
import { useViewTransition } from "@/hooks/useViewTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const [openExperience, setOpenExperience] = useState(experiences[0].id);
  const { transitionTo } = useViewTransition();

  return (
    <section
      id="about"
      className="container mx-auto max-w-4xl px-4 py-8 sm:px-6"
      aria-labelledby="about-heading"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-40px" }}
        variants={fadeUp}
        className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="max-w-2xl">
          <h2
            id="about-heading"
            className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
          >
            Featured
          </h2>
          <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
            Experience
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            A quick preview of where I&apos;ve worked and the kind of product work I&apos;ve
            been trusted to ship. The full story now lives on a dedicated page.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            transitionTo("/experience", {
              transitionName: "nav-experience",
            })
          }
          className="interactive-surface inline-flex items-center gap-2 self-start rounded-sm border border-gray-200 bg-white/80 px-4 py-2.5 text-sm font-medium text-foreground shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-gray-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
        >
          <span>Open full timeline</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </motion.div>

      <div className="space-y-4">
        {experiences.map((experience, expIndex) => {
          const isOpen = openExperience === experience.id;

          return (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.4, delay: expIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-sm border border-gray-200/80 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenExperience((current) =>
                    current === experience.id ? null : experience.id
                  )
                }
                className="flex w-full flex-col gap-5 p-4 text-left transition-colors duration-200 hover:bg-gray-50/70 dark:hover:bg-white/[0.02] sm:p-5 md:flex-row md:items-start md:justify-between"
                aria-expanded={isOpen}
              >
                <div className="flex min-w-0 items-start gap-4">
                  <img
                    src={experience.logo}
                    alt={experience.logoAlt}
                    className="h-14 w-14 rounded-sm border border-gray-200 bg-white p-2 object-contain dark:border-white/10 dark:bg-white/[0.04] sm:h-16 sm:w-16"
                  />

                  <div className="min-w-0">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-semibold text-foreground sm:text-lg">
                        {experience.company}
                      </h4>
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-accent dark:border-accent/30 dark:bg-accent/10 dark:text-accent">
                        {experience.status}
                      </span>
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
                            const color = techColorMap[tech.label] ?? "var(--accent)";

                            return (
                              <div
                                key={tech.label}
                                className="interactive-surface inline-flex items-center gap-2.5 rounded-sm border border-gray-200 bg-gray-50/80 py-2 pl-2 pr-3.5 text-sm text-foreground transition-colors duration-200 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                              >
                                <span
                                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                                  style={{ backgroundColor: `${color}22` }}
                                >
                                  <Icon className="h-4 w-4" style={{ color }} />
                                </span>
                                <span className="font-tech text-[0.82rem]">{tech.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <ul className="mt-5 space-y-3">
                        <li className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                          <span>{experience.summary}</span>
                        </li>
                        <li className="pt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                          Key Contributions
                        </li>
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
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
