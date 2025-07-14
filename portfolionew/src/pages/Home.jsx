import LiquidHero from "@/components/sections/LiquidHero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import AccessibilityToggle from "@/components/common/AccessibilityToggle";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-[var(--background)] text-[var(--foreground)] pb-20">
      {/* Background Gradient Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"
        aria-hidden="true"
      />

      <Header />
      <AccessibilityToggle />

      <main>
        {/* Hero Section */}
        <section aria-labelledby="hero-heading">
          <LiquidHero />
        </section>

        {/* About Section */}
       
          <About />


        {/* Projects Section */}
        <section
          id="projects"
          className="container mx-auto py-16 glass backdrop-blur-lg rounded-2xl"
          aria-labelledby="projects-heading"
        >
          <Projects />
        </section>

        

        {/* Contact Section */}
        <section
          id="contact"
          className="container mx-auto py-16 glass backdrop-blur-lg rounded-2xl"
          aria-labelledby="contact-heading"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}