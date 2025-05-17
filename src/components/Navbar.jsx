import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes, FaDigitalTachograph } from 'react-icons/fa';
import { navVariants, buttonHover, tapEffect } from '../utils/motion';

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'services', title: 'Services' },
  { id: 'how-we-work', title: 'How We Work' },
  // { id: 'certificates', title: 'Certificates' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'blogs', title: 'Blogs' },
  { id: 'faqs', title: 'FAQs' },
  { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkHover = { color: '#2563EB', scale: 1.1 };
  const logoHover = { scale: 1.1, rotate: 5 };

  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: 'tween', ease: 'circOut' } },
    exit: { x: '100%', opacity: 0, transition: { type: 'tween', ease: 'circIn' } },
  };

  const mobileLinkVariants = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? 'bg-white shadow-nav' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={logoHover}
            className="flex items-center"
          >
            <FaDigitalTachograph className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold text-darkText">MORYA MULTISERVICE</span>
          </motion.div>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <motion.div key={link.id} whileHover={linkHover}>
                <ScrollLink
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link text-mediumText hover:text-primary transition-colors duration-300 cursor-pointer text-lg font-medium"
                  activeClass="active"
                >
                  {link.title}
                </ScrollLink>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileHover={buttonHover}
              whileTap={tapEffect}
              className="text-darkText focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4"
          >
            <motion.ul
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center space-y-4"
            >
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={mobileLinkVariants}>
                  <ScrollLink
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link text-mediumText hover:text-primary transition-colors duration-300 cursor-pointer text-lg"
                    activeClass="active"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </ScrollLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;