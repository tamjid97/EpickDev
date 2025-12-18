import React from "react";
import { motion } from "framer-motion";
import img1 from "../imgs/pp1.png";
import img2 from "../imgs/pp2.png";
import img3 from "../imgs/pp.png";

const projectsData = [
  {
    id: 1,
    title: "KrishiLink",
    image: img1,
    shortDesc:
      "Connecting farmers directly with buyers, providing agricultural info, and facilitating a local farming ecosystem.",
    liveLink: "https://krishilnk.web.app/",
  },
  {
    id: 2,
    title: "AmaderPathshala",
    image: img2,
    shortDesc:
      "An interactive platform to help students easily understand and explore biology concepts like cells, genetics, and ecosystems.",
    liveLink: "https://amaderpathshala-21244.web.app/",
  },
  {
    id: 3,
    title: "PetCare",
    image: img3,
    shortDesc:
      "PetCare – Your all-in-one platform to manage, monitor, and care for your beloved pets.",
    liveLink: "https://eloquent-toffee-a54ed7.netlify.app/",
  },
];

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
            className="relative bg-gradient-to-br from-purple-900/30 to-purple-800/40 rounded-2xl shadow-2xl overflow-hidden cursor-pointer perspective"
            whileHover="hover"
          >
            <motion.div
              className="p-4 flex flex-col h-full"
              variants={{
                hover: {
                  rotateY: 10,
                  rotateX: 10,
                  scale: 1.05,
                  transition: { duration: 0.5, type: "spring", stiffness: 120 },
                },
              }}
            >
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="mt-4 flex flex-col flex-1">
                <h3 className="text-purple-300 font-bold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 flex-1">{project.shortDesc}</p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex justify-center items-center w-full px-5 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
