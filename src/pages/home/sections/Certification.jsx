import React from 'react';
import { motion } from 'framer-motion';

import certificate from '../../../assets/images/homesections/certificates.png';

function Certification(props) {
    return (
        <section className="max-w-7xl mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <div >
                    <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="  text-xl
              sm:text-2xl
              md:text-3xl
              
              font-bold
              text-primary
              text-center
              sm:text-start
              mb-4 md:mb-6">
                        Certificates + Earn a Memoir
                    </motion.h2>

                    <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="    text-xs
              sm:text-sm
              md:text-base
              lg:text-lg
              leading-relaxed
              text-gray-600
              max-w-lg
              text-center
              sm:text-start
            ">Digital certification with a memoir of mentor and mentee will carry you along your career.</motion.p>
                </div>

                <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center">
                    <img
                        src={certificate}
                        alt="Learning Content"
                        className="w-full sm:w-3/4 md:w-full h-[200px] sm:h-[250px] md:h-[350px] shadow-lg object-fill"
                    />
                </motion.div>
            </div>

        </section>
    );
}

export default Certification;