import { Briefcase, Globe } from "lucide-react";
import logo from "/assets/images/logo.png";
import {IconBrandReact, IconBrandJavascript, IconBrandTailwind, IconBrandNodejs, IconBrandVercel, IconBrandMongodb, } from "@tabler/icons-react";


export default function About() {
  return (
    <section className="container mx-auto py-8 max-w-4xl" aria-labelledby="about-heading">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 mb-8">
        <h2 id="about-heading" className="text-xl text-start">
          Featured
        </h2>
        <h3 className="text-2xl font-semibold text-foreground flex items-center justify-center">
          <Briefcase className="h-6 w-6 mr-2 text-accent" aria-hidden="true" /> Experience
        </h3>
      </div>

      {/* Experience Content */}
      <div className="space-y-6">
        {/* Experience Card */}
        <div className="p-3 sm:p-4 rounded-lg transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="ADRS Technosoft logo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-contain" />
            </div>

            {/* Experience Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-base text-foreground">ADRS Technosoft</h4>
                  <p className="text-sm text-gray-600">Front End Developer</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-foreground-muted bg-glass backdrop-blur px-2 py-1 rounded border border-glass-border">
                      May 2025 - Present
                    </span>
                    <span className="text-xs text-foreground-muted bg-glass backdrop-blur px-2 py-1 rounded border border-glass-border">
                      Internship
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.adrstechno.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                    aria-label="Visit ADRS Technosoft website"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-4">
                <h5 className="font-semibold text-sm text-foreground mb-2">Technologies</h5>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-glass backdrop-blur flex items-center gap-1 px-2 py-1 rounded-md text-sm text-foreground border border-glass-border">
                    <IconBrandReact className="h-4 w-4"/>
                    React
                  </div>
                  <div className="bg-glass backdrop-blur flex items-center gap-1 px-2 py-1 rounded-md text-sm text-foreground border border-glass-border">
                    <IconBrandJavascript className="h-4 w-4"/>
                    JavaScript
                  </div>
                  <div className="bg-glass backdrop-blur flex items-center gap-1 px-2 py-1 rounded-md text-sm text-foreground border border-glass-border">
                    <IconBrandNodejs className="h-4 w-4"/>
                    Node.js
                  </div>
                  <div className="bg-glass backdrop-blur flex items-center gap-1 px-2 py-1 rounded-md text-sm text-foreground border border-glass-border">
                    <IconBrandTailwind className="h-4 w-4"/>
                    Tailwind CSS
                  </div>
                  <div className="bg-glass backdrop-blur flex items-center gap-1 px-2 py-1 rounded-md text-sm text-foreground border border-glass-border">
                    <IconBrandMongodb className="h-4 w-4"/>
                    MongoDB
                  </div>
                  <div className="bg-glass backdrop-blur flex items-center gap-1 px-2 py-1 rounded-md text-sm text-foreground border border-glass-border">
                    <IconBrandVercel className="h-4 w-4"/>
                    Vercel
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mt-4">
                <h5 className="font-semibold text-sm text-foreground mb-2">Key Achievements</h5>
                <ul className="space-y-2 text-sm text-foreground-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Independently designed and implemented a Front End bus management platform, integrating dynamic ticket booking, cab booking, hotel booking, and WhatsApp API leading to a 90% boost in operational efficiency and user satisfaction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Architected scalable management software system with real-time analytics, user role-based access, and automated workflow management, reducing manual overhead by 85% in business operations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Developed a full-stack web application for jewelry business management, featuring inventory, sales, rates, and customer modules with real-time dashboards and barcode generation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}