import Header from "@/components/layout/Header";
import OperatingSystem from "@/components/sections/OperatingSystem";
import PageTransition from "@/components/common/PageTransition";
import ScrollProgress from "@/components/common/ScrollProgress";
import ViewTransitionWrapper from "@/components/common/ViewTransitionWrapper";

export default function SystemPage() {
  return (
    <ViewTransitionWrapper
      transitionKey="system-page"
      fallbackAnimation="slide"
      className="min-h-screen"
    >
      <PageTransition>
        <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
          <ScrollProgress />
          <div className="page-backdrop" aria-hidden="true" />
          <div className="light-dot-pattern" aria-hidden="true" />

          <Header />

          <main className="relative z-10 pt-28 sm:pt-36 md:pt-32">
            <section className="container mx-auto max-w-6xl px-4 pb-2 pt-2 sm:px-6">
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Signature Page
                </p>
                <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
                  How I usually think, design, build, and ship.
                </h1>
                <p className="mt-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
                  This page is a more expressive look at my working style. It is less
                  about a single project and more about the system behind how I approach
                  product work from idea to release.
                </p>
              </div>
            </section>

            <OperatingSystem />
          </main>
        </div>
      </PageTransition>
    </ViewTransitionWrapper>
  );
}
