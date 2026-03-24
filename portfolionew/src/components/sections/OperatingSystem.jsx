import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Blocks,
  BrainCircuit,
  Gauge,
  Layers3,
  Rocket,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const operatingModes = [
  {
    id: "think",
    label: "Think",
    icon: BrainCircuit,
    eyebrow: "Before the code",
    title: "I start by reducing ambiguity, not adding noise.",
    description:
      "I like turning a vague feature into a practical plan with the right tradeoffs, clean scope, and a path that can actually ship.",
    bullets: [
      "Clarify the user problem before choosing tools.",
      "Break larger features into smaller, testable decisions.",
      "Prefer systems that can grow without becoming fragile.",
    ],
    outputs: ["Feature framing", "Flow mapping", "Clean technical direction"],
    pulse: "from-sky-500/20 via-cyan-400/10 to-transparent",
    ring: "border-sky-400/30",
  },
  {
    id: "design",
    label: "Design",
    icon: Layers3,
    eyebrow: "Interface quality",
    title: "I care about the feel of a product as much as the function.",
    description:
      "The goal is not decoration. It is clarity, rhythm, and interface decisions that make a product feel easier to trust and use.",
    bullets: [
      "Keep layouts calm, intentional, and easy to scan.",
      "Use motion to support flow, not distract from it.",
      "Design with responsiveness and edge cases in mind.",
    ],
    outputs: ["UI structure", "Visual rhythm", "Responsive polish"],
    pulse: "from-emerald-500/20 via-teal-400/10 to-transparent",
    ring: "border-emerald-400/30",
  },
  {
    id: "build",
    label: "Build",
    icon: Blocks,
    eyebrow: "Execution mode",
    title: "I build in layers so products stay maintainable under pressure.",
    description:
      "I enjoy working across frontend, backend, integrations, and deployment, but I try to keep every part understandable for the next person too.",
    bullets: [
      "Ship reusable components and predictable patterns.",
      "Connect APIs and data models without overengineering.",
      "Protect speed with structure, naming, and consistency.",
    ],
    outputs: ["Full-stack delivery", "Clean components", "Practical architecture"],
    pulse: "from-violet-500/20 via-fuchsia-400/10 to-transparent",
    ring: "border-violet-400/30",
  },
  {
    id: "ship",
    label: "Ship",
    icon: Rocket,
    eyebrow: "Final layer",
    title: "I like getting features into real hands and refining them fast.",
    description:
      "A project feels complete when it is stable, useful, and ready for real use, not when it simply looks done in a screenshot.",
    bullets: [
      "Focus on speed, reliability, and final UX details.",
      "Catch rough edges across devices before release.",
      "Refine based on real usage instead of assumptions.",
    ],
    outputs: ["Launch-ready work", "Iteration loops", "Practical reliability"],
    pulse: "from-amber-500/20 via-orange-400/10 to-transparent",
    ring: "border-amber-400/30",
  },
];

const signatureSignals = [
  {
    label: "Default style",
    value: "Minimal, useful, fast",
  },
  {
    label: "Strength",
    value: "Frontend clarity + full-stack execution",
  },
  {
    label: "Bias",
    value: "Ship with polish, then refine with intent",
  },
];

