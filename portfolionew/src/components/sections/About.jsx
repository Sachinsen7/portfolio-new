import { Award, Heart, Briefcase } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";


const achievements = [
  { id: 1, title: "Built Netflix Clone", description: "Developed a full-stack streaming platform with React and Node.js" },
  { id: 2, title: "React Certification", description: "Earned a professional certification in React from Coursera" },
  { id: 3, title: "Hackathon Winner", description: "Secured 1st place in a regional Web3 hackathon" },
];

const interests = ["Web3", "UI/UX Design", "Open Source", "Performance Optimization", "AI Integration"];

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Tech Startup",
    period: "2023 - Present",
    description: "Led UI development for a SaaS platform using React and Tailwind CSS.",
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Digital Agency",
    period: "2022 - 2023",
    description: "Built responsive websites with JavaScript and integrated APIs.",
  },
];

export default function About() {
  return (
    <section className="container mx-auto py-16" aria-labelledby="about-heading">
      {/* About Me */}
      <div className="text-center mb-12">
        <h2 id="about-heading" className="text-4xl font-bold text-foreground mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <LazyImage
            src="/assets/images/profile.jpg"
            alt="Sachin, a full-stack developer"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto md:mx-0"
          />
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm a passionate full-stack developer with expertise in React, Tailwind CSS, Node.js, and Web3. I love crafting
            user-friendly, accessible, and visually appealing web applications that solve real-world problems.
          </p>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center justify-center">
          <Award className="h-6 w-6 mr-2 text-accent" aria-hidden="true" /> Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="glass backdrop-blur rounded-2xl p-4">
              <h4 className="text-lg font-medium text-foreground">{achievement.title}</h4>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center justify-center">
          <Heart className="h-6 w-6 mr-2 text-secondary" aria-hidden="true" /> Interests
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {interests.map((interest) => (
            <span
              key={interest}
              className="glass backdrop-blur px-3 py-1 rounded-full text-sm text-foreground"
              aria-label={`Interest: ${interest}`}
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center justify-center">
          <Briefcase className="h-6 w-6 mr-2 text-accent" aria-hidden="true" /> Experiences
        </h3>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <div key={experience.id} className="glass backdrop-blur rounded-2xl p-4">
              <h4 className="text-lg font-medium text-foreground">{experience.role}</h4>
              <p className="text-muted-foreground">{experience.company} • {experience.period}</p>
              <p className="text-muted-foreground mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}