import { useState } from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, backContent = "Coming Soon..." }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer [perspective:1000px] hover:scale-105 transition-transform duration-300"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="
          relative
          w-full h-[180px]
          sm:w-[200px] sm:h-[200px]
          md:w-[220px] md:h-[220px]
          lg:w-[240px] lg:h-[240px]
          xl:w-[260px] xl:h-[260px]
          rounded-2xl
          [transform-style:preserve-3d]
        "
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0
            bg-white
            rounded-2xl
            shadow-[0_3px_30px_rgba(211,211,211,1)]
            border-2 border-[rgba(22,56,94,0.3)]
            flex flex-col items-center justify-center gap-3
            [backface-visibility:hidden]
          "
        >
          <img src={icon} alt={title} className="w-14 h-14 md:w-16 md:h-16" />
          <h4 className="text-primary font-semibold text-sm md:text-base text-center px-4">
            {title}
          </h4>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0
            bg-primary
            text-white
            rounded-2xl
            border-2 border-primary
            flex items-center justify-center text-center px-4
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >
          <p className="text-xs sm:text-sm md:text-lg  font-semibold">
            {backContent}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
