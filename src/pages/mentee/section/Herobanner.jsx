import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../../../components/PrimaryButton";
import StudentImg from "../../../assets/images/Menteesection/student.png";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="w-full pt-6">
      <div className="mx-auto w-[90%] lg:w-[90%] h-auto lg:min-h-[380px] bg-primary py-2 md:py-8 px-4 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-center gap-4 md:gap-8 text-white">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left py-4">
          <motion.h1 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-md md:text-3xl font-[580] mb-4">
            Driving job-ready skill development with our breakthrough mentoring engine.
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 md:mt-12 md:ml-8 mx-auto">
            <p className="text-sm md:text-lg mb-5">
              Just at ₹12,000/- exc GST
            </p>

            <Link to="/register/mentee" aria-label="Register for mentoring program">
              <PrimaryButton name="REGISTER" className="py-1 px-4 text-xs sm:text-sm md:text-base" />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center items-center h-full">
          <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-full flex items-center justify-center md:scale-150">
            <img
              src={StudentImg}
              alt="Student learning with mentor"
              className="w-[85%] h-[100%] object-contain rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
