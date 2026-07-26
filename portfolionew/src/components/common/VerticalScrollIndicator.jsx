import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Replaces the native scrollbar (hidden globally in index.css) with a small
// capsule that fills from the top down as the page scrolls.
export default function VerticalScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="fixed right-2 top-1/2 z-40 hidden h-32 w-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200/70 dark:bg-white/10 sm:block"
      aria-hidden="true"
    >
      <motion.div
        className="absolute top-0 left-0 w-full rounded-full bg-accent"
        animate={{ height: `${progress * 100}%` }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </div>
  );
}
