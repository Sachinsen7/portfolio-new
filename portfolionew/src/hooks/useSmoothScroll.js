import { useCallback, useEffect, useState } from 'react';

export const useSmoothScroll = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollTo = useCallback((elementId, offset = 80) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        setIsScrolling(true);

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Reset scrolling state after animation
        setTimeout(() => setIsScrolling(false), 800);
    }, []);

    const scrollToTop = useCallback(() => {
        setIsScrolling(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(() => setIsScrolling(false), 800);
    }, []);

    return { scrollTo, scrollToTop, isScrolling };
};

export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('up');

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollPosition = () => {
            const currentScrollY = window.pageYOffset;
            setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
            setScrollY(currentScrollY);
            lastScrollY = currentScrollY;
        };

        const throttledUpdateScrollPosition = throttle(updateScrollPosition, 10);

        window.addEventListener('scroll', throttledUpdateScrollPosition);
        return () => window.removeEventListener('scroll', throttledUpdateScrollPosition);
    }, []);

    return { scrollY, scrollDirection };
};

// Throttle function for performance
const throttle = (func, limit) => {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};