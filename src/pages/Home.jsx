import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-yellow-400 text-center md:text-left mb-4">
            Hi, I'm Rahul 👋
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300 mb-6 text-center md:text-left">
            Full Stack Developer passionate about building modern, scalable web applications with React, Node.js, and Tailwind CSS. I love solving real-world problems and learning new technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <a
              href="/Rahul_Resume.pdf"
              download
              className="w-full sm:w-auto text-center bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-xl shadow-lg hover:bg-yellow-500 transition"
            >
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="w-full sm:w-auto text-center border-2 border-yellow-400 px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-xl shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              View My Work
            </button>
          </div>
          <div className="flex flex-row items-center justify-center md:justify-start gap-6 mt-4">
            <a
              href="https://github.com/PalaniRahulDravid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-white text-3xl transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/palani-rahul-dravid-a89916292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-blue-500 text-3xl transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rahuldravidpalani2005@gmail.com"
              className="text-yellow-400 hover:text-red-400 text-3xl transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center md:justify-end order-1 md:order-2 mt-8 md:mt-0"
        >
          <div className="relative w-48 xs:w-56 sm:w-80 h-48 xs:h-56 sm:h-80 flex items-center justify-center md:ml-10">
            <div className="absolute w-52 xs:w-64 sm:w-96 h-52 xs:h-64 sm:h-96 bg-yellow-400 rounded-full opacity-25 animate-pulse"></div>
            <img
              src="/profile.png"
              alt="Rahul's Profile"
              className="w-40 xs:w-48 sm:w-72 h-40 xs:h-48 sm:h-72 object-cover rounded-full border-4 border-yellow-400 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}