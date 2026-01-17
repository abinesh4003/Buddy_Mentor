import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/Secondarybtn";
import { Link } from "react-router-dom";

const SeamlessTransition = () => {
  return (
    <section className="bg-[#163b63] text-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          A Seamless Transition from Knowledge to Skill
        </motion.h2>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed mb-8">
          Our comprehensive mentoring engine transforms your classroom
          knowledge into practical, industry-ready skills. The EPC Core
          Foundation gives you a clear transition into real-world capability
          building — all for just{" "}
          <span className="font-semibold">₹12,000/-</span>{" "}
          (excluding GST).
        </motion.p>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4">
          <Link to="/">
           <PrimaryButton name="Proceed to learn" className="px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base" />
           </Link>

             <Link to="/">
              <SecondaryButton name="Get one day free trial" className="px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base" />
             </Link>
        </motion.div>

        {/* Register */}
        <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-4">
          Don’t have an account?{" "}
          <Link to="/register/mentee" className="text-[#f3b562] cursor-pointer hover:underline">
            REGISTER
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SeamlessTransition;
