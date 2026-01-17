import React from 'react';
import { motion } from 'framer-motion';
import HeroBanner from './section/Herobanner';
import FeatureCardSection from './section/FeatureCardSection';
import EPCIndustrMentee from './section/EpcIndestry';
import LearningPathSection from './section/LearningPathSection';
import CuriositySlider from '../home/sections/CuriositySlider'

const Mentee = () => {
    return (
        <main className='max-w-screen overflow-x-hidden'>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                <HeroBanner />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <FeatureCardSection />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <EPCIndustrMentee />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <LearningPathSection />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <CuriositySlider title={"Curious Minded Mentees"}/>
            </motion.div>
        </main>
    );
};

export default Mentee;