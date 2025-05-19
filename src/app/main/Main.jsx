'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Main = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
      <motion.p
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-sm font-thin text-white/40 mb-2"
      >
        Welcome to cosmos
      </motion.p>

      <motion.p
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white fontstyle"
      >
        The Internet Of
      </motion.p>

      <motion.p
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/70 fontstyle mb-4"
      >
        Blockchains.
      </motion.p>

      <motion.p
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-sm sm:text-md font-thin tracking-tight text-white/40 max-w-xl"
      >
        Cosmos is an ever-expanding ecosystem of interconnected apps and services, built for a sustainable future.
      </motion.p>
    </div>
  );
};

export default Main;
