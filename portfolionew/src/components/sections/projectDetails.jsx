import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Tag,
  Code,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  User,
  CheckCircle,
  Clock3,
  Target,
  Lightbulb,
  TrendingUp,
  Layers3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/common/ImageCarousel";
import { SlideTransition } from "@/components/common/PageTransition";
import { projectsData } from "@/lib/projectsData";
import { getTechIcon } from "@/lib/techIcons.jsx";
import { useViewTransition } from "@/hooks/useViewTransition";

const caseStudyContent = {
  1: {
    problem:
      "The product needed to serve multiple user types inside one platform without making search, booking, and verification feel overwhelming. The main challenge was balancing marketplace complexity with a flow that still felt usable on mobile and web.",
    approach: [
      "Designed the platform around clear role boundaries so tenants, landlords, service providers, and admins each had focused experiences.",
      "Built the search and discovery layer around geolocation, filtering, and structured listing data to keep the core browsing experience useful.",
      "Connected operational workflows like KYC, OTP auth, uploads, and ratings into the same system so the product felt complete rather than stitched together.",
    ],
    decisions: [
      {
        title: "Role-first system design",
        detail:
          "I treated access control as a core product concern early, which helped keep both API design and frontend routing predictable as the platform grew.",
      },
      {
        title: "Marketplace flows before visual flourish",
        detail:
          "The most important UX work was reducing friction in search, listing, and booking flows before layering in motion or polish.",
      },
      {
        title: "Cloudinary as a workflow tool",
        detail:
          "File and media handling were central to trust in the platform, so I leaned on Cloudinary not just for storage, but for a cleaner listing-management pipeline.",
      },
    ],
    outcomes: [
      "Delivered a more complete marketplace experience instead of a simple listing site.",
      "Created a foundation that supports multiple user roles without splitting the product into disconnected apps.",
      "Shipped a production-style full-stack system with authentication, search, uploads, and admin workflows working together.",
    ],
  },
  2: {
    problem:
      "This product had to bring several advanced media workflows into one SaaS experience without letting the UI become fragmented or overly technical. The hard part was making powerful AI and conversion tooling feel unified.",
    approach: [
      "Structured the product as a suite of focused media tools under one shared authentication, database, and processing foundation.",
      "Separated processing concerns clearly so video workflows, AI analysis, and document conversion could scale without muddying the user experience.",
      "Built the UI to communicate capability clearly while keeping the interaction model simple enough for repeated use.",
    ],
    decisions: [
      {
        title: "Platform thinking over single-feature execution",
        detail:
          "I approached it like a product ecosystem, which made shared patterns around auth, jobs, storage, and feedback loops much easier to maintain.",
      },
      {
        title: "AI integrations behind clean interfaces",
        detail:
          "Instead of exposing raw complexity from multiple vendors, I kept each tool focused on user intent and let integrations stay behind the scenes.",
      },
      {
        title: "Feedback and progress visibility mattered",
        detail:
          "Long-running processing tasks needed progress clarity, so the UX had to explain status well enough that the platform felt trustworthy under heavier workflows.",
      },
    ],
    outcomes: [
      "Turned multiple advanced media capabilities into one coherent SaaS surface.",
      "Built a strong showcase project for full-stack architecture plus applied AI integrations.",
      "Created a platform that demonstrates product thinking, integration depth, and frontend clarity together.",
    ],
  },
  3: {
    problem:
      "Developer tools are easy to make functional but hard to make approachable. The core problem here was designing an API marketplace that felt lightweight for users while still handling auth, keys, docs, limits, and analytics correctly.",
    approach: [
      "Focused first on the publishing and discovery loop so the product had a clear reason to exist for both API providers and consumers.",
      "Built the technical backbone around secure API keys, proxied requests, and rate limiting so usage stayed manageable from the start.",
      "Treated documentation and analytics as product features, not just add-ons, to make the tool more useful day to day.",
    ],
    decisions: [
      {
        title: "Free-first architecture",
        detail:
          "I kept the stack practical and accessible so the product could stay lightweight without sacrificing important infrastructure concerns.",
      },
      {
        title: "Developer UX as a first-class feature",
        detail:
          "Interactive docs, discoverability, and key management had to feel simple, otherwise the platform would only be technically correct, not genuinely usable.",
      },
      {
        title: "Caching and limits early",
        detail:
          "I chose to solve performance and abuse constraints early through Redis and request controls instead of pushing them off as future concerns.",
      },
    ],
    outcomes: [
      "Built a more thoughtful developer product instead of just another CRUD dashboard.",
      "Showcased secure request handling, documentation workflows, and API product thinking in one place.",
      "Created a project with a clearer point of view around usability for technical users.",
    ],
  },
};

