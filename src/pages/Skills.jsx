import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
];

export default function Skills() {
  return (
    <section
      className="py-32 px-4 sm:px-10"
      style={{ backgroundColor: "#000000", color: "#F5F5F5" }}
    >
      <motion.h2
        className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-[#FFD700] text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 sm:gap-12">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-[#181818] rounded-xl shadow-lg p-6 hover:scale-110 hover:bg-[#222] transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <div className="text-lg font-semibold text-[#FFD700]">{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}