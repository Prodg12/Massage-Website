import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

const StyledHeroComponent = ({children, className=""}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }), [isInView]
  return (
    <div ref={ref}>
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 75},
          visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.25}}
      className={`px-32 py-10 lg:px-20 md:px-16 sm:px-10 xs:px-8 ${className}`}>
        {children}
      </motion.div>
    </div>
  )
}

export default StyledHeroComponent