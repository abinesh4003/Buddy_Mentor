import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PrimaryButton from "../../../../components/PrimaryButton";

//import video1 from "../../../../assets/videos/3D_Video.mp4";
//import video2 from "../../../../assets/videos/BV_BM Logo_BGM.mp4";
//import video3 from "../../../../assets/videos/social media OUT 1.mp4";
//import video4 from "../../../../assets/videos/social media OUT 2.mp4";

import bannerImage from "../../../../assets/images/logo.png"; // 👈 banner slide
import { NavLink } from "react-router-dom";

const slides = [
  { type: "banner" }, // 👈 FIRST SLIDE
 // { type: "video", src: video2, title: "BV BM Logo BGM" },
  //{ type: "video", src: video3, title: "Social Media Video 1" },
 // { type: "video", src: video4, title: "Social Media Video 2" },
 // { type: "video", src: video1, title: "3D Video" },
];

const HeroVideoSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const videoRef = useRef(null);
  // const bannerTimerRef = useRef(null);

  const next = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Reset video when slide changes
  useEffect(() => {
    if (slides[index].type === "video" && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [index]);

  // 👇 AUTO SLIDE ONLY FOR BANNER (10 seconds)
  useEffect(() => {
    if (slides[index].type === "banner") {
      const timer = setTimeout(next, 5000);
      return () => clearTimeout(timer);
    }
  }, [index])

  return (
    <section className="w-full md:w-[80%] mx-auto bg-black" aria-label="Hero slider">
      <div className="relative w-full overflow-hidden">
        <div
          className="relative w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]"
          tabIndex={0}
          role="application"
        >
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${direction === "right"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
              }`}
          >
            {slides[index].type === "banner" && <HeroBannerSlide />}

            {slides[index].type === "video" && (
              <video
                ref={videoRef}
                src={slides[index].src}
                autoPlay
                muted
                controls
                playsInline
                onEnded={next}
                className="w-full h-full object-contain"
              />
            )}
          </div>

        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105"
        >
          <ChevronLeft className="text-primary w-6 h-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10   rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105"
        >
          <ChevronRight className="text-primary w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSlider;


const HeroBannerSlide = () => {
  return (
    <div className="w-full h-full bg-[#163A5F] relative overflow-hidden flex items-center justify-center">

      {/* INNER CONTAINER */}
      <div className="h-full w-full md:w-[80%] flex flex-row items-center mx-4 sm:mx-6 md:mx-12">

        {/* LEFT SECTION – 60% */}
        <div className="w-[70%] text-white text-start pr-2 sm:pr-4 pl-4 sm:pl-0">
          <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold leading-snug">
            Decades of EPC Experience,
            Distilled Into a 4-Months Journey.
          </h1>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base opacity-90">
            Just at ₹12,000/- exc GST
          </p>

         <NavLink   to="/register/mentee">
          <PrimaryButton name="REGISTER" className="px-4 sm:px-6 py-1 text-xs sm:text-sm md:text-base mt-4" />
          </NavLink>
        </div>

        {/* RIGHT SECTION – 40% */}
        <div className=" w-[30%] sm:w-[40%] h-full flex items-center justify-center">
          <div className="p-2 sm:p-3 md:p-4 bg-white rounded-full w-[110px] h-[110px] sm:w-[160px] sm:h-[160px] md:w-[240px] md:h-[240px] lg:w-[320px] lg:h-[320px] flex items-center justify-center shadow-md">
            <img
              src={bannerImage}
              alt="Buddy Mentor"
              className="w-[70px] sm:w-[100px] md:w-[140px] lg:w-auto object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};





