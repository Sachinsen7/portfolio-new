
export const supportsViewTransitions = () => {
    return typeof document !== 'undefined' && 'startViewTransition' in document;
};

// Generic view transition wrapper
export const withViewTransition = (callback, fallbackDelay = 0) => {
    if (supportsViewTransitions()) {
        return document.startViewTransition(callback);
    } else {
        // Fallback for unsupported browsers
        if (fallbackDelay > 0) {
            setTimeout(callback, fallbackDelay);
        } else {
            callback();
        }
        return Promise.resolve();
    }
};

// Page transition with custom animation names
export const transitionToPage = (callback, transitionName = 'page-transition') => {
    if (supportsViewTransitions()) {
        // Scroll to top before transition for better UX
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Add transition name to root for CSS targeting
        document.documentElement.style.viewTransitionName = transitionName;

        const transition = document.startViewTransition(callback);

        // Clean up transition name after completion
        transition.finished.finally(() => {
            document.documentElement.style.viewTransitionName = '';
        });

        return transition;
    } else {
        // Scroll to top for fallback too
        window.scrollTo({ top: 0, behavior: 'instant' });
        callback();
        return Promise.resolve();
    }
};

// Theme transition with special handling
export const transitionTheme = (callback) => {
    if (supportsViewTransitions()) {
        // Add special class for theme transitions
        document.documentElement.classList.add('theme-transitioning');

        const transition = document.startViewTransition(callback);

        transition.finished.finally(() => {
            document.documentElement.classList.remove('theme-transitioning');
        });

        return transition;
    } else {
        callback();
        return Promise.resolve();
    }
};

// Project detail transition
export const transitionToProject = (callback, projectId) => {
    return transitionToPage(callback, `project-${projectId}`);
};

// Modal/overlay transitions
export const transitionModal = (callback, isOpening = true) => {
    const transitionName = isOpening ? 'modal-open' : 'modal-close';
    return transitionToPage(callback, transitionName);
};

// Smooth scroll with view transition
export const transitionScroll = (targetElement, behavior = 'smooth') => {
    if (supportsViewTransitions()) {
        return document.startViewTransition(() => {
            targetElement.scrollIntoView({ behavior });
        });
    } else {
        targetElement.scrollIntoView({ behavior });
        return Promise.resolve();
    }
};