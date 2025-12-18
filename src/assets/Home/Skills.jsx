import React from "react";
import { motion } from "framer-motion";

// Frontend
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiSwiper,
} from "react-icons/si";

// Backend
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

// Database & Tools
import {
  SiMongodb,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import {
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
} from "react-icons/fa";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const SkillItem = ({ icon, name }) => (
  <motion.div
    variants={item}
    whileHover={{ scale: 1.08 }}
    className="flex items-center gap-3 px-4 py-2 rounded-xl
               bg-white/5 hover:bg-purple-500/10
               border border-white/10 hover:border-purple-400/40
               transition"
  >
    <span className="text-xl text-purple-400">{icon}</span>
    <span className="text-sm font-medium text-gray-200">{name}</span>
  </motion.div>
);

const SkillCard = ({ title, children }) => (
  <motion.div
    variants={item}
    className="bg-white/5 backdrop-blur-xl
               border border-purple-500/20
               rounded-3xl p-6 shadow-2xl"
  >
    <h3 className="text-xl font-semibold mb-5 text-purple-300">
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-3">
      {children}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-28 px-6 md:px-32 text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-20"
      >
        Technical <span className="text-purple-400">Skills</span>
      </motion.h2>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Frontend */}
        <SkillCard title="Frontend Development">
          <SkillItem icon={<FaReact />} name="React" />
          <SkillItem icon={<SiNextdotjs />} name="Next.js" />
          <SkillItem icon={<FaJs />} name="JavaScript (ES6+)" />
          <SkillItem icon={<FaHtml5 />} name="HTML5" />
          <SkillItem icon={<FaCss3Alt />} name="CSS3" />
          <SkillItem icon={<SiTailwindcss />} name="Tailwind CSS" />
          <SkillItem icon={<SiFramer />} name="Framer Motion" />
          <SkillItem icon={<SiSwiper />} name="Swiper JS" />
        </SkillCard>

        {/* Backend */}
        <SkillCard title="Backend Development">
          <SkillItem icon={<FaNodeJs />} name="Node.js" />
          <SkillItem icon={<SiFirebase />} name="Firebase" />
        </SkillCard>

        {/* Database & Tools */}
        <SkillCard title="Database & Tools">
          <SkillItem icon={<SiMongodb />} name="MongoDB" />
          <SkillItem icon={<FaGitAlt />} name="Git" />
          <SkillItem icon={<FaGithub />} name="GitHub" />
          <SkillItem icon={<FaFigma />} name="Figma" />
          <SkillItem icon={<FaCode />} name="VS Code" />
          <SkillItem icon={<SiVercel />} name="Vercel" />
          <SkillItem icon={<SiNetlify />} name="Netlify" />
        </SkillCard>
      </motion.div>
    </section>
  );
};

export default Skills;
