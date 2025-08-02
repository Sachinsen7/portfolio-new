import profileImage from "/assets/images/me_and_bill.png";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandVercel,
} from "@tabler/icons-react";

export default function Me() {
  const skills = [
    { name: "React", icon: IconBrandReact },
    { name: "JavaScript", icon: IconBrandJavascript },
    { name: "Node.js", icon: IconBrandNodejs },
    { name: "Tailwind CSS", icon: IconBrandTailwind },
    { name: "MongoDB", icon: IconBrandMongodb },
    { name: "Vercel", icon: IconBrandVercel },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl" aria-labelledby="me-heading">
      <div className="flex flex-col items-start gap-6">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <h2 id="me-heading" className="text-xl text-start">
            About
          </h2>
          <h3 className="text-2xl font-semibold text-foreground">
            Me
          </h3>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 w-full">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Sachin - Full Stack Developer"
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto sm:mx-0"
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-lg text-foreground mb-2">Sachin Sen</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A passionate full-stack developer crafting modern web experiences with React and Web3.
              I specialize in building scalable applications that solve real-world problems and deliver
              exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full">
          <h4 className="font-bold text-base text-foreground mb-3">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-glass backdrop-blur flex items-center gap-1 px-2 py-1 rounded-md text-sm text-foreground"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}