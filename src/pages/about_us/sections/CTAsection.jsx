import React from "react";
import { motion } from "framer-motion";
import CharacterImage from "../../../assets/images/aboutsections/cta_charector.png";
import PrimaryButton from "../../../components/PrimaryButton";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="px-4 md:px-0 mb-16">
      <div
        className="
          relative bg-primary text-white
          px-6 md:px-16 py-10 md:py-12
          rounded-lg
          flex flex-col md:flex-row
          items-center md:justify-between
          overflow-visible
          max-w-7xl mx-auto
        "
      >
        {/* IMAGE – MOBILE TOP */}
        <div className="w-full flex justify-center mb-8 md:hidden">
          <img
            src={CharacterImage}
            alt="Character"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl md:text-3xl font-semibold mb-4">
            Ambition Into Impact
          </motion.h2>

          <p className="text-gray-200 mb-6 text-sm md:text-base leading-relaxed">
            Access Buddy Mentor from anywhere, at any stage of your engineering
            journey. Build your technical capabilities through structured
            learning paths and certification tracks crafted to advance your
            professional growth.
          </p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4  justify-center md:justify-start">
           <Link to="/register/mentee">
            <PrimaryButton
              name="Proceed to learn"
              className="px-6 py-1 md:py-2 rounded-md "
            />
           </Link>

           <Link to="/register/mentee">
            <button className="bg-white text-primary font-semibold px-6 py-1 md:py-2 rounded-md hover:bg-gray-200">
              Get one day free trial
            </button>
           </Link>
          </motion.div>
          <p className="text-xs md:text-sm mt-2 text-gray-300">
            Don’t have an account?{" "}
            <Link to="/register/mentee" className="text-[#f3b562] cursor-pointer hover:underline">
              REGISTER
            </Link>
          </p>
        </div>

        {/* IMAGE – DESKTOP FLOATING */}
        <div
          className="
            hidden md:block
            absolute
            bottom-[-20px]
            right-[8%]
            w-56 h-56 lg:w-64 lg:h-64
          "
        >
          <img
            src={CharacterImage}
            alt="Character"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
