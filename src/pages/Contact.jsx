import React, {useRef, useState} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import "../styles/Contact.css";

export default function Contact() {
  const container = useRef();
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState("");

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-badge", {opacity: 0, y: 20, duration: 0.6})
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.5",
        )
        .from(
          ".contact-form-wrapper",
          {
            opacity: 0,
            y: 40,
            scale: 0.98,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.4",
        )
        .from(
          ".form-group",
          {
            opacity: 0,
            y: 15,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.6",
        )
        .fromTo(".primary-btn", {opacity: 0, scale: 0.9}, {opacity: 1, scale: 1, duration: 0.4}, "-=0.4");
    },
    {scope: container},
  );

  const validateForm = (formData) => {
    const validationErrors = {};

    const firstName = formData.get("first_name")?.trim();
    const lastName = formData.get("last_name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || firstName.length < 2) {
      validationErrors.first_name = "First name must be at least 2 characters.";
    }

    if (!lastName || lastName.length < 2) {
      validationErrors.last_name = "Last name must be at least 2 characters.";
    }

    if (!email || !emailRegex.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!message || message.length < 20) {
      validationErrors.message = "Message must be at least 20 characters.";
    } else if (message.length > 1500) {
      validationErrors.message = "Message must be less than 1500 characters.";
    }

    return validationErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const validationErrors = validateForm(formData);

    setErrors(validationErrors);
    setResult("");

    if (Object.keys(validationErrors).length > 0) return;

    setResult("Sending...");

    formData.append("access_key", "05f70f72-86b2-450a-a9d4-1992cbadb979");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully.");
        setErrors({});
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    }
  };

  return (
    <section className="contact-page" ref={container}>
      <div className="contact-hero">
        <span className="hero-badge">Get in Touch</span>
        <h1 className="hero-title">
          Lets build something <span>meaningful.</span>
        </h1>
        <p className="hero-description">
          Have a project in mind or just want to say hi?
          <br />
          <strong>Drop a message</strong> and I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form id="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="John"
                className="contact-input"
              />
              {errors.first_name && <span className="error-message">{errors.first_name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Doe"
                className="contact-input"
              />
              {errors.last_name && <span className="error-message">{errors.last_name}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className="contact-input"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can I help you?"
              className="contact-input"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="primary-btn" disabled={result === "Sending..."}>
            {result === "Sending..." ? "Sending..." : "Send Message"}
            <i className="fa-solid fa-paper-plane"></i>
          </button>

          {result && <span className="form-status">{result}</span>}
        </form>
      </div>
    </section>
  );
}