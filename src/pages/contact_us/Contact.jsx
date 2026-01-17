import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkerImg from "../../assets/images/worker.png";
import youtube from "../../assets/images/youtube1.jpg";
import fb from "../../assets/images/fb.png";
import ln from "../../assets/images/ln.png";
import insta from "../../assets/images/instagram.png";
import { NavLink} from "react-router-dom";

const ContactSection = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!contactData.name.trim()) newErrors.name = "Name is required";
    if (!contactData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(contactData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!contactData.subject.trim()) newErrors.subject = "Subject is required";
    if (!contactData.phone.trim()) newErrors.phone = "Phone is required";
    if (!contactData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);

    try {
      // API CALL (replace URL)
      // const response = await fetch("https://your-api-url.com/contact", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(contactData),
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to send message");
      // }

      alert("Message sent successfully!");

      setContactData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
      setErrors({});

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-0 items-start">
          
          {/* LEFT SIDE */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col items-center justify-center gap-0 md:gap-6 h-auto md:h-full">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-2xl font-semibold text-primary mb-2">
                Any Questions?
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-sm text-primary/80 max-w-xs leading-relaxed">
                The quickest way to get in touch with us is by using the contact
                information given here.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="flex justify-center my-10">
              <img 
                src={WorkerImg} 
                alt="Customer support representative" 
                className="w-[210px]" 
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="bg-primary text-white rounded-xl p-5 w-full max-w-sm">
              <p className="text-xs mb-1">
                <span className="font-semibold">Email (Support):</span>{" "}
                <a href="contact@buddymentor.ai" className="hover:underline">
                  contact@buddymentor.ai
                </a>
              </p>
              <p className="text-xs">
                <span className="font-semibold">Phone (Support):</span>{" "}
                <a href="tel:+919998887770" className="hover:underline">
                  +91 9487324187
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col items-center lg:items-start">
            <div className="border border-primary/40 rounded-sm px-10 py-4 w-full">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center text-base font-semibold text-primary mb-6">
                LET'S CHAT
              </motion.h2>

              <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="space-y-4" onSubmit={handleSubmit} noValidate>
                <InputField 
                  label="Name" 
                  name="name" 
                  value={contactData.name} 
                  onChange={handleChange}
                  // error={errors.name}
                  required
                />
                <InputField 
                  label="E-mail" 
                  name="email" 
                  type="email"
                  value={contactData.email} 
                  onChange={handleChange}
                  // error={errors.email}
                  required
                />
                <InputField 
                  label="Subject" 
                  name="subject" 
                  value={contactData.subject} 
                  onChange={handleChange}
                  // error={errors.subject}
                  required
                />
                <InputField 
                  label="Phone Number" 
                  name="phone" 
                  type="tel"
                  value={contactData.phone} 
                  onChange={handleChange}
                  // error={errors.phone}
                  required
                />

                <div>
                  <label 
                    htmlFor="message"
                    className="text-[11px] text-primary text-left font-montserrat block"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={contactData.message}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 border-primary/40 focus:ring-primary
                    
                    // {
                    //   errors.message 
                    //     ? 'border-red-500 focus:ring-red-500' 
                    //     : ''
                    // }
    `}
                    required
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {/* {errors.message && (
                    <span id="message-error" className="text-red-500 text-xs mt-1 block">
                      {errors.message}
                    </span>
                  )} */}
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="border border-primary text-primary px-8 py-1.5 rounded text-xs font-semibold hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "SENDING..." : "SUBMIT"}
                  </button>
                </div>
              </motion.form>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }} className="mt-6 text-center w-full">
              <p className="text-sm md:text-base text-primary mb-3">
                You can also contact us through,
              </p>
              <div className="flex justify-center gap-4" role="list">
              <NavLink to="https://www.youtube.com/channel/UC7vlV5astqFyukFlTQzui1A" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube" className="  sm:w-8 h-8" />
              </NavLink>
                    <NavLink to="https://www.facebook.com/profile.php?id=61585003751932"  target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="facebook" className=" sm:w-8 h-8" />
            </NavLink>
            <NavLink to="https://www.instagram.com/buddymentor.ai/#"  target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="instagram" className=" sm:w-8 h-8" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/buddy-mentor-5779a6394"  target="_blank" rel="noopener noreferrer">
              <img src={ln} alt="linkedin" className=" sm:w-8 h-8" />
            </NavLink>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, error, required }) => (
  <div>
    <label 
      htmlFor={name}
      className="text-[11px] text-primary text-left block font-montserrat"
    >
      {label} {required && '*'}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full h-9 border px-3 text-xs focus:outline-none focus:ring-1 ${
        error 
          ? 'border-red-500 focus:ring-red-500' 
          : 'border-primary/40 focus:ring-primary'
      }`}
      required={required}
      aria-describedby={error ? `${name}-error` : undefined}
    />
    {error && (
      <span id={`${name}-error`} className="text-red-500 text-xs mt-1 block">
        {error}
      </span>
    )}
  </div>
);

export default ContactSection;