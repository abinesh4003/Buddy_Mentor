import React from 'react';
import { motion } from 'framer-motion';
import InstitutionHero from './sections/InstitutionHero';
import WhyPartner from './sections/Whypartnert';
import InstitutionMarquee from '../Institutions/sections/InstustionMarquee';

const Institution = () => {
    return (
        <main className='max-w-screen overflow-x-hidden'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <InstitutionHero />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <WhyPartner />
            </motion.div>
            {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                < InstitutionMarquee />
            </motion.div> */}
        </main>
    );
};

export default Institution;