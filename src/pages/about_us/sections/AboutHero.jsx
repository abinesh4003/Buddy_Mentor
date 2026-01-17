import React from "react";
import { motion } from "framer-motion";

import heroImg from "../../../assets/images/aboutsections/ai-classroom.png";
import campusImg from "../../../assets/images/aboutsections/campus-walk.jpg";

const AboutHero = () => {
  const clipRight = {
    clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
  };

  const clipLeft = {
    clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)",
  };

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* ================= TOP HERO ================= */}
      <div className="relative bg-primary">
        <div className="grid grid-cols-2 items-center">

          {/* TEXT */}
          <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 text-white z-10">
            <motion.h1 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-sm sm:text-lg md:text-3xl font-semibold leading-snug text-start">
              AI era is changing the world on skilling
            
              and placements.
            </motion.h1>
          </div>

          {/* IMAGE */}
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="relative w-full min-h-[160px] sm:min-h-[240px] md:min-h-[320px] lg:min-h-[380px]">
            <div className="absolute inset-0 overflow-hidden" style={clipRight}>
              <img
                src={heroImg}
                alt="AI-powered classroom with students learning technology"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= CENTER CONTENT ================= */}
      <div className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-base sm:text-xl md:text-2xl font-semibold text-primary mb-4 sm:mb-6  text-start">
            An investment in knowledge pays the best interest
          </motion.h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed text-start">
            At Buddy Mentor, engineering is more than a profession—it's a journey
            of endless discovery and innovation. Whether your aim is to sharpen
            your technical prowess, lead transformative projects, or ignite
            curiosity in aspiring engineers, Buddy Mentor stands by you as a
            catalyst for growth. We blend practical knowledge with visionary
            thinking to help you engineer solutions that matter, fueling progress
            that shapes tomorrow's world.
          </p>

        </div>
      </div>

      {/* ================= BOTTOM HERO ================= */}
      <div className="relative bg-primary">
        <div className="grid grid-cols-2 items-center">

          {/* IMAGE */}
          <div className="relative w-full h-full md:min-h-[320px] lg:min-h-[380px]">
            <div className="absolute inset-0 overflow-hidden" style={clipLeft}>
              <img
                src={campusImg}
                alt="Students walking on campus, representing educational journey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16 text-white z-10">
            <motion.h3 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-sm sm:text-lg md:text-2xl font-semibold mb-2 sm:mb-4 text-start">
              ENABLING  MINDS, PASSIONATELY
            </motion.h3>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed max-w-md text-start">
              At Buddy Mentor, we ignite minds with passion, purpose, and
              possibility. We believe every engineer is capable of innovating
              fearlessly and driving the change our industries need.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutHero;