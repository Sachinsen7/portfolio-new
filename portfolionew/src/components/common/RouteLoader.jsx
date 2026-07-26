import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const BAR_COUNT = 7;
const STAGGER = 0.035;
const EASE = [0.65, 0, 0.35, 1];

const barVariants = {
  // Reset must be instant — an animated transition back to idle after the
  // reveal is what caused the bars to visibly "bounce" back up.
  idle: { y: "-100%", transition: { duration: 0 } },
  covering: (i) => ({
    y: "0%",
    transition: { duration: 0.35, delay: i * STAGGER, ease: EASE },
  }),
  revealing: (i) => ({
    y: "100%",
    transition: { duration: 0.45, delay: i * STAGGER, ease: EASE },
  }),
};

// A quick curtain-wipe overlay that plays on every route change, masking the
// swap between pages instead of a plain instant jump. Sequenced off the last
// bar's onAnimationComplete (it always finishes last, longest stagger delay)
// instead of guessed setTimeout durations, so phases can't overlap or drift.
//
// Deliberately NOT wired to theme changes: theme toggling already runs
// through the native View Transition API (see transitionTheme in
// viewTransitions.js), which does its own full-screen snapshot crossfade.
// Layering this bar-wipe on top of that at the same moment caused two
// competing full-screen animations and a visible shake/jitter.
export default function RouteLoader() {
  const location = useLocation();
  const [phase, setPhase] = useState("idle");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setPhase("covering");
  }, [location.pathname]);

  const handleLastBarComplete = () => {
    setPhase((current) => {
      if (current === "covering") return "revealing";
      if (current === "revealing") return "idle";
      return current;
    });
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] flex" aria-hidden="true">
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={phase}
          variants={barVariants}
          initial="idle"
          onAnimationComplete={i === BAR_COUNT - 1 ? handleLastBarComplete : undefined}
          className="h-full flex-1 bg-[var(--accent)]"
        />
      ))}
    </div>
  );
}
