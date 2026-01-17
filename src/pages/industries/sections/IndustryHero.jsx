import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/images/industrysection/IndustryHero.png";
import menteesIcon from "../../../assets/images/homesections/mentees.png";
import industriesIcon from "../../../assets/images/industrysection/industry.png";
import badgesIcon from "../../../assets/images/homesections/badges.png";
import CountUp from "react-countup";

const IndustryHero = () => {
  const stats = [
    { icon: menteesIcon, label: "Mentees", value: "5000+" },
    { icon: industriesIcon, label: "Industries", value: "80+" },
    { icon: badgesIcon, label: "Badges", value: "1000+" }
  ];

  return (
    <section className="relative bg-white">
      <div className="relative max-w-7xl mx-auto bg-primary pb-12 md:pb-0 h-auto md:h-[380px] px-4 sm:px-6 md:px-8 pt-6 md:pt-0">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="relative flex justify-center order-1 md:order-2 mb-4 md:mb-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 sm:border-6 md:border-8 border-primary bg-white z-10">
              <img
                src={heroImg}
                alt="Industry professionals in discussion about skill development"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <div className="text-white text-center sm:text-start max-w-xl mx-auto md:mx-0 order-2 md:order-1 pb-6 md:pb-0">
            <motion.h1 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold leading-snug mb-4 sm:mb-5 md:mb-6">
              We develop skills and make industry ready grads that You Need Today.
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Link to="/contact" className="inline-block">
                <button className="bg-white text-primary font-semibold px-5 sm:px-6 py-1.5 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ANALYTICS BAR */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }} className="relative -mt-10 sm:-mt-14 md:-mt-16 px-4">
        <div className="max-w-5xl mx-auto bg-[#f3b562] rounded-2xl shadow-lg px-4 sm:px-6 py-6 sm:py-8">
          <div className="grid grid-cols-3 divide-x divide-[#d9a24a] text-center">
            {stats.map((stat, index) => (
              <motion.div key={`stat-${index}`} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }} className="flex flex-col items-center gap-1 sm:gap-2 py-4">
                <img src={stat.icon} alt="" className="w-7 sm:w-8" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-primary">{stat.label}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                  <CountUp end={parseInt(stat.value)} duration={2} separator="" className="font-montserrat"/>
                  +
                </h2>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default IndustryHero;
