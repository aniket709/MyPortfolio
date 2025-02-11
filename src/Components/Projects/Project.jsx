import React from "react";
import "./Project.css";

const Projects = () => {
  const projectData = [
    {
      title: "Employee Management System",
      description:
        "Developed a comprehensive Employee Management System using Java, Spring Boot, and React.js to streamline employee data handling, role management, and workflow automation.",
    },
    {
      title: "Operating System Algorithm Analyzer",
      description:
        "Designed and implemented an OS Algorithm Analyzer using C++ and Data Structures to visualize and compare the efficiency of various process scheduling algorithms.",
    },
    {
      title: "Email Generator",
      description:
        "Built an automated email generation system leveraging Java, Spring Boot, and Spring API, enabling efficient and customizable email creation for enterprises.",
    },
    {
      title: "NFC Paper – Published at IEEE",
      description:
        "Authored and published a research paper on Near Field Communication (NFC) at IEEE, highlighting its applications, security aspects, and real-world implementation challenges.",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
