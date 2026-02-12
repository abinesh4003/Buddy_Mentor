import React from "react";
import { motion } from "framer-motion";
import expo from "../../../assets/images/homesections/expo.png";
import core1 from "../../../assets/images/homesections/industry.png";
import core2 from "../../../assets/images/homesections/expert.png";
import core3 from "../../../assets/images/homesections/flexible.png";

import FeatureCard from "../../../components/FeatureCard";
import { NavLink } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6"
      >
        <span className="h-px w-8 sm:w-32 bg-primary" />
        <p className="text-[9px] sm:text-[10px] md:text-xs tracking-widest text-primary font-medium">
          ENABLING MINDS PASSIONATELY
        </p>
        <span className="h-px w-8 sm:w-32 bg-primary" />
      </motion.div>

   
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="text-lg sm:text-xl md:text-4xl font-[700] font-roboto tracking-tight text-primary text-center"
    >
      We are launching our product at AI India Expo 2026
    </motion.h3>

{/* Expo Announcement */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  variants={scaleIn}
  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
  className="max-w-4xl mx-auto text-left mb-8 sm:mb-12 mt-4 sm:mt-6 md:mt-8"
>
  {/* Heading */}
 

  {/* Responsive Layout */}
  <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-5">
    
    {/* Left Content */}
    <div className="text-primary flex flex-col items-center text-center md:items-start md:text-left md:min-h-[90px]">

      {/* Spacer (Desktop only) */}
      <div className="hidden md:block "></div>

      {/* Center Item */}
      <p className="text-sm sm:text-base md:text-lg font-semibold flex items-center mb-4">
        Visit us at
      </p>

      {/* Bottom Items */}
      <div className="flex-1 h-full flex flex-col justify-end ">
        <p className="text-sm sm:text-base md:text-lg  font-semibold">
          Hall no : 6
        </p>
        <p className="text-sm sm:text-base md:text-lg  font-semibold">
          POD no : 6P340
        </p>
      </div>

    </div>

    {/* Logo */}
    <div className="w-full md:flex-1 flex justify-center ">
      <img
        src={expo}
        alt="AI Impact Summit"
        className="
          h-16
          sm:h-20
          md:h-24
          lg:h-28
          w-auto
          object-contain
        "
      />
    </div>

  </div>

  {/* Link */}
  <p className="underline cursor-pointer hover:text-blue-600 text-sm sm:text-base md:text-lg font-semibold text-primary  tracking-wider text-center md:text-left mt-4 md:mt-0">
    <NavLink target="_blank" to="https://www.impactexpo.indiaai.gov.in/">
      India AI Impact Expo 2026 | AI Innovation & Industry Solutions
    </NavLink>
  </p>
</motion.div>





<div className="max-w-3xl mx-auto text-left">
      {/* Title */}
      <motion.h2
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  variants={fadeInUp}
  transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
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
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
  variants={fadeInUp}
  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInLeft}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInRight}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            transition={{ 
              duration: 0.6, 
              delay: 0.8 + index * 0.15, 
              ease: "easeOut" 
            }}
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.3 } 
            }}
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
