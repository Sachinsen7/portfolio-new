import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/context/ThemeContext";
import { Briefcase, Sun, Moon, FileText, Menu } from "lucide-react";
import { motion } from "framer-motion";
import AllProjects from "@/pages/AllProjects";

const navItems = [
  { href: "/projects", label: "Work", icon: Briefcase },
  { href: "#blog", label: "Blog", icon: FileText },
];


export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const containerVariants = {
    normal: {
      scaleX: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    stretched: {
      scaleX: 1.1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const itemVariants = {
    normal: {
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    hovered: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <motion.header
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.href}
                variants={itemVariants}
                animate={hoveredItem === index ? "hovered" : "normal"}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-[var(--foreground)] hover:text-accent hover:bg-white/10 transition-all duration-200"
                  aria-label={item.label}
                >
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-px h-6 bg-white/20 mx-1" />

        {/* Theme Toggle */}
        <motion.div
          variants={itemVariants}
          animate={hoveredItem === 'theme' ? "hovered" : "normal"}
          onHoverStart={() => setHoveredItem('theme')}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <Button
            variant="ghost"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl hover:bg-white/10 transition-all duration-200"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--foreground)]" aria-hidden="true" />
            ) : (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--foreground)]" aria-hidden="true" />
            )}
          </Button>
        </motion.div>

        {/* Mobile Menu - Hidden for now since we only have 3 items */}
        <motion.div
          className="md:hidden"
          variants={itemVariants}
          animate={hoveredItem === 'menu' ? "hovered" : "normal"}
          onHoverStart={() => setHoveredItem('menu')}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <Button
            variant="ghost"
            className="w-10 h-10 rounded-xl hover:bg-white/10 transition-all duration-200"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-[var(--foreground)]" aria-hidden="true" />
          </Button>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
}