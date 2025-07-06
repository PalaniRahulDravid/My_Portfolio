import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "home", path: "/home" },
    { name: "About", id: "about", path: "/about" },
    { name: "Skills", id: "skills", path: "/skills" },
    { name: "Projects", id: "projects", path: "/projects" },
    { name: "Contact", id: "contact", path: "/contact" },
  ];

  const handleNav = (id, path) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    } else {
      navigate(path);
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-[#FFD700] drop-shadow-lg">
          Rahul<span className="text-white"></span>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.id, link.path)}
              className={`font-semibold text-lg transition-all duration-200 bg-transparent border-none outline-none ${
                location.pathname === link.path
                  ? "text-[#FFD700] border-b-2 border-[#FFD700]"
                  : "text-[#F5F5F5] hover:text-[#FFD700]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#FFD700]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden bg-[#111111]/95 text-white flex flex-col items-center py-4 space-y-4 shadow-lg"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNav(link.id, link.path)}
              className={`font-semibold text-lg bg-transparent border-none outline-none ${
                location.pathname === link.path
                  ? "text-[#FFD700]"
                  : "text-[#F5F5F5] hover:text-[#FFD700]"
              }`}
            >
              {link.name}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}