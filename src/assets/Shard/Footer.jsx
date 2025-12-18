// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-6 mt-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-2">
        <p className="text-sm md:text-base text-center">
          © 2025 Tamjid Hossain Epick. All rights reserved.
        </p>
        <p className="text-sm md:text-base text-center flex flex-wrap justify-center gap-4">
          React | Tailwind CSS | Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
