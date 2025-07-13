import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function LiquidHero() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 glass backdrop-blur-lg" />
      <div className="relative z-10 text-center p-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm Sachin
        </motion.h1>
        <motion.p
          className="text-xl text-muted-foreground mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A passionate developer crafting modern web experiences
        </motion.p>
        <Button variant="default" size="lg" asChild>
          <a href="#projects">Explore My Work</a>
        </Button>
      </div>
    </motion.section>
  );
}