import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "@/styles/portfolio-structure.css";

export const portfolioCardReveal = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 1.01,
  },
};

export const portfolioCardTransition = {
  duration: 0.2,
  ease: "easeInOut",
};

const hoverTransition = {
  duration: 0.2,
  ease: "easeOut",
};

const tapTransition = {
  duration: 0.18,
  ease: "easeOut",
};

const PortfolioStructureCard = React.forwardRef(function PortfolioStructureCard(
  {
    eyebrow,
    meta,
    title,
    description,
    media,
    actions,
    footer,
    children,
    interactive = true,
    className,
    ...props
  },
  ref
) {
  return (
    <motion.article
      ref={ref}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={portfolioCardReveal}
      transition={portfolioCardTransition}
      whileHover={
        interactive
          ? {
              y: -2,
              transition: hoverTransition,
            }
          : undefined
      }
      whileTap={
        interactive
          ? {
              y: 0,
              scale: 0.98,
              transition: tapTransition,
            }
          : undefined
      }
      className={cn(
        "portfolio-surface portfolio-card",
        interactive && "portfolio-surface--interactive",
        className
      )}
      {...props}
    >
      {(eyebrow || meta || actions || title || description) && (
        <header className="portfolio-card__header">
          {(eyebrow || meta || actions) && (
            <div className="portfolio-card__topline">
              <div className="portfolio-card__header-group">
                {eyebrow ? <span className="portfolio-chip">{eyebrow}</span> : null}
                {meta ? <span className="portfolio-card__meta">{meta}</span> : null}
              </div>

              {actions ? <div className="portfolio-card__actions">{actions}</div> : null}
            </div>
          )}

          {title ? <h3 className="portfolio-card__title">{title}</h3> : null}
          {description ? <p className="portfolio-card__description">{description}</p> : null}
        </header>
      )}

      {media ? <div className="portfolio-media-frame">{media}</div> : null}

      {children ? <div className="portfolio-card__body">{children}</div> : null}

      {footer ? <footer className="portfolio-card__footer">{footer}</footer> : null}
    </motion.article>
  );
});

export default PortfolioStructureCard;
