import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-yellow-400">
          Rahul<span className="text-white">.</span>
        </h1>

        <div className="hidden md:flex space-x-10">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-gray-800 text-white flex flex-col items-center py-4 space-y-4"
        >
          <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
