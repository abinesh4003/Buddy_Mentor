import React from "react";
import { motion } from "framer-motion";

import Journey1 from "../../../assets/images/aboutsections/journey1.png";
import Journey2 from "../../../assets/images/aboutsections/journey2.png";
import Journey3 from "../../../assets/images/aboutsections/journey3.png";
import journey4 from "../../../assets/images/aboutsections/journey4.png";

const steps = [
  {
    title: "1980s – Data Era",
    img: Journey1,
    desc: "Information is Power",
  },
  {
    title: "1990s – Internet Era",
    img: Journey2,
    desc: "Information is everywhere and knowledge is valued",
  },
  {
    title: "2000s – Digital Era",
    img: Journey3,
    desc: "Information plus knowledge is digitalized and value added",
  },
  {
    title: "2020s – AI Era",
    img: journey4,
    desc: "Information plus knowledge plus experience is valued",
  },
];

const LearningPathSection = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-lg sm:text-xl md:text-2xl font-[580] text-primary mb-10 md:mb-14">
          Education’s Journey Across Generations
        </motion.h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>

              {/* CARD */}
              <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }}
                className="
                  border border-black rounded-md
                  p-5 md:p-6
                  w-full md:w-[280px] lg:w-[300px]
                  min-h-[260px] md:min-h-[300px]
                  text-center bg-white
                  flex flex-col justify-between
                "
              >
                <h3 className="text-primary font-bold mb-3">
                  {step.title}
                </h3>

                <img
                  src={step.img}
                  alt={step.title}
                  className="mx-auto mb-4 h-28 md:h-32 object-contain"
                />

                <p className="text-sm md:text-base text-primary font-[550] leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>

              {/* ARROW (DESKTOP ONLY) */}
             {index !== steps.length - 1 && (
  <>
    {/* MOBILE DOWN ARROW */}
    <div className="flex md:hidden justify-center text-2xl text-primary">
      ↓
    </div>

    {/* DESKTOP RIGHT ARROW */}
    <div className="hidden md:flex items-center text-3xl text-primary">
      →
    </div>
  </>
)}

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningPathSection;
