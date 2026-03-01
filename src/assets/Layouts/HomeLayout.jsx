import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Shard/Navbar";
import Footer from "../Shard/Footer";
import { motion } from "framer-motion";
import Particle from "../../pages/Particle";
import SnowfallEffect from "../../pages/Snowfall";

const HomeLayout = () => {
  const bgVariants = {
    animate: {
      background: [
        "linear-gradient(135deg, #1f2937, #4c1d95)",
        "linear-gradient(135deg, #4c1d95, #9333ea)",
        "linear-gradient(135deg, #9333ea, #1f2937)",
      ],
      transition: { duration: 15, repeat: Infinity, repeatType: "mirror" },
    },
  };

  return (
 <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 bg-animated">
  <Navbar />
  <Outlet />
  <Footer />
</div>
  );
};

export default HomeLayout;