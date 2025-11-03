import { useContext, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/context/ThemeContext";
import {
  Briefcase,
  Sun,
  Moon,
  FileText,
  User,
  FolderOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import CompactMusicPlayer from "@/components/common/CompactMusicPlayer";
import { smoothScrollTo } from "@/utils/smoothScroll";

const navItems = [
  { href: "/projects", label: "Work", icon: Briefcase, type: "link" },
  { href: "#blog", label: "Blog", icon: FileText, type: "link" },
];

// Home page sections for smooth scrolling
const homeNavItems = [
  { href: "about", label: "About", icon: User, type: "scroll" },
  { href: "projects", label: "Projects", icon: FolderOpen, type: "scroll" },
  { href: "github", label: "GitHub", icon: Briefcase, type: "scroll" },
];

export default function Header() {
  const { toggleTheme, theme, isTransitioning } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Check if we're on the home page or project detail page
  const isHomePage = location.pathname === "/";
  const isProjectDetailPage = location.pathname.startsWith("/project/");
  const isAllProjectsPage = location.pathname === "/projects";

  // Hide header on project detail pages and AllProjects page on desktop
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  const shouldShowHeader = !isProjectDetailPage && !isAllProjectsPage;

  // Use appropriate nav items based on current page
  const currentNavItems = isHomePage ? homeNavItems : navItems;

  const handleNavClick = (item, e) => {
    if (item.type === "scroll" && isHomePage) {
      e.preventDefault();
      smoothScrollTo(item.href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 640;

      if (isMobile) {
        if (currentScrollY < 50) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Hide when scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Show when scrolling up
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!shouldShowHeader) {
    return null;
  }

  const containerVariants = {
    normal: {
      scaleX: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    stretched: {
      scaleX: 1.1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const itemVariants = {
    normal: {
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    hovered: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          className="fixed bottom-4 sm:fixed left-20 sm:bottom-6 sm:left-[40%] z-50 -translate-x-1/2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="navigation"
          aria-label="Main navigation"
        >
          <motion.nav
            className="flex items-center gap-1 bg-[var(--glass-bg)] backdrop-blur-xl border border-white/20 rounded-2xl px-2 sm:px-3 py-2 shadow-lg"
            variants={containerVariants}
            animate={isHovered ? "stretched" : "normal"}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Navigation Items */}
            <div className="flex items-center gap-1">
              {currentNavItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.href}
                    variants={itemVariants}
                    animate={hoveredItem === index ? "hovered" : "normal"}
                    onHoverStart={() => setHoveredItem(index)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    {item.type === "scroll" && isHomePage ? (
                      <button
                        onClick={(e) => handleNavClick(item, e)}
                        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-foreground hover:text-accent hover:bg-button-hover transition-all duration-200"
                        aria-label={item.label}
                      >
                        <IconComponent
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={(e) => handleNavClick(item, e)}
                        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-foreground hover:text-accent hover:bg-button-hover transition-all duration-200"
                        aria-label={item.label}
                      >
                        <IconComponent
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-glass-border mx-1" />

            {/* Music Player */}
            <CompactMusicPlayer />

            {/* Separator */}
            <div className="w-px h-6 bg-glass-border mx-1" />

            {/* Theme Toggle */}
            <motion.div
              variants={itemVariants}
              animate={hoveredItem === "theme" ? "hovered" : "normal"}
              onHoverStart={() => setHoveredItem("theme")}
              onHoverEnd={() => setHoveredItem(null)}
              className="relative"
            >
              <motion.button
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center hover:bg-button-hover transition-all duration-200 relative overflow-hidden"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                whileTap={{ scale: 0.9 }}
                animate={isTransitioning ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Background ripple effect */}
                {isTransitioning && (
                  <motion.div
                    className="absolute inset-0 bg-accent/20 rounded-xl"
                    initial={{ scale: 0, opacity: 0.8 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                )}

                {/* Icon with smooth transition */}
                <motion.div
                  key={theme}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground" />
                  ) : (
                    <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  )}
                </motion.div>
              </motion.button>
            </motion.div>

          </motion.nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
