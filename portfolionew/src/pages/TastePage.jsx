import { useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Clapperboard,
  Disc3,
  ExternalLink,
  Film,
  Headphones,
  Mic2,
  Music4,
  Play,
  Star,
  Ticket,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/common/PageTransition";
import ScrollProgress from "@/components/common/ScrollProgress";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";
import { useViewTransition } from "@/hooks/useViewTransition";

const movieGenres = [
  "Psychological thrillers",
  "Sci-fi",
  "Crime drama",
  "Mind-bending stories",
  "Character-driven films",
  "Visually strong cinema",
];

const favoriteMovies = [
  {
    title: "Interstellar",
    year: "2014",
    note: "Big emotion, scale, and the kind of storytelling that stays with you.",
    tag: "Sci-fi",
  },
  {
    title: "Shutter Island",
    year: "2010",
    note: "Exactly the kind of psychological tension and atmosphere I love.",
    tag: "Thriller",
  },
  {
    title: "Fight Club",
    year: "1999",
    note: "Sharp, chaotic, memorable, and full of personality.",
    tag: "Cult",
  },
  {
    title: "Se7en",
    year: "1995",
    note: "Dark, precise, and a masterclass in tone and restraint.",
    tag: "Crime",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    note: "Still one of my favorite examples of intensity, pacing, and scale.",
    tag: "Epic",
  },
  {
    title: "Whiplash",
    year: "2014",
    note: "Pressure, discipline, obsession — the energy in this one is unreal.",
    tag: "Drama",
  },
];

const kendrickSongs = [
  {
    title: "Money Trees",
    album: "good kid, m.A.A.d city",
    year: "2012",
    mood: "Late-night replay",
    spotifyUrl: "https://open.spotify.com/track/2HbKqm4o0w5wEeEFXm2sD4",
  },
  {
    title: "PRIDE.",
    album: "DAMN.",
    year: "2017",
    mood: "Reflective",
    spotifyUrl: "https://open.spotify.com/track/6IZvVAP7VPPnsGX6bvgkqg",
  },
  {
    title: "N95",
    album: "Mr. Morale & the Big Steppers",
    year: "2022",
    mood: "Energy",
    spotifyUrl: "https://open.spotify.com/track/0fX4oNGBWO3dSGUZcVdVV2",
  },
  {
    title: "Alright",
    album: "To Pimp a Butterfly",
    year: "2015",
    mood: "Essential Kendrick",
    spotifyUrl: "https://open.spotify.com/track/3iVcZ5G6tvkXZkZKlMpIUs",
  },
  {
    title: "Father Time",
    album: "Mr. Morale & the Big Steppers",
    year: "2022",
    mood: "Deep writing",
    spotifyUrl: "https://open.spotify.com/track/1REVvAphiSTJyKQ1fDpHa4",
  },
  {
    title: "DUCKWORTH.",
    album: "DAMN.",
    year: "2017",
    mood: "Storytelling",
    spotifyUrl: "https://open.spotify.com/track/0kL3TYRsSXnu0iJvFO3rud",
  },
];

export default function TastePage() {
  const { transitionBack } = useViewTransition();
  const [isTracklistOpen, setIsTracklistOpen] = useState(true);

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <ScrollProgress />
        <div className="page-backdrop" aria-hidden="true" />
        <div className="light-dot-pattern" aria-hidden="true" />

        <Header />

        <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <button
                onClick={() => transitionBack({ transitionName: "back-to-home" })}
                className="interactive-text-link mb-6 inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>

              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Off Screen
                </p>
                <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
                  Movies, Music, and the stuff I genuinely enjoy outside of code.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
                  This page is a small window into the creative side of me — the films I keep thinking about and the music I keep returning to.
                </p>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
              <section className="rounded-sm border border-gray-200/80 bg-white/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                      <Film className="h-3.5 w-3.5" />
                      Movie Taste
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      Cinema is one of the ways I reset and stay inspired.
                    </h2>
                  </div>
                  <div className="rounded-sm border border-gray-200 bg-gray-50/80 p-3 text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                    <Clapperboard className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid gap-5">
                  <div className="rounded-sm border border-gray-200 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                      <Ticket className="h-4 w-4 text-foreground-muted" />
                      Genres I lean toward
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {movieGenres.map((genre) => (
                        <span
                          key={genre}
                          className="interactive-surface rounded-sm border border-gray-200 bg-white/80 px-3 py-2 text-sm text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
                      <Star className="h-4 w-4 text-foreground-muted" />
                      Favorite watches
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {favoriteMovies.map((movie) => (
                        <article
                          key={movie.title}
                          className="interactive-surface rounded-sm border border-gray-200 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
                        >
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <div>
                              <h3 className="text-base font-semibold text-foreground">
                                {movie.title}
                              </h3>
                              <p className="text-xs text-foreground-muted">{movie.year}</p>
                            </div>
                            <span className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-foreground-muted dark:border-white/10">
                              {movie.tag}
                            </span>
                          </div>
                          <p className="text-sm leading-relaxed text-foreground-muted">
                            {movie.note}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-sm border border-[#1db954]/20 bg-[#121212]/95 p-4 text-white shadow-[0_18px_45px_rgba(0,0,0,0.24)] sm:p-6">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      <Music4 className="h-3.5 w-3.5 text-[#1db954]" />
                      Music Taste
                    </div>
                    <h2 className="text-2xl font-semibold">Kendrick Lamar</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/70">
                      The artist I go back to when I want layered writing, storytelling, replay value, and music that still feels cinematic.
                    </p>
                  </div>
                  <div className="rounded-sm border border-white/10 bg-white/5 p-3 text-[#1db954]">
                    <Headphones className="h-5 w-5" />
                  </div>
                </div>

                <div className="rounded-sm border border-white/10 bg-[#181818] p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-sm bg-gradient-to-br from-[#1db954] to-[#0d7a35] text-black">
                        <Disc3 className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[#1db954]">
                          Artist focus
                        </p>
                        <h3 className="mt-1 text-xl font-semibold">Current rotation</h3>
                        <p className="mt-1 text-sm text-white/65">
                          A compact list of Kendrick tracks I keep revisiting.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsTracklistOpen((current) => !current)}
                      className="interactive-icon inline-flex h-11 w-full items-center justify-between gap-2 rounded-sm border border-white/10 bg-white/5 px-4 text-sm text-white/80 hover:border-white/20 hover:bg-white/10 sm:w-auto sm:justify-center"
                    >
                      <Mic2 className="h-4 w-4 text-[#1db954]" />
                      <span>{isTracklistOpen ? "Hide tracks" : "Show tracks"}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isTracklistOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  <div className="mt-5 grid h-16 grid-cols-12 items-end gap-1">
                    {[24, 36, 28, 52, 32, 48, 26, 54, 34, 43, 29, 57].map((height, index) => (
                      <span
                        key={`spotify-bar-${index}`}
                        className="rounded-full bg-gradient-to-t from-[#1db954] to-[#74d39a]"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    {isTracklistOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 space-y-2">
                          {kendrickSongs.map((song, index) => (
                            <a
                              key={song.title}
                              href={song.spotifyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="interactive-surface flex flex-col gap-4 rounded-sm border border-white/8 bg-white/[0.03] px-4 py-3 hover:border-white/15 hover:bg-white/[0.06] sm:flex-row sm:items-center sm:justify-between"
                            >
                              <div className="flex min-w-0 items-center gap-4">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/6 text-sm text-white/70">
                                  {index + 1}
                                </span>
                                <div className="min-w-0">
                                  <p className="truncate text-sm font-medium text-white">
                                    {song.title}
                                  </p>
                                  <p className="truncate text-xs text-white/55">
                                    {song.album} • {song.year}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center justify-between gap-3 sm:justify-start">
                                <span className="hidden rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/60 sm:inline-flex">
                                  {song.mood}
                                </span>
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1db954] text-black">
                                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                                </span>
                                <ExternalLink className="h-4 w-4 text-white/45" />
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
