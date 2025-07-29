import { useContext, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { ThemeContext } from "@/context/ThemeContext";
import { Home, User, Briefcase, Mail, Menu, Sun, Moon, Code, ScrollText, Newspaper} from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";


const iconMap = {
  home: <Home className="h-6 w-6 cursor-pointer" aria-hidden="true" />,
  about: <User className="h-6 w-6 cursor-pointer" aria-hidden="true" />,
  projects: <Briefcase className="h-6 w-6 cursor-pointer" aria-hidden="true" />, 
  skills: <Code className="h-6 w-6 cursor-pointer" aria-hidden="true"/>,
  contact: <Mail className="h-6 w-6 cursor-pointer" aria-hidden="true" />,
};


export default function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [hoveredLink, setHoveredLink] = useState(null);

  
  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 glass backdrop-blur-lg rounded-full px-4 py-2 shadow-glass transition-all duration-300"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <nav className="flex items-center gap-2">

        <div className="relative hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.href}
              className="relative"
              onHoverStart={() => setHoveredLink(index)}
              onHoverEnd={() => setHoveredLink(null)}
            >
              <a
                href={link.href}
                className="flex items-center justify-center w-12 h-12 text-foreground hover:text-primary transition-colors duration-300 "
                aria-label={link.label}
              >
                {iconMap[link.label.toLowerCase()]}
              </a>
              {hoveredLink === index && (
                <motion.div
                  className="absolute inset-0 glass backdrop-blur rounded-full cursor-pointer"
                  variants={bubbleVariants}
                  initial="hidden"
                  animate="visible"
                  layoutId="bubble"
                />
              )}
            </motion.div>
          ))}
        </div>


        <Button
          variant="ghost"
          className="glass backdrop-blur rounded-full w-12 h-12"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <Moon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Sun className="h-6 w-6" aria-hidden="true" />
          )}
        </Button>


        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              className="glass backdrop-blur rounded-full w-12 h-12"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-foreground" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="glass backdrop-blur-lg border border-glass p-2 rounded-xl shadow-glass mt-2">
            {NAV_LINKS.map((link) => (
              <DropdownMenuItem
                key={link.href}
                className="hover:bg-glass-gradient focus:bg-glass-gradient rounded-lg"
              >
                <a
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {iconMap[link.label.toLowerCase()]}
                  <span>{link.label}</span>
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </motion.header>
  );
}