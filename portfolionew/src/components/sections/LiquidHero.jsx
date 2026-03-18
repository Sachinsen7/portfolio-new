import { Button } from "@/components/ui/button";
import {
  Download,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import profileImage from "/assets/images/me.jpg";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:sachinsen1920@gmail.com",
    icon: MailIcon,
    ariaLabel: "Email Sachin",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/sen_sachiin",
    icon: TwitterIcon,
    ariaLabel: "Sachin on Twitter",
  },
  {
    name: "GitHub",
    href: "https://github.com/Sachinsen7",
    icon: GithubIcon,
    ariaLabel: "Sachin on GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sachinsen1",
    icon: LinkedinIcon,
    ariaLabel: "Sachin on LinkedIn",
  },
];

const introParagraphs = [
  <>
    I&apos;m <span className="text-foreground font-medium">Sachin</span>, a
    full-stack developer from India focused on building products that feel
    clean, useful, and ready for real people.
  </>,
  <>
    I enjoy both <span className="text-foreground font-medium">development</span>
    and <span className="text-foreground font-medium">design</span>, so I care
    just as much about how an interface feels as how well it performs.
  </>,
  <>
    Most of my work lives around <span className="text-foreground font-medium">React</span>,
    <span className="text-foreground font-medium"> Next.js</span>,
    <span className="text-foreground font-medium"> Node.js</span>, and modern
    frontend systems with a minimal, thoughtful finish.
  </>,
  <>
    I&apos;m always chasing new things to learn, better systems to build, and more
    ambitious problems to solve.
  </>,
];

export default function LiquidHero() {
  return (
    <section className="container mx-auto flex min-h-[70vh] max-w-4xl items-center py-10 md:pt-8 lg:py-16">
      <div className="w-full">
        <div className="mb-8 flex items-center gap-4 sm:gap-5">
          <div className="relative shrink-0">
            <img
              src={profileImage}
              alt="Sachin, a full-stack developer"
              className="h-20 w-20 rounded-3xl object-cover border border-gray-200 dark:border-white/10 sm:h-24 sm:w-24"
            />
            {/* <div className="absolute -bottom-1 -right-1 rounded-full border border-white/20 bg-accent p-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div> */}
          </div>

          <div>
            <h1
              id="hero-heading"
              className="font-authorLight text-2xl font-semibold tracking-wide text-foreground sm:text-3xl"
            >
              Sachin
            </h1>
            <p className="mt-1 text-sm text-foreground-muted sm:text-base">
              @sachinsen7
            </p>
          </div>
        </div>

        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground-muted sm:text-lg">
          {introParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            variant="glass"
            size="lg"
            className="justify-start rounded-2xl border-gray-200 bg-gray-50/80 px-5 text-sm shadow-none hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25"
            asChild
          >
            <a href="mailto:sachinsen1920@gmail.com" className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500" />
              </span>
              <span>Available for new opportunities</span>
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="justify-start rounded-2xl border-gray-200 bg-gray-50/80 px-5 text-sm shadow-none hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25"
            asChild
          >
            <a
              className="flex items-center gap-3"
              href="https://drive.google.com/file/d/1e7cZVh0q4nq4T9Qp7q4l3q4l3q4u4u4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Sachin's CV"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </Button>
        </div>

        <div className="mt-10 border-t border-gray-200/80 pt-7 dark:border-white/10">
          <p className="mb-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
            Where to find me <span className="font-medium text-foreground">digitally</span>
          </p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={social.ariaLabel}
                  className="interactive-surface group relative inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50/80 px-4 py-3 text-sm text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25"
                >
                  <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 translate-y-2 rounded-lg border border-gray-200 bg-white/95 px-2.5 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#141414]">
                    {social.name}
                  </span>
                  <Icon className="h-4 w-4 text-foreground-muted transition-colors duration-200 group-hover:text-foreground" />
                  <span>{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
