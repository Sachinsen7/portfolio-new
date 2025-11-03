import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supportsViewTransitions } from '@/utils/viewTransitions';

/**
 * Wrapper component that provides enhanced transitions
 * Falls back to Framer Motion for browsers without View Transition support
 */
export default function ViewTransitionWrapper({
    children,
    transitionKey,
    className = '',
    fallbackAnimation = 'fade'
}) {
    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        setIsSupported(supportsViewTransitions());
    }, []);

    // Fallback animations for browsers without View Transition support
    const fallbackVariants = {
        fade: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 }
        },
        slide: {
            initial: { x: 100, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            exit: { x: -100, opacity: 0 }
        },
        scale: {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.8, opacity: 0 }
        }
    };

    const variants = fallbackVariants[fallbackAnimation] || fallbackVariants.fade;

    if (isSupported) {
        // Use native View Transitions
        return (
            <div className={`view-transition-element ${className}`}>
                {children}
            </div>
        );
    }

    // Fallback to Framer Motion
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={transitionKey}
                className={`view-transition-fallback ${className}`}
                initial={variants.initial}
                animate={variants.animate}
                exit={variants.exit}
                transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

/**
 * Higher-order component for adding View Transitions to any component
 */
export function withViewTransition(Component, options = {}) {
    return function WrappedComponent(props) {
        const {
            transitionName = 'default',
            fallbackAnimation = 'fade',
            className = ''
        } = options;

        return (
            <ViewTransitionWrapper
                transitionKey={props.location?.pathname || transitionName}
                className={className}
                fallbackAnimation={fallbackAnimation}
            >
                <Component {...props} />
            </ViewTransitionWrapper>
        );
    };
}

/**
 * Professional loading component during transitions
 */
export function TransitionLoader({ isVisible = true, message = "Loading..." }) {
    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="relative">
                    <div className="w-8 h-8 border-2 border-accent/20 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-sm text-foreground-muted">{message}</p>
            </div>
        </motion.div>
    );
}