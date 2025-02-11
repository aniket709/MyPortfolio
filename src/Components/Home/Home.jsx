import React from "react";
import "./Home.css";
import profilePic from "../../assets/profile.jpg"; // Add your photo in the assets folder

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="text-section">
          <h1 className="title">Hi, I'm Aniket</h1>
          <p className="description">
            A passionate software developer specializing in C++, Java, SQL, and Web Development. 
            I love solving complex problems and building scalable solutions.
          </p>
         
        </div>
        <div className="image-section">
          <img src={profilePic} alt="Aniket" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
