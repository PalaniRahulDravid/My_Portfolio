import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.post("https://my-portfolio-ymn0.onrender.com/api/contact", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } catch (err) {
        setErrors({ api: "Failed to send message. Please try again later." });
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="min-h-screen py-16 px-4 sm:px-6 md:px-10 flex flex-col justify-center"
      style={{ backgroundColor: "#000000", color: "#F5F5F5" }}
    >
      <motion.h2
        className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-[#FFD700] text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-2xl mx-auto w-full bg-[#0f0f0f] p-6 sm:p-10 rounded-2xl shadow-lg">
        {submitted ? (
          <motion.p
            className="text-xl text-green-400 text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you! I'll get back to you soon. ✅
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#1c1c1c] text-white outline-none focus:ring-2 focus:ring-[#FFD700] placeholder:text-gray-400"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#1c1c1c] text-white outline-none focus:ring-2 focus:ring-[#FFD700] placeholder:text-gray-400"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-[#1c1c1c] text-white outline-none focus:ring-2 focus:ring-[#FFD700] placeholder:text-gray-400 resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            {errors.api && <p className="text-red-500 text-center">{errors.api}</p>}
            <motion.button
              type="submit"
              className="mx-auto sm:mx-0 w-48 text-center bg-[#FFD700] text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-[#C0B283] shadow-lg transition cursor-pointer"
              whileHover={{ scale: 1.04 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-6">
        <a
          href="https://github.com/PalaniRahulDravid"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1c1c1c] p-4 rounded-full shadow-lg text-[#FFD700] text-3xl hover:bg-[#FFD700] hover:text-black transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/palani-rahul-dravid-a89916292/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1c1c1c] p-4 rounded-full shadow-lg text-[#FFD700] text-3xl hover:bg-blue-500 hover:text-white transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rahuldravidpalani2005@gmail.com"
          className="bg-[#1c1c1c] p-4 rounded-full shadow-lg text-[#FFD700] text-3xl hover:bg-red-400 hover:text-white transition duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}