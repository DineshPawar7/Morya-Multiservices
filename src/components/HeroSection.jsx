import React from "react";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
  buttonHover,
  tapEffect,
} from "../utils/motion";
import Rajdip from "../assets/rajdip.png";

const HeroSection = () => {
  const ownerImage = Rajdip;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-lightBg to-blue-100"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="text-center md:text-left">
          <motion.h1
            variants={textVariant(0.3)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-darkText leading-tight"
          >
            Your Trusted <span className="text-primary">Digital Services</span>{" "}
            Partner
          </motion.h1>
          <motion.p
            variants={textVariant(0.5)}
            className="mt-6 text-lg sm:text-xl text-lightText max-w-xl mx-auto md:mx-0"
          >
            We provide hassle-free assistance for all your online applications,
            form filling, and essential digital services. Quick, reliable, and
            right in your neighborhood.
          </motion.p>
          <motion.div variants={fadeIn("up", "spring", 0.7, 0.8)}>
            <motion.a
              href="#services"
              whileHover={buttonHover}
              whileTap={tapEffect}
              className="inline-block mt-8 px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primaryHover transition-colors duration-300 text-lg"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="relative">
            <motion.div
              className="absolute -top-4 -left-4 w-full h-full border-4 border-secondary rounded-lg z-0"
              animate={{
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <img
              src={ownerImage}
              alt="Shop Owner"
              className="rounded-lg shadow-xl w-full max-w-md h-auto object-cover relative z-10"
              style={{ aspectRatio: "4/5" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
