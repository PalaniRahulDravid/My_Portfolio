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
        await axios.post("http://localhost:5000/api/contact", formData);
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
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-10 flex flex-col justify-center">
      <motion.h2
        className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-yellow-400 text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-3xl mx-auto w-full bg-gray-800 p-4 xs:p-6 sm:p-10 rounded-2xl shadow-lg">
        {submitted ? (
          <motion.p
            className="text-xl text-green-400 text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you! I'll get back to you soon. ✅
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 xs:gap-6">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-gray-400 resize-none"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>
            {errors.api && (
              <p className="text-red-500 text-center">{errors.api}</p>
            )}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-400 shadow-lg transition cursor-pointer"
              whileHover={{ scale: 1.04 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>

      <div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-6">
        <a
          href="https://github.com/PalaniRahulDravid"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-4 rounded-full shadow-lg text-yellow-400 text-3xl hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/palani-rahul-dravid-a89916292/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-4 rounded-full shadow-lg text-yellow-400 text-3xl hover:bg-blue-500 hover:text-white transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rahuldravidpalani2005@gmail.com"
          className="bg-gray-800 p-4 rounded-full shadow-lg text-yellow-400 text-3xl hover:bg-red-400 hover:text-white transition duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}