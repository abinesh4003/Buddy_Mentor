import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const partners = [
  "Brand 1",
  "Brand 2",
  "Brand 3",
  "Brand 4",
  "Brand 5",
  "Brand 6",
];

const PartnersMarquee = () => {
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full bg-white py-10">
   <Marquee
  speed={100}
  pauseOnHover={true} // Replaces pauseOnClick for better UX
  gradient={false}
  direction="left"
  autoFill={true}      // FIX: This fills the empty gap by duplicating items
>
  {partners.map((brand, index) => (
    <div
      key={index}
      className="
        mx-4           /* Ensures spacing between clones */
        min-w-40
        h-16
        bg-gray-300
        rounded-xl
        flex items-center justify-center
        text-primary
        font-semibold
        shadow-sm
      "
    >
      {/* {brand} */}
    </div>
  ))}
</Marquee>
    </motion.section>
  );
};

export default PartnersMarquee;
