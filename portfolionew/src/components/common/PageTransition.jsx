import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    filter: "blur(2px)"
  },
  in: {
    opacity: 1,
    filter: "blur(0px)",
    // A lingering `filter` value (even blur(0px)) creates a new containing
    // block, which breaks `position: fixed` on descendants like the header.
    // Clear it once the transition settles so fixed elements stay pinned
    // to the viewport instead of scrolling away with the page.
    transitionEnd: { filter: "none" }
  },
  out: {
    opacity: 0,
    filter: "blur(1px)"
  }
};

const pageTransition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.16
};

const slideVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const slideTransition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.14
};

export function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideTransition({ children, className = "" }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={slideVariants}
      transition={slideTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
