'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return <motion.div className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-[#7b1921] via-[#f3c969] to-[#ffe6a6]" style={{ scaleX }} />;
}
