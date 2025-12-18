import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion"; // Animation জন্য

const Education = () => {
  const educations = [
    {
      title: "Complete Web Development",
      institute: "Programming Hero",
      year: "2025 - Present",
      description: "Learned full-stack web development including React, Node.js, and more.",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institute: "Bangladesh Navy School and College, Khulna",
      year: "2025 - Present",
      description: "Currently studying first year Science subjects. Continuously learning and improving skills.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-400 mb-6 border-b-4 border-purple-500 pb-2">
        Educational Qualification
      </h2>

      <div className="flex flex-col gap-6 w-full">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-5 border border-purple-500 rounded-xl hover:shadow-lg transition-shadow"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg">
              <FaGraduationCap />
            </div>
            <div>
              <h3 className="text-purple-300 font-semibold text-lg">{edu.title}</h3>
              <p className="text-gray-300">{edu.institute}</p>
              <p className="text-pink-400 font-medium">{edu.year}</p>
              <p className="text-gray-400 mt-1">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
