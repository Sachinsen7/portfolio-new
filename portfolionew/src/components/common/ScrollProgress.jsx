import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = scrollPx / winHeightPx;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
            <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrollProgress }}
                style={{ transformOrigin: '0%' }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
            />
        </div>
    );
}