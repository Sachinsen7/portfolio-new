import { ArrowRight, FileText } from "lucide-react";
import { notesData } from "@/lib/notesData";
import { useViewTransition } from "@/hooks/useViewTransition";

const featuredNotes = notesData.filter((note) => note.featured).slice(0, 3);

export default function NotesSection() {
  const { transitionTo } = useViewTransition();

  return (
    <section
      className="container mx-auto max-w-4xl px-4 py-12 sm:px-6"
      aria-labelledby="notes-preview-heading"
    >
      <div className="mb-10 flex flex-col items-start gap-3">
        <h2
          id="notes-preview-heading"
          className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
        >
          Notes
        </h2>
        <div className="max-w-2xl">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
            Short notes on design, product work, and shipping
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
            Small writing pieces about how I think through interfaces, product structure,
            and the kind of decisions that make software feel better.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {featuredNotes.map((note) => (
          <article
            key={note.slug}
            className="interactive-surface rounded-sm border border-gray-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-1 text-xs text-foreground-muted dark:border-white/10 dark:bg-white/[0.03]">
                <FileText className="h-3.5 w-3.5" />
                Note
              </div>
              <span className="text-xs text-foreground-muted">{note.readingTime}</span>
            </div>

            <h4 className="text-lg font-semibold text-foreground">{note.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{note.summary}</p>

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

            <button
              type="button"
              onClick={() =>
                transitionTo(`/notes/${note.slug}`, {
                  transitionName: `note-${note.slug}`,
                })
              }
              className="interactive-text-link mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground"
            >
              Read note
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => transitionTo("/notes", { transitionName: "notes-page" })}
          className="interactive-surface inline-flex items-center gap-2 rounded-sm border border-gray-200 bg-gray-50/80 px-5 py-3 text-sm text-foreground hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
        >
          <FileText className="h-4 w-4 text-foreground-muted" />
          <span>See All Notes</span>
          <ArrowRight className="h-4 w-4 text-foreground-muted" />
        </button>
      </div>
    </section>
  );
}

