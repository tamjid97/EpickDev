import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Home/Home";
import AboutMe from "../Home/AboutMe";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experience from "../Home/Experience";
import Projects from "../Home/Projects";
import Contact from "../Home/Contact";
import Sertifect from "../Home/Sertifect";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "aboutme",
        Component: AboutMe
      },
      {
        path: "skills",
        Component: Skills
      },
      { 
        path: "projects",
        Component: Projects
      },
      {
        path: "Education",
        Component: Education
      },
      {
        path: "Certification",
        Component: Sertifect
      },
      {
        path: "Exprinc",
        Component: Experience
      },
      {
        path: "contat",
        Component: Contact

      },
    
    ],
  },
]);
