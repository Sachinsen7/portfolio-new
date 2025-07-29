import LiquidHero from "@/components/sections/LiquidHero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import AccessibilityToggle from "@/components/common/AccessibilityToggle";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 glass backdrop-blur-lg"
        aria-hidden="true"
      />

      <Header />
      <AccessibilityToggle />

      <main className="relative z-10 pb-20">
        {/* Hero Section */}
        <section aria-labelledby="hero-heading">
          <LiquidHero />
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto" aria-labelledby="about-heading">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto py-16" aria-labelledby="projects-heading">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-16" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
    </div>
  );
}