import { motion } from "framer-motion";
import LiquidHero from "@/components/sections/LiquidHero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";


const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-[var(--background)] text-[var(--foreground)] pb-20">
      <Header />
      <main>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          aria-labelledby="hero-heading"
        >
          <LiquidHero />
        </motion.section>
        <motion.section
          id="projects"
          className="container mx-auto py-16 glass backdrop-blur-lg rounded-2xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="projects-heading"
        >
          <Projects />
        </motion.section>
        <motion.section
          id="about"
          className="container mx-auto py-16 glass backdrop-blur-lg rounded-2xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="about-heading"
        >
          <About />
        </motion.section>
        <motion.section
          id="contact"
          className="container mx-auto py-16 glass backdrop-blur-lg rounded-2xl"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="contact-heading"
        >
          <Contact />
        </motion.section>
      </main>
    </div>
  );
}