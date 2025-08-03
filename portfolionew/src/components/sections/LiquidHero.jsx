import { Button } from "@/components/ui/button";
import { Sparkles, Download, TwitterIcon, LinkedinIcon, GithubIcon, MailIcon } from "lucide-react";
import profileImage from "/assets/images/new.png";
import { basicSkills } from "@/lib/skillsData";

export default function LiquidHero() {
  const skills = basicSkills;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-4xl min-h-[70vh] sm:min-h-[80vh] flex items-center">
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 w-full">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src={profileImage}
              alt="Sachin, a full-stack developer"
              className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 rounded-full object-cover border-2 border-glass backdrop-blur"
            />
            <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* Text and Buttons */}
        <div className="flex-1 text-left">
          <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Hi, I'm <span className="text-accent">Sachin</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2">
            A passionate full-stack developer crafting modern web experiences
          </p>

          <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
            Specializing in React, Node.js, and Web3 technologies
          </p>

          {/* Skills List */}
          <div className="flex flex-wrap gap-2 justify-start mb-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-glass backdrop-blur px-3 py-1 rounded-md text-sm text-foreground border border-white/20"
                aria-label={`Skill: ${skill}`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-start mb-4 sm:mb-6">
            <Button
              variant="default"
              size="default"
              className="bg-accent hover:bg-accent/90 text-white rounded-lg px-6"
              asChild
            >
              <a href="#projects" className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2" aria-hidden="true" />
                Explore My Work
              </a>
            </Button>
            <Button
              variant="outline"
              size="default"
              className="bg-glass backdrop-blur border-white/20 hover:bg-white/10 rounded-lg px-6"
              asChild
            >
              <a
                className="flex items-center"
                href="https://drive.google.com/file/d/1e7cZVh0q4nq4T9Qp7q4l3q4l3q4u4u4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Sachin's resume"
              >
                <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-start">
            <a
              href="https://github.com/Sachinsen7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-glass backdrop-blur rounded-lg hover:bg-white/20 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4"/>
            </a>
            <a
              href="#"
              className="p-2 bg-glass backdrop-blur rounded-lg hover:bg-white/20 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4"/>
            </a>
            <a
              href="#"
              className="p-2 bg-glass backdrop-blur rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Twitter Profile"
            >
              <TwitterIcon className="h-4 w-4"/>
            </a>
            <a
              href="mailto:sachinsen1920@gmail.com"
              className="p-2 bg-glass backdrop-blur rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Email Contact"
            >
              <MailIcon className="h-4 w-4"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}