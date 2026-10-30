import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/common/PageTransition";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";
import { useViewTransition } from "@/hooks/useViewTransition";
import { experiencePrinciples, experiences } from "@/lib/experienceData";
import { experienceGroups, getTag, logoClassName } from "@/lib/experienceGroups";
import { techColorMap } from "@/lib/techIcons.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const totalTechnologies = new Set(
  experiences.flatMap((experience) => experience.technologies.map((tech) => tech.label))
).size;

const summaryChips = [
  `${experiences.length} roles`,
  `${experienceGroups.length} companies`,
  `${totalTechnologies}+ tools`,
];

export default function ExperiencePage() {
  const { transitionBack, transitionTo } = useViewTransition();

  return (
    <ViewTransitionWrapper
      transitionKey="experience-page"
      fallbackAnimation="slide"
      className="min-h-screen"
    >
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <div className="page-backdrop" aria-hidden="true" />

          <Header />

          <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
            <section className="container mx-auto max-w-4xl px-4 pb-8 sm:px-6">
              <button
                type="button"
                onClick={() => transitionBack({ transitionName: "back-to-home" })}
                className="interactive-text-link inline-flex items-center gap-2 text-sm text-gray-600 hover:text-accent dark:text-gray-400 dark:hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-40px" }}
                variants={fadeUp}
                className="mt-8"
              >
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Career path
                </p>
                <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
                  Experience
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                  Where I have worked, what I did there and the tools I used.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {summaryChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-gray-200 bg-white/75 px-3 py-1 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="container mx-auto max-w-4xl px-4 pb-10 sm:px-6">
              <div className="space-y-4">
                {experienceGroups.map((group, groupIndex) => (
                  <motion.article
                    key={group.company}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-sm border border-gray-200/80 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[0.03] sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={group.logo}
                        alt={group.logoAlt}
                        className={`h-12 w-12 shrink-0 rounded-sm border p-1.5 object-contain ${logoClassName(group.company)}`}
                      />
                      <div className="min-w-0 flex-1">
                        <a
                          href={group.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex max-w-full items-center gap-1.5 text-lg font-semibold text-foreground transition-colors duration-200 hover:text-accent"
                        >
                          <span className="truncate">{group.company}</span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground-muted" />
                        </a>
                        <p className="text-xs text-foreground-muted">{group.location}</p>
                      </div>
                    </div>

                    <ol className="mt-6 space-y-8 border-l border-gray-200 pl-5 dark:border-white/10">
                      {group.roles.map((experience) => {
                        const tag = getTag(experience);

                        return (
                          <li key={experience.id} className="relative">
                            <span
                              className={`absolute -left-[1.62rem] top-[0.5rem] h-2.5 w-2.5 rounded-full ${tag.dot}`}
                              aria-hidden="true"
                            />

                            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                              <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-base font-semibold text-foreground sm:text-lg">
                                  {experience.role}
                                </h2>
                                <span
                                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] ${tag.pill}`}
                                >
                                  {tag.label}
                                </span>
                              </div>
                              <span className="text-xs text-foreground-muted">
                                {experience.period}
                              </span>
                            </div>

                            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                              {experience.summary}
                            </p>

                            <ul className="mt-3 space-y-2">
                              {experience.highlights.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground-muted"
                                >
                                  <span
                                    className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500"
                                    aria-hidden="true"
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {experience.technologies.map((tech) => {
                                const color = techColorMap[tech.label] ?? "var(--accent)";

                                return (
                                  <span
                                    key={tech.label}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50/80 px-2.5 py-1 text-[11px] text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                                  >
                                    <span
                                      className="h-1.5 w-1.5 rounded-full"
                                      style={{ backgroundColor: color }}
                                      aria-hidden="true"
                                    />
                                    {tech.label}
                                  </span>
                                );
                              })}
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="container mx-auto max-w-4xl px-4 pb-16 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    How I work
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                    What stays the same across roles
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    transitionTo("/projects", {
                      transitionName: "nav-projects",
                    })
                  }
                  className="interactive-surface inline-flex items-center gap-2 self-start rounded-sm border border-gray-200 bg-white/85 px-4 py-2.5 text-sm font-medium text-foreground hover:border-gray-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
                >
                  <span>See projects</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {experiencePrinciples.map((principle) => (
                  <div
                    key={principle.title}
                    className="rounded-sm border border-gray-200/80 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <p className="text-sm font-semibold text-foreground">{principle.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </PageTransition>
    </ViewTransitionWrapper>
  );
}
