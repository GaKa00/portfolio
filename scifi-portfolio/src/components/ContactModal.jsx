import React from "react";
import "./styles/ContactModal.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="modal-overlay">
      <div className="contact-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="contact-content">
          <h2>Contact</h2>

          <div className="contact-icons">
           <a href="https://www.linkedin.com/in/gabrielkassarp/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
           </a>
           <a href="https://github.com/gaka00" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
           </a>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" placeholder="Name" className="contact-input" />
            <input type="email" placeholder="Email" className="contact-input" />
            <textarea placeholder="Message" className="contact-textarea" />
            <button type="submit" className="contact-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
