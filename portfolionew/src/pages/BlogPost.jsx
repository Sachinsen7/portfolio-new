import { ArrowLeft, CalendarDays, Clock3, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/common/PageTransition";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";
import { notesData } from "@/lib/notesData";
import { useViewTransition } from "@/hooks/useViewTransition";

export default function BlogPost() {
  const { slug, id } = useParams();
  const { transitionTo } = useViewTransition();
  const note = notesData.find((item) => item.slug === slug || item.slug === id);

  if (!note) {
    return (
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <Header />
          <main className="container mx-auto max-w-3xl px-4 py-32 sm:px-6">
            <div className="rounded-[28px] border border-gray-200/80 bg-white/72 p-8 text-center dark:border-white/10 dark:bg-white/[0.03]">
              <h1 className="text-2xl font-semibold text-foreground">Note not found</h1>
              <p className="mt-3 text-sm text-foreground-muted">
                This note doesn&apos;t exist or hasn&apos;t been published yet.
              </p>
              <button
                type="button"
                onClick={() => transitionTo("/notes", { transitionName: "notes-page" })}
                className="interactive-surface mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50/80 px-5 py-3 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Notes
              </button>
            </div>
          </main>
        </div>
      </PageTransition>
    );
  }

  return (
    <ViewTransitionWrapper
      transitionKey={`note-${note.slug}`}
      fallbackAnimation="slide"
      className="min-h-screen"
    >
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <div className="page-backdrop" aria-hidden="true" />

          <Header />

          <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
            <article className="container mx-auto max-w-3xl px-4 py-10 sm:px-6">
              <button
                type="button"
                onClick={() => transitionTo("/notes", { transitionName: "notes-page" })}
                className="interactive-text-link inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Notes
              </button>

              <div className="mt-8 rounded-[30px] border border-gray-200/80 bg-white/75 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-xs text-foreground-muted">
                  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 dark:border-white/10 dark:bg-white/[0.03]">
                    <FileText className="h-3.5 w-3.5" />
                    Note
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 dark:border-white/10">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {note.date}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 dark:border-white/10">
                    <Clock3 className="h-3.5 w-3.5" />
                    {note.readingTime}
                  </span>
                </div>

                <h1 className="max-w-2xl text-3xl font-semibold text-foreground sm:text-4xl">
                  {note.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
                  {note.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 px-2.5 py-1 text-[11px] text-foreground-muted dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-slate mt-10 max-w-none text-foreground-muted dark:prose-invert prose-headings:text-foreground prose-p:text-foreground-muted prose-li:text-foreground-muted">
                  <ReactMarkdown>{note.content}</ReactMarkdown>
                </div>
              </div>
            </article>
          </main>
        </div>
      </PageTransition>
    </ViewTransitionWrapper>
  );
}
