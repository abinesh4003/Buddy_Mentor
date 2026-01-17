import React, { useState } from "react";
import registerIllustration from "../../assets/images/register.png";
import InputField from "../../components/Inputfield";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";

const IndustryRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    website:"",
    message: ""


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
    <section className="w-full py-12 flex flex-col items-center justify-center px-4 ">
      {/* TOP HEADING + CHECKBOX SECTION (OUTSIDE MAIN CONTAINER) */}
<div className="w-full max-w-6xl mx-auto mb-6 font-montserrat font-semibold">

  {/* HEADING */}
  <h2 className="text-2xl md:text-3xl text-primary mb-3">
    How Companies Can Engage Us
  </h2>

  {/* CHECKBOX GROUP */}
  <div className="flex justify-center">
    <div className="max-w-6xl text-sm text-primary space-y-1">

      <label className="flex items-start gap-2">
        <input type="checkbox" className="mt-1 accent-primary" />
        Would like to hire mentees
      </label>

      <label className="flex items-start gap-2">
        <input type="checkbox" className="mt-1 accent-primary" />
        Would like to develop buddy mentor program for us
      </label>

      {/* INDUSTRY + EMAIL ROW */}
      <div className="flex items-center gap-6 pl-6 pt-1">

        <div className="space-y-1">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" />
            EPC Industry
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" />
            Production Industry
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-primary" />
            Manufacturing Industry
          </label>
        </div>

        <span className="text-sm text-primary pt-1">
          (or)&nbsp;&nbsp;
          <span>You can directly mail us at </span>
          <span className="underline cursor-pointer">
            industries@buddymentor.ai
          </span>
        </span>

      </div>
    </div>
  </div>
</div>



      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 bg-blue-300 rounded-xl">
        
        {/* LEFT ILLUSTRATION */}
        <div className="hidden lg:flex justify-center  bg-blue-200">
          <img
            src={registerIllustration}
            alt="Register Illustration"
            className="max-w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 py-4 md:py-8  flex flex-col justify-center
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
                value={formData.firstName || ""}
                onChange={handleChange}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleChange}
              />
            </div>

            {/* EMAIL */}
            <InputField
              label="E-mail"
              name="email"
              type="email"
              value={formData.email || ""}
              onChange={handleChange}
            />

            {/* MOBILE*/}
              <InputField
                label="Mobile number"
                name="mobile"
                value={formData.mobile || ""}
                onChange={handleChange}
                
              />
              

              {/*Name of the company*/}

              <InputField
                label="Name of the company "
                name="company"
                value={formData.company || ""}
                onChange={handleChange}
              />

              {/* Website link */}
              <InputField
                label="Website link"
                name="website"
                value={formData.website || ""}
                onChange={handleChange}
              />
              {/* MESSAGE */}
            <div>
              <label className=" text-[11px] text-primary block text-left font-montserrat mb-0">
                Message
              </label>
              <textarea
                value={formData.message || ""}
                onChange={handleChange}
                name="message"
                rows="4"
                className=" w-full border border-primary/40 px-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>


            {/* CENTER REGISTER BUTTON */}
            <div className="flex justify-center pt-4">
             <PrimaryButton type="submit" name="REGISTER" className=" shadow-none  px-3 py-1 border border-primary font-montserrat"/>
            </div>
          </form>

          {/* FOOTER TEXT */}
          <p className="text-[11px] text-gray-500 text-center mt-4">
            By clicking Register you agree to the company's{" "}
            <Link className="text-primary underline cursor-pointer hover:text-secondary">
              Terms and Conditions
            </Link>
          </p>

          <p className="text-sm text-center mt-3">
            Already have an account?{" "}
            <span className="text-secondary font-medium cursor-pointer underline hover:text-primary" style={{textDecorationColor: '#163b63'}}>
              LOG IN
            </span>
          </p>
        </div>
      </div>

    </section>
  );
};

export default IndustryRegister;
