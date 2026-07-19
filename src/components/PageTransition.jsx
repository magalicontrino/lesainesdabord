import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() =>
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
      }
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <ScrollToTop />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
