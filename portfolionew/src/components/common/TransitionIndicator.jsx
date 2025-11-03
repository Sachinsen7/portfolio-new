import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { supportsViewTransitions } from '@/utils/viewTransitions';

/**
 * Professional transition indicator that shows during page transitions
 * Only shows for browsers that support View Transitions
 */
export default function TransitionIndicator() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionType, setTransitionType] = useState('default');

    useEffect(() => {
        if (!supportsViewTransitions()) return;

        const handleTransitionStart = () => {
            setIsTransitioning(true);

            // Detect transition type from document classes
            const root = document.documentElement;
            if (root.classList.contains('theme-transitioning')) {
                setTransitionType('theme');
            } else if (root.style.viewTransitionName?.includes('project-')) {
                setTransitionType('project');
            } else {
                setTransitionType('page');
            }
        };

        const handleTransitionEnd = () => {
            setIsTransitioning(false);
            setTransitionType('default');
        };

        // Listen for View Transition events
        document.addEventListener('viewtransition', handleTransitionStart);

        // Fallback timeout
        let timeoutId;
        if (isTransitioning) {
            timeoutId = setTimeout(handleTransitionEnd, 1000);
        }

        return () => {
            document.removeEventListener('viewtransition', handleTransitionStart);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [isTransitioning]);

    const getIndicatorConfig = () => {
        switch (transitionType) {
            case 'theme':
                return {
                    color: 'from-purple-500 to-blue-500',
                    message: 'Switching theme...',
                    icon: '🎨'
                };
            case 'project':
                return {
                    color: 'from-blue-500 to-cyan-500',
                    message: 'Loading project...',
                    icon: '🚀'
                };
            case 'page':
                return {
                    color: 'from-green-500 to-blue-500',
                    message: 'Navigating...',
                    icon: '✨'
                };
            default:
                return {
                    color: 'from-gray-500 to-gray-600',
                    message: 'Loading...',
                    icon: '⚡'
                };
        }
    };

    const config = getIndicatorConfig();

    return (
        <AnimatePresence>
            {isTransitioning && (
                <motion.div
                    className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Progress bar */}
                    <div className="h-1 bg-gray-200 dark:bg-gray-800">
                        <motion.div
                            className={`h-full bg-gradient-to-r ${config.color}`}
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        />
                    </div>

                    {/* Optional message */}
                    <motion.div
                        className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="flex items-center gap-2 text-sm text-foreground">
                            <span className="text-base">{config.icon}</span>
                            <span>{config.message}</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/**
 * Minimal transition indicator for subtle feedback
 */
export function MinimalTransitionIndicator() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!supportsViewTransitions()) return;

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const hasTransition = document.documentElement.style.viewTransitionName;
                    setIsVisible(!!hasTransition);
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['style']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <div className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-xs text-accent font-medium">Transitioning</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}