// FeaturesSection.jsx
import React from "react";
import { motion } from "framer-motion";

import Image1 from "../../../assets/images/aboutsections/solving.png"; // replace with your real image path
import Image2 from "../../../assets/images/aboutsections/platform.png"; // replace with your real image path

const FeaturesSection = () => {
  return (
    <section className="bg-primary py-16 px-5 md:px-20">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-semibold text-white text-center mb-12">
        Serving World Through Learning
      </motion.h2>

      {/* First Row */}
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
        <AboutFeatureRow
          title="The Problem We Solve"
          description="Traditional education leaves a critical gap between theory and industry reality. Buddy Mentor exists to bridge that gap — offering immersive, practice-driven mentoring that transforms learners into job-ready professionals with global potential."
          image={Image1}
          reverse={true}

        />
      </motion.div>

      {/* Spacing between rows */}
      <div className="my-10 md:my-16"></div>

      {/* Second Row */}
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
        <AboutFeatureRow
          title="We Are Skilling Platform"
          description="We are driven by a passion to close the gap between academic learning and real industry expectations. More than an educational platform, we are a mentorship community devoted to supporting engineers at every stage — from students to experienced professionals — with practical, industry-aligned technical guidance."
          image={Image2}
          reverse={false}

        />
      </motion.div>
    </section>
  );
};

export default FeaturesSection;


const AboutFeatureRow = ({ title, description, image, reverse }) => {
  return (
    <div
      className="
        grid grid-cols-1 md:grid-cols-2
        items-center
        gap-8 md:gap-12
        max-w-6xl mx-auto
      "
    >
      {/* IMAGE */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        className={`
          order-1
          ${reverse ? "md:order-2" : "md:order-1"}
          flex justify-center md:justify-start w-full
        `}
      >
        <img
          src={image}
          alt={title}
          className="
            w-full 
    max-w-[380px]
    h-[220px] 
    md:h-[240px]
    object-cover

    shadow-[0_4px_30px_0px_rgba(0,0,0,1)]
          "
        />
      </motion.div>

      {/* TEXT */}
      <div
        className={`
          order-2
          ${reverse ? "md:order-1" : "md:order-2"}
          text-center md:text-left
        `}
      >
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-lg md:text-xl font-semibold text-white mb-3">
          {title}
        </motion.h3>

        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-sm md:text-base text-white leading-relaxed max-w-md mx-auto md:mx-0">
          {description}
        </motion.p>
      </div>
    </div>
  );
};
