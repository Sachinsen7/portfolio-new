import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const footerLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Sachinsen7",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sachinsen1",
    icon: LinkedinIcon,
  },
  {
    name: "Email",
    href: "mailto:sachinsen1920@gmail.com",
    icon: MailIcon,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-200/80 dark:border-white/10">
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Get in touch
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              Let&apos;s build something worth shipping.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
              Open to full-time roles and interesting freelance work. The fastest way to reach me is email.
            </p>
          </div>

          <a
            href="mailto:sachinsen1920@gmail.com"
            className="interactive-surface inline-flex shrink-0 items-center gap-2 rounded-sm border border-gray-200 bg-gray-50/80 px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-gray-400 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/25"
          >
            <span>sachinsen1920@gmail.com</span>
            <ArrowUpRight className="h-4 w-4 text-foreground-muted" />
          </a>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start gap-4 border-t border-gray-200/80 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} Sachin Sen. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-2">
            {footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={link.name}
                  className="interactive-icon inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-foreground-muted transition-colors duration-200 hover:border-gray-400 hover:text-foreground dark:border-white/10 dark:hover:border-white/25"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
