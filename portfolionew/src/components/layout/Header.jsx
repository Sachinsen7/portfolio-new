import { useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {
  Briefcase,
  Clapperboard,
  FolderOpen,
  Github,
  Home,
  MapPin,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import CompactMusicPlayer from "@/components/common/CompactMusicPlayer";
import { useViewTransition, useViewTransitionScroll } from "@/hooks/useViewTransition";

const homeNavItems = [
  { href: "me", label: "Me", icon: User, type: "scroll" },
  { href: "about", label: "Experience", icon: Briefcase, type: "scroll" },
  { href: "projects", label: "Projects", icon: FolderOpen, type: "scroll" },
  { href: "/taste", label: "Taste", icon: Clapperboard, type: "link" },
  { href: "github", label: "GitHub", icon: Github, type: "scroll" },
];

const pageNavItems = [
  { href: "/", label: "Home", icon: Home, type: "link" },
  { href: "/projects", label: "Projects", icon: FolderOpen, type: "link" },
  { href: "/taste", label: "Taste", icon: Clapperboard, type: "link" },
];

const formatIndiaTime = () =>
  `${new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date())} IST`;

function NavItem({ item, active, compact = false, onClick }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center rounded-xl border px-3 py-2 text-sm transition-all duration-200 ${
        compact ? "h-11 w-11 justify-center px-0 md:h-10 md:w-10" : "gap-2"
      } ${
        active
          ? "border-gray-300 bg-gray-100/90 text-foreground dark:border-white/15 dark:bg-white/[0.08]"
          : "border-transparent text-foreground-muted hover:border-gray-200 hover:bg-gray-50/80 hover:text-foreground dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
      }`}
      aria-label={item.label}
    >
      <Icon className={compact ? "h-[18px] w-[18px] md:h-4 md:w-4" : "h-4 w-4"} />
      {!compact && <span className="font-tech text-[0.8rem]">{item.label}</span>}
      {compact && (
        <span className="font-tech pointer-events-none absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-gray-200 bg-white/95 px-2.5 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#141414]">
          {item.label}
        </span>
      )}
    </button>
  );
}

function DesktopMeta({ isExpanded, currentTime }) {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="font-tech ml-3 flex items-center gap-2 whitespace-nowrap text-xs text-foreground-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span>{currentTime}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("me");
  const [isExpanded, setIsExpanded] = useState(false);
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
    const interval = setInterval(() => {
      setCurrentTime(formatIndiaTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  if (isProjectDetailPage) {
    return null;
  }

  const handleNavClick = (item) => {
    if (item.type === "scroll" && isHomePage) {
      scrollToElement(item.href, { offset: window.innerWidth < 768 ? 104 : 132 });
      return;
    }

    transitionTo(item.href, {
      transitionName: `nav-${item.label.toLowerCase()}`,
    });
  };

  const handleBrandClick = () => {
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

    return location.pathname === item.href;
  };

  const bubbleClass = isExpanded
    ? "border-transparent bg-transparent shadow-none"
    : "border border-gray-200/80 bg-white/88 shadow-[0_10px_24px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#0f0f10]/88";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -24, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed inset-x-0 top-4 z-50 md:top-7"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="hidden px-4 md:block">
            <motion.div
              onHoverStart={() => setIsExpanded(true)}
              onHoverEnd={() => setIsExpanded(false)}
              className="relative mx-auto w-full max-w-6xl"
            >
              <motion.div
                animate={{ opacity: isExpanded ? 1 : 0, scale: isExpanded ? 1 : 0.985 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-y-0 left-0 right-0 rounded-[30px] border border-gray-200/80 bg-white/80 shadow-[0_16px_40px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f0f10]/80"
              />

              <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-5">
                <motion.div
                  layout
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex w-fit items-center justify-self-start rounded-[24px] px-3 py-2 transition-all duration-300 ${bubbleClass}`}
                >
                  <button
                    type="button"
                    onClick={handleBrandClick}
                    className="interactive-surface flex items-center gap-3 rounded-xl border border-transparent px-2.5 py-2 text-left hover:border-gray-200 hover:bg-gray-50/80 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
                    aria-label="Go to homepage"
                  >
                    <span className="font-heading text-sm font-semibold text-foreground">coco</span>
                  </button>
                  <DesktopMeta isExpanded={isExpanded} currentTime={currentTime} />
                </motion.div>

                <motion.nav
                  layout
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-center gap-1 rounded-[24px] px-2 py-2 justify-self-center transition-all duration-300 ${bubbleClass}`}
                >
                  {currentNavItems.map((item) => (
                    <NavItem
                      key={item.href}
                      item={item}
                      active={isActive(item)}
                      onClick={() => handleNavClick(item)}
                    />
                  ))}
                </motion.nav>

                <motion.div
                  layout
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex w-fit items-center gap-1 rounded-[24px] px-3 py-2 justify-self-end transition-all duration-300 ${bubbleClass}`}
                >
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      className="font-tech mr-2 flex items-center gap-2 whitespace-nowrap text-xs text-foreground-muted"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Jabalpur, India</span>
                    </motion.div>
                  )}

                  <CompactMusicPlayer />
                  <div className="group relative flex items-center">
                    <button
                      type="button"
                      onClick={toggleTheme}
                      className="interactive-icon inline-flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-foreground hover:border-gray-200 hover:bg-gray-50/80 dark:hover:border-white/10 dark:hover:bg-white/[0.04]"
                      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    >
                      {theme === "light" ? (
                        <Moon className="h-4 w-4" />
                      ) : (
                        <Sun className="h-4 w-4 text-accent" />
                      )}
                    </button>
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-gray-200 bg-white/95 px-2.5 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#141414]">
                      {theme === "light" ? "Dark mode" : "Light mode"}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-2 flex w-fit max-w-[calc(100vw-1rem)] flex-wrap items-center justify-center gap-1.5 rounded-[22px] border border-gray-200/80 bg-white/85 p-2 shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0f0f10]/85 md:hidden">
            {currentNavItems.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                active={isActive(item)}
                compact
                onClick={() => handleNavClick(item)}
              />
            ))}
            <CompactMusicPlayer />
            <div className="group relative flex items-center">
              <button
                type="button"
                onClick={toggleTheme}
                className="interactive-icon inline-flex h-11 w-11 items-center justify-center rounded-xl border border-transparent text-foreground hover:border-gray-200 hover:bg-gray-50/80 dark:hover:border-white/10 dark:hover:bg-white/[0.04] md:h-10 md:w-10"
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                {theme === "light" ? (
                  <Moon className="h-[18px] w-[18px] md:h-4 md:w-4" />
                ) : (
                  <Sun className="h-[18px] w-[18px] text-accent md:h-4 md:w-4" />
                )}
              </button>
              <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-gray-200 bg-white/95 px-2.5 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#141414]">
                {theme === "light" ? "Dark mode" : "Light mode"}
              </span>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
