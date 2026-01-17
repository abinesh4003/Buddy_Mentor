import React from "react";
import { motion } from "framer-motion";

import visionImg from "../../../assets/images//aboutsections/founder.png";
import hema from "../../../assets/images/aboutsections/hemapriya.jpeg";
import darwin from "../../../assets/images/aboutsections/darwin.jpeg";
import aarthi from "../../../assets/images/aboutsections/aarthi.jpeg";
import tisha from "../../../assets/images/aboutsections/tisha.jpg";
import avinash from "../../../assets/images/aboutsections/Avinash.jpg";

// replace with your actual image

const enablers = [
    { name: "Hemapriya", image: hema },
    { name: "Damin Martin" , image: darwin },
    { name: "Aarthi Loganathan", image: aarthi },
    { name: "Tisha sri", image: tisha },
    { name: "Avinash", image: avinash },
];

const EmpoweringSection = () => {
    return (
        <section className="w-full bg-white py-8 md:py-12 lg:py-16">
            <div className="max-w-6xl mx-auto px-6">

                {/* ================= TOP CONTENT ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* LEFT TEXT */}

                    <div>
                        <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-primary text-xl md:text-2xl font-semibold mb-2">
                            Empowering Young Professionals
                        </motion.h2>

                        <p className="text-sm text-gray-500 mb-4">
                            The Vision of Dr. Anbu Vendan D
                        </p>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 text-start">
                            Our founding mentor,<b> Dr. Anbu Vendan D</b>, has wide industry
                            experience across the globe and has passionately mentored
                            young talent throughout his three decades of professional life.
                            He earned a PhD in engineering in renewable energy research and
                            received high accolades for his work.
                        </p>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed text-start">
                            His “Buddy Mentor” initiative is a unique skilling platform
                            created with the motto of enabling young professionals to
                            become industry-ready by the time they complete their academic
                            studies. The unique mentoring engine he designed also offers
                            wide-reaching opportunities for skill enhancement for working
                            industry professionals.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="relative overflow-hidden bg-gray-200 w-full h-[200px] md:h-full">
                        <img
                            src={visionImg}
                            alt="Vision"
                            className="absolute inset-0 w-full h-full md:h-full  object-contain rounded-sm "
                        />
                    </motion.div>
                </div>



                {/* ================= ENABLERS ================= */}
                <div className="mt-12 md:mt-16 text-center">

                    <h3 className="text-primary text-lg md:text-2xl font-semibold mb-4 md:mb-6">
                        “The Enablers”
                    </h3>

                    {/* CIRCLE GRID */}
                    <div className="relative flex flex-col items-center">

                        {/* TOP */}
                        <div className="">
                            <Circle name={enablers[0].name}  image={enablers[0].image} />
                        </div>

                        {/* MIDDLE ROW */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex gap-48 mb-6 md:mb-10">
                            <Circle name={enablers[1].name }    image={enablers[1].image} />
                            <Circle name={enablers[2].name} image={enablers[2].image}    />
                        </motion.div>

                        {/* BOTTOM ROW */}
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="flex gap-16">
                            <Circle name={enablers[3].name}  image={enablers[3].image} />
                            <Circle name={enablers[4].name}  image={enablers[4].image} />
                        </motion.div>
                    </div>

                </div>


            </div>


        </section>
    );
};

const Circle = ({ name,image }) => (
    <div className="flex flex-col items-center">
        <div className="w-20 h-20 md:w-48 md:h-48  bg-gray-300 rounded-full mb-2">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-full"
            />
        </div>
        <p className="text-xs md:text-base text-primary font-medium">{name}</p>
    </div>
);

export default EmpoweringSection;
