import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { fadeIn, staggerContainer, cardHover, buttonHover, tapEffect } from '../utils/motion';

const blogData = [
  {
    title: 'Understanding the New PAN Card Rules',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoljJCLhS1mdTTdND3Eejqq8tZvjM6hriQLA&s',
    description: 'A quick guide to the latest updates and requirements for PAN card applications and changes.',
    date: 'May 17, 2025',
    category: 'Government Schemes'
  },
  {
    title: 'Benefits of Udyam Aadhar for Small Businesses',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9QlLtOwBImxhtv-Jgvd5kSvLJ11oVTP8PzQ&s',
    description: 'Discover how Udyam Aadhar can help your small business grow and access various government benefits.',
    date: 'Jan 05, 2025',
    category: 'Business Tips'
  },
  {
    title: 'Simplifying PF Withdrawal: A Step-by-Step Guide',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBthBWXGj8BkX80KqJJ6h3eFCOsQaIRimBA&s',
    description: 'Navigating the PF withdrawal process can be complex. Here’s how we make it easy for you.',
    date: 'Feb 12, 2025',
    category: 'Financial Guides'
  },
];

const BlogCard = ({ title, image, description, date, category, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
    whileHover={cardHover}
    className="bg-cardBg rounded-lg shadow-card overflow-hidden group flex flex-col"
  >
    <div className="relative h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded font-semibold">{category}</div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-xs text-lightText mb-1">{date}</p>
      <h3 className="text-xl font-semibold text-darkText mb-3 flex-grow">{title}</h3>
      <p className="text-sm text-lightText mb-4 line-clamp-3">{description}</p>
      <motion.a
        href="#" // Dummy link
        whileHover={buttonHover}
        whileTap={tapEffect}
        className="inline-block mt-auto text-primary font-semibold hover:text-primaryHover transition-colors duration-300"
      >
        Read more →
      </motion.a>
    </div>
  </motion.div>
);

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <SectionTitle title="News & Blogs" subtitle="Stay Updated" />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogData.map((blog, index) => (
          <BlogCard key={index} index={index} {...blog} />
        ))}
      </motion.div>
    </section>
  );
};

export default BlogsSection;