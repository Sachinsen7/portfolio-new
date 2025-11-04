import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sparkle component
const Sparkle = ({ x, y, id }) => {
  return (
    <motion.div
      key={id}
      className="fixed pointer-events-none z-50"
      style={{ left: x - 4, top: y - 4 }}
      initial={{ scale: 0, rotate: 0, opacity: 1 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
        opacity: [1, 0.8, 0],
      }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="w-6 h-5 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg" />
    </motion.div>
  );
};

export default function CursorEffects() {
  const [sparkles, setSparkles] = useState([]);
  const sparkleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Create sparkles occasionally
      if (Math.random() < 0.3) {
        const newSparkle = {
          id: sparkleIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
        };

        setSparkles((prev) => [...prev, newSparkle]);

        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
        }, 600);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Sparkles */}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            x={sparkle.x}
            y={sparkle.y}
            id={sparkle.id}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
