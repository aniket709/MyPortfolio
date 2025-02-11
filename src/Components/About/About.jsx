import React from "react";
import "./About.css";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        {/* About Text Content */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            As a  Software Developer, my USP lies in my ability to design
            and develop high-performance, scalable, and efficient solutions
            by combining strong algorithmic thinking, backend expertise, and problem-solving skills.
          </p>
          <p>
            My deep understanding of data structures and system architecture
            enables me to build optimized applications that tackle real-world
            challenges effectively.
          </p>

          {/* Unique Selling Points */}
          <div className="usp">
            <h3>What Sets Me Apart:</h3>
            <ul>
              <li>
                <FaCheckCircle className="icon" />
                <strong> Problem-Solving Mindset: </strong>   Expertise in DSA & Algorithm Optimization.
              </li>
              <li>
                <FaCheckCircle className="icon" />
                <strong> Backend Development: </strong>   Proficient in Spring Boot, Java, SQL, APIs.
              </li>
              <li>
                <FaCheckCircle className="icon" />
                <strong> Full-Stack Capabilities: </strong>   Hands-on experience in  React.js, JavaScript.
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            <h3>My Tech Stack:</h3>
            <div className="skills">
              <span>🔹 C++</span>
              <span>🔹 Java</span>
              <span>🔹 Python</span>
              <span>🔹 SQL</span>
              <span>🔹 Spring Boot</span>
              <span>🔹 Hibernate</span>
              <span>🔹 REST APIs</span>
              <span>🔹 React.js</span>
              <span>🔹 JavaScript</span>
              <span>🔹 MySQL</span>
              <span>🔹 PostgreSQL</span>
              <span>🔹 AWS (Exploring)</span>
              <span>🔹 Docker (Exploring)</span>
              <span>🔹 OpenCV</span>
              <span>🔹 Git & CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
