import LiquidHero from "@/components/sections/LiquidHero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Me from "@/components/sections/me";
import GitHubContributions from "@/components/sections/GitHubContributions";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/common/ChatBot";
import PageTransition from "@/components/common/PageTransition";
import FloatingParticles from "@/components/common/FloatingParticles";
import ScrollToTop from "@/components/common/ScrollToTop";
// import AccessibilityToggle from "@/components/common/AccessibilityToggle";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="page-backdrop" aria-hidden="true" />

        {/* Floating Particles Background */}
        <FloatingParticles />

        <Header />
        {/* <AccessibilityToggle /> */}

        <main className="relative z-10 pt-28 sm:pt-36 md:pt-40">
          <LiquidHero />
          <Me />
          <About />
          <Projects />
          <GitHubContributions />
        </main>

        <Footer />

        <ChatBot />

        <ScrollToTop />
      </div>
    </PageTransition>
  );
}
