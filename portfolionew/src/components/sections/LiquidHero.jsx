import { Button } from "@/components/ui/button";
import { Sparkles, DownloadIcon } from "lucide-react";

// Use absolute path for Vite's public assets
import profileImage from "/assets/images/me_and_bill.png";

export default function LiquidHero() {
  const skills = ["React", "Tailwind CSS", "JavaScript", "Node.js", "Web3"];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      {/* Glass Background */}
      <div className="absolute inset-0 glass backdrop-blur-lg" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 p-6 container mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImage}
            alt="Sachin, a full-stack developer"
            className="h-32 w-32 md:h-48 md:w-48 rounded-full border border-glass object-cover"
          />
        </div>

        {/* Text and Buttons */}
        <div className="flex-1 text-center md:text-left max-w-2xl">
          <h1
            id="hero-heading"
            className="text-4xl md:text-3xl font-bold text-foreground mb-4"
          >
            Hi, I'm Sachin
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            A passionate full-stack developer crafting modern web experiences with React and Web3.
          </p>
          <p className="text-lg font-medium text-accent mb-6">Full Stack Developer</p>

          {/* Skills List */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="glass backdrop-blur px-3 py-1 rounded-full text-sm text-foreground border border-glass hover:bg-glass-gradient"
                aria-label={`Skill: ${skill}`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              variant="default"
              size="lg"
              className="glass backdrop-blur rounded-full hover:bg-primary/30"
              asChild
            >
              <a href="#projects">
                <Sparkles className="h-5 w-5 mr-2" aria-hidden="true" /> Explore My Work
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass backdrop-blur rounded-full hover:bg-glass-gradient"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1e7cZVh0q4nq4T9Qp7q4l3q4l3q4u4u4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Sachin's resume"
              >
                <DownloadIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}