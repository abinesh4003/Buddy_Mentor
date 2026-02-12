import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = {
  mentees: [
    {
      question: "What if I miss a session?",
      answer: "You can reschedule the session based on mentor availability.",
    },
    {
      question: "How long does the program take?",
      answer:
        "Programs vary depending on the track, typically ranging from a few weeks to several months.",
    },
    {
      question: "Can I switch mentors?",
      answer:
        "Yes. If needed, we help you transition to another mentor better aligned with your goals.",
    },
  ],

  industries: [
    {
      question: "Can organizations partner with you?",
      answer:
        "Yes, we collaborate with industries to provide workforce-ready talent through mentoring programs.",
    },
  ],

  institutions: [
    {
      question: "Do you support colleges and universities?",
      answer:
        "We partner with academic institutions to enhance student employability through industry mentoring.",
    },
  ],

  mentors: [
    {
      question: "How can I become a mentor?",
      answer:
        "You can apply through our mentor onboarding process. Our team will review your experience and expertise.",
    },
  ],
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("mentees");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6"
        >
          FAQs
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap items-center gap-3 sm:gap-5 mb-10">
          {Object.keys(faqData).map((tab, i) => (
            <React.Fragment key={tab}>
              <button
                onClick={() => {
                  setActiveTab(tab);
                  setActiveIndex(null);
                }}
                className={`
                  text-sm sm:text-base md:text-lg
                  font-semibold
                  pb-1
                  border-b-2
                  transition
                  ${
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-primary"
                  }
                `}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>

              {i !== Object.keys(faqData).length - 1 && (
                <span className="text-gray-400">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* FAQ Items */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-5"
        >
          {faqData[activeTab].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-[#8aa4c4] rounded-md px-4 py-2"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-primary font-semibold text-sm sm:text-base md:text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#16385e] text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Info Box */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 border border-[#8aa4c4] text-justify rounded-xl p-6 sm:p-8 md:p-10 text-[#16385e] text-sm sm:text-base md:text-lg leading-relaxed"
        >
         Our AI-powered curriculum, mentor-matching algorithms, and immersive 2D/3D visualizations are proprietary intellectual property of Vishesham Private Limited. BuddyMentor.ai retains exclusive worldwide copyright over all course materials, assessments, and digital assets. Unauthorized reproduction, distribution, screen capture, or derivative works of any content is strictly prohibited. Violators will face legal action under the Indian Copyright Act, 1957 including damages, injunctions, and account termination.
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
