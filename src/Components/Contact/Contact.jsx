import React from "react";
import { FaPhone, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const openMailClient = (e) => {
    e.preventDefault();
    const name = document.getElementById("user_name").value;
    const email = document.getElementById("user_email").value;
    const message = document.getElementById("message").value;

    const subject = `Message from ${name}`;
    const body = `Name: ${name}%0DEmail: ${email}%0D%0DMessage: ${message}`;

    window.location.href = `mailto:aniket.ranjan709@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">

        {/* Form */}
        <form onSubmit={openMailClient} className="contact-card">
          <h1 className="contact-title">Hire Me</h1>
          <p className="contact-subtitle">Fill in the form to reach out</p>

          <input type="text" id="user_name" placeholder="Your Name" required />
          <input type="email" id="user_email" placeholder="Your Email" required />
          <textarea id="message" placeholder="Your Message" required />
          <button type="submit" className="hire-button">Send</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Other Ways to Contact Me</h2>
          <a href="tel:9122719509" className="contact-item">
            <FaPhone className="icon" /> <span>+91 91227 19509</span>
          </a>
          <a href="https://www.instagram.com/aniketranjan30/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaInstagram className="icon" /> <span>Instagram</span>
          </a>
          <a href="https://linkedin.com/in/aniket-ranjan-093173235" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="icon" /> <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
