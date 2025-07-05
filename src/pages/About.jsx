import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "Figma",
];

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-10" style={{ backgroundColor: "#000000", color: "#F5F5F5" }}>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center md:justify-start mt-8 md:mt-0"
        >
          <div className="relative w-48 xs:w-56 sm:w-80 h-48 xs:h-56 sm:h-80 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-52 xs:w-64 sm:w-96 h-52 xs:h-64 sm:h-96 bg-[#FFD700] rounded-full opacity-20 animate-pulse"
            ></motion.div>
            <motion.img
              src="/profile.png"
              alt="Rahul's Profile"
              className="w-40 xs:w-48 sm:w-72 h-40 xs:h-48 sm:h-72 object-cover rounded-full border-4 border-[#FFD700] shadow-2xl"
              animate={{
                rotate: [0, 2, -2, 0],
                boxShadow: [
                  "0px 0px 10px rgba(255, 215, 0, 0.5)",
                  "0px 0px 20px rgba(255, 215, 0, 0.8)",
                  "0px 0px 10px rgba(255, 215, 0, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFD700] text-center md:text-left">
            About Me
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mt-4 leading-relaxed text-center md:text-left">
            Hi! I'm Rahul, a <span className="text-[#FFD700]">Full Stack Developer</span> passionate about building beautiful, scalable, and efficient web applications.
          </p>
          <p className="mt-3 text-[#C0B283] text-base sm:text-lg text-center md:text-left">
            I love learning new technologies and turning ideas into reality through code. My focus is on writing clean, maintainable, and high-performance applications that make a difference.
          </p>

          {/* Skills */}
          <div className="mb-6 mt-6">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2 text-center md:text-left">Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#FFD700]/20 text-[#FFD700] px-3 py-1 rounded-full font-semibold text-xs xs:text-sm shadow hover:bg-[#FFD700]/30 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 justify-center md:justify-start">
            <a
              href="https://github.com/PalaniRahulDravid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#C0B283] text-2xl xs:text-3xl md:text-4xl transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/palani-rahul-dravid-a89916292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#C0B283] text-2xl xs:text-3xl md:text-4xl transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/rahulprince2526?t=13eWwpLeLtpNofPCAtO__A&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#C0B283] text-2xl xs:text-3xl md:text-4xl transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://leetcode.com/u/palani_rahul_dravid/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#C0B283] text-2xl xs:text-3xl md:text-4xl transition duration-300"
              aria-label="LeetCode"
            >
              <FaCode />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}