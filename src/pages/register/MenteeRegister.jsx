import React, { useState } from "react";
import registerIllustration from "../../assets/images/register.png";
import InputField from "../../components/Inputfield";
import PrimaryButton from "../../components/PrimaryButton";
import { Link, NavLink } from "react-router-dom";

const MenteeRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    stage: "",
    discipline: "",
    country: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full py-12 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-blue-300 rounded-xl">
        
        {/* LEFT ILLUSTRATION */}
        <div className="hidden lg:flex justify-center bg-blue-200">
          <img
            src={registerIllustration}
            alt="Register Illustration"
            className="max-w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-4 md:py-8 flex flex-col justify-center
          border border-primary/50 rounded-xl overflow-hidden bg-white">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center">
            REGISTER
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            To continue
          </p>

          <form className="space-y-2" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* EMAIL */}
            <InputField
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            {/* MOBILE & DOB */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              <InputField
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            {/* STAGE & DISCIPLINE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] text-primary block text-left font-montserrat mb-1">
                  Your pro stage
                </label>
                <select
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  className="w-full h-9 border border-primary/40 px-3 text-xs
                  focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>Choose one</option>
                  <option>Fresher</option>
                  <option>Final Year</option>
                  <option>Industry Pro</option>
                </select>
              </div>

              <InputField
                label="Discipline"
                name="discipline"
                value={formData.discipline}
                onChange={handleChange}
              />
            </div>

            {/*  COUNTRY & STATE (ADDED) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] text-primary block text-left font-montserrat mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full h-9 border border-primary/40 px-3 text-xs
                  focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>Select country</option>
                  <option >India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] text-primary block text-left font-montserrat mb-1">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full h-9 border border-primary/40 px-3 text-xs
                  focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="" disabled>Select state</option>
                  <option>Tamil Nadu</option>
                  <option>Karnataka</option>
                  <option>Maharashtra</option>
                </select>
              </div>
            </div>

            {/* REGISTER BUTTON */}
            <div className="flex justify-center pt-4">
              <PrimaryButton
                type="submit"
                name="REGISTER"
                className="shadow-none px-3 py-1 border border-primary font-montserrat"
              />
            </div>
          </form>

          {/* FOOTER TEXT */}
          <p className="text-[11px] text-gray-500 text-center mt-4">
            By clicking Register you agree to the company's{" "}
            <Link className="text-primary underline cursor-pointer hover:text-secondary">
              Terms and Conditions
            </Link>
          </p>

          <p className="text-sm text-center mt-3 text-primary">
            Already have an account?{" "}
            <span
              className="text-secondary font-medium cursor-pointer underline hover:text-primary"
              style={{ textDecorationColor: "#163b63" }}
            >
             <NavLink to="/login">LOG IN</NavLink>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenteeRegister;
