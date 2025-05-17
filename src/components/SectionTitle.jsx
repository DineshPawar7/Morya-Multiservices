import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, zoomIn } from '../utils/motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn('down', 'tween', 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="text-center mb-12 md:mb-16"
    >
      {subtitle && (
        <motion.p
          variants={fadeIn('down', 'tween', 0.2, 0.5)}
          className="text-primary uppercase tracking-wider font-semibold text-sm sm:text-base"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        variants={fadeIn('down', 'tween', 0.3, 0.5)}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-darkText mt-2"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={zoomIn(0.4, 0.5)}
        className="mt-4 h-1.5 w-20 sm:w-24 bg-secondary mx-auto rounded-full"
      ></motion.div>
    </motion.div>
  );
};

export default SectionTitle;