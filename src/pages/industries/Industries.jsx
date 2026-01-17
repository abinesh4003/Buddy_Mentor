import React from 'react';
import { motion } from 'framer-motion';
import IndustryHero from './sections/IndustryHero';
import WhyBuddyMentor from './sections/WhyBuddyMentor';
import IndustryMarquee from './sections/IndustryMarquee';

const Industries = () => {
   return (
      <main className='max-w-screen overflow-x-hidden'>
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <IndustryHero />
         </motion.div>
         <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <WhyBuddyMentor />
         </motion.div>
         {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <IndustryMarquee />
         </motion.div> */}
      </main>
   );
};

export default Industries;