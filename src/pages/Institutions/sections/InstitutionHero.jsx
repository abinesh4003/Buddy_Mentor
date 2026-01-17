import React from "react";
import { motion } from "framer-motion";

import heroImg from "../../../assets/images/institutesection/InstituteHero.png";
import menteesIcon from "../../../assets/images/homesections/mentees.png";
import educationIcon from "../../../assets/images/industrysection/education.png";
import badgesIcon from "../../../assets/images/homesections/badges.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const InstitutionHero = () => {
  const stats = [
    { icon: menteesIcon, label: "Mentees", value: "5000+" },
    { icon: educationIcon, label: "Institutions", value: "80+" },
    { icon: badgesIcon, label: "Badges", value: "1000+" }
  ];
  return (
    <section className="relative bg-white">

      {/* HERO BOX */}
      <div
        className="
          relative max-w-7xl mx-auto bg-primary
          pb-12 md:pb-0
          h-auto md:h-[380px]
          px-4 sm:px-6 md:px-8 lg:px-12
          pt-6 md:pt-0
        "
      >
        <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center">

          {/* IMAGE (TOP ON MOBILE, RIGHT ON DESKTOP) */}
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="relative flex justify-center order-1 md:order-2 mb-4 md:mb-0">
            <div
              className="
                w-40 h-40
                sm:w-48 sm:h-48
                md:w-72 md:h-72
                rounded-full overflow-hidden
                shadow-xl
                border-4 sm:border-6 md:border-8
                border-primary
                bg-white
                z-10
              "
            >
              <img
                src={heroImg}
                alt="Institute Discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="text-white text-center sm:text-start max-w-xl mx-auto md:mx-0 order-2 md:order-1 pb-6 md:pb-0">
            <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="
                text-base sm:text-lg md:text-2xl lg:text-3xl
                font-semibold leading-snug
                mb-3 sm:mb-4 md:mb-6
              "
            >
              The AI Era Is Transforming Core Industry Placements
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xs sm:text-sm md:text-base mb-5 sm:mb-6">
              Buddy Mentor prepares your students.
            </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Link to="/contact">
              <button
                className="
                  bg-white text-primary font-semibold
                  px-5 sm:px-6 py-1.5 sm:py-2
                  rounded-md
                  hover:bg-gray-100
                "
              >
                Contact Us
              </button>
            </Link>
          </motion.div>
          </div>

        </div>
      </div>

      {/* ANALYTICS BAR */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }} className="relative -mt-10 sm:-mt-14 md:-mt-16 px-4">
        <div className="max-w-5xl mx-auto bg-[#f3b562] rounded-2xl shadow-lg px-4 sm:px-6 py-6 sm:py-8">
          <div
            className="
              grid grid-cols-3
              divide-x divide-[#d9a24a]
              text-center
            "
          >
            {stats.map((stat, index) => (
              <motion.div key={`stat-${index}`} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }} className="flex flex-col items-center gap-1 sm:gap-2 py-4">
                <img src={stat.icon} alt={stat.label} className="w-7 sm:w-8" />
                <p className="text-xs sm:text-sm text-primary">{stat.label}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary ">
               <CountUp end={parseInt(stat.value)} duration={2} separator="" className="font-montserrat" />
                  +
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default InstitutionHero;
