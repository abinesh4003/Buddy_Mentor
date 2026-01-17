import React from "react";
import { motion } from "framer-motion";

const FeatureRow = ({ title, description, image, reverse }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

      {/* IMAGE */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        className={`
          flex justify-center md:justify-start w-full
          ${reverse ? "md:order-2" : "md:order-1"}
        `}
      >
        <img
          src={image}
          alt={title}
          className="
            w-full
            max-w-[280px] sm:max-w-[340px] md:max-w-[380px]
            h-[200px] sm:h-[220px] md:h-[240px]
            object-cover
            shadow-[0px_3px_30px_rgba(211,211,211,0.9)]
          "
        />
      </motion.div>

      {/* TEXT */}
      <div
        className={`
          ${reverse ? "md:order-1" : "md:order-2"}
          text-center md:text-left
        `}
      >
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="
          text-lg sm:text-xl md:text-2xl lg:text-3xl
          font-semibold text-primary
          mb-3
        ">
          {title}
        </motion.h3>

        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="
          text-sm sm:text-base
          text-gray-600
          leading-relaxed
          max-w-md
          mx-auto md:mx-0
        ">
          {description}
        </motion.p>
      </div>

    </div>
  );
};

export default FeatureRow;
