// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const menuItems = [
    { name: "About Me", href: "#aboutme" },
    { name: "My Journey", href: "#myjourney" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certification", href: "#sertifect" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/30 text-black dark:text-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

        {/* Logo */}
        <div className="text-2xl font-bold text-purple-500">
          Epick.Dev
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="px-3 py-1 rounded-md hover:bg-purple-500/20 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-purple-400 hover:bg-purple-500/20 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </ul>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-purple-400 hover:bg-purple-500/20 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-purple-500/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white/20 dark:bg-black/40 backdrop-blur-lg text-black dark:text-white px-6 py-4 space-y-2 rounded-b-lg shadow-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block px-3 py-2 rounded-md hover:bg-purple-500/20 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;