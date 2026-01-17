import React from "react";
import { motion } from "framer-motion";

import step1 from "../../../assets/images/Menteesection/step1.png";
import step2 from "../../../assets/images/Menteesection/step2.png";
import step3 from "../../../assets/images/Menteesection/step3.png";
import certificate from "../../../assets/images/homesections/certificates.png";

const steps = [
  {
    title: "Step 1: The Source of Truth",
    img: step1,
    desc:
      "The mentoring engine has structured inculcation of modules for the mentees to gain insight, it is vetted by a 25+ year experienced Industry professionals.",
  },
  {
    title: "Step 2: Personalized AI Guidance",
    img: step2,
    desc:
      "Meet Buddy: Your AI Learning Companion. Our AI guide analyzes your progress and learning style, providing customized feedback, resources, and just-in-time support to overcome roadblocks.",
  },
  {
    title: "Step 3: Mastery & Certification",
    img: step3,
    desc:
      "Practical Application, Verified Results. Apply your learning through real-world projects. With expert-verified content and personalized AI tracking, you earn a certificate that matters to employers.",
  },
];

const LearningPathSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-xl md:text-2xl font-[580] text-primary mb-14">
          Your Learning Path:
          <br />
          Expert-Verified, AI-Powered
        </motion.h2>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="border-2 border-[rgba(0,0,0,0.3)] rounded-md p-6 w-full md:w-[320px] md:min-h-[380px] text-center bg-white">
                <img
                  src={step.img}
                  alt={step.title}
                  className="mx-auto mb-4 h-32 object-contain"
                />
                <h3 className="text-primary font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>

              {/* Arrow (desktop only) */}
              {index !== steps.length - 1 && (
                <>
                  {/* DOWN ARROW — MOBILE */}
                  <div className="md:hidden text-3xl text-primary flex justify-center">
                    ↓
                  </div>

                  {/* RIGHT ARROW — DESKTOP */}
                  <div className="hidden md:flex items-center text-3xl text-primary">
                    →
                  </div>
                </>
              )}

            </React.Fragment>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Certificate Image */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="flex justify-center">
            <img
              src={certificate}
              alt="Certificate"
              className="max-w-sm w-full shadow-lg rounded-md"
            />
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="text-xl md:text-2xl font-[580] text-primary mb-4 text-center sm:text-start">
              Become Industry Ready Grads
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-lg text-center sm:text-start">
              “Stand out with a certification that verifies your real-world
              capabilities. This credential is an official endorsement of your
              mastery — a powerful asset to showcase to recruiters and industry
              stakeholders.”
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
