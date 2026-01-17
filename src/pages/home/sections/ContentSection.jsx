import React from "react";
import { motion } from "framer-motion";

import contentImg from "../../../assets/images/homesections/content.png";
import epcMeetingImg from "../../../assets/images/homesections/epc-meeting.png";

const FeatureList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start gap-3">
        <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] sm:text-xs">
          <span>✓</span>
        </span>
        <span
          className="
            text-primary
            text-xs
            sm:text-sm
            md:text-base
            lg:text-lg
          "
        >
          {item}
        </span>
      </motion.li>
    ))}
  </ul>
);

const ContentSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 10 py-10 sm:py-14 space-y-10 md:space-y-14 lg:space-y-20">

      {/* ----------- TOP TIER CONTENT ----------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left Text */}
        <div>
          <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              
              font-bold
              text-primary
              text-center
              sm:text-start
              mb-4 md:mb-6
            "
          >
            Top Tier Content
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <FeatureList
              items={[
                "Vetted by Experts",
                "Unique mentoring engine",
                "Immersive 2D/3D Workflow Visualization",
                "Beyond the Lecture Hall.",
                "Student-Centered Learning",
              ]}
            />
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="flex sm:justify-center ">
          <img
            src={contentImg}
            alt="Learning Content"
            className="w-full sm:w-3/4 md:w-full h-[200px] sm:h-[250px] md:h-[350px] shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* ----------- PROSPECTIVE MEMBERS ----------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left Image */}
        <motion.div initial={{ opacity: 0, x: -50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 md:order-none flex sm:justify-start">
          <img
            src={epcMeetingImg}
            alt="EPC Members"
            className="w-full max-w-full  h-[200px] sm:h-[250px] md:h-[350px]  shadow-lg object-cover "
          />
        </motion.div>

        {/* Right Text */}
        <div>
          <motion.h2 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
          
              font-bold
              text-primary
              text-center
              sm:text-start
              mb-4 md:mb-6
            "
          >
            Prospective Members of EPC
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
            className="
              text-xs
              sm:text-sm
              md:text-base
              lg:text-lg
              leading-relaxed
              text-gray-600
              max-w-lg
              text-center
              sm:text-start
            "
          >
            Every concept you learn is benchmarked and validated by top EPC
            companies, ensuring you gain exactly the skills the industry
            demands. This partnership gives you immediate job relevance and a
            confident step from learning into earning.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
