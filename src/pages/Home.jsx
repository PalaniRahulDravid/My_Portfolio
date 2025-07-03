import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 text-white px-4 sm:px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-6xl font-extrabold text-yellow-400 text-center md:text-left">
            Hi, I'm Rahul 👋
          </h1>
          <p className="text-base xs:text-lg sm:text-2xl mt-4 text-gray-300 leading-relaxed text-center md:text-left">
            A passionate <span className="text-yellow-400">Full Stack Developer</span> 🚀
          </p>
          <p className="mt-3 text-gray-400 text-sm xs:text-base sm:text-lg text-center md:text-left">
            I build interactive, responsive, and user-friendly web applications.
          </p>
          <div className="mt-8 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="projects"
              className="w-full sm:w-auto text-center bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-xl shadow-lg hover:bg-yellow-500 transition"
            >
              View My Work
            </a>
            <a
              href="contact"
              className="w-full sm:w-auto text-center border-2 border-yellow-400 px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-xl shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

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