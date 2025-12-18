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
    <motion.div
      className="min-h-screen w-full relative overflow-hidden"
      variants={bgVariants}
      animate="animate"
    >
      <SnowfallEffect />
      <Particle />

      {/* Navbar overlay */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Page content */}
      <div className="pt-16"> {/* Navbar height spacing */}
        <Outlet />
      </div>

      <Footer />
    </motion.div>
  );
};

export default HomeLayout;
