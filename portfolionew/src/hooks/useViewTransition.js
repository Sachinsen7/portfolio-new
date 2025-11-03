import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { transitionToPage, transitionToProject, supportsViewTransitions } from '@/utils/viewTransitions';

/**
 * Custom hook for handling View Transitions in React Router
 */
export const useViewTransition = () => {
    const navigate = useNavigate();

    const transitionTo = useCallback((path, options = {}) => {
        const {
            transitionName = 'page-transition',
            replace = false,
            state = null,
            isProject = false,
            projectId = null
        } = options;

        const navigateCallback = () => {
            // Ensure we're at the top before navigation for better UX
            window.scrollTo({ top: 0, behavior: 'instant' });
            navigate(path, { replace, state });
        };

        if (isProject && projectId) {
            return transitionToProject(navigateCallback, projectId);
        } else {
            return transitionToPage(navigateCallback, transitionName);
        }
    }, [navigate]);

    const transitionBack = useCallback((options = {}) => {
        const { transitionName = 'page-back' } = options;

        const backCallback = () => {
            // Scroll to top before going back
            window.scrollTo({ top: 0, behavior: 'instant' });
            navigate(-1);
        };

        return transitionToPage(backCallback, transitionName);
    }, [navigate]);

    return {
        transitionTo,
        transitionBack,
        supportsViewTransitions: supportsViewTransitions()
    };
};

/**
 * Hook for smooth scrolling with View Transitions
 */
export const useViewTransitionScroll = () => {
    const scrollToElement = useCallback((elementId, options = {}) => {
        const {
            behavior = 'smooth',
            block = 'start',
            inline = 'nearest',
            offset = 0
        } = options;

        const element = document.getElementById(elementId);
        if (!element) return Promise.resolve();

        if (supportsViewTransitions()) {
            return document.startViewTransition(() => {
                const elementTop = element.offsetTop - offset;
                window.scrollTo({
                    top: elementTop,
                    behavior
                });
            });
        } else {
            element.scrollIntoView({ behavior, block, inline });
            return Promise.resolve();
        }
    }, []);

    return { scrollToElement };
};