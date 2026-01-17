// src/components/CuriositySlider.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";       // <-- correct import
import "swiper/css";
import "swiper/css/autoplay";                    // optional autoplay styles

const testimonials = [
  {
    text:
      "Multi Disciplinary Engineering interface explained through a network diagram has opened my thoughts wider.",
    name: "Mentee - 1",
    role: "Civil Engineering",
  },
  {
    text:
      "Got a clarity about how to enhance the life of Buddy Mentor Refinery beyond 30 years design.",
    name: "Mentee - 2",
    role: "Electrical Engineering",
  },
  {
    text:
      "Engineering begins with the alphabet of science and speaks through the language of standards.",
    name: "Mentee - 3",
    role: "Instrumentation Engineer",
  },
  {
    text:
      "This platform explained complex concepts clearly like having a personal tutor.",
    name: "Mentee - 4",
    role: "Mechanical Engineer",
  },
  {
    text:
      "This platform explained complex concepts clearly like having a personal tutor.",
    name: "Mentee - 5",
    role: "Mechanical Engineer",
  },
 
];

const CuriositySlider = ({title}) => {
  return (
    <section className="bg-white py-4 overflow-hidden">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center text-xl sm:text-2xl text-primary font-semibold mb-8"
      >
        {title}
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mx-4 sm:mx-8"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={4}     // Desktop default
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            0: { slidesPerView: 1 },    // Mobile
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },  // Tablet
            1024: { slidesPerView: 4 }, // Desktop
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="min-w-[250px] mx-2 bg-[#163b63] min-h-[200px] text-white rounded-xl p-6 shadow-lg flex flex-col justify-center">
                <p className="text-sm leading-relaxed mb-4">“{item.text}”</p>
                <p className="text-xs text-gray-300">
                  – {item.name}
                  <br />
                  {item.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default CuriositySlider;
