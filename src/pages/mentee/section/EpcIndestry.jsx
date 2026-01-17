import React from "react";
import { motion } from "framer-motion";
import epcCharacter from "../../../assets/images/Menteesection/epcCharecter.png";
// import factory from "../../../assets/images/Menteesection/factory.png";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton";
const EPCIndustrMentee = () => {
  return (
  <section className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">
            <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl sm:text-3xl md:text-4xl font-monserrat font-semibold  mb-4">
             Why Refinery for EPC core?
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xs sm:text-sm md:text-lg   sm:text-start text-gray-200 mb-6 font-roboto ">
              Refineries involve diverse chemicals, gases, hydrocarbons, and energy products, making them one of the most complex EPC environments. By mastering this foundation, you become eligible to enter multiple EPC domains — including chemical, pharmaceutical, power, petrochemical, and several others.
            </motion.p>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row gap-2 mb-2">
              <Link to="/register/mentee">
              <PrimaryButton name="Proceed to learn" className="px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base" />
              </Link>

             <Link to="/register/mentee">
              <button className="px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-lg bg-primary text-white font-montserrat font-[530]" >Get one day free trial</button>
             </Link>
            </motion.div>

            {/* Register */}
            <p className="text-xs sm:text-sm md:text-base text-center sm:text-start text-gray-300">
              Don’t have an account?{" "}
              <NavLink to="/register/mentee" className="text-[#f9b233] cursor-pointer hover:underline">
                REGISTER
              </NavLink>
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="order-1 md:order-2 flex justify-center md:max-h-[350px]">
            <img
              src={epcCharacter}
              alt="EPC Mentor"
              className="w-56 md:w-full md-max-h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default EPCIndustrMentee;