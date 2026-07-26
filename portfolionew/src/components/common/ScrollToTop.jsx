import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToTop } from '@/utils/smoothScroll';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };

        toggleVisibility();
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onClick={scrollToTop}
                    className="interactive-surface fixed bottom-44 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/80 bg-white/90 text-foreground shadow-[0_12px_28px_rgba(15,23,42,0.12)] backdrop-blur-sm hover:border-accent/50 hover:shadow-[0_16px_36px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-[#101113]/90 sm:bottom-24 sm:right-7"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="h-5 w-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
