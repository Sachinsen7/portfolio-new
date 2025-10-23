import LiquidHero from "@/components/sections/LiquidHero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Me from "@/components/sections/me";
import GitHubContributions from "@/components/sections/GitHubContributions";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import ChatBot from "@/components/common/ChatBot";
import PageTransition from "@/components/common/PageTransition";
import CursorEffects from "@/components/common/CursorEffects";
import CursorTrail from "@/components/common/CursorTrail";
import FloatingParticles from "@/components/common/FloatingParticles";
import VisitorCounter from "@/components/common/VisitorCounter";
import ScrollToTop from "@/components/common/ScrollToTop";
import ScrollProgress from "@/components/common/ScrollProgress";
// import AccessibilityToggle from "@/components/common/AccessibilityToggle";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Scroll Progress Indicator */}
        <ScrollProgress />
        {/* Unified Glass Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 glass backdrop-blur-lg"
          aria-hidden="true"
        />

        {/* Floating Particles Background */}
        <FloatingParticles />

        {/* Cursor Effects */}
        <CursorEffects />
        <CursorTrail />

        <Header />
        {/* <AccessibilityToggle /> */}

        <main className="relative z-10">
          {/* Hero Section */}
          <section id="hero" aria-labelledby="hero-heading">
            <LiquidHero />
          </section>

          {/* About Section */}
          <section
            id="about"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            aria-labelledby="about-heading"
          >
            <About />
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8"
            aria-labelledby="projects-heading"
          >
            <Projects />
          </section>

          {/* Me Section */}
          <section
            id="me"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            aria-labelledby="me-heading"
          >
            <Me />
          </section>

          {/* GitHub Contributions Section */}
          <section
            id="github"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            aria-labelledby="github-heading"
          >
            <GitHubContributions />
          </section>
        </main>

        {/* Floating Chat Bot */}
        <ChatBot />

        {/* Visitor Counter */}
        {/* <VisitorCounter /> */}

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </PageTransition>
  );
}
