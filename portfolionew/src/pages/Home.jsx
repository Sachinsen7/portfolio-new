import LiquidHero from "@/components/sections/LiquidHero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Me from "@/components/sections/me";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import ChatBot from "@/components/common/ChatBot";
import PageTransition from "@/components/common/PageTransition";
// import AccessibilityToggle from "@/components/common/AccessibilityToggle";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Unified Glass Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 glass backdrop-blur-lg"
        aria-hidden="true"
      />

      <Header />
      {/* <AccessibilityToggle /> */}

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" aria-labelledby="hero-heading">
          <LiquidHero />
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8" aria-labelledby="projects-heading">
          <Projects />
        </section>

        {/* Me Section */}
        <section id="me" className="container mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="me-heading">
          <Me />
        </section>
      </main>

      {/* Floating Chat Bot */}
      <ChatBot />
      </div>
    </PageTransition>
  );
}