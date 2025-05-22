import React from "react";
import "./styles/ContactModal.css";

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
            {/* <LinkedinIcon />
            <GithubIcon /> */}
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
