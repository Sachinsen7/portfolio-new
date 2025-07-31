import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeIn } from "@/lib/animations";


export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <motion.div
            className="absolute inset-0 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
            <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center z-10"
        >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm Sachin</h1>
            <p className="text-xl md:text-2xl mb-6">
                Building innovative web solutions with passion and precision.
            </p>
            <Button variant="default" size="lg" asChild>
                <a href="#projects">Explore My Work</a>
            </Button>
        </motion.div>
    </section>
  );
}