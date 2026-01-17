import React from "react";
import { motion } from "framer-motion";

import core1 from "../../../assets/images/homesections/industry.png";
import core2 from "../../../assets/images/homesections/expert.png";
import core3 from "../../../assets/images/homesections/flexible.png";
import FeatureCard from "../../../components/FeatureCard";

const CoreIndustrySection = () => {
  const features = [
    { icon: core1, title: "Industry-Aligned Curriculum" },
    { icon: core2, title: "Expert-Designed, AI-Guided Learning" },
    { icon: core3, title: "Flexible & Affordable Learning" },
  ];

  return (
   <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      
      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
      >
        <span className="h-px w-8 sm:w-32 bg-primary" />
        <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-primary font-medium">
          ENABLING MINDS PASSIONATELY
        </p>
        <span className="h-px w-8 sm:w-32 bg-primary" />
      </motion.div>


<div className="max-w-3xl mx-auto text-left">
      {/* Title */}
      <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="
    text-xl
    sm:text-2xl
    md:text-3xl
    lg:text-4xl
    xl:text-5xl
    font-bold
    text-primary
    mb-3 sm:mb-4 md:mb-6
  "
>
  Core Industry Skilling Portal
</motion.h2>
    <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="
    text-sm
    sm:text-base
    md:text-lg
    lg:text-xl
    leading-relaxed
    text-gray-600
    mb-6 sm:mb-8 md:mb-10
  "
>
  We mentor engineering students and industry professionals to build
  real-world, core industry capabilities — guided by experts with
  hands-on experience.
</motion.p>

</div>
      {/* Description */}


      {/*  CENTERED BLOCK WITH LEFT-ALIGNED CONTENT */}
      <div className="max-w-xl mx-auto text-left">

        {/* Sub heading */}
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            font-semibold
            leading-snug
            text-primary
            mb-2 sm:mb-3 md:mb-4
          "
        >
          Core Industry Mentoring Portal
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            text-primary
            font-semibold
            mb-4 sm:mb-6
          "
        >
          We specialize in mentoring for:
        </motion.p>

        {/* Bullet list */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            text-primary
            space-y-2 sm:space-y-3
            mb-6 sm:mb-10
          "
        >
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 rounded-full bg-primary" />
            <span>Engineering, Procurement, and Construction (EPC)</span>
          </li>

          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 rounded-full bg-primary" />
            <span>Manufacturing</span>
          </li>

          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 rounded-full bg-primary" />
            <span>Production &amp; Operations</span>
          </li>
        </motion.ul>

      </div>

      {/* Cards */}
      <div
        className="
          flex
          flex-col
          sm:flex-row
          flex-wrap
          items-center
          justify-center
          gap-4 sm:gap-6 md:gap-8 lg:gap-10
        "
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            className="w-full md:w-auto"
          >
            <FeatureCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreIndustrySection;
