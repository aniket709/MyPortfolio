
import React from "react";
import "./Project.css";

const Projects = () => {
  const projectData = [
    {
      title: "Social Media Video Downloader",
      description:
        "Developed a video downloader using Node.js, Express, and React.js, enabling users to download videos from platforms like Instagram and Facebook with a user-friendly interface.",
    },
    {
      title: "Video Streaming App",
      description:
        "Created a full-stack video streaming platform using Node.js, Express, and MongoDB, supporting user authentication, video uploads, and seamless video playback.",
    },
    {
      title: "Chat Application",
      description:
        "Built a real-time chat application using Spring Boot, React, and WebSocket, allowing instant messaging with secure session handling and responsive UI.",
    },
    {
      title: "Operating System Algorithm Analyzer",
      description:
        "Designed and implemented an OS Algorithm Analyzer using C++ and Data Structures to visualize and compare the efficiency of various process scheduling algorithms.",
    },
    {
      title: "Employee Management System",
      description:
        "Developed a comprehensive Employee Management System using Java, Spring Boot, and React.js to streamline employee data handling, role management, and workflow automation.",
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
