import { ArrowRight, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/common/PageTransition";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";
import { notesData } from "@/lib/notesData";
import { useViewTransition } from "@/hooks/useViewTransition";

export default function NotesPage() {
  const { transitionTo } = useViewTransition();

  return (
    <ViewTransitionWrapper
      transitionKey="notes-page"
      fallbackAnimation="slide"
      className="min-h-screen"
    >
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <div className="page-backdrop" aria-hidden="true" />

          <Header />

          <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
            <section className="container mx-auto max-w-6xl px-4 py-10 sm:px-6">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Notes
                </p>
                <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
                  Small writing pieces about craft, product, and building things well.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
                  A lightweight writing space for ideas I keep returning to while working on
                  interfaces, systems, and full-stack product delivery.
                </p>
              </div>

              <div className="mt-10 grid gap-5">
                {notesData.map((note) => (
                  <article
                    key={note.slug}
                    className="interactive-surface rounded-sm border border-gray-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03] sm:p-6"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                          <FileText className="h-3.5 w-3.5" />
                          {note.date}
                        </div>
                        <h2 className="text-xl font-semibold text-foreground">{note.title}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                          {note.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {note.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-gray-200 px-2.5 py-1 text-[11px] text-foreground-muted dark:border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end">
                        <span className="text-xs text-foreground-muted">{note.readingTime}</span>
                        <button
                          type="button"
                          onClick={() =>
                            transitionTo(`/notes/${note.slug}`, {
                              transitionName: `note-${note.slug}`,
                            })
                          }
                          className="interactive-text-link inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground"
                        >
                          Read note
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </PageTransition>
    </ViewTransitionWrapper>
  );
}
