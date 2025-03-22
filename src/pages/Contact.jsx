import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-10">
      <motion.h2
        className="text-6xl font-extrabold text-yellow-400 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-2xl shadow-lg">
        {submitted ? (
          <motion.p
            className="text-xl text-green-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you! I'll get back to you soon. ✅
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="p-4 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <motion.button
              type="submit"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </div>

      <div className="mt-12 flex justify-center space-x-6">
        <a
          href="https://github.com/PalaniRahulDravid"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 text-3xl hover:text-yellow-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/palani-rahul-dravid-a89916292/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 text-3xl hover:text-yellow-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rahuldravidpalani2005@gmail.com"
          className="text-yellow-400 text-3xl hover:text-yellow-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
