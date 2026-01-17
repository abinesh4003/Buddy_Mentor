import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from './sections/AboutHero';
import EmpoweringSection from './sections/EmpoweringSection';
import FeaturesSection from './sections/FeaturesSection';
import EducationTimeline from './sections/EducationTimeline';
import CTASection from './sections/CTAsection';

const AboutUs = () => {
    return (
        <main className='max-w-screen overflow-x-hidden'>
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <AboutHero />
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <EmpoweringSection />
             </motion.div>
             <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <FeaturesSection />
             </motion.div>
             <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <EducationTimeline />
             </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <CTASection />
             </motion.div>
        </main>
    );
};

export default AboutUs;