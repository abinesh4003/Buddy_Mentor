import React from "react";

const Banner = ({
  title,
  priceText,
  buttonText = "REGISTER",
  image,
}) => {
  return (
    <div className="w-full bg-primary py-12">
      <div className="mx-auto w-[90%] lg:w-[80%] flex flex-col-reverse lg:flex-row items-center justify-between gap-10 text-white">

        {/* LEFT CONTENT */}
        <div className="lg:w-[55%] text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-snug mb-4">
            {title}
          </h2>

          <p className="text-sm mb-5">{priceText}</p>

          <button className="bg-[#ffb300] text-black font-bold px-6 py-2 rounded-md hover:opacity-90 transition">
            {buttonText}
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center items-center">
          <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full bg-[#f2b654] flex items-center justify-center">
            <img
              src={image}
              alt="banner"
              className="w-[85%] h-[85%] object-contain rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
