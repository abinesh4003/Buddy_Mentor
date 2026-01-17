import CountUp from "react-countup";

const StatsCard = ({ img, label, value }) => {
  return (
    <div
      className="
        bg-[#f3b562]
        rounded-2xl
        shadow-[-10px_10px_10px_0px_rgba(0,0,0,0.25)]
        w-[150px] h-[150px]
        sm:w-[170px] sm:h-[170px]
        md:w-[200px] md:h-[200px]
        flex flex-col items-center justify-center
        hover:scale-105
      "
    >
      {/* Icon */}
      <img
        src={img}
        alt={label}
        className="
          w-7 h-7
          sm:w-8 sm:h-8
          md:w-9 md:h-9
          mb-2
          object-contain
        "
      />

      {/* Label */}
      <p className="text-sm md:text-base text-primary font-medium">
        {label}
      </p>

      {/* Value */}
      <h3 className="text-2xl md:text-3xl font-extrabold text-primary">
        <CountUp start={0} end={value} separator="" className="font-montserrat  " />
      </h3>
    </div>
  );
};

export default StatsCard;
