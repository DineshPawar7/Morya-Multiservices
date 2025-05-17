import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDigitalTachograph } from 'react-icons/fa';
import { fadeIn, staggerContainer, buttonHover, tapEffect } from '../utils/motion';

const socialLinks = [
  { icon: <FaFacebook size={24} />, href: '#' },
  { icon: <FaTwitter size={24} />, href: '#' },
  { icon: <FaInstagram size={24} />, href: 'https://www.instagram.com/rajdipwarkad143' },
  { icon: <FaLinkedin size={24} />, href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="contact"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-darkText text-slate-300 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div variants={fadeIn('up', 'tween', 0.1, 0.5)}>
          <div className="flex items-center mb-4">
            <FaDigitalTachograph className="h-10 w-10 text-primary" />
            <span className="ml-3 text-2xl font-bold text-white">MORYA MULTISERVICE</span>
          </div>
          <p className="text-sm">
            Your one-stop shop for all digital services. We aim to simplify complex online processes for you.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                aria-label={`Social media link ${index+1}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeIn('up', 'tween', 0.2, 0.5)}>
          <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mr-3 mt-1 text-primary flex-shrink-0" size={20} />
              <span>Near Bank, Chapaner, Maharashtra, India</span>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-3 text-primary" size={18} />
              <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91 89990 14354</a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-3 text-primary" size={18} />
              <a href="mailto:info@digitalseva.com" className="hover:text-primary transition-colors">warkadrajdip211@gmail.com</a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={fadeIn('up', 'tween', 0.3, 0.5)}>
          <h3 className="text-xl font-semibold text-white mb-6">Quick Enquiry</h3>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label htmlFor="footer-name" className="sr-only">Name</label>
              <input type="text" name="footer-name" id="footer-name" placeholder="Your Name" className="w-full px-4 py-2.5 bg-slate-700 text-slate-200 rounded-md focus:ring-2 focus:ring-primary focus:outline-none placeholder-slate-400" />
            </div>
            <div>
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input type="email" name="footer-email" id="footer-email" placeholder="Your Email" className="w-full px-4 py-2.5 bg-slate-700 text-slate-200 rounded-md focus:ring-2 focus:ring-primary focus:outline-none placeholder-slate-400" />
            </div>
            <div>
              <label htmlFor="footer-message" className="sr-only">Message</label>
              <textarea name="footer-message" id="footer-message" rows="3" placeholder="Your Message" className="w-full px-4 py-2.5 bg-slate-700 text-slate-200 rounded-md focus:ring-2 focus:ring-primary focus:outline-none placeholder-slate-400"></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={buttonHover}
              whileTap={tapEffect}
              className="w-full bg-primary text-white font-semibold py-2.5 px-6 rounded-md hover:bg-primaryHover transition-colors duration-300"
              onClick={(e) => e.preventDefault()}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      <motion.div 
        variants={fadeIn('up', 'tween', 0.4, 0.5)}
        className="mt-12 pt-8 border-t border-slate-700 text-center text-sm text-slate-400"
      >
        <p>© {currentYear} MORYA MULTISERVICE. All rights reserved</p>
        <p className="mt-1">Designed and Developed With <a className='text-primary hover:text-primaryHover' href="https://dinesh-pawar.netlify.app/">Dinesh Pawar</a></p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;