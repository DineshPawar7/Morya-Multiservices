import React from 'react';
import { motion } from 'framer-motion';
import { FaAddressCard, FaWpforms, FaMoneyBillWave, FaStore, FaUniversity, FaIdBadge, FaFileContract, FaCar, FaMapMarkedAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { fadeIn, staggerContainer, cardHover } from '../utils/motion';

const servicesData = [
  { title: 'PAN CARD', icon: <FaAddressCard size={40} className="text-primary" />, description: "Apply for new PAN or make corrections." },
  { title: 'ONLINE FORMS', icon: <FaWpforms size={40} className="text-primary" />, description: "Assistance with all types of online applications." },
  { title: 'PF WITHDRAWAL', icon: <FaMoneyBillWave size={40} className="text-primary" />, description: "Guidance for provident fund withdrawals." },
  { title: 'AEPS CASH WITHDRAWAL', icon: <FaUniversity size={40} className="text-primary" />, description: "Aadhaar enabled payment system services." },
  { title: 'AAPLE SARKAR SEVA', icon: <FaFileContract size={40} className="text-primary" />, description: "Access to various government services." },
  { title: 'SHOP ACT LICENSE', icon: <FaStore size={40} className="text-primary" />, description: "Registration for shop and establishment license." },
  { title: 'UDYAM AADHAR', icon: <FaIdBadge size={40} className="text-primary" />, description: "MSME registration for businesses." },
  { title: 'DRIVING LICENSES', icon: <FaCar size={40} className="text-primary" />, description: "Help with learner's and permanent licenses." },
  { title: 'MAHA BHULEKH SERVICES', icon: <FaMapMarkedAlt size={40} className="text-primary" />, description: "Land record services for Maharashtra." },
];

const ServiceCard = ({ title, icon, description, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
    whileHover={cardHover}
    className="bg-cardBg p-6 rounded-xl shadow-card text-center cursor-pointer"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-darkText mb-2">{title}</h3>
    <p className="text-lightText text-sm">{description}</p>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Our Services" subtitle="What We Offer" />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;