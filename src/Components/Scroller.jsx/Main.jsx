// Main.jsx (like a landing layout)
import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Project";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Main;
