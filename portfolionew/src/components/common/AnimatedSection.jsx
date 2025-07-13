import React from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useIntersection } from '@/hooks/useIntersections'
import { fadeIn } from '@/lib/animations'

function AnimatedSection({children, className}) {
    const ref = useRef(null)
    const isVisible = useIntersection(ref)

    return (
        <motion.section
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className={className}
        >
          {children}
        </motion.section>
    );
  
}

export default AnimatedSection

