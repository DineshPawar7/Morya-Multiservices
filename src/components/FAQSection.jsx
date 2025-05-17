import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    question: 'What documents are required for a new PAN card?',
    answer: 'You typically need proof of identity (like Aadhaar card, Voter ID), proof of address, and proof of date of birth. We will guide you through the specifics.',
  },
  {
    question: 'How long does it take to get Udyam Aadhar registration?',
    answer: 'The Udyam Aadhar registration is usually quick, often completed within a few days if all documents are in order. We strive for the fastest possible turnaround.',
  },
  {
    question: 'Can you help with corrections in existing documents?',
    answer: 'Yes, we provide services for corrections in PAN cards, Aadhaar cards (where permissible), and other documents. Please contact us with your specific needs.',
  },
  {
    question: 'What are your service charges?',
    answer: 'Our service charges are very competitive and depend on the complexity of the service. Please visit our shop or call us for a quote.',
  },
  {
    question: 'What are your shop timings?',
    answer: 'We are open from Monday to Saturday, 9:00 AM to 7:00 PM. We are closed on Sundays and public holidays.',
  },
];

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    open: { opacity: 1, height: 'auto', marginTop: '1rem', marginBottom: '1rem' },
    collapsed: { opacity: 0, height: 0, marginTop: '0rem', marginBottom: '0rem' },
  };

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.05, 0.6)}
      className="border-b border-slate-200 py-1"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left text-darkText hover:text-primary transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FaChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'text-primary' : ''}`} />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={itemVariants}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-lightText text-base pb-4 pr-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section id="faqs" className="py-16 sm:py-24 bg-lightBg px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Frequently Asked Questions" subtitle="Need Answers?" />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-3xl mx-auto bg-cardBg p-6 sm:p-8 rounded-lg shadow-card"
      >
        {faqData.map((faq, index) => (
          <FAQItem key={index} index={index} {...faq} />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;