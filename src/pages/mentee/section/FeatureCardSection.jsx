import React from 'react';
import { motion } from 'framer-motion';
import core1 from "../../../assets/images/homesections/industry.png";
import core2 from "../../../assets/images/homesections/expert.png";
import core3 from "../../../assets/images/homesections/flexible.png";
import FeatureCard from "../../../components/FeatureCard";

const FeatureCardSection = () => {
  const features = [
    { icon: core1, title: "Industry-Aligned Curriculum" },
    { icon: core2, title: "Expert-Designed, AI-Guided Learning" },
    { icon: core3, title: "Flexible & Affordable Learning" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-5">
        <span className="h-px w-10 sm:w-16 bg-gray-300" aria-hidden="true"></span>
        <p className="text-[10px] sm:text-xs tracking-widest text-primary font-medium">
          ENABLING MINDS PASSIONATELY
        </p>
        <span className="h-px w-10 sm:w-16 bg-gray-300" aria-hidden="true"></span>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 sm:gap-8 md:gap-10">
        {features.map((item, index) => (
          <motion.div key={`feature-${index}`} initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className='w-full md:w-auto'>
            <FeatureCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCardSection;