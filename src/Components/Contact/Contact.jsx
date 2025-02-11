import React from "react";
import { FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Feel free to reach out to me via phone or social platforms.
        </p>
        <div className="contact-details">
          <a href="tel:9122719509" className="contact-item">
            <FaPhone className="icon" /> <span>+91 91227 19509</span>
          </a>
          <a href="https://www.instagram.com/aniketranjan30/" target="_blank" className="contact-item">
            <FaInstagram className="icon" /> <span>Instagram</span>
          </a>
          <a href="https://linkedin.com/in/aniket-ranjan-093173235" target="_blank" className="contact-item">
            <FaLinkedin className="icon" /> <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