function sentenceCase(value = "") {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildFallbackCaseStudy(project) {
  return {
    problem:
      project.fullDescription || project.description || project.summary,
    approach: project.features.slice(0, 3).map((feature) => sentenceCase(feature)),
    decisions: project.challenges.slice(0, 3).map((challenge, index) => ({
      title: `Key decision ${index + 1}`,
      detail: sentenceCase(challenge),
    })),
    outcomes: [
      `Built as a ${project.team.toLowerCase()} with a focus on ${project.category.toLowerCase()} quality and practical delivery.`,
      `Shipped ${project.features.length}+ notable features across a ${project.duration.toLowerCase()} build cycle.`,
      `Demonstrates hands-on ownership across ${project.role.toLowerCase()}, implementation, and product polish.`,
    ],
  };
}

function buildImpactMetrics(project) {
  return [
    { label: "Features", value: `${project.features.length}+` },
    { label: "Tech Stack", value: `${project.tech.length}` },
    { label: "Duration", value: project.duration },
    { label: "Delivery", value: project.status },
  ];
}

function DetailCard({ title, icon: Icon, children }) {
  return (
    <section className="rounded-2xl border border-gray-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-foreground-muted" />
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function ProjectDetails() {
  const { id } = useParams();
  const { transitionTo } = useViewTransition();

  const project = projectsData.find((p) => p.id === Number.parseInt(id, 10));
  const currentIndex = projectsData.findIndex((p) => p.id === Number.parseInt(id, 10));
  const nextProject = projectsData[currentIndex + 1];
  const prevProject = projectsData[currentIndex - 1];
  const caseStudy = caseStudyContent[project?.id] || (project ? buildFallbackCaseStudy(project) : null);
  const impactMetrics = project ? buildImpactMetrics(project) : [];
  const projectImages = project
    ? Array.isArray(project.image)
      ? project.image
      : project.image
        ? [project.image]
        : []
    : [];

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--background)] pt-10 text-[var(--foreground)]">
        <section className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200/80 bg-white/70 p-8 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <h1 className="mb-3 text-xl font-semibold">Project Not Found</h1>
            <p className="mb-6 text-sm text-foreground-muted">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
            <Button
              onClick={() => transitionTo("/", { transitionName: "back-to-home" })}
              variant="outline"
              className="border-gray-200 bg-gray-50/80 text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <SlideTransition>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <section
          className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8"
          aria-labelledby="project-heading"
        >
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 sm:justify-between">
            <Button
              onClick={() => transitionTo("/", { transitionName: "back-to-home" })}
              variant="outline"
              className="min-h-11 rounded-xl border-gray-200 bg-gray-50/80 px-5 text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>

            <div className="flex items-center justify-center gap-2">
              {prevProject && (
                <button
                  type="button"
                  onClick={() =>
                    transitionTo(`/project/${prevProject.id}`, {
                      isProject: true,
                      projectId: prevProject.id,
                      transitionName: `project-${prevProject.id}`,
                    })
                  }
                  className="interactive-icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50/80 text-foreground-muted hover:border-gray-400 hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  title={`Previous: ${prevProject.title}`}
                  aria-label={`Previous project: ${prevProject.title}`}
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
              )}
              {nextProject && (
                <button
                  type="button"
                  onClick={() =>
                    transitionTo(`/project/${nextProject.id}`, {
                      isProject: true,
                      projectId: nextProject.id,
                      transitionName: `project-${nextProject.id}`,
                    })
                  }
                  className="interactive-icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50/80 text-foreground-muted hover:border-gray-400 hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  title={`Next: ${nextProject.title}`}
                  aria-label={`Next project: ${nextProject.title}`}
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          <header className="mb-8 rounded-2xl border border-gray-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.03] sm:p-5">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-foreground-muted">
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-1 dark:border-white/10">
                <Tag className="h-3 w-3" />
                {project.category}
              </span>
              <span className="rounded-full border border-gray-200 px-2.5 py-1 dark:border-white/10">
                {project.year}
              </span>
              <span className="rounded-full border border-gray-200 px-2.5 py-1 dark:border-white/10">
                {project.status}
              </span>
            </div>

            <h1 id="project-heading" className="text-2xl font-semibold text-foreground sm:text-3xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground-muted sm:text-base">
              {project.summary}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
                <Clock3 className="h-4 w-4" />
                {project.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
                <Users className="h-4 w-4" />
                {project.team}
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]">
                <User className="h-4 w-4" />
                {project.role}
              </span>
            </div>
          </header>

          <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200/80 bg-white/70 p-2 dark:border-white/10 dark:bg-white/[0.03] sm:p-3">
            <ImageCarousel images={projectImages} projectTitle={project.title} />
          </div>

          <div className="mb-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-gray-200/80 bg-white/70 px-4 py-4 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
                  {metric.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-foreground">{metric.value}</p>
              </div>
            ))}
          </div>

          {(project.liveLink || project.githubLink) && (
            <div className="mb-8 flex flex-wrap items-center gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                >
                  <ExternalLink className="h-4 w-4 text-foreground-muted" />
                  Live demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                >
                  <Github className="h-4 w-4 text-foreground-muted" />
                  Source code
                </a>
              )}
            </div>
          )}

          <div className="grid gap-6">
            <DetailCard title="The Challenge" icon={Target}>
              <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
                {caseStudy.problem}
              </p>
            </DetailCard>

            <DetailCard title="Approach" icon={Layers3}>
              <div className="grid gap-3">
                {caseStudy.approach.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-200 bg-gray-50/70 p-3 text-sm leading-relaxed text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </DetailCard>

            <DetailCard title="Technologies & Tools" icon={Code}>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <div
                    key={tech}
                    className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  >
                    <span>{getTechIcon(tech, "h-5 w-5")}</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </DetailCard>

            <DetailCard title="Case Study Overview" icon={Tag}>
              <div className="space-y-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                <p>{project.description}</p>
                <p>{project.fullDescription}</p>
              </div>
            </DetailCard>

            <DetailCard title="Key Decisions" icon={Lightbulb}>
              <div className="grid gap-3">
                {caseStudy.decisions.map((decision) => (
                  <div
                    key={decision.title}
                    className="rounded-xl border border-gray-200 bg-gray-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <h3 className="text-sm font-semibold text-foreground">{decision.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {decision.detail}
                    </p>
                  </div>
                ))}
              </div>
            </DetailCard>

            <DetailCard title="Key Features" icon={CheckCircle}>
              <div className="grid gap-3 md:grid-cols-2">
                {project.features.slice(0, 8).map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-gray-200 bg-gray-50/70 p-3 text-sm leading-relaxed text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <div className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </DetailCard>

            {project.challenges && (
              <DetailCard title="Technical Challenges" icon={Code}>
                <div className="space-y-3">
                  {project.challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className="rounded-xl border border-gray-200 bg-gray-50/70 p-3 text-sm text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      {challenge}
                    </div>
                  ))}
                </div>
              </DetailCard>
            )}

            <DetailCard title="Outcome & What It Shows" icon={TrendingUp}>
              <div className="grid gap-3">
                {caseStudy.outcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-gray-200 bg-gray-50/70 p-3 text-sm leading-relaxed text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </DetailCard>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <DetailCard title="Project Timeline" icon={Calendar}>
                <div className="space-y-3">
                  {project.timeline.map((phase) => (
                    <div
                      key={`${phase.phase}-${phase.duration}`}
                      className="flex flex-col items-start gap-2 rounded-xl border border-gray-200 bg-gray-50/70 p-3 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            phase.status === "completed" ? "bg-green-500" : "bg-gray-400"
                          }`}
                        />
                        <span className="text-sm text-foreground">{phase.phase}</span>
                      </div>
                      <span className="text-xs text-foreground-muted">{phase.duration}</span>
                    </div>
                  ))}
                </div>
              </DetailCard>

              <DetailCard title="Project Information" icon={Users}>
                <div className="space-y-3 text-sm text-foreground-muted">
                  <div className="flex flex-col items-start gap-1 rounded-xl border border-gray-200 bg-gray-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between">
                    <span>Team</span>
                    <span className="text-foreground">{project.team}</span>
                  </div>
                  <div className="flex flex-col items-start gap-1 rounded-xl border border-gray-200 bg-gray-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between">
                    <span>Role</span>
                    <span className="text-foreground">{project.role}</span>
                  </div>
                  <div className="flex flex-col items-start gap-1 rounded-xl border border-gray-200 bg-gray-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between">
                    <span>Status</span>
                    <span className="text-foreground">{project.status}</span>
                  </div>
                  <div className="flex flex-col items-start gap-1 rounded-xl border border-gray-200 bg-gray-50/70 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between">
                    <span>Duration</span>
                    <span className="text-foreground">{project.duration}</span>
                  </div>
                </div>
              </DetailCard>
            </div>
          </div>
        </section>
      </div>
    </SlideTransition>
  );
}
