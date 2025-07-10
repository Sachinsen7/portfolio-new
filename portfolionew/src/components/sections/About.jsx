import { AnimatedSection } from "@/components/common/AnimatedSection";
import { LazyImage } from "@/components/common/LazyImage";


export default function About() {
  return (
    <AnimatedSection id="about" className="section">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <LazyImage
            src="/assets/images/profile.jpg"
            alt="Sachin"
            className="w-48 h-48 rounded-full mx-auto md:mx-0"
          />
          <p className="text-lg max-w-2xl">
            I'm a passionate web developer with expertise in React, Tailwind CSS, and modern JavaScript. I love creating
            user-friendly, accessible, and visually appealing web applications.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}