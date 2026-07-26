import { motion } from "framer-motion";
import { techColorMap } from "@/lib/techIcons.jsx";
import {
  IconApi,
  IconBrandAws,
  IconBrandCloudflare,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGolang,
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
  { name: "Go", icon: IconBrandGolang },
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

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Me() {
  return (
    <section
      className="container mx-auto max-w-4xl px-4 py-10 sm:px-6"
      aria-labelledby="me-heading"
    >
      <div className="flex flex-col items-start gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-40px" }}
          variants={fadeUp}
          className="flex flex-col items-start gap-3"
        >
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
              The stack and tools I reach for most.
            </p>
          </div>
        </motion.div>

        <div className="w-full space-y-6">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-40px" }}
              variants={fadeUp}
              className="mb-3 flex items-center gap-2"
            >
              <IconCode className="h-4 w-4 text-foreground-muted" />
              <h4 className="text-sm font-semibold text-foreground">
                Core Stack
              </h4>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-40px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            >
              {coreSkills.map((skill) => {
                const IconComponent = skill.icon;
                const color = techColorMap[skill.name] ?? "var(--accent)";
                return (
                  <motion.div
                    key={skill.name}
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                    className="interactive-surface group flex items-center gap-3 rounded-sm border border-gray-200 bg-gray-50/80 px-3.5 py-3 text-sm text-foreground transition-colors duration-200 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: `${color}22` }}
                    >
                      <IconComponent className="h-6 w-6" style={{ color }} />
                    </span>
                    <span className="truncate font-tech text-[0.9rem] font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-40px" }}
              variants={fadeUp}
              className="mb-3 flex items-center gap-2"
            >
              <IconDeviceDesktop className="h-4 w-4 text-foreground-muted" />
              <h4 className="text-sm font-semibold text-foreground">
                Additional Tools
              </h4>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-40px" }}
              variants={staggerContainer}
              className="flex flex-wrap gap-2.5"
            >
              {additionalSkills.map((skill) => {
                const IconComponent = skill.icon;
                const color = techColorMap[skill.name] ?? "var(--accent)";
                return (
                  <motion.div
                    key={skill.name}
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                    className="interactive-surface group flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50/80 py-2 pl-2 pr-4 text-sm text-foreground transition-colors duration-200 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110"
                      style={{ backgroundColor: `${color}22` }}
                    >
                      <IconComponent className="h-5 w-5" style={{ color }} />
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
