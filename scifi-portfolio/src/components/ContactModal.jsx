import React, { useState, useRef } from "react";
import "./styles/ContactModal.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactModal({ onClose }) {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        "service_zb5ze33",
        "template_u1ulqdv",
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "ZAIUjy3_ROFSCibjA"
      );

      setStatus({
        type: "success",
        message: "Email sent successfully! I will get back to you ASAP!",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="contact-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="contact-content">
          <h2>Contact</h2>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}

          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/gabrielkassarp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-icon" />
            </a>
            <a
              href="https://github.com/gaka00"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-icon" />
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="contact-textarea"
              required
            />
            <button type="submit" className="contact-button" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
