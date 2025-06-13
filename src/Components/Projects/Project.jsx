
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
      title: "Personal Blog ",
      description:
        "Build a blogging platform for writing blog post added authentication to it tech stack used is Express,React.",
    },
    {
      title: "Ani Drive",
      description:
        "My own custamizable drive used to upload files,folder and other media tech stack used is Express,mongodb,cloudinary.",
    },
    {
      title: "Authentication system ",
      description:
        "Built an authentication system using Express used package like bcrypt jwt and also used node-mailer to send the mail.",
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
