import { Briefcase, Globe, Award, TrendingUp } from "lucide-react";
import logo from "/assets/images/logo.png";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandVercel,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandAws,
  IconBrandDocker,
  IconApi,
  IconDatabase,
  IconCloud,
} from "@tabler/icons-react";

export default function About() {
  return (
    <section
      className="container mx-auto py-8 max-w-4xl"
      aria-labelledby="about-heading"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 mb-8">
        <h2 id="about-heading" className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Featured
        </h2>
        <h3 className="text-2xl font-semibold text-foreground flex items-center justify-center">
          Experience
        </h3>
      </div>

      {/* Experience Content */}
      <div className="space-y-6">
        <div className="p-3 sm:p-4 rounded-lg transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="ADRS Technosoft logo"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-contain"
              />
            </div>

            {/* Experience Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-base text-foreground">
                    ADRS Technosoft
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Full Stack Developer
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-glass backdrop-blur px-2 py-1 rounded border border-gray-300 dark:border-glass-border">
                      May 2025 - Present
                    </span>
                    <span className="text-xs text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-glass backdrop-blur px-2 py-1 rounded border border-gray-300 dark:border-glass-border">
                      Full Time
                    </span>
                  </div>
                </div>
                <a
                  href="https://www.adrstechno.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label="Visit ADRS Technosoft website"
                >
                  <Globe className="h-4 w-4" />
                </a>
              </div>

              {/* Core Technologies */}
              <div className="mt-4">
                <h5 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  Core Technologies & Expertise
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <TechTag
                    color="cyan"
                    icon={<IconBrandNextjs />}
                    label="Next.js"
                  />
                  <TechTag
                    color="blue"
                    icon={<IconBrandTypescript />}
                    label="TypeScript"
                  />
                  <TechTag
                    color="teal"
                    icon={<IconBrandReact />}
                    label="React"
                  />
                  <TechTag
                    color="green"
                    icon={<IconBrandNodejs />}
                    label="Node.js"
                  />
                  <TechTag color="orange" icon={<IconBrandAws />} label="AWS" />
                  <TechTag
                    color="emerald"
                    icon={<IconBrandMongodb />}
                    label="MongoDB"
                  />
                </div>

                {/* Additional Skills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <SkillTag
                    color="purple"
                    icon={<IconDatabase />}
                    label="Prisma"
                  />
                  <SkillTag
                    color="sky"
                    icon={<IconBrandDocker />}
                    label="Docker"
                  />
                  <SkillTag
                    color="indigo"
                    icon={<IconApi />}
                    label="REST APIs"
                  />
                  <SkillTag
                    color="blue"
                    icon={<IconCloud />}
                    label="Cloudinary"
                  />
                  <SkillTag
                    color="cyan"
                    icon={<IconBrandTailwind />}
                    label="Tailwind CSS"
                  />
                  <SkillTag
                    color="gray"
                    icon={<IconBrandVercel />}
                    label="Vercel"
                  />
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mt-4">
                <h5 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  Key Achievements & Impact
                </h5>
                <div className="space-y-3">
                  <AchievementCard
                    dotColor="bg-green-500"
                    borderColor="border-green-300"
                    title="Enterprise SaaS Platform Development"
                    desc="Built comprehensive bus management platform with multi-service booking (tickets, cabs, hotels) and WhatsApp API integration, achieving 90% operational efficiency boost."
                    highlightColor="text-green-600 dark:text-green-400"
                  />
                  <AchievementCard
                    dotColor="bg-blue-500"
                    borderColor="border-blue-300"
                    title="Scalable Architecture & Analytics"
                    desc="Architected enterprise management system with real-time analytics, role-based access control, and automated workflows, reducing manual overhead by 85%."
                    highlightColor="text-blue-600 dark:text-blue-400"
                  />
                  <AchievementCard
                    dotColor="bg-purple-500"
                    borderColor="border-purple-300"
                    title="Full-Stack Business Solutions"
                    desc="Developed jewelry business management application with inventory control, sales tracking, customer management, and real-time dashboard analytics with barcode generation."
                    highlightColor="text-purple-600 dark:text-purple-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Reusable Components ----------------- */

function TechTag({ color, icon, label }) {
  return (
    <div
      className={`bg-gradient-to-r from-${color}-100 to-${color}-200 dark:from-${color}-900/30 dark:to-${color}-800/30 
      flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-${color}-900 dark:text-${color}-100 
      border border-${color}-300 dark:border-${color}-700 shadow-sm hover:shadow-md transition-all duration-300`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}

function SkillTag({ color, icon, label }) {
  return (
    <div
      className={`bg-gradient-to-r from-${color}-100 to-${color}-200 dark:from-${color}-900/20 dark:to-${color}-800/20 
      flex items-center gap-1 px-2 py-1 rounded text-xs text-${color}-900 dark:text-${color}-100 
      border border-${color}-300 dark:border-${color}-700`}
    >
      {icon}
      {label}
    </div>
  );
}

function AchievementCard({
  dotColor,
  borderColor,
  title,
  desc,
  highlightColor,
}) {
  return (
    <div
      className={`bg-gradient-to-r from-gray-50/70 to-white/80 dark:from-gray-900/10 dark:to-gray-800/10 
      p-3 rounded-lg border ${borderColor} dark:border-gray-700/30`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-2 h-2 ${dotColor} rounded-full mt-2 flex-shrink-0`}
        ></div>
        <div>
          <p className="text-sm text-foreground font-medium mb-1">{title}</p>
          <p className="text-xs text-foreground-muted">
            {desc.split("boost").length > 1 ? (
              <>
                {desc.split("boost")[0]}
                <span className={highlightColor}>boost</span>
              </>
            ) : (
              desc
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
