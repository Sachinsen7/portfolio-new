import { Award, Heart, Pointer } from "lucide-react";
import LazyImage from "@/components/common/LazyImage";
import { Briefcase, Globe, GithubIcon, } from "lucide-react";
import logo from "/assets/images/logo.png";
import {IconBrandReact, IconBrandJavascript, IconBrandTailwind, IconBrandNodejs, IconBrandVercel, IconBrandMongodb, } from "@tabler/icons-react";


export default function About() {
  return (
    <section className="container mx-auto py-8 max-w-4xl" aria-labelledby="about-heading">
      {/* About Me */}
      <div className="flex flex-col items-start gap-4">
        <h2 id="about-heading" className="text-xl text-start">
          Featured
        </h2>
        <h3 className="text-2xl font-semibold text-foreground flex items-center justify-center">
          <Briefcase className="h-6 w-6 mr-2 text-accent" aria-hidden="true" /> Experience
        </h3>
       <div className="flex items-start gap-4">
          <img src={logo} alt="ADRS logo" className="h-8" />

          <div className="flex flex-col">
            {/* Header Row: Name + Icons */}
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-base">ADRS Technosoft</h2>
              <a
                href="https://www.adrstechno.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Globe className="h-4 w-4 cursor-pointer" />
              </a>
              <GithubIcon className="h-4 w-4 text-gray-400" />
            </div>

            {/* Dates & Role */}
            <div className="text-sm text-gray-600">
              <p>May 2025 - Present</p>
              <p>Internship</p>
            </div>

            <h2 className="text-sm mt-1">Front End Developer</h2>
          </div>
        </div>

        <div>
          <h2 className="font-bold">Technologies</h2>
          <div className="flex flex-wrap gap-2 mt-4 ">
            <div className="bg-glass backdrop-blur flex px-2 py-1 rounded-md text-sm text-foreground">
              <IconBrandReact className="h-4"/>
              React
            </div>
             <div className="bg-glass backdrop-blur px-2 flex py-1 rounded-md  text-sm text-foreground">
              <IconBrandJavascript className="h-4"/>
              Javascript
            </div>
            <div className="bg-glass backdrop-blur px-2 py-1 flex rounded-md text-sm text-foreground">
              <IconBrandNodejs className="h-4"/>
              Node JS
            </div>
             <div className="bg-glass backdrop-blur px-2 py-1 flex rounded-md  text-sm text-foreground">
              <IconBrandTailwind className="h-4"/>
              Tailwind CSS
            </div>
            <div className="bg-glass backdrop-blur px-2 py-1 flex rounded-md  text-sm text-foreground">
              <IconBrandMongodb className="h-4"/>
              Mongo DB
            </div>
            <div className="bg-glass backdrop-blur px-2 py-1 flex rounded-md  text-sm text-foreground">  
              <IconBrandVercel className="h-4"/>
              Vercel
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-600"> ‣ Independently designed and implemented a Front End bus management platform, integrating dynamic ticket booking, cab booking, hotel booking, and Integrated WhatsApp Api leading to a 90% boost in operational efficiency and user satisfaction.

            </p>
            <br />
            <p className="text-gray-600"> ‣ Architected scalable management software system with real-time analytics, user role-based access, and automated workflow management, reducing manual overhead by 85% in business operations.
            </p>
            <br />
            <p className="text-gray-600"> ‣Developed a full-stack web application for jewelry business management, featuring inventory, sales, rates, and customer modules with real-time dashboards and barcode generation.</p>
          </div>
        </div>

        </div>

       <div>
      </div>
     </section>
  );
}