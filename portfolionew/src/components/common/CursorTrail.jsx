import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorTrail() {
    const [trails, setTrails] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let trailId = 0;

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Create trail dots
            const newTrail = {
                id: trailId++,
                x: e.clientX,
                y: e.clientY,
                timestamp: Date.now(),
            };

            setTrails(prev => [...prev.slice(-8), newTrail]);
        };

        // Clean up old trails
        const cleanupInterval = setInterval(() => {
            const now = Date.now();
            setTrails(prev => prev.filter(trail => now - trail.timestamp < 1000));
        }, 100);

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            clearInterval(cleanupInterval);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-30">
            <AnimatePresence>
                {trails.map((trail, index) => (
                    <motion.div
                        key={trail.id}
                        className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-accent/60 to-primary/60"
                        style={{
                            left: trail.x - 2,
                            top: trail.y - 2,
                        }}
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{
                            scale: 0,
                            opacity: 0,
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.05,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}