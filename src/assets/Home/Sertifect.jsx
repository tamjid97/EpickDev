import React from "react";
import { motion } from "framer-motion";
import cert1 from "../imgs/WhatsApp Image 2026-03-02 at 1.32.30 AM.jpeg";

const certificates = [
  {
    id: 1,
    title: "Complete Web Development",
    issuer: "Programming Hero",
    year: "2025",
    image: cert1,
  },
];

const Sertifect = () => {
  return (
    <section className="py-28 px-6 md:px-20 text-white">
      
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Qualification &{" "}
          <span className="text-purple-400">Certification</span>
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Certificate Card */}
      <div className="flex justify-center">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="max-w-4xl w-full bg-white/5 backdrop-blur-xl 
                       border border-purple-500/20 
                       rounded-3xl shadow-lg p-6 md:p-10"
          >
            
            {/* Title */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-purple-300">
                {cert.title}
              </h3>
              <p className="text-gray-400 mt-2">
                Issued by: {cert.issuer} | {cert.year}
              </p>
            </div>

            {/* Full Image */}
            <div className="overflow-hidden rounded-2xl border border-purple-500/10 shadow-md">
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full object-contain rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sertifect;
