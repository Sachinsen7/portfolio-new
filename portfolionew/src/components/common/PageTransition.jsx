import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.99
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -10,
    scale: 1.01
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2
};

const slideVariants = {
  initial: {
    opacity: 0,
    x: 15
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: -15
  }
};

const slideTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2
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
      transition={{ duration: 0.15, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
