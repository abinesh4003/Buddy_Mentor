import React from "react";
import Mascot from "../assets/images/logo.png";
import youtube from "../assets/images/youtube.png";
import FB from "../assets/images/fb.png";
import IG from "../assets/images/instagram.png";
import LinkedIn from "../assets/images/ln.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/*  FIXED GRID */}
        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-5
          gap-y-6
          gap-x-6
          md:gap-8
          text-primary
        "
        >

          {/* Buddy Mentor */}
          <div>
            <h4 className="font-semibold mb-2 md:mb-4 text-sm sm:text-base lg:text-lg text-left">
              Buddy Mentor
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-left">
              <li>About</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Become a Mentor</li>
            </ul>
          </div>

          {/* For Industry */}
          <div>
            <h4 className="font-semibold mb-2 md:mb-4 text-sm sm:text-base lg:text-lg text-left">
              For Industry
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-left">
              <li>Engineering</li>
              <li>Industry Projects</li>
              <li>Customized Mentoring</li>
            </ul>
          </div>

          {/* For Institutions */}
          <div>
            <h4 className="font-semibold mb-2 md:mb-4 text-sm sm:text-base lg:text-lg text-left">
              For Institutions
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-left">
              <li>Partner With Us</li>
              <li>Campus Programs</li>
              <li>Faculty Enablement</li>
              <li>Success Stories</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-2 md:mb-4 text-sm sm:text-base lg:text-lg text-left">
              Support
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-left">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Report an Issue</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-2 md:mb-4 text-sm sm:text-base lg:text-lg text-left">
              Legal
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm text-left">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>

        </div>
      </div>


      {/* BOTTOM BAR */}
      <div className="bg-primary relative">
        <div
          className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-3 sm:py-4
          flex
          flex-col md:flex-row
          items-center
          justify-between
          gap-3
        "
        >

          {/* Copyright */}
          <p className="text-white text-xs sm:text-sm text-center md:text-left">
            Copyright © {new Date().getFullYear()} buddymentor.ai - All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <NavLink to="https://www.youtube.com/channel/UC7vlV5astqFyukFlTQzui1A" target="_blank">
              <img src={youtube} alt="youtube" className="w-5 h-5 sm:w-6 sm:h-6"/>
            </NavLink>

            <NavLink to="https://www.facebook.com/profile.php?id=61585003751932" target="_blank">
              <img src={FB} alt="facebook" className="w-5 h-5 sm:w-6 sm:h-6"/>
            </NavLink>

            <NavLink to="https://www.instagram.com/buddymentor.ai/#" target="_blank">
              <img src={IG} alt="instagram" className="w-5 h-5 sm:w-6 sm:h-6"/>
            </NavLink>

            <NavLink to="https://www.linkedin.com/in/buddy-mentor-5779a6394" target="_blank">
              <img src={LinkedIn} alt="linkedin" className="w-5 h-5 sm:w-6 sm:h-6"/>
            </NavLink>
          </div>
        </div>

        {/* ✅ MOBILE SAFE MASCOT */}
        <div
          className="
          absolute
          right-4 sm:right-6
          -top-8 sm:-top-10
          w-14 h-14
          sm:w-16 sm:h-16
          lg:w-20 lg:h-20
          bg-white
          rounded-full
          flex
          items-center
          justify-center
          shadow-xl
        "
        >
          <img
            src={Mascot}
            alt="Mascot"
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
          />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
