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
    <section className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-10">
      <motion.h2
        className="text-4xl xs:text-5xl sm:text-6xl font-extrabold text-yellow-400 text-center mb-8 sm:mb-12"
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
            className="relative bg-gray-800 p-4 xs:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 hover:border-yellow-400 border-2 border-transparent cursor-pointer flex flex-col"
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
            <h3 className="text-2xl xs:text-3xl font-bold text-yellow-400 mt-4 text-center md:text-left">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2 text-center md:text-left">{project.description}</p>
            <div className="mt-4 flex flex-col xs:flex-row gap-3 xs:gap-4 items-center xs:items-start justify-center md:justify-start">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto inline-flex items-center justify-center space-x-2 text-yellow-400 hover:text-yellow-500 text-base xs:text-lg font-semibold border border-yellow-400 rounded-lg px-4 py-2 transition"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full xs:w-auto inline-flex items-center justify-center space-x-2 text-green-400 hover:text-green-500 text-base xs:text-lg font-semibold border border-green-400 rounded-lg px-4 py-2 transition"
                >
                  <BiLinkExternal />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}