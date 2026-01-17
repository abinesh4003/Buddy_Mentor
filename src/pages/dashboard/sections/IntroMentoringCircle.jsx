import { motion } from "framer-motion";

const SIZE = 600;
const RADIUS = SIZE / 2;

const IntroMentoringCircle = ({ onStart }) => {
  return (
    <motion.div
      className="flex justify-center items-center w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full max-w-[90vw] sm:max-w-[420px] md:max-w-[600px]">
        {/* RESPONSIVE SVG */}
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto"
        >
          <g transform={`translate(${RADIUS},${RADIUS})`}>
            {/* Outer Circle */}
            <circle
              r={260}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
            />

            {/* Vertical Line */}
            <line
              x1="0"
              y1="-260"
              x2="0"
              y2="-40"
              stroke="#cbd5e1"
              strokeWidth="2"
            />

            {/* 0% */}
            <text
              textAnchor="middle"
              dy="120"
              fontSize="18"
              fontWeight="600"
              fill="#16385e"
            >
              0%
            </text>
          </g>
        </svg>

        {/* START Button */}
        <button
          onClick={onStart}
          className="
            absolute left-1/2 bottom-[18%] -translate-x-1/2
            px-10 py-2 rounded-full border border-slate-300
            text-[#16385e] font-semibold
            hover:bg-slate-100
            text-sm sm:text-base
          "
        >
          START
        </button>
      </div>
    </motion.div>
  );
};

export default IntroMentoringCircle;
