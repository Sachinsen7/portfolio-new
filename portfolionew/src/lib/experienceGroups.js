import { experiences } from "@/lib/experienceData";

export const TAGS = {
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

export const getTag = (experience) => {
  if (/present/i.test(experience.period)) return TAGS.current;
  if (/intern/i.test(experience.role)) return TAGS.internship;
  return TAGS.previous;
};

export const LIGHT_LOGO_COMPANIES = ["ADRS Technosoft"];

export const experienceGroups = experiences.reduce((list, experience) => {
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

export const logoClassName = (company) =>
  LIGHT_LOGO_COMPANIES.includes(company)
    ? "border-white/10 bg-[#0f0f10]"
    : "border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.04]";
