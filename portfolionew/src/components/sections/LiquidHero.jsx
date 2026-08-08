import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import profileImage from "/assets/images/me.webp";
import { projectsData } from "@/lib/projectsData";
import { experiences } from "@/lib/experienceData";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:sachinsen1920@gmail.com",
    icon: MailIcon,
    ariaLabel: "Email Sachin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sen_sachiin",
    icon: TwitterIcon,
    ariaLabel: "Sachin on Twitter",
  },
  {
    name: "GitHub",
    href: "https://github.com/Sachinsen7",
    icon: GithubIcon,
    ariaLabel: "Sachin on GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sachinsen1",
    icon: LinkedinIcon,
    ariaLabel: "Sachin on LinkedIn",
  },
];

const MONTHS = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function computeYearsExperience() {
  const starts = experiences
    .map((exp) => {
      const match = exp.period.match(/([A-Za-z]{3})\w*\s+(\d{4})/);
      if (!match) return null;
      const [, mon, year] = match;
      return new Date(Number(year), MONTHS[mon] ?? 0, 1);
    })
    .filter(Boolean);

  if (starts.length === 0) return 1;

  const earliest = new Date(Math.min(...starts.map((d) => d.getTime())));
  const years = (Date.now() - earliest.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(1, Math.floor(years));
}

const heroStats = [
  { label: "Projects Shipped", value: `${projectsData.length}+` },
  {
    label: "Technologies",
    value: `${new Set(projectsData.flatMap((project) => project.tech)).size}+`,
  },
  { label: "Years Experience", value: `${computeYearsExperience()}+` },
];

const headlineLines = [
  { text: "Sachin Sen", indent: 0, className: "text-accent" },
  { text: "Full-Stack", indent: 1, className: "text-foreground" },
  { text: "Developer", indent: 2, className: "text-foreground" },
];

// Each line waves in on its own, one after another, like a flag unfurling.
const lineReveal = {
  hidden: { opacity: 0, x: -48, rotate: -3 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.6, delay: i * 0.22, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function LiquidHero() {
  return (
    <section className="container mx-auto flex min-h-[70vh] max-w-4xl items-center px-4 py-8 sm:px-6 sm:py-10 md:pt-8 lg:py-16">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex flex-wrap items-center gap-4"
        >
          <img
            src={profileImage}
            alt="Sachin, a full-stack developer"
            className="h-14 w-14 shrink-0 rounded-sm border border-gray-200 object-cover dark:border-white/10"
          />

          <Button
            variant="glass"
            size="lg"
            className="justify-start rounded-sm border-gray-200 bg-gray-50/80 px-5 text-sm shadow-none hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25"
            asChild
          >
            <a href="mailto:sachinsen1920@gmail.com" className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
              </span>
              <span>Available for new opportunities</span>
            </a>
          </Button>
        </motion.div>

        <h1
          id="hero-heading"
          className="font-heading text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
        >
          {headlineLines.map((line, i) => (
            <motion.span
              key={line.text}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={lineReveal}
              className={`block pb-1 ${line.className}`}
              style={{ marginLeft: `${line.indent * 2.2}em`, transformOrigin: "left center" }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.45 }}
          className="mt-8 grid grid-cols-3 gap-4 border-y border-gray-200/80 py-6 dark:border-white/10"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-foreground-muted sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.55 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Button
            variant="outline"
            size="lg"
            className="justify-start rounded-sm border-gray-200 bg-gray-50/80 px-5 text-sm shadow-none hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25"
            asChild
          >
            <a
              className="flex items-center gap-3"
              href="https://docs.google.com/document/d/182KsVsAotbobSoabH4VqZ-yN2sjkBRCx/edit?usp=sharing&ouid=113667387201002486550&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Sachin's CV"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </Button>
        </motion.div>

        <div className="mt-10 border-t border-gray-200/80 pt-7 dark:border-white/10">
          <p className="mb-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
            Where to find me <span className="font-medium text-foreground">digitally</span>
          </p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.65 } } }}
            className="flex flex-wrap gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  variants={fadeUp}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={social.ariaLabel}
                  className="interactive-surface group relative inline-flex items-center gap-3 rounded-sm border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25"
                >
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 translate-y-2 rounded-lg border border-gray-200 bg-white/95 px-2.5 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#141414]">
                    {social.name}
                  </span>
                  <Icon className="h-4 w-4 text-foreground-muted transition-colors duration-200 group-hover:text-foreground" />
                  <span>{social.name}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
