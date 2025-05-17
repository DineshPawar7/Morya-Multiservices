import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { fadeIn, staggerContainer, cardHover, zoomIn } from '../utils/motion';
import { FaCertificate } from 'react-icons/fa';

const certificateData = [
  { title: 'BSC (Bachelor Of Science)', image: 'https://asianacademypune.ac.in/writable/uploads/courses/bsc.jpg', description: 'Final Year Student at BSC' },
  { title: 'CSC Certified', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcWlRGo8geM8Wz3XZo_gZ_C1UX1C2jxpiCg&s', description: 'CSC Certified' },
//   { title: 'Official Partner: E-Governance', image: 'https://picsum.photos/seed/cert3/300/200', description: 'Authorized to provide various e-governance services.' },
//   { title: 'Customer Service Excellence Award', image: 'https://picsum.photos/seed/cert4/300/200', description: 'Awarded for outstanding customer support.' },
];

const CertificateCard = ({ title, image, description, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
    whileHover={cardHover}
    className="bg-cardBg rounded-lg shadow-card overflow-hidden group cursor-pointer"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
      <motion.div 
        className="absolute top-3 right-3 bg-secondary p-2 rounded-full text-white"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { delay: index * 0.1 + 0.5 } }}
        viewport={{ once: true }}
      >
        <FaCertificate size={20} />
      </motion.div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-darkText mb-2">{title}</h3>
      <p className="text-sm text-lightText">{description}</p>
    </div>
  </motion.div>
);

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Education & Certifications" subtitle="Our Credentials" />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {certificateData.map((cert, index) => (
          <CertificateCard key={index} index={index} {...cert} />
        ))}
      </motion.div>
    </section>
  );
};

export default CertificatesSection;