import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaUserCheck, FaLaptopCode, FaPaperPlane } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'We Ask For Your Requirement',
    description: 'Tell us what you need. We listen carefully to understand your specific requirements.',
    icon: <FaUserCheck size={30} className="text-white" />,
    color: 'bg-primary'
  },
  {
    id: 2,
    title: 'We Start Your Work',
    description: 'Our experts begin processing your request efficiently using the latest tools and knowledge.',
    icon: <FaLaptopCode size={30} className="text-white" />,
    color: 'bg-secondary'
  },
  {
    id: 3,
    title: 'We Deliver Your Service',
    description: 'Receive your completed service promptly. We ensure quality and satisfaction.',
    icon: <FaPaperPlane size={30} className="text-white" />,
    color: 'bg-accent'
  },
];

const HowWeWorkSection = () => {
  return (
    <section id="how-we-work" className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <SectionTitle title="How We Work" subtitle="Our Process" />
      <motion.div
        variants={staggerContainer(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-1/2 w-1 bg-slate-200 h-[calc(100%-3rem)] -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={fadeIn(index % 2 === 0 ? 'right' : 'left', 'spring', index * 0.3, 0.75)}
              className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2"></div> 
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, transition: { type: 'spring', delay: index * 0.3 + 0.2 } }}
                    viewport={{ once: true }}
                  >
                    {step.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-darkText mb-1">{step.id}. {step.title}</h3>
                    <p className="text-lightText">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowWeWorkSection;