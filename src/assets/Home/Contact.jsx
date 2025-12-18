import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-400 mb-6 border-b-4 border-purple-500 pb-2">
        Get In Touch
      </h2>

      <div className="w-full border border-purple-500 rounded-xl p-6 flex flex-col gap-4">
        <h3 className="text-purple-300 font-semibold text-xl">Contact Information</h3>
        <p className="text-gray-300">
          Have a project in mind or just want to say hello? Feel free to reach out to me! I'm always open to new opportunities and collaborations.
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2 text-gray-300">
            <MdEmail className="text-purple-400 text-lg" />
            <span>epickhossain970@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MdPhone className="text-purple-400 text-lg" />
            <span>01339613197</span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-300 font-medium mb-2">Connect with me:</p>
          <div className="flex gap-4">
            <a href="https://github.com/tamjid97" target="_blank" rel="noopener noreferrer" className="text-purple-400 border border-purple-400 p-2 rounded-full hover:bg-purple-400 hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/epick-hero-codes" target="_blank" rel="noopener noreferrer" className="text-purple-400 border border-purple-400 p-2 rounded-full hover:bg-purple-400 hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1FqQqK6pA7/" target="_blank" rel="noopener noreferrer" className="text-purple-400 border border-purple-400 p-2 rounded-full hover:bg-purple-400 hover:text-white transition">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
