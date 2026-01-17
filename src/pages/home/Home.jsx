import React from 'react';
import HeroSlider from './sections/heroSlider/Hero';
import CoreIndustrySection from './sections/CoreIndustrySection';
import EPCIndustrySection from './sections/EPCIndustrySection';
import ContentSection from './sections/ContentSection';
import Certification from './sections/Certification';
import Analytics from './sections/Analytics';
import SeamlessTransition from './sections/SeamlessTransition';
import PartnersMarquee from '../../components/PartnersMarquee';
import CuriositySlider from './sections/CuriositySlider';
import FAQSection from './sections/FAQSection';

const Home = () => {
    return (
        <main className='max-w-screen overflow-x-hidden'>
            <HeroSlider />
            <CoreIndustrySection />
            <EPCIndustrySection />
            <ContentSection />
            <Certification />
            <Analytics />
            <SeamlessTransition />
            {/* <PartnersMarquee /> */}
            <CuriositySlider  title="Curiosity Seeker"/>
            <FAQSection />
        </main>
    );
};

export default Home;