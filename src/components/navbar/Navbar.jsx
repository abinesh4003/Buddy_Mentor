import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from '../../assets/images/logo.png'
// import profile from '../../assets/images/profile.jpg'
import RegBtn from "../reg-btn/RegBtn";
import LoginBtn from "../login-btn/LoginBtn";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);
  const regRef = useRef(null);
  const regMobileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleDocClick(e) {
      const clickedInsideDesktop = regRef.current && regRef.current.contains(e.target);
      const clickedInsideMobile = regMobileRef.current && regMobileRef.current.contains(e.target);
      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setRegOpen(false);
      }
    }

    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, []);


  const navLinkClass = ({ isActive }) =>
    `text-xs sm:text-sm md:text-xs lg:text-sm  font-semibold font-montserrat ${isActive
      ? "border-b-2 border-black text-gray-900"
      : "text-gray-600 hover:text-gray-900"
    }`;

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto py-1 sm:py-2 px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center h-16 sm:h-18 md:h-20 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {/* LEFT: LOGO */}
          <div className="flex-shrink-0">
           <NavLink to='/'>

             <img
              src={logo}
              alt="Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 w-auto"
            />
           </NavLink>
          </div>

          {/* CENTER: BUTTONS + NAV LINKS */}
          <div className="flex-1 flex flex-col items-center">

            {/* NAV LINKS (DESKTOP) */}
            <nav className="hidden md:flex gap-4 lg:gap-6 xl:gap-8 2xl:gap-12">
              <NavLink to="/" className={navLinkClass}>
                HOME
              </NavLink>
              <NavLink to="/mentees" className={navLinkClass}>
                MENTEES
              </NavLink>
              <NavLink to="/industries" className={navLinkClass}>
                INDUSTRIES
              </NavLink>
              <NavLink to="/institutions" className={navLinkClass}>
                INSTITUTIONS
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                ABOUT US
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                CONTACT US
              </NavLink>
            </nav>
          </div>

          {/* RIGHT: PROFILE */}
          <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
            {/* TOP ROW: REGISTER / LOGIN */}
            <div className="hidden md:block w-full flex flex-col items-end">
              <div className="flex justify-end gap-1 sm:gap-2 mb-1 sm:mb-2 items-center">
                <div ref={regRef} className="relative">
                  <RegBtn
                    name="REGISTER"
                    onClick={(e) => {
                      e.stopPropagation();
                      setRegOpen((v) => !v);
                    }}
                  />

                  {regOpen && (
                    <div className="absolute right-0 mt-2 w-32  bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-1 px-4">
                        <button
                          onClick={() => {
                            navigate("/register/mentee");
                            setRegOpen(false);
                          }}
                          className="w-full text-center px-3 py-1 text-sm font-medium text-primary hover:bg-gray-100 rounded"
                        >
                          Mentees
                        </button>
                        <div className="my-1 border-t border border-gray-300" />
                        <button
                          onClick={() => {
                            navigate("/register/institution");
                            setRegOpen(false);
                          }}
                          className="w-full text-center px-3 py-1 text-sm font-medium text-primary hover:bg-gray-100 rounded"
                        >
                          Institution
                        </button>
                        <div className="my-1 border-t border border-gray-300" />
                        <button
                          onClick={() => {
                            navigate("/register/industry");
                            setRegOpen(false);
                          }}
                          className="w-full text-center px-3 py-1 text-sm font-medium text-primary hover:bg-gray-100 rounded"
                        >
                          Industry
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <LoginBtn name="LOGIN" onClick={() => navigate("/login")} />
              </div>
              <div className="text-xs lg:text-sm font-semibold text-primary">Coming Soon ...</div>
            </div>

            {/* <img
              src={profile}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            /> */}


            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>





        {/* MOBILE MENU DROPDOWN */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-3 sm:px-4 py-3 sm:py-4">
              {/* Mobile Register/Login Buttons */}
              <div ref={regMobileRef} className="flex justify-center gap-2 sm:gap-3 pb-3 sm:pb-4 relative">
                <RegBtn
                  name="REGISTER"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRegOpen((v) => !v);
                  }}
                />
                <LoginBtn name="LOGIN" onClick={() => { navigate("/login"); setOpen(false); }} />

                {regOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="p-1 px-4">
                      <button
                        onClick={() => {
                          navigate("/register/mentee");
                          setRegOpen(false);
                          setOpen(false);
                        }}
                        className="w-full text-center px-3 py-1 text-sm font-medium text-primary hover:bg-gray-100 rounded"
                      >
                        Mentees
                      </button>
                      <div className="my-1 border-t border border-gray-300" />
                      <button
                        onClick={() => {
                          navigate("/register/institution");
                          setRegOpen(false);
                          setOpen(false);
                        }}
                        className="w-full text-center px-3 py-1 text-sm font-medium text-primary hover:bg-gray-100 rounded"
                      >
                        Institution
                      </button>
                      <div className="my-1 border-t border border-gray-300" />
                      <button
                        onClick={() => {
                          navigate("/register/industry");
                          setRegOpen(false);
                          setOpen(false);
                        }}
                        className="w-full text-center px-3 py-1 text-sm font-medium text-primary hover:bg-gray-100 rounded"
                      >
                        Industry
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* Coming Soon Text */}
              <div className="text-center text-xs sm:text-sm text-gray-500 pb-3 sm:pb-4 border-b border-gray-100">
                Coming Soon ...
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-2 sm:gap-3 mt-3 sm:mt-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    navLinkClass({ isActive }) +
                    " block text-sm sm:text-base py-2 sm:py-3 px-2 sm:px-3 rounded-md hover:bg-gray-50 transition-colors"
                  }
                  onClick={() => setOpen(false)}
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/mentees"
                  className={({ isActive }) =>
                    navLinkClass({ isActive }) +
                    " block text-sm sm:text-base py-2 sm:py-3 px-2 sm:px-3 rounded-md hover:bg-gray-50 transition-colors"
                  }
                  onClick={() => setOpen(false)}
                >
                  MENTEES
                </NavLink>
                <NavLink
                  to="/industries"
                  className={({ isActive }) =>
                    navLinkClass({ isActive }) +
                    " block text-sm sm:text-base py-2 sm:py-3 px-2 sm:px-3 rounded-md hover:bg-gray-50 transition-colors"
                  }
                  onClick={() => setOpen(false)}
                >
                  INDUSTRIES
                </NavLink>
                <NavLink
                  to="/institutions"
                  className={({ isActive }) =>
                    navLinkClass({ isActive }) +
                    " block text-sm sm:text-base py-2 sm:py-3 px-2 sm:px-3 rounded-md hover:bg-gray-50 transition-colors"
                  }
                  onClick={() => setOpen(false)}
                >
                  INSTITUTIONS
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    navLinkClass({ isActive }) +
                    " block text-sm sm:text-base py-2 sm:py-3 px-2 sm:px-3 rounded-md hover:bg-gray-50 transition-colors"
                  }
                  onClick={() => setOpen(false)}
                >
                  ABOUT US
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    navLinkClass({ isActive }) +
                    " block text-sm sm:text-base py-2 sm:py-3 px-2 sm:px-3 rounded-md hover:bg-gray-50 transition-colors"
                  }
                  onClick={() => setOpen(false)}
                >
                  CONTACT US
                </NavLink>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
