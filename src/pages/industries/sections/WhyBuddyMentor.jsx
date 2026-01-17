import React from "react";
import { motion } from "framer-motion";

import imgSkills from "../../../assets/images/industrysection/skill.png";
import imgMindset from "../../../assets/images/industrysection/mindset.png";
import imgProgress from "../../../assets/images/industrysection/progress.png";
// import imgCertificate from "../../../assets/images/homesections/certificates.png";
import FeatureRow from "../../../components/FeatureRow";

const WhyBuddyMentor = () => {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* SECTION TITLE */}
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="
          text-xl sm:text-2xl md:text-3xl
          font-bold text-primary
          mb-10 md:mb-16
          text-center md:text-left
        ">
          Why Buddy Mentor Is the 
          Smarter Choice?
        </motion.h2>

        {/* FEATURES */}
        <div className="space-y-14 sm:space-y-16 md:space-y-20">

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <FeatureRow
              title="Bridge the Skills Gap"
              description="Buddy Mentor bridges the skill gap by providing expert-verified content and verifiable skill mastery that suits industry roles."
              image={imgSkills}
              reverse
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <FeatureRow
              title="Industry Ready Mindset"
              description="Engineering talents coming out of campus has wider knowledge, buddy mentor helps to set their mind for skill development."
              image={imgMindset}
              
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <FeatureRow
              title="Progress Milestone Tracking"
              description="Provides a dynamic, real-time dashboard view of cohort and individual progress against key learning milestones and established completion targets."
              image={imgProgress} reverse
            />
          </motion.div>

          {/* <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <FeatureRow
              title="Industry-Recognized Certificate"
              description="Unlock a competitive advantage with a certificate that validates your practical skills. This credential is the official recognition of your mastery, ready to be presented to recruiters and industry partners."
              image={imgCertificate}
              
            />
          </motion.div> */}

        </div>
      </div>
    </section>
  );
};

export default WhyBuddyMentor;
