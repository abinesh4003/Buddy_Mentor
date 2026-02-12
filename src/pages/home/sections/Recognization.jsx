import React from "react";
import { motion } from "framer-motion";
import rec1 from "../../../assets/images/homesections/recz_logo1.png";
import rec2 from "../../../assets/images/homesections/recz_logo2.jpg";

const Recognization = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          text-xl
          sm:text-2xl
          md:text-3xl
          font-semibold
          font-montserrat
          text-primary
          text-center
          mb-8
          sm:mb-12
        "
      >
        We are Recognized by
      </motion.h2>

      {/* Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          flex
      =
          flex-row
          items-center
          justify-center
          gap-8
          sm:gap-14
    
        "
      >
        <img
          src={rec1}
          alt="DPIIT Startup India"
          className="
            h-12
            sm:h-14
            md:h-16
            lg:h-32
            w-auto
            object-cover
           
            transition
            duration-300
          "
        />

        <img
          src={rec2}
          alt="Startup TN"
          className="
            h-12
            sm:h-14
            md:h-16
            lg:h-32
            w-auto
            object-cover
         
            transition
            duration-300
          "
        />
      </motion.div>

    </section>
  );
};

export default Recognization;
