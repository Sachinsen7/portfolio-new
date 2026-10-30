import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/experienceData";
import { techColorMap } from "@/lib/techIcons.jsx";
import { useViewTransition } from "@/hooks/useViewTransition";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const TAGS = {
  current: {
    label: "Current",
    pill: "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-300",
    dot: "bg-green-500",
  },
  internship: {
    label: "Internship",
    pill: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
  },
  previous: {
    label: "Previous",
    pill: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
    dot: "bg-sky-500",
  },
};

const getTag = (experience) => {
  if (/present/i.test(experience.period)) return TAGS.current;
  if (/intern/i.test(experience.role)) return TAGS.internship;
  return TAGS.previous;
};

const groups = experiences.reduce((list, experience) => {
  const existing = list.find((group) => group.company === experience.company);
  if (existing) {
    existing.roles.push(experience);
    experience.technologies.forEach((tech) => {
      if (!existing.technologies.some((item) => item.label === tech.label)) {
        existing.technologies.push(tech);
      }
    });
    return list;
  }

  list.push({
    company: experience.company,
    link: experience.link,
    logo: experience.logo,
    logoAlt: experience.logoAlt,
    location: experience.location,
    roles: [experience],
    technologies: [...experience.technologies],
  });
  return list;
}, []);

const VISIBLE_TECH = 6;
const LIGHT_LOGO_COMPANIES = ["ADRS Technosoft"];

export default function About() {
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
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
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
            Where I&apos;ve worked, at a glance. The details live on the full timeline.
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

      <div className="space-y-3">
        {groups.map((group, groupIndex) => {
          const hiddenCount = Math.max(0, group.technologies.length - VISIBLE_TECH);

          return (
            <motion.article
              key={group.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px" }}
              transition={{ duration: 0.4, delay: groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-sm border border-gray-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.03] sm:p-5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={group.logo}
                  alt={group.logoAlt}
                  className={`h-11 w-11 shrink-0 rounded-sm border p-1.5 object-contain ${
                    LIGHT_LOGO_COMPANIES.includes(group.company)
                      ? "border-white/10 bg-[#0f0f10]"
                      : "border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
                  }`}
                />
                <div className="min-w-0">
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-base font-semibold text-foreground transition-colors duration-200 hover:text-accent"
                  >
                    <span className="truncate">{group.company}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-foreground-muted" />
                  </a>
                  <p className="text-xs text-foreground-muted">{group.location}</p>
                </div>
              </div>

              <ol className="mt-4 space-y-3 border-l border-gray-200 pl-4 dark:border-white/10">
                {group.roles.map((experience) => {
                  const tag = getTag(experience);

                  return (
                    <li
                      key={experience.id}
                      className="relative flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                    >
                      <span
                        className={`absolute -left-[1.3rem] top-[0.45rem] h-2 w-2 rounded-full ${tag.dot}`}
                        aria-hidden="true"
                      />
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-foreground">
                          {experience.role}
                        </span>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] ${tag.pill}`}
                        >
                          {tag.label}
                        </span>
                      </div>
                      <span className="text-xs text-foreground-muted">{experience.period}</span>
                    </li>
                  );
                })}
              </ol>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.technologies.slice(0, VISIBLE_TECH).map((tech) => {
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
                {hiddenCount > 0 && (
                  <span className="inline-flex items-center rounded-full border border-dashed border-gray-300 px-2.5 py-1 text-[11px] text-foreground-muted dark:border-white/15">
                    +{hiddenCount} more
                  </span>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