export default function OperatingSystem() {
  const [activeMode, setActiveMode] = useState(operatingModes[0]);
  const [spotlight, setSpotlight] = useState({
    x: "50%",
    y: "18%",
    opacity: 0,
  });

  const handleSpotlightMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setSpotlight({
      x: `${x}%`,
      y: `${y}%`,
      opacity: 1,
    });
  };

  const terminalLines = [
    "$ operating-system --run",
    `> mode: ${activeMode.label.toLowerCase()}`,
    `> output: ${activeMode.outputs[0]}`,
    `> intent: ${activeMode.eyebrow.toLowerCase()}`,
    "> status: shipping clean, useful work",
  ];

  return (
    <section
      id="system"
      className="container mx-auto max-w-6xl px-4 py-12 sm:px-6"
      aria-labelledby="operating-system-heading"
    >
      <div className="mb-10 flex flex-col items-start gap-3">
        <h2
          id="operating-system-heading"
          className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
        >
          Signature
        </h2>
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            My Operating System
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            A quick look at how I usually think through product work, shape interfaces,
            and turn ideas into something stable, clean, and ready to ship.
          </p>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-sm border border-gray-200/80 bg-white/75 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03] sm:p-6"
        onMouseMove={handleSpotlightMove}
        onMouseLeave={() =>
          setSpotlight((current) => ({
            ...current,
            opacity: 0,
          }))
        }
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${activeMode.pulse} blur-3xl transition-all duration-500`}
          />
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: spotlight.opacity,
              background: `radial-gradient(circle at ${spotlight.x} ${spotlight.y}, rgba(255,255,255,0.75), rgba(255,255,255,0.18) 16%, transparent 42%)`,
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.3),transparent_85%)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]" />
        </div>

        <div className="relative z-10">
          <div className="mb-5 flex flex-wrap items-center gap-2 lg:hidden">
            {operatingModes.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeMode.id === mode.id;

              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveMode(mode)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-all duration-200 ${
                    isActive
                      ? `bg-gray-950 text-white shadow-sm dark:bg-white dark:text-gray-950 ${mode.ring}`
                      : "border-gray-200 bg-white/70 text-foreground-muted hover:border-gray-300 hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
            <div className="relative hidden lg:block">
              <div className="absolute bottom-6 left-[1.05rem] top-[5.5rem] w-px from-gray-200 via-gray-300 to-transparent dark:from-white/10 dark:via-white/20" />
              <div className="space-y-3">
                {operatingModes.map((mode, index) => {
                  const Icon = mode.icon;
                  const isActive = activeMode.id === mode.id;

                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setActiveMode(mode)}
                      className={`relative flex w-full items-start gap-3 rounded-sm border px-3 py-3 text-left transition-all duration-200 ${
                        isActive
                          ? `bg-gray-950 text-white shadow-sm dark:bg-white dark:text-gray-950 ${mode.ring}`
                          : "border-gray-200/80 bg-white/65 text-foreground-muted hover:border-gray-300 hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:text-white"
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                          isActive
                            ? "border-white/20 bg-white/10 dark:border-gray-950/10 dark:bg-gray-950/10"
                            : "border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] uppercase tracking-[0.18em] opacity-70">
                          0{index + 1}
                        </span>
                        <span className="mt-1 block text-sm font-medium">{mode.label}</span>
                        <span className="mt-1 block text-xs opacity-80">{mode.eyebrow}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeMode.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-[24px] border bg-white/86 p-5 backdrop-blur-xl dark:bg-[#0f1012]/88 ${activeMode.ring}`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-gray-50/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground-muted dark:border-white/10 dark:bg-white/[0.04]">
                        <Sparkles className="h-3 w-3" />
                        {activeMode.eyebrow}
                      </div>
                      <h4 className="max-w-xl text-xl font-semibold leading-tight text-foreground sm:text-[1.7rem]">
                        {activeMode.title}
                      </h4>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gray-200/80 bg-gray-50/80 dark:border-white/10 dark:bg-white/[0.04]">
                      <activeMode.icon className="h-5 w-5 text-foreground-muted" />
                    </div>
                  </div>

                  <p className="max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base">
                    {activeMode.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {activeMode.outputs.map((item, index) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-gray-200/80 bg-gray-50/75 p-3 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <p className="text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
                          0{index + 1}
                        </p>
                        <p className="mt-2 text-sm font-medium text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3">
                    {activeMode.bullets.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-2xl border border-gray-200/80 bg-white/70 px-3.5 py-3 text-sm leading-relaxed text-foreground-muted dark:border-white/10 dark:bg-white/[0.02]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              </AnimatePresence>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-[24px] border border-gray-200/80 bg-[#0d1117] p-4 text-green-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] dark:border-white/10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TerminalSquare className="h-4 w-4 text-green-300" />
                      <p className="text-sm font-semibold text-white">how-i-work.sh</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                  </div>

                  <div className="space-y-2 font-tech text-[12px] leading-6">
                    {terminalLines.map((line, index) => (
                      <motion.p
                        key={`${activeMode.id}-${line}`}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.18 }}
                        className={index === 0 ? "text-white" : "text-green-300/90"}
                      >
                        {line}
                      </motion.p>
                    ))}
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block h-4 w-2 rounded-sm bg-green-300/80 align-middle"
                    />
                  </div>
                </div>

                <div className="rounded-[24px] border border-gray-200/80 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="mb-4 flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-foreground-muted" />
                    <p className="text-sm font-semibold text-foreground">Signal Board</p>
                  </div>

                  <div className="space-y-3">
                    {signatureSignals.map((signal) => (
                      <div
                        key={signal.label}
                        className="rounded-2xl border border-gray-200/80 bg-white/75 px-3.5 py-3 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <p className="text-xs uppercase tracking-[0.14em] text-foreground-muted">
                          {signal.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground">{signal.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 p-4 dark:border-white/10 dark:from-white/[0.04] dark:to-white/[0.02]">
                  <div className="mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-foreground-muted" />
                    <p className="text-sm font-semibold text-foreground">What this means in practice</p>
                  </div>

                  <div className="space-y-3 text-sm leading-relaxed text-foreground-muted">
                    <p>
                      I&apos;m strongest when a project needs product thinking, clean frontend,
                      and someone who can still move comfortably through the backend.
                    </p>
                    <p>
                      The goal is usually the same: build something that looks thoughtful,
                      feels fast, and holds up when real people start using it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
