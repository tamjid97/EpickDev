import React from "react";
import { motion } from "framer-motion";

const MYJourney = () => {
  return (
    <section className=" flex items-center justify-center px-5 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-5xl w-full"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-purple-400 mb-8 inline-block border-b-4 border-purple-500 pb-2"
        >
          About My Journey
        </motion.h2>

        {/* Card */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative rounded-2xl border border-purple-500/30 bg-white/5 backdrop-blur-xl p-6 md:p-10 text-gray-200 shadow-xl"
        >
          {/* Intro */}
          <p className="leading-relaxed text-base md:text-lg mb-6">
            I am <span className="text-purple-400 font-semibold">
              S M Tamjid Hossain Epick
            </span>
            , a passionate MERN Stack Developer. I approach my work with a
            detail-oriented mindset and am committed to building robust,
            functional, and scalable web applications.
          </p>

          {/* Programming Journey */}
          <div className="border-l-4 border-purple-500 pl-5 mb-6">
            <p className="italic text-gray-300 leading-relaxed">
              <span className="text-purple-400 font-semibold">
                My Programming Journey:
              </span>{" "}
              My development journey started with Programming Hero. I began
              working with HTML and CSS and gradually mastered the full MERN
              stack (MongoDB, Express, React, Node.js). I may learn slowly, but
              my patience ensures deep understanding and high-quality results.
            </p>
          </div>

          {/* Outside of Code */}
          <p className="leading-relaxed text-base md:text-lg mb-10">
            <span className="text-purple-400 font-semibold">
              Outside of Code:
            </span>{" "}
            I enjoy gardening. These creative pursuits sharpen my
            patience, focus, and attention to detail—qualities I bring into
            every line of code I write.
          </p>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-pink-400 font-semibold flex items-center gap-2"
          >
            Ready to collaborate?
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MYJourney;
