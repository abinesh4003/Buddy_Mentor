import React, { useState } from "react";
import loginIllustration from "../../assets/images/login.png";

import InputField from "../../components/Inputfield";
// import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    otp: "",
  });

   

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
    <section className="w-full  flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center">
        
        {/* LEFT ILLUSTRATION */}
        <div className="hidden md:flex justify-center">
          <img
            src={loginIllustration}
            alt="Login Illustration"
            className="max-w-md w-full"
          />
        </div>

        {/* LOGIN CARD */}
        <div className="flex justify-center">
          <div className="w-full bg-primary rounded-xl p-8 sm:px-12 sm:py-10 md:px-20 md:py-12 shadow-lg">
            
            <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-6">
              WELCOME
            </h2>

            <form className="space-y-2" onSubmit={handleSubmit}>
              <InputField
                label="Registration ID / Mail ID"
                name="username"
                value={formData.username || ""}
                onChange={handleChange}
                labelClass="text-white"

                inputClass="h-10 "
              />

              <InputField
                label="Password"
                type="password"
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
                labelClass="text-white"
                inputClass="h-10 "
              />

              <div className="text-right text-[11px] md:text-[14px] text-gray-300 cursor-pointer">
                Forgot password?
              </div>

              {/* OR */}
              <div className="text-center text-[11px] text-gray-300">
                (OR)
              </div>

              {/* OTP */}
              <div>
                <div className="flex justify-between text-[11px] text-white mb-1">
                  <span className="font-montserrat ">Log in through OTP</span>
                 
<span className="text-white cursor-pointer underline underline-offset-2 decoration-secondary hover:text-secondary font-montserrat">
  Get OTP
</span>                </div>
                <input
                  type="text"
                  name="otp"
                  onChange={handleChange}
                  className="w-full h-10  px-3 text-xs text-black
                  focus:outline-none focus:ring-2 focus:ring-yellow-400"

                />
              </div>

              {/* LOGIN BUTTON */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-secondary text-black font-semibold px-10 py-2 rounded-md shadow transition font-montserrat "
                  style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",border:"1px solid rgba(0, 0, 0, 1)" }}
                >
                  LOG IN
                </button>
              </div>
            </form>

            {/* FOOTER */}
            <p className="text-[11px] text-center text-gray-300 mt-6">
              Don’t have an account?{" "}
              <Link to="/register/mentee" className="text-secondary cursor-pointer underline">
                REGISTER
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
