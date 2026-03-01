import React from "react";
import { motion } from "framer-motion";
import img1 from "../imgs/im1.jpg";
import img2 from "../imgs/pp2.png";
import img3 from "../imgs/pp1.png";
import img4 from "../imgs/pp.png";
import img5 from "../imgs/6im.jpg";
import img6 from "../imgs/1752507510777.jpg";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

const projectsData = [
  {
    id: 1,
    title: "loanLink",
    image: img1,
    shortDesc:
      "LoanLink is a full-stack web application connecting farmers with buyers, providing agricultural info, and facilitating a local farming ecosystem. Built using modern web technologies for robust performance and a smooth user experience.",
    liveLink: "https://lonelink-d3167.web.app/",
    codeLink: "https://github.com/tamjid97/loanlink.git",
    skills: [
      "React",
      "NodeJS",
      "Tailwind",
      "Firebase",
      "HTML",
      "CSS",
      "MongoDB",
      "JavaScript",
    ],
  },
  {
    id: 2,
    title: "AmaderPathshala",
    image: img2,
    shortDesc:
      "Interactive platform to help students easily understand biology concepts like cells, genetics, and ecosystems.",
    liveLink: "https://amaderpathshala-21244.web.app/",
    codeLink: "https://github.com/tamjid97/amader_pathshala.git",
    skills: ["React", "Tailwind", "Firebase", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "KrishiLink",
    image: img3,
    shortDesc:
      "Connecting farmers with buyers, providing agricultural info, and facilitating a local farming ecosystem.",
    liveLink: "https://krishilnk.web.app/",
    codeLink: "https://github.com/tamjid97/Krishilink-clintsite.git",
    skills: [
      "React",
      "NodeJS",
      "Tailwind",
      "Firebase",
      "HTML",
      "CSS",
      "MongoDB",
      "JavaScript",
    ],
  },
  {
    id: 4,
    title: "PetCare",
    image: img4,
    shortDesc:
      "PetCare is a comprehensive full-stack web application that helps pet owners manage, monitor, and care for their pets. Users can track pet health, appointments, and daily activities, all in one intuitive platform. Built using React, Tailwind CSS, and integrated with Firebase for real-time database and authentication.",
    liveLink: "https://eloquent-toffee-a54ed7.netlify.app/",
    codeLink: "https://github.com/tamjid97/assignment-8.git",
    skills: ["Tailwind", "Firebase", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "Fauget",
    image: img5,
    shortDesc:
      "A beautifully designed online showcase of roses. Purely HTML & CSS based, responsive, and perfect for presenting a variety of roses for any occasion.",
    liveLink: "https://tamjid97.github.io/my-second-assignment/",
    codeLink: "https://github.com/tamjid97/my-second-assignment.git",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "dev",
    image: img6,
    shortDesc:
      "A clean and professional HTML & CSS website to display different flowers with modern design and responsive layout.",
    liveLink: "https://tamjid97.github.io/my-first-assignment/",
    codeLink: "https://github.com/tamjid97/my-first-assignment.git",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const skillIcons = {
  React: <FaReact className="text-cyan-400" />,
  NodeJS: <FaNodeJs className="text-green-500" />,
  Tailwind: <SiTailwindcss className="text-blue-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
};

const Projects = () => {
  return (
    <section className="flex flex-col items-center gap-12 p-8 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8 border-b-4 border-purple-500 pb-2 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20 hover:shadow-purple-500/50 transition-shadow duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            <div className="overflow-hidden rounded-t-2xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-purple-300 font-bold text-xl">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.shortDesc}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition"
                  >
                    {skillIcons[skill]} <span>{skill}</span>
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold border border-white/30 hover:bg-white/20 transition"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
