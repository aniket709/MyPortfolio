import React from "react";
import "./About.css";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          As a Software Developer, I specialize in crafting scalable,
          high-performance systems by combining backend development skills
          with deep algorithmic thinking and clean architecture design.
        </p>
        <p>
          My focus lies in delivering optimized solutions that solve
          real-world problems using modern technologies and engineering best practices.
        </p>

        {/* Unique Selling Points */}
        <div className="usp">
          <h3>What Sets Me Apart:</h3>
          <ul>
            <li>
              <FaCheckCircle className="icon" />
              <strong>Problem-Solving Mindset:</strong> Expertise in DSA and scalable architecture.
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <strong>Backend Excellence:</strong> Node.js, Express, PostgreSQL, Prisma.
            </li>
            <li>
              <FaCheckCircle className="icon" />
              <strong>Full-Stack Experience:</strong> React.js, Next.js, TypeScript.
            </li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="tech-stack">
          <h3>My Tech Stack:</h3>
          <div className="skills">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>Prisma</span>
            <span>REST APIs</span>
            <span>Docker</span>
            <span>WebRTC</span>
            <span>Monorepo</span>
            <span>Serverless</span>
            <span>CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
