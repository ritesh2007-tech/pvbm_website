"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll(); // value from 0 → 1

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-orange-700 via-orange-500 to-orange-300 z-[9999] origin-left rounded-full"
      style={{ scaleX: scrollYProgress }}
    />
  );
}