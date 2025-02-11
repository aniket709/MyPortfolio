import React from "react";
import "../Main/Main.css";
import "../Projects/Project.css";
import "../About/About.css";
import "../Contact/Contact.css";
import "../Home/Home.css";
import About from "../About/About";
import Projects from "../Projects/Project";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

const Main = () => {
  return (
    <div className="main-container">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
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

export default Main;
