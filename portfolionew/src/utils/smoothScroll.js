/**
 * Smooth scroll to a target element with custom easing and offset
 * @param {string} targetId - The ID of the target element (without #)
 * @param {number} offset - Offset from the top in pixels (default: 80)
 * @param {number} duration - Animation duration in milliseconds (default: 800)
 */
export const smoothScrollTo = (targetId, offset = 80, duration = 800) => {
  const targetElement = document.getElementById(targetId);
  
  if (!targetElement) {
    console.warn(`Element with ID "${targetId}" not found`);
    return;
  }

  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  // Easing function for smooth animation
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Smooth scroll to top of the page
 * @param {number} duration - Animation duration in milliseconds (default: 600)
 */
export const smoothScrollToTop = (duration = 600) => {
  const startPosition = window.pageYOffset;
  let startTime = null;

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition * (1 - ease));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Check if smooth scrolling is supported and user prefers motion
 * @returns {boolean}
 */
export const isSmoothScrollSupported = () => {
  return 'scrollBehavior' in document.documentElement.style &&
         !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
