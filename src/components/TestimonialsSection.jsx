import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "Amazing service! They helped me get my PAN card quickly and without any hassle. Highly recommend!",
    name: 'Dinesh Pawar',
    title: 'Software Developer',
    avatar: 'https://avatars.githubusercontent.com/u/175672643?v=4',
    rating: 5,
  },
  {
    quote: "Rajdip is very knowledgeable and guided me perfectly through the Udyam Aadhar registration. Thank you!",
    name: 'Rohan Lokhande',
    title: 'Content Creator',
    avatar: 'https://yt3.googleusercontent.com/6FX__skn-DOTmWsKK8vFuAPEMKuIXWun8sylbgAjZr8hpcJNFiKDV_HiZsUJ7X8ogHEwvciZVyg=s160-c-k-c0x00ffffff-no-rj',
    rating: 5,
  },
  {
    quote: "I was struggling with online form filling for a government scheme. They made it so easy. Great support!",
    name: 'Mahesh Shinde',
    title: 'Student',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4,
  },
];

const TestimonialCard = ({ quote, name, title, avatar, rating, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.15, 0.8)}
    className="bg-cardBg p-6 md:p-8 rounded-xl shadow-card relative"
  >
    <FaQuoteLeft className="absolute top-6 left-6 text-5xl text-secondary opacity-10" />
    <div className="relative z-10">
      <p className="text-lightText italic mb-6 text-base md:text-lg">"{quote}"</p>
      <div className="flex items-center">
        <motion.img 
          src={avatar} 
          alt={name} 
          className="w-14 h-14 rounded-full mr-4 border-2 border-primary"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, transition: { delay: index * 0.15 + 0.3 } }}
          viewport={{ once: true }}
        />
        <div>
          <h4 className="font-semibold text-darkText">{name}</h4>
          <p className="text-sm text-lightText">{title}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={` ${i < rating ? 'text-secondary' : 'text-slate-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-lightBg px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Client Testimonials" subtitle="What People Say" />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} index={index} {...testimonial} />
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;