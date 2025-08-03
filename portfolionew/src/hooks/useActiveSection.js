import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently in view
 * @param {Array} sectionIds - Array of section IDs to track
 * @param {number} offset - Offset from top for determining active section
 * @returns {string} The ID of the currently active section
 */
export const useActiveSection = (sectionIds = [], offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      // Find the section that is currently in view
      let currentSection = '';
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // If no section is found, check if we're at the top
      if (!currentSection && window.scrollY < 100) {
        currentSection = sectionIds[0] || 'hero';
      }
      
      // If still no section and we're at the bottom, use the last section
      if (!currentSection && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        currentSection = sectionIds[sectionIds.length - 1];
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};
