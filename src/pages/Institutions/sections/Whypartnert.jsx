import React from "react";
import { motion } from "framer-motion";

import imgSkills from "../../../assets/images/industrysection/skill.png";
import certificate from "../../../assets/images/homesections/certificates.png";
import FeatureRow from "../../../components/FeatureRow";
import partner from "../../../assets/images/industrysection/partner.png";

const WhyPartner = () => {
  return (
    <section className="bg-white py-8 md:py-16">

      {/* TOP CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* SECTION TITLE */}
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="
            text-xl sm:text-2xl md:text-3xl
            font-bold text-primary
            mb-10 md:mb-16
            text-center md:text-left
          "
        >
          Why Partner with Buddy Mentor?
        </motion.h2>

        {/* FEATURES */}
        <div className="space-y-14 sm:space-y-16 md:space-y-20">

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <FeatureRow
              title="Bridge the Skills Gap"
              description="Buddy Mentor bridges the transition from academic learning to real-world skill development for graduates and diploma holders."
              image={imgSkills} reverse
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <FeatureRow
              title="Improve Placement Rates"
              description="Highlight proven skill mastery with our industry-recognized certification, elevating graduate profiles and significantly enhancing placement opportunities."
              image={partner}
              
            />
          </motion.div>

        </div>
      </div>

      {/* CTA STRIP */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        className="
          bg-primary
          py-6 sm:py-8 md:py-12
          my-10 md:my-16
          flex flex-col items-center
          gap-3 sm:gap-4 md:gap-8
          px-4
        "
      >
        <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
          className="
            text-white
            text-center
            text-lg sm:text-2xl md:text-4xl
            font-semibold
          "
        >
          10% Savings for Cohorts of First 100+
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }} className="w-full sm:w-[80%] md:w-[60%]">
          <p
            className="
              text-white
              text-center
              text-xs sm:text-sm
              leading-relaxed
            "
          >
            Enroll 100 or more mentees to qualify for 10% immediate discounts.
            Contact our Partnerships Team for a customized proposal based on your
            program's specific needs.
          </p>
        </motion.div>
      </motion.div>

      {/* BOTTOM FEATURE */}
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-6xl mx-auto px-4 sm:px-6">
        <FeatureRow
          title="Industry-Recognized Certification"
          description="Unlock a competitive advantage with a certificate that validates your practical skills. This credential is the official recognition of your mastery, ready to be presented to recruiters and industry partners."
          image={certificate}
          reverse
        />
      </motion.div>

    </section>
  );
};

export default WhyPartner;
