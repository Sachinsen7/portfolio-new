import { CheckCircle2, Globe2, Layers3, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import { experiences } from "@/components/sections/About";

const uniqueCategories = new Set(projectsData.map((project) => project.category)).size;
const uniqueTechnologies = new Set(projectsData.flatMap((project) => project.tech)).size;
const liveMaintainedProjects = projectsData.filter(
  (project) => project.status === "Live & Maintained"
).length;

const metrics = [
  { label: "Portfolio Builds", value: `${projectsData.length}`, icon: Layers3 },
  { label: "Live & Maintained", value: `${liveMaintainedProjects}`, icon: Globe2 },
  { label: "Project Categories", value: `${uniqueCategories}`, icon: TrendingUp },
  { label: "Tech Used", value: `${uniqueTechnologies}+`, icon: ShieldCheck },
];

const proofCards = [
  {
    title: "Cross-platform product work",
    detail:
      "Currently working in a remote product role across React Native, Next.js, TypeScript, APIs, and deployment workflows.",
    meta: experiences[0]?.company || "Current role",
  },
  {
    title: "Enterprise-style SaaS delivery",
    detail:
      "Built media tooling, full-stack business systems, and developer products with practical architecture and real workflow complexity.",
    meta: "Cloud SaaS, Monositi, EndPointHub",
  },
  {
    title: "Clean frontend + full-stack ownership",
    detail:
      "Most projects show the same pattern: product thinking, responsive frontend work, backend integration, and final UX polish in one build.",
    meta: "Repeated across featured case studies",
  },
];

const selectedResults = [
  "Monositi brings role-based auth, property search, KYC, uploads, and booking-style marketplace flows into one working system.",
  "Cloud SaaS combines AI analysis, media processing, and document conversion into a more coherent SaaS surface rather than disconnected tools.",
  "EndPointHub demonstrates secure API publishing, key management, rate limiting, analytics, and developer-focused UX in one product.",
];

export default function ProofSection() {
  return (
    <section
      id="proof"
      className="container mx-auto max-w-4xl px-4 py-12 sm:px-6"
      aria-labelledby="proof-heading"
    >
      <div className="mb-10 flex flex-col items-start gap-3">
        <h2
          id="proof-heading"
          className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
        >
          Proof
        </h2>
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            Results, signals, and real working context
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            A concise layer of proof behind the portfolio: what I&apos;ve shipped,
            the environments I&apos;ve worked in, and the kind of product complexity
            I&apos;ve already handled.
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-sm border border-gray-200/80 bg-white/72 p-4 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
                  {metric.label}
                </p>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-gray-50/80 dark:border-white/10 dark:bg-white/[0.04]">
                  <Icon className="h-4 w-4 text-foreground-muted" />
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold text-foreground">{metric.value}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
        <div className="rounded-sm border border-gray-200/80 bg-white/72 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mb-5 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-foreground-muted" />
            <p className="text-sm font-semibold text-foreground">Selected Proof</p>
          </div>

          <div className="grid gap-3">
            {proofCards.map((card) => (
              <div
                key={card.title}
                className="rounded-sm border border-gray-200/80 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <p className="text-sm font-semibold text-foreground">{card.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {card.detail}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-foreground-muted">
                  {card.meta}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-sm border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 p-5 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]">
            <div className="mb-5 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-foreground-muted" />
              <p className="text-sm font-semibold text-foreground">What the work already shows</p>
            </div>

            <div className="space-y-3">
              {selectedResults.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-sm border border-gray-200/80 bg-white/75 px-3.5 py-3 text-sm leading-relaxed text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-gray-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mb-5 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground-muted" />
              <p className="text-sm font-semibold text-foreground">Testimonials & references</p>
            </div>

            <div className="rounded-sm border border-dashed border-gray-300 bg-gray-50/70 p-4 dark:border-white/15 dark:bg-white/[0.02]">
              <p className="text-sm leading-relaxed text-foreground-muted">
                I&apos;m not adding manufactured testimonials here. As the portfolio grows,
                this section can hold real client or team feedback. Until then, the stronger
                signal is honest project depth, shipped work, and references shared on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
