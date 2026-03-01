import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    const subject = `Message from ${name}`;
    const body = message;
    const mailtoLink = `mailto:epickhossain970@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");

    setName("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-5xl bg-white/10 dark:bg-black/30 backdrop-blur-lg border border-purple-500/40 rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-purple-400 border-b-4 border-purple-500 pb-2 w-fit">
            Let’s Work Together
          </h2>

          <p className="text-gray-300">
            Have a project idea or want to collaborate?  
            Reach me via WhatsApp or Email.
          </p>

          <div className="flex flex-col gap-3 mt-4 text-gray-300">
            <div className="flex items-center gap-3">
              <MdEmail className="text-purple-400 text-xl" />
              <span>epickhossain970@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MdPhone className="text-purple-400 text-xl" />
              <span>+880 1339-613197</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/epick32851" target="_blank" rel="noreferrer"
              className="p-3 border border-purple-400 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
              className="p-3 border border-purple-400 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition">
              <FaLinkedin />
            </a>

            <a href="https://facebook.com/" target="_blank" rel="noreferrer"
              className="p-3 border border-purple-400 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition">
              <FaFacebook />
            </a>
          </div>

          {/* Direct WhatsApp CTA */}
          <a
            href="https://wa.me/8801339613197"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition shadow-lg"
          >
            <FaWhatsapp />
            Chat Directly on WhatsApp
          </a>
        </div>

        {/* Right Side - Email Form */}
        <form
          onSubmit={handleEmailSubmit}
          className="flex flex-col gap-6 bg-black/20 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-purple-300">
            Send Me a Message via Email
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Write your message..."
            required
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition shadow-lg flex items-center justify-center gap-2"
          >
            <FaEnvelope />
            Send via Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;