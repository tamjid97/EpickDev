import React from "react";
import { motion } from "framer-motion";
import profilePic from "../imgs/ep2.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-60 ml-0 md:ml-25 py-20">
      
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-start text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="text-purple-400">Tamjid Hossain Epick</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl md:text-2xl text-pink-300 mb-6 h-8"
        >
          <Typewriter
            words={["MERN Stack Developer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-gray-300 mb-6 max-w-xl"
        >
          I turn creative ideas into robust, high-performance web applications.
          Let's build something amazing together.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="flex space-x-6 text-4xl text-purple-400"
        >
          <a href="https://github.com/tamjid97" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/epick-hero-codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-white transition-colors" />
          </a>

          <a
            href="https://www.facebook.com/share/1FqQqK6pA7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="hover:text-white transition-colors" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="md:w-1/2 flex justify-center items-center"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-full border-8 border-purple-500 p-1 shadow-2xl"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
