import { useCallback } from 'react';
import { smoothScrollTo, smoothScrollToTop } from '@/utils/smoothScroll';

/**
 * Custom hook for smooth scrolling functionality
 * @returns {Object} Object containing scroll functions
 */
export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId, offset = 100) => {
    if (sectionId === 'hero' || sectionId === 'top') {
      smoothScrollToTop(800);
    } else {
      smoothScrollTo(sectionId, offset, 800);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    smoothScrollToTop(800);
  }, []);

  const scrollToElement = useCallback((elementId, offset = 100, duration = 800) => {
    smoothScrollTo(elementId, offset, duration);
  }, []);

  return {
    scrollToSection,
    scrollToTop,
    scrollToElement,
  };
};
