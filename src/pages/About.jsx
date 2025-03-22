import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-80 h-80 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-96 h-96 bg-yellow-400 rounded-full opacity-25 animate-pulse"
            ></motion.div>
            
            <motion.img
              src="/profile.png"
              alt="Rahul's Profile"
              className="w-72 h-72 object-cover rounded-full border-4 border-yellow-400 shadow-2xl"
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

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl font-extrabold text-yellow-400">About Me</h2>
          <p className="text-2xl mt-4 text-gray-300 leading-relaxed">
            I am a <span className="text-yellow-400">problem solver</span> who enjoys crafting <span className="text-yellow-400">efficient, scalable, and dynamic web applications</span>.
          </p>
          <p className="mt-3 text-gray-400 text-lg">
            Passionate about learning new technologies and bringing ideas to life through code. Always striving for <span className="text-yellow-400">clean, maintainable, and high-performance applications</span>.
          </p>

          <div className="mt-6 flex space-x-6">
            <a href="https://github.com/PalaniRahulDravid" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-4xl transition duration-300">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/palani-rahul-dravid-a89916292/" target="_blank" rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-4xl transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://x.com/rahulprince2526?t=13eWwpLeLtpNofPCAtO__A&s=09" target="_blank" rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-4xl transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://leetcode.com/u/palani_rahul_dravid/" target="_blank" rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 text-4xl transition duration-300">
              <FaCode />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
