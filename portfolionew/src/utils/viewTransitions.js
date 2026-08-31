
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
    const root = document.documentElement;

    // Add special class for theme transitions (drives the CSS color
    // transition below, and the view-transition crossfade when supported)
    root.classList.add('theme-transitioning');

    if (supportsViewTransitions()) {
        const transition = document.startViewTransition(callback);

        // Return finished (a real Promise) rather than the ViewTransition
        // object itself, since callers chain .finally() off the result.
        return transition.finished.finally(() => {
            root.classList.remove('theme-transitioning');
        });
    }

    // Fallback: run the theme change immediately, but keep the
    // transitioning class on long enough for the CSS color transition
    // (see .theme-transitioning in index.css) to actually play.
    callback();
    return new Promise((resolve) => {
        setTimeout(() => {
            root.classList.remove('theme-transitioning');
            resolve();
        }, 400);
    });
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