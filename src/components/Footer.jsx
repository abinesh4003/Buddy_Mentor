import React from "react";

import Mascot from "../assets/images/logo.png";
import youtube from "../assets/images/youtube.png";
import FB from "../assets/images/fb.png";
import IG from "../assets/images/instagram.png";
import LinkedIn from "../assets/images/ln.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-sm sm:text-base text-primary">
          {/* Column 1 */}
          <div className="text-start">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Buddy Mentor</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="text-start">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Growth</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>What is a Memoir?</li>
              <li>Articles</li>
              <li>Blog</li>
              <li>Share Your Story</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-start">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Support & Growth</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>Help</li>
              <li>Contact</li>
              <li>Become a Partner</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-start">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Legal & Privacy</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Trademark</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">

          {/* Copyright */}
          <p className="text-white text-xs sm:text-sm text-center sm:text-left">
            Copyright &copy; {new Date().getFullYear()} <span className="font-semibold">buddymentor.ai</span> – All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <NavLink to="https://www.youtube.com/channel/UC7vlV5astqFyukFlTQzui1A" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube" className="  sm:w-8 h-8" />
              </NavLink>
                    <NavLink to="https://www.facebook.com/profile.php?id=61585003751932"  target="_blank" rel="noopener noreferrer">
              <img src={FB} alt="facebook" className=" sm:w-8 h-8" />
            </NavLink>
            <NavLink to="https://www.instagram.com/buddymentor.ai/#"  target="_blank" rel="noopener noreferrer">
              <img src={IG} alt="instagram" className=" sm:w-8 h-8" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/buddy-mentor-5779a6394"  target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="linkedin" className=" sm:w-8 h-8" />
            </NavLink>
          </div>
        </div>

        {/* Mascot Circle */}
        <div className="absolute right-4 sm:right-6 -top-8 w-14 sm:w-16 h-14 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
          <img src={Mascot} alt="Mascot" className="w-9 sm:w-10 h-9 sm:h-10 object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
