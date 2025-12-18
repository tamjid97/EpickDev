import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      duration: "6-7 Months",
      title: "Coding Journey",
      description: "Continuously learning web development and programming. Practicing new skills daily and expanding knowledge. Will keep learning and improving in the future.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-400 mb-6 border-b-4 border-purple-500 pb-2">
        Experience
      </h2>

      <div className="flex flex-col gap-6 w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-6 border border-purple-500 rounded-xl hover:shadow-lg transition-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex-shrink-0 w-14 h-14 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl">
              <FaLaptopCode />
            </div>
            <div>
              <h3 className="text-purple-300 font-semibold text-lg">{exp.title}</h3>
              <p className="text-pink-400 font-medium mt-1">{exp.duration}</p>
              <p className="text-gray-400 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
