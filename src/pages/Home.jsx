import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold text-yellow-400">
            Hi, I'm Rahul 👋
          </h1>
          <p className="text-2xl mt-4 text-gray-300 leading-relaxed">
            A passionate <span className="text-yellow-400">Full Stack Developer</span> 🚀
          </p>
          <p className="mt-3 text-gray-400 text-lg">
            I build interactive, responsive, and user-friendly web applications.
          </p>
          <div className="mt-8 space-x-6">
            <a
              href="#projects"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold text-xl shadow-lg hover:bg-yellow-500 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-yellow-400 px-8 py-3 rounded-lg font-bold text-xl shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 flex items-center justify-center md:ml-10">
            <div className="absolute w-96 h-96 bg-yellow-400 rounded-full opacity-25 animate-pulse"></div>
            <img
              src="/profile.png"
              alt="Rahul's Profile"
              className="w-72 h-72 object-cover rounded-full border-4 border-yellow-400 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
