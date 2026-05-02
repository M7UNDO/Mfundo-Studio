import React, {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import "../styles/Contact.css";

export default function Contact() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Hero section entrance
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

        // Form entrance: subtle scale and lift
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

  return (
    <section className="contact-page" ref={container}>
      <div className="contact-hero">
        <span className="hero-badge">Get in Touch</span>
        <h1 className="hero-title">
          Lets build something <span>meaningful.</span>
        </h1>
        <p className="hero-description">
          Have a project in mind or just want to say hi?<br></br>
          <strong>Drop a message</strong> and I'll get back to you within 24 hours.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form id="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input type="text" id="first_name" placeholder="John" required className="contact-input" />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" id="last_name" placeholder="Doe" required className="contact-input" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="john@example.com" required className="contact-input" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="How can I help you?" required className="contact-input" />
          </div>

          <button type="submit" className="primary-btn">
            Send Message <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
