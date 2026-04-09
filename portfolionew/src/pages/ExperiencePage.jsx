import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Layers3,
  MapPin,
  Sparkles,
  Workflow,
} from "lucide-react";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/common/PageTransition";
import ScrollProgress from "@/components/common/ScrollProgress";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";
import { useViewTransition } from "@/hooks/useViewTransition";
import { experiencePrinciples, experiences } from "@/lib/experienceData";

const totalTechnologies = new Set(
  experiences.flatMap((experience) => experience.technologies.map((tech) => tech.label))
).size;

const introMetrics = [
  { label: "Roles", value: `${experiences.length}`, icon: Briefcase },
  { label: "Unique tools", value: `${totalTechnologies}+`, icon: Layers3 },
  { label: "Working style", value: "Product-minded", icon: Workflow },
];

export default function ExperiencePage() {
  const { transitionBack, transitionTo } = useViewTransition();
  const currentRole = experiences[0];

  return (
    <ViewTransitionWrapper
      transitionKey="experience-page"
      fallbackAnimation="slide"
      className="min-h-screen"
    >
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <ScrollProgress />
          <div className="page-backdrop" aria-hidden="true" />
          <div className="light-dot-pattern" aria-hidden="true" />

          <Header />

          <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
            <section className="container mx-auto max-w-6xl px-4 pb-8 sm:px-6">
              <button
                type="button"
                onClick={() => transitionBack({ transitionName: "back-to-home" })}
                className="interactive-text-link inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>

              <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_380px]">
                <div className="max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Career Path
                  </p>
                  <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
                    Experience, told like product chapters instead of a plain resume.
                  </h1>
                  <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
                    This page is a better view of how I have grown: the teams I worked with,
                    the systems I touched, and the kind of product responsibility I have
                    already handled across frontend, backend, and delivery.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {introMetrics.map((metric) => {
                      const Icon = metric.icon;

                      return (
                        <div
                          key={metric.label}
                          className="rounded-sm border border-gray-200/80 bg-white/75 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.03]"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
                              {metric.label}
                            </p>
                            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gray-200 bg-gray-50/80 dark:border-white/10 dark:bg-white/[0.04]">
                              <Icon className="h-4 w-4 text-foreground-muted" />
                            </span>
                          </div>
                          <p className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">
                            {metric.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-sm border border-sky-200/70 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 shadow-[0_18px_50px_rgba(14,165,233,0.12)] dark:border-sky-400/15 dark:from-sky-400/10 dark:via-white/[0.03] dark:to-cyan-400/10">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
                  <p className="text-[11px] uppercase tracking-[0.18em] text-sky-700 dark:text-sky-200">
                    Current chapter
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold text-foreground">
                    {currentRole.role}
                  </h2>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {currentRole.company}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-foreground-muted">
                    <span className="rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.05]">
                      {currentRole.period}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.05]">
                      <MapPin className="h-3.5 w-3.5" />
                      {currentRole.location}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-foreground-muted">
                    {currentRole.summary}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {currentRole.focusAreas.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-sm border border-white/70 bg-white/70 px-3.5 py-3 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.04]"
                      >
                        <span className="h-2 w-2 rounded-full bg-sky-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto max-w-6xl px-4 pb-8 sm:px-6">
              <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
                <div className="space-y-4 lg:sticky lg:top-32 lg:self-start">
                  <div className="rounded-sm border border-gray-200/80 bg-white/75 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-foreground-muted" />
                      <p className="text-sm font-semibold text-foreground">What this experience shows</p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                      I have mostly worked in environments where one person needs to think
                      across product clarity, implementation detail, and shipping pressure at
                      the same time.
                    </p>
                  </div>

                  <div className="rounded-sm border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 p-5 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]">
                    <p className="text-sm font-semibold text-foreground">Shared pattern</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                      The repeated theme across roles is simple: make complex systems easier to
                      use, keep the codebase maintainable, and deliver something that feels
                      considered when it reaches people.
                    </p>
                  </div>
                </div>

                <div className="relative pl-6 sm:pl-8">
                  <div className="absolute bottom-0 left-1.5 top-0 w-px bg-gradient-to-b from-sky-400/70 via-sky-300/40 to-transparent sm:left-2" />

                  <div className="space-y-6">
                    {experiences.map((experience, index) => (
                      <motion.article
                        key={experience.id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                        className="relative"
                      >
                        <span className="absolute -left-[1.6rem] top-8 h-3.5 w-3.5 rounded-full border border-sky-300 bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.75)] dark:border-sky-300/60 dark:bg-[#0a0a0a] dark:shadow-[0_0_0_6px_rgba(10,10,10,0.85)] sm:-left-[2rem]" />

                        <div className="rounded-sm border border-gray-200/80 bg-white/82 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
                          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
                            <div>
                              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div className="flex min-w-0 items-start gap-4">
                                  <img
                                    src={experience.logo}
                                    alt={experience.logoAlt}
                                    className="h-16 w-16 rounded-sm border border-gray-200 bg-white p-2 object-contain dark:border-white/10 dark:bg-white/[0.04]"
                                  />

                                  <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <p className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-sky-700 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-200">
                                        {experience.status}
                                      </p>
                                      <p className="text-[11px] uppercase tracking-[0.16em] text-foreground-muted">
                                        {experience.period}
                                      </p>
                                    </div>
                                    <h2 className="mt-3 text-2xl font-semibold text-foreground">
                                      {experience.role}
                                    </h2>
                                    <p className="mt-1 text-base text-foreground-muted">
                                      {experience.company}
                                    </p>
                                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1.5 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.04]">
                                      <MapPin className="h-3.5 w-3.5" />
                                      <span>{experience.location}</span>
                                    </div>
                                  </div>
                                </div>

                                <a
                                  href={experience.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="interactive-surface inline-flex items-center gap-2 self-start rounded-sm border border-gray-200 bg-white/85 px-3 py-2 text-sm text-foreground hover:border-gray-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
                                >
                                  <span>Visit company</span>
                                  <ArrowUpRight className="h-4 w-4" />
                                </a>
                              </div>

                              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:text-base">
                                {experience.summary}
                              </p>

                              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                {experience.focusAreas.map((area) => (
                                  <div
                                    key={area}
                                    className="rounded-sm border border-gray-200/80 bg-gray-50/85 px-3.5 py-3 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.04]"
                                  >
                                    {area}
                                  </div>
                                ))}
                              </div>

                              <div className="mt-6">
                                <p className="text-sm font-semibold text-foreground">
                                  Key Contributions
                                </p>
                                <div className="mt-3 space-y-3">
                                  {experience.highlights.map((item) => (
                                    <div
                                      key={item}
                                      className="flex items-start gap-3 rounded-sm border border-gray-200/80 bg-white/75 px-4 py-3 text-sm leading-relaxed text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                                    >
                                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                                      <span>{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="rounded-sm border border-gray-200/80 bg-gradient-to-br from-gray-50 to-white p-5 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]">
                              <p className="text-sm font-semibold text-foreground">Toolbox in this chapter</p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {experience.technologies.map((tech) => {
                                  const Icon = tech.icon;

                                  return (
                                    <div
                                      key={tech.label}
                                      className="inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-white/85 px-3 py-2 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.04]"
                                    >
                                      <Icon className="h-4 w-4 text-foreground-muted" />
                                      <span className="font-tech text-[0.8rem]">{tech.label}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto max-w-6xl px-4 pb-16 sm:px-6">
              <div className="rounded-sm border border-gray-200/80 bg-white/78 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Working Principles
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                      What stays consistent across roles
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
                    <span>See projects next</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {experiencePrinciples.map((principle) => (
                    <div
                      key={principle.title}
                      className="rounded-sm border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 p-5 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]"
                    >
                      <p className="text-lg font-semibold text-foreground">{principle.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                        {principle.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </PageTransition>
    </ViewTransitionWrapper>
  );
}
