import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import "./Home.css";
import profilePic from "../../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-section"
          whileHover={{ scale: 1.02 }}
        >
          <h1 className="title">
            Hi, I'm Aniket
          </h1>
          <h2 className="subtitle">
            <Typewriter
              words={['Full-Stack Developer', 'C++ Enthusiast', 'Java Specialist', 'Problem Solver']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="description">
            Passionate about crafting scalable web applications with MERN, C++, Java, and SQL.
          </p>
          <motion.button
            className="btn-explore"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore More ↓
          </motion.button>
        </motion.div>

        <motion.div 
          className="image-section"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <img src={profilePic} alt="Aniket" className="profile-image" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
