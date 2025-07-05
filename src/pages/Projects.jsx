import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const projects = [
  {
    title: "Funny ChatBot",
    description:
      "A simple chatbot using HTML, CSS, and Node.js that provides dummy responses.",
    github: "https://github.com/PalaniRahulDravid/Funny-ChatBot",
    live: "https://palanirahuldravid.github.io/Funny-ChatBot/",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/512/294/non_2x/funny-chatbot-online-help-customer-assistant-bot-vector.jpg"
  },
  {
    title: "Admin Dashboard",
    description:
      "A neat dummy admin dashboard with bar charts using HTML, CSS, and JavaScript.",
    github: "https://github.com/PalaniRahulDravid/Responsive-Dashboard",
    live: "https://palanirahuldravid.github.io/Responsive-Dashboard/",
    image:
      "https://multipurposethemes.com/wp-content/uploads/2021/03/Dark-LTR-Master-Admin-Templates.png",
  },
  {
    title: "Travel Website",
    description:
      "A visually appealing travel website built with HTML and CSS, but not responsive yet.",
    github: "https://github.com/PalaniRahulDravid/Travel-Website-Using-HTML-CSS",
    live: "https://palanirahuldravid.github.io/Travel-Website-Using-HTML-CSS/",
    image:
      "https://content-whale.com/blog/wp-content/uploads/2023/11/Compelling-Narrative-for-Travel-Website-Content--1024x576.jpg",
  },
  {
    title: "Sentiment Analysis App",
    description:
      "A React + Vite project using Tailwind CSS that analyzes sentiment based on dummy JSON data.",
    github: "https://github.com/PalaniRahulDravid/sentiment-analysis",
    image:
      "https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2021/06/sentimentanalysishotelgeneric-2048x803-1.jpg",
  },
];

export default function Projects() {
  return (
    <section
      className="min-h-screen py-20 px-4 sm:px-10"
      style={{ backgroundColor: "#000000", color: "#F5F5F5" }}
    >
      <motion.h2
        className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-[#FFD700] text-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-[#0f0f0f] p-4 xs:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:border-[#FFD700] border-2 border-transparent cursor-pointer flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-40 xs:h-48 object-cover rounded-lg transition duration-500 filter blur-sm hover:blur-none"
              />
            </div>

            <h3 className="text-2xl xs:text-3xl font-bold text-[#FFD700] mt-4 text-center md:text-left">
              {project.title}
            </h3>
            <p className="text-[#C0B283] mt-2 text-center md:text-left">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm xs:text-base font-medium px-4 py-2 rounded-md border border-[#FFD700] text-[#FFD700] hover:text-[#000000] hover:bg-[#FFD700] transition duration-300"
              >
                <FaGithub className="text-base" />
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm xs:text-base font-medium px-4 py-2 rounded-md border border-green-400 text-green-400 hover:text-[#000000] hover:bg-green-400 transition duration-300"
                >
                  <BiLinkExternal className="text-base" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}