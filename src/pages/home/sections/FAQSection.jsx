import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What industries and skills do you cover?",
    answer:
      "We cover multidisciplinary engineering domains including Civil, Mechanical, Electrical, Instrumentation, and emerging industry-focused skills. Our mentoring bridges academic knowledge with real-world applications.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Most learners experience improved clarity and confidence within the first few mentoring sessions. Consistent engagement leads to measurable skill development over time.",
  },
  {
    question: 'Do I need to be a "techie" to use your services?',
    answer:
      "Not at all. Our programs are designed for learners at all levels. Concepts are explained clearly, starting from fundamentals and progressing to advanced applications.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-10">
          FAQs
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="border border-[#8aa4c4] rounded-md px-4 py-1 md:py-2"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-primary font-semibold text-xs sm:text-base md:text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#16385e] text-xs sm:text-sm md:text-base text-start lg:text-lg leading-relaxed ">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
      <div className="max-w-6xl mx-auto px-4">
          {/* Bottom Info Box */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-14 border border-[#8aa4c4] rounded-lg p-6 sm:p-8 md:p-10 text-[#16385e] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-left">
         Our AI‑powered curriculum and mentor‑matching systems ensure every learner receives a personalized and highly effective mentoring experience. <span  className="text-primary font-semibold">Buddy Mentor</span>, owned by Vishesham Pvt. Ltd., retains full copyright over all course materials, including our immersive 2D/3D visualizations. Unauthorized use, reproduction, or copying of any content is strictly prohibited.
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
