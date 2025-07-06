import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to projects section if on landing page, else navigate to /projects
  const handleViewWork = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("projects");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/projects");
    }
  };

  return (
    <section
      className="py-32 flex items-center justify-center px-4 sm:px-10"
      style={{ backgroundColor: "#000000", color: "#F5F5F5" }}
    >
      <div className="max-w-5xl w-full text-center flex flex-col items-center justify-center">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl xs:text-5xl sm:text-6xl font-extrabold mb-4"
          style={{ color: "#FFD700" }}
        >
          Hi, I'm Rahul 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-lg sm:text-2xl max-w-3xl text-[#F5F5F5] mb-6"
        >
          A passionate Full Stack Web Developer specializing in building modern, responsive, and high-performance websites using React, Node.js, Tailwind CSS, and MongoDB.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="text-sm sm:text-base text-[#C0B283] mb-10"
        >
          Tech Stack: React • Node.js • Express • MongoDB • Tailwind CSS • Git • Vite
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-10">
          <a
            href="/Rahul_Resume.pdf"
            download
            className="text-center w-44 sm:w-auto bg-[#FFD700] text-[#000000] px-4 py-2 sm:px-8 sm:py-3 rounded-lg font-bold text-sm sm:text-xl shadow-lg hover:bg-[#C0B283] hover:text-black transition"
          >
            Download Resume
          </a>
          <button
            type="button"
            onClick={handleViewWork}
            className="text-center w-44 sm:w-auto border-2 border-[#FFD700] px-4 py-2 sm:px-8 sm:py-3 rounded-lg font-bold text-sm sm:text-xl shadow-lg hover:bg-[#C0B283] hover:text-black transition"
          >
            View My Work
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/PalaniRahulDravid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD700] hover:text-[#C0B283] text-3xl transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/palani-rahul-dravid-a89916292/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD700] hover:text-[#C0B283] text-3xl transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:rahuldravidpalani2005@gmail.com"
            className="text-[#FFD700] hover:text-[#C0B283] text-3xl transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
}