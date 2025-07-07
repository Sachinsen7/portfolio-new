import { useEffect, useState } from "react";

// this is a custom hook that checks if a particular element is on the screen or not
export function useIntersection(ref, options = {}) {
  // we'll use this state to keep track of whether it's visible or not
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // creating an intersection observer – it watches the element
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if the element is even slightly visible, it'll be true
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // this means when 10% of it is visible, consider it visible
        ...options, // just in case we pass other options, they'll be added too
      }
    );

    // now we tell the observer what element to observe
    if (ref.current) {
      observer.observe(ref.current);
    }

    // cleanup stuff – when component unmounts or ref changes, stop observing
    return () => {
      observer.disconnect();
    };
  }, [ref, options]); // run again if ref or options change

  // finally just return whether the element is visible or not
  return isVisible;
}
