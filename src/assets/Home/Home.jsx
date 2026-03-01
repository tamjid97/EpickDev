// src/Home/Home.jsx
import React from "react";
import Contact from "./Contact";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import MYJourney from "../../pages/MYjurny";
import Sertifect from "./Sertifect";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <section id="aboutme">
        <AboutMe />
      </section>

      <section id="myjourney">
        <MYJourney />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="sertifect">
        <Sertifect/>
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
