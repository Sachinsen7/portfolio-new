import { Briefcase, Globe, Award, TrendingUp } from "lucide-react";
import logo from "/assets/images/logo.png";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandVercel,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandPython,
  IconBrandAws,
  IconBrandDocker,
  IconApi,
  IconDatabase,
  IconCloud
} from "@tabler/icons-react";


export default function About() {
  return (
    <section className="container mx-auto py-8 max-w-4xl" aria-labelledby="about-heading">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 mb-8">
        <h2 id="about-heading" className="text-xl text-start">
          Featured
        </h2>
        <h3 className="text-2xl font-semibold text-foreground flex items-center justify-center">
          {/* <Briefcase className="h-6 w-6 mr-2 text-accent" aria-hidden="true" /> */}
          Experience
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
                  <p className="text-sm text-gray-600">Full Stack Developer</p>
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

              {/* Core Technologies */}
              <div className="mt-4">
                <h5 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  {/* <Award className="h-4 w-4 text-accent" /> */}
                  Core Technologies & Expertise
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-cyan-900 dark:text-cyan-100 border border-cyan-200 dark:border-cyan-700 shadow-sm hover:shadow-md transition-all duration-300">
                    <IconBrandNextjs className="h-4 w-4" />
                    <span className="font-medium">Next.js</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-700 shadow-sm hover:shadow-md transition-all duration-300">
                    <IconBrandTypescript className="h-4 w-4" />
                    <span className="font-medium">TypeScript</span>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/30 dark:to-teal-800/30 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-cyan-900 dark:text-cyan-100 border border-cyan-200 dark:border-cyan-700 shadow-sm hover:shadow-md transition-all duration-300">
                    <IconBrandReact className="h-4 w-4" />
                    <span className="font-medium">React</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-green-900 dark:text-green-100 border border-green-200 dark:border-green-700 shadow-sm hover:shadow-md transition-all duration-300">
                    <IconBrandNodejs className="h-4 w-4" />
                    <span className="font-medium">Node.js</span>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-orange-900 dark:text-orange-100 border border-orange-200 dark:border-orange-700 shadow-sm hover:shadow-md transition-all duration-300">
                    <IconBrandAws className="h-4 w-4" />
                    <span className="font-medium">AWS</span>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-emerald-900 dark:text-emerald-100 border border-emerald-200 dark:border-emerald-700 shadow-sm hover:shadow-md transition-all duration-300">
                    <IconBrandMongodb className="h-4 w-4" />
                    <span className="font-medium">MongoDB</span>
                  </div>
                </div>

                {/* Additional Skills */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 flex items-center gap-1 px-2 py-1 rounded text-xs text-purple-900 dark:text-purple-100 border border-purple-200 dark:border-purple-700">
                    <IconDatabase className="h-3 w-3" />
                    Prisma
                  </div>
                  <div className="bg-gradient-to-r from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20 flex items-center gap-1 px-2 py-1 rounded text-xs text-sky-900 dark:text-sky-100 border border-sky-200 dark:border-sky-700">
                    <IconBrandDocker className="h-3 w-3" />
                    Docker
                  </div>
                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 flex items-center gap-1 px-2 py-1 rounded text-xs text-indigo-900 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-700">
                    <IconApi className="h-3 w-3" />
                    REST APIs
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 flex items-center gap-1 px-2 py-1 rounded text-xs text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-700">
                    <IconCloud className="h-3 w-3" />
                    Cloudinary
                  </div>
                  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 flex items-center gap-1 px-2 py-1 rounded text-xs text-cyan-900 dark:text-cyan-100 border border-cyan-200 dark:border-cyan-700">
                    <IconBrandTailwind className="h-3 w-3" />
                    Tailwind CSS
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20 flex items-center gap-1 px-2 py-1 rounded text-xs text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600">
                    <IconBrandVercel className="h-3 w-3" />
                    Vercel
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mt-4">
                <h5 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  {/* <TrendingUp className="h-4 w-4 text-green-500" /> */}
                  Key Achievements & Impact
                </h5>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 p-3 rounded-lg border border-green-200/50 dark:border-green-700/30">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-foreground font-medium mb-1">Enterprise SaaS Platform Development</p>
                        <p className="text-xs text-foreground-muted">Built comprehensive bus management platform with multi-service booking (tickets, cabs, hotels) and WhatsApp API integration, achieving <span className="font-semibold text-green-600 dark:text-green-400">90% operational efficiency boost</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 p-3 rounded-lg border border-blue-200/50 dark:border-blue-700/30">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-foreground font-medium mb-1">Scalable Architecture & Analytics</p>
                        <p className="text-xs text-foreground-muted">Architected enterprise management system with real-time analytics, role-based access control, and automated workflows, reducing <span className="font-semibold text-blue-600 dark:text-blue-400">manual overhead by 85%</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50/50 to-violet-50/50 dark:from-purple-900/10 dark:to-violet-900/10 p-3 rounded-lg border border-purple-200/50 dark:border-purple-700/30">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-foreground font-medium mb-1">Full-Stack Business Solutions</p>
                        <p className="text-xs text-foreground-muted">Developed jewelry business management application with inventory control, sales tracking, customer management, and <span className="font-semibold text-purple-600 dark:text-purple-400">real-time dashboard analytics</span> with barcode generation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}