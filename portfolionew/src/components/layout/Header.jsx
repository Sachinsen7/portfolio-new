import { useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import CompactMusicPlayer from "@/components/common/CompactMusicPlayer";
import { useViewTransition, useViewTransitionScroll } from "@/hooks/useViewTransition";

const homeNavItems = [
  { href: "me", label: "Me", type: "scroll" },
  { href: "/system", label: "System", type: "link" },
  { href: "/experience", label: "Experience", type: "link" },
  { href: "projects", label: "Projects", type: "scroll" },
  { href: "/notes", label: "Notes", type: "link" },
  { href: "/play", label: "Play", type: "link" },
  { href: "/taste", label: "Taste", type: "link" },
  { href: "github", label: "GitHub", type: "scroll" },
];

const pageNavItems = [
  { href: "/", label: "Home", type: "link" },
  { href: "/experience", label: "Experience", type: "link" },
  { href: "/projects", label: "Projects", type: "link" },
  { href: "/notes", label: "Notes", type: "link" },
  { href: "/system", label: "System", type: "link" },
  { href: "/play", label: "Play", type: "link" },
  { href: "/taste", label: "Taste", type: "link" },
];

const socialLinks = [
  { label: "Email", href: "mailto:sachinsen1920@gmail.com" },
  { label: "GitHub", href: "https://github.com/Sachinsen7" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sachinsen1" },
  { label: "Twitter", href: "https://twitter.com/sen_sachiin" },
];

// bg/text pairs kept high-contrast against each dot color, cycled per item
const dotStyles = [
  { bg: "#eab308", text: "#000000" },
  { bg: "#3b82f6", text: "#ffffff" },
  { bg: "#14b8a6", text: "#000000" },
  { bg: "#6366f1", text: "#ffffff" },
];

const formatIndiaTime = () =>
  `${new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date())} IST`;

function MenuToggle({ isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative h-10 w-10 shrink-0"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span
        className={`absolute left-1/2 top-1/2 inline-block h-0.5 w-5 -translate-x-1/2 rounded-full transition-transform duration-300 ${
          isOpen ? "-translate-y-1/2 rotate-45 bg-foreground" : "-translate-y-[5px] bg-foreground group-hover:rotate-6"
        }`}
      />
      <span
        className={`absolute left-1/2 top-1/2 inline-block h-0.5 w-5 -translate-x-1/2 rounded-full transition-transform duration-300 ${
          isOpen ? "-translate-y-1/2 -rotate-45 bg-foreground" : "translate-y-[5px] bg-foreground group-hover:-rotate-6"
        }`}
      />
    </button>
  );
}

function NavRow({ item, active, index, onClick }) {
  const dot = dotStyles[index % dotStyles.length];

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.32, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex w-full items-center gap-3 py-2 text-left transition-colors duration-200 ${
        active ? "text-foreground" : "text-foreground-muted hover:text-foreground"
      }`}
      aria-current={active ? "page" : undefined}
    >
      <span
        className="relative flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-[2]"
        style={{ backgroundColor: dot.bg }}
      >
        <ArrowUpRight
          className="h-2 w-2 scale-0 transition-transform duration-300 group-hover:scale-100"
          style={{ color: dot.text }}
        />
      </span>
      <span className="font-heading text-xl font-semibold sm:text-2xl">{item.label}</span>
    </motion.button>
  );
}

function SocialRow({ link, index }) {
  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.32, delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="block py-2 text-base text-foreground-muted transition-colors duration-200 hover:text-foreground hover:underline"
    >
      {link.label}
    </motion.a>
  );
}

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("me");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatIndiaTime());
  const location = useLocation();
  const { transitionTo } = useViewTransition();
  const { scrollToElement } = useViewTransitionScroll();

  const isHomePage = location.pathname === "/";
  const isProjectDetailPage = location.pathname.startsWith("/project/");
  const currentNavItems = useMemo(
    () => (isHomePage ? homeNavItems : pageNavItems),
    [isHomePage]
  );

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(formatIndiaTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      return undefined;
    }

    const sections = homeNavItems
      .map((item) => document.getElementById(item.href))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isDrawerOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen]);

  if (isProjectDetailPage) {
    return null;
  }

  const handleNavClick = (item) => {
    setIsDrawerOpen(false);

    if (item.type === "scroll" && isHomePage) {
      scrollToElement(item.href, { offset: window.innerWidth < 768 ? 104 : 132 });
      return;
    }

    transitionTo(item.href, {
      transitionName: `nav-${item.label.toLowerCase()}`,
    });
  };

  const handleBrandClick = () => {
    setIsDrawerOpen(false);

    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    transitionTo("/", { transitionName: "nav-home" });
  };

  const isActive = (item) => {
    if (item.type === "scroll" && isHomePage) {
      return activeSection === item.href;
    }

    return location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
  };

  const bubbleClass = hasScrolled
    ? "border-gray-200/80 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0f0f10]"
    : "border-transparent bg-transparent shadow-none";

  return (
    <>
      <header
        className="fixed inset-x-4 top-4 z-[70] flex items-center justify-between md:inset-x-7 md:top-7"
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={handleBrandClick}
          className={`interactive-surface flex items-center gap-2 rounded-sm border px-3 py-2.5 text-left transition-all duration-300 ${bubbleClass}`}
          aria-label="Go to homepage"
        >
          <span className="font-heading text-sm font-semibold text-foreground">coco</span>
        </button>

        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1 rounded-sm border px-2 py-2 transition-all duration-300 ${bubbleClass}`}
          >
            <CompactMusicPlayer />

            <button
              type="button"
              onClick={toggleTheme}
              className="interactive-icon inline-flex h-10 w-10 items-center justify-center rounded-sm border border-transparent text-foreground hover:border-gray-200 hover:bg-gray-50/80 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4 text-accent" />}
            </button>
          </div>

          <div className={`rounded-sm border p-0.5 transition-all duration-300 ${bubbleClass}`}>
            <MenuToggle isOpen={isDrawerOpen} onClick={() => setIsDrawerOpen((current) => !current)} />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/70"
              onClick={() => setIsDrawerOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              key="drawer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[61] flex w-[500px] max-w-[calc(100vw-3rem)] flex-col bg-white py-10 dark:bg-[#0c0c0e]"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
            >
              <div className="flex flex-1 flex-col justify-center gap-10 px-8 sm:mx-auto sm:gap-16 sm:px-0 md:flex-row md:items-center">
                <div>
                  <p className="mb-5 text-sm uppercase tracking-wider text-gray-500 dark:text-white/35 md:mb-8">
                    Social
                  </p>
                  <div className="space-y-1">
                    {socialLinks.map((link, index) => (
                      <SocialRow key={link.label} link={link} index={index} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-5 text-sm uppercase tracking-wider text-gray-500 dark:text-white/35 md:mb-8">
                    Menu
                  </p>
                  <nav className="space-y-1">
                    {currentNavItems.map((item, index) => (
                      <NavRow
                        key={item.href}
                        item={item}
                        active={isActive(item)}
                        index={index}
                        onClick={() => handleNavClick(item)}
                      />
                    ))}
                  </nav>
                </div>
              </div>

              <div className="px-8 sm:mx-auto sm:px-0">
                <p className="mb-4 text-sm uppercase tracking-wider text-gray-500 dark:text-white/35">Get in touch</p>
                <a
                  href="mailto:sachinsen1920@gmail.com"
                  className="text-sm text-foreground-muted transition-colors duration-200 hover:text-foreground hover:underline"
                >
                  sachinsen1920@gmail.com
                </a>
                <p className="mt-2 font-tech text-[11px] text-foreground-muted/70">
                  Jabalpur, India &middot; {currentTime}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
