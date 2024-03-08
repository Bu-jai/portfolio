import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ProjectsImgReveal = ({ children }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={containerRef}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ProjectsImgReveal;
