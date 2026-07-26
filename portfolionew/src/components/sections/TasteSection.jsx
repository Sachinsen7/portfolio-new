import {
  Clapperboard,
  Disc3,
  Film,
  Headphones,
  Mic2,
  Music4,
  Star,
  Ticket,
} from "lucide-react";

const movieSignals = [
  "Character-driven stories",
  "Late-night rewatches",
  "Strong cinematography",
  "Slow-burn tension",
];

const movieReasons = [
  "I genuinely love movies because they shape how I think about pacing, atmosphere, emotion, and storytelling.",
  "A lot of my design instinct comes from cinema too — framing, rhythm, contrast, and how small details build a bigger feeling.",
  "When I want to reset, recharge, or just disappear into something good, films are usually where I go first.",
];

const musicNotes = [
  "Kendrick Lamar stays in rotation when I want focus, intent, and storytelling in the background.",
  "His music has the same thing I admire in great products — depth, structure, personality, and layers that reward attention.",
];

const kendrickTraits = [
  "Storytelling",
  "Lyrical detail",
  "Intentional production",
  "Replay value",
];

export default function TasteSection() {
  return (
    <section
      id="taste"
      className="container mx-auto max-w-4xl py-10"
      aria-labelledby="taste-heading"
    >
      <div className="flex flex-col items-start gap-3 mb-8">
        <h2 className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Personality
        </h2>
        <div className="max-w-2xl">
          <h3 id="taste-heading" className="text-xl font-semibold text-foreground sm:text-2xl">
            Off Screen
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            A small window into what I enjoy outside of building products — the films I get lost in and the music I keep coming back to.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="group relative overflow-hidden rounded-[28px] border border-gray-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 flex w-4 flex-col items-center justify-around">
            {Array.from({ length: 10 }).map((_, index) => (
              <span
                key={`left-perf-${index}`}
                className="h-2 w-2 rounded-full bg-gray-200 dark:bg-white/10"
              />
            ))}
          </div>
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex w-4 flex-col items-center justify-around">
            {Array.from({ length: 10 }).map((_, index) => (
              <span
                key={`right-perf-${index}`}
                className="h-2 w-2 rounded-full bg-gray-200 dark:bg-white/10"
              />
            ))}
          </div>

          <div className="pl-5 pr-5">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                  <Film className="h-3.5 w-3.5" />
                  Movie Lover
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  Cinema is one of the ways I recharge and stay inspired.
                </h4>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-3 text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                <Clapperboard className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-foreground-muted sm:text-[0.95rem]">
              {movieReasons.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2 text-sm text-foreground">
                <Ticket className="h-4 w-4 text-foreground-muted" />
                <span className="font-medium">What pulls me in</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {movieSignals.map((item) => (
                  <div
                    key={item}
                    className="interactive-surface inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  >
                    <Star className="h-3.5 w-3.5 text-foreground-muted" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-[28px] border border-gray-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent" />

          <div className="relative">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                  <Music4 className="h-3.5 w-3.5" />
                  Music Taste
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  Kendrick Lamar
                </h4>
                <p className="mt-1 text-sm text-foreground-muted">
                  The artist I keep coming back to most.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-3 text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                <Headphones className="h-5 w-5" />
              </div>
            </div>

            <div className="mb-5 flex items-end gap-1 h-16">
              {[28, 48, 36, 60, 44, 52, 30, 58, 40, 34].map((height, index) => (
                <span
                  key={`bar-${index}`}
                  className="w-full rounded-full bg-gradient-to-t from-accent/80 to-accent/50"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-foreground-muted">
              {musicNotes.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center gap-2 text-sm text-foreground">
                <Mic2 className="h-4 w-4 text-foreground-muted" />
                <span className="font-medium">Why it works for me</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {kendrickTraits.map((item) => (
                  <div
                    key={item}
                    className="interactive-surface rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
                Current mood
              </p>
              <p className="mt-2 text-sm text-foreground">
                Thoughtful rap, strong writing, and music that feels cinematic.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
