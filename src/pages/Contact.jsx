import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <span className="hero-badge">Get in Touch</span>
        <h1 className="hero-title">Let’s build something <span>meaningful.</span></h1>
        <p className="hero-description">
          Have a project in mind or just want to say hi? <strong>Drop a message</strong> and I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form id="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" placeholder="John" required />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" placeholder="Doe" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="How can I help you?" required />
          </div>

          <button type="submit" className="primary-btn">
            Send Message <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
