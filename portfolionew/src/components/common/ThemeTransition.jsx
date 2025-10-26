import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '@/context/ThemeContext';

export default function ThemeTransition() {
    const { isTransitioning } = useContext(ThemeContext);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        if (isTransitioning) {
            setShowOverlay(true);
            // Hide overlay after animation completes
            const timer = setTimeout(() => {
                setShowOverlay(false);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    return (
        <AnimatePresence>
            {showOverlay && (
                <motion.div
                    className="fixed inset-0 pointer-events-none z-[9999]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Ripple effect from center */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-radial from-transparent via-accent/5 to-transparent"
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        style={{
                            background: 'radial-gradient(circle at center, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
                        }}
                    />

                    {/* Subtle color wash */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.3, 0] }}
                        transition={{
                            duration: 0.6,
                            times: [0, 0.5, 1],
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}