import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CARD_WIDTH = 320; // 300 + margins

const initialTestimonials = [
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
    name: "Mentee - 4",
    role: "Mechanical Engineer",
  },
  {
    text:
      "This platform explained complex concepts clearly like having a personal tutor.",
    name: "Mentee - 4",
    role: "Mechanical Engineer",
  },
];

const CuriosityMenteeSlider = () => {
  const [items, setItems] = useState(initialTestimonials);
  const [translate, setTranslate] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // move left by one card
      setAnimate(true);
      setTranslate(-CARD_WIDTH);

      // after animation completes
      setTimeout(() => {
        setAnimate(false);
        setItems((prev) => {
          const updated = [...prev];
          updated.push(updated.shift()); // move first to end
          return updated;
        });
        setTranslate(0);
      }, 700); // match transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-4 overflow-hidden">
      <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-xl sm:text-2xl text-primary font-semibold mb-8">
        Curious Minded Mentees
      </motion.h3>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative mx-4 sm:mx-8 mx-auto overflow-hidden">
        <div
          className={`flex ${animate ? "duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(${translate}px)`, transition: animate ? 'transform 0.7s ease-in-out' : 'none' }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="min-w-[250px] mx-4 bg-primary text-white 
                         rounded-xl p-6 shadow-lg"
            >
              <p className="text-sm leading-relaxed mb-4">
                “{item.text}”
              </p>

              <p className="text-xs text-gray-300">
                – {item.name}
                <br />
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CuriosityMenteeSlider;
