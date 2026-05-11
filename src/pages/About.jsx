import React, {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "../styles/About.css";
import profileImg from "../assets/profile/M7UNDO_Pfp.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });

      // =========================
      // HERO / INTRO
      // =========================

      tl.fromTo(
        ".about-badge",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
      )
        .fromTo(
          ".about-title",
          {
            opacity: 0,
            y: 34,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.35",
        )
        .fromTo(
          ".bio-text p",
          {
            opacity: 0,
            x: -24,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.18,
            duration: 0.8,
          },
          "-=0.45",
        )
        .fromTo(
          ".bio-text blockquote",
          {
            opacity: 0,
            y: 24,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
          },
          "-=0.25",
        )
        .fromTo(
          ".profile",
          {
            opacity: 0,
            x: 40,
            scale: 0.96,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=1",
        )

        // =========================
        // EXPERIENCE SECTION
        // =========================

        .fromTo(
          ".experience-grid .section-label",
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.15",
        )

        .fromTo(
          ".experience-card",
          {
            opacity: 0,
            y: 32,
            scale: 0.98,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.14,
            duration: 0.75,
          },
          "-=0.2",
        )

        // =========================
        // SKILLS SECTION
        // =========================

        .fromTo(
          ".skills-column .section-label",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.2",
        )

        .fromTo(
          ".skill-tags span",
          {
            opacity: 0,
            y: 16,
            scale: 0.94,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.06,
            duration: 0.45,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )

        // =========================
        // ACHIEVEMENTS SECTION
        // =========================

        .fromTo(
          ".achievements-column .section-label",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.25",
        )

        .fromTo(
          ".achievement-item",
          {
            opacity: 0,
            x: 24,
          },
          {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.65,
          },
          "-=0.45",
        );
    },
    {scope: container},
  );

  return (
    <section className="about-section" ref={container}>
      <div className="about-content">
        <div className="about-intro">
          <div>
            <span className="about-badge">The Narrative</span>
            <h1 className="about-title">
              Experience & <span>Expertise.</span>
            </h1>

            <div className="bio-text">
              <p>
                Honours Digital Arts student majoring in <strong>Game Design</strong> and{" "}
                <strong>Interactive Media</strong>, with hands-on experience in{" "}
                <strong>front-end web development</strong>, <strong>UI</strong> and <strong>UX design</strong>, and
                creating thoughtful, brand-driven digital solutions.
              </p>

              <p>
                I enjoy working at the intersection of design and technology, where visuals, interaction, and code come
                together to create experiences that feel intuitive, intentional, and engaging.
              </p>

              <p>
                My background in game design shapes the way I approach digital experiences. I naturally think in
                systems, flows, and user journeys, understanding that every interaction matters. Beyond the technical
                side, I enjoy solving problems creatively, collaborating with others, and continuously refining my
                craft.
              </p>

              <blockquote>
                “Success is when reality catches up to your imagination.”
                <cite>— Simon Sinek</cite>
              </blockquote>
            </div>
          </div>
          <div>
            <img src={profileImg} alt="" className="profile" />
          </div>
        </div>

        <div className="experience-grid">
          <h2 className="section-label">Professional Experience</h2>

          <div className="experience-list">
            <div className="experience-card active">
              <div className="card-header">
                <h3>Ngengebule Attorneys Inc</h3>
                <span className="date">Dec 2025 - Present</span>
              </div>
              <h4>Front-End Web Developer / UI/UX Designer (Freelance)</h4>
              <p>
                Developed responsive, SEO-optimized web solutions and brand-aligned assets for professional legal
                services.
              </p>
            </div>

            <div className="experience-card active">
              <div className="card-header">
                <h3>Lesakhi Investments</h3>
                <span className="date">Jan 2026 - Present</span>
              </div>
              <h4>Front-End Web Developer / Graphic Designer (Freelance)</h4>
              <p>
                Crafting full-spectrum brand identity from logo design to responsive web development and audience
                engagement.
              </p>
            </div>

            <div className="experience-card">
              <div className="card-header">
                <h3>Rahul Solutions</h3>
                <span className="date">2023 - 2025</span>
              </div>
              <h4>Developer / Designer / 3D Modeler (Freelance)</h4>
              <p>
                Integrated 3D modeling with web development to establish cohesive digital identities and professional
                presentation.
              </p>
            </div>

            <div className="experience-card">
              <div className="card-header">
                <h3>L&D Academy</h3>
                <span className="date">2023 - 2024</span>
              </div>
              <h4>Graphic Designer (Freelance)</h4>
              <p>
                Built visual identities from the ground up, ensuring brand mission and values resonated with target
                audiences.
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-grid">
          <div className="skills-column">
            <h2 className="section-label">Technical Stack</h2>
            <div className="skill-tags">
              <span>JavaScript</span> <span>React JS</span> <span>CSS</span>
              <span>HTML</span>
              <span>Responsive Design</span> <span>3D Modelling</span> <span>Game Design</span>
              <span>Graphic Design</span> <span>Figma</span> <span>Illustrator</span>
            </div>
          </div>

          <div className="achievements-column">
            <h2 className="section-label">Achievements</h2>
            <div className="achievement-item">
              <strong>BA Digital Arts</strong>
              <p>Current Education: University of the Witwatersrand</p>
            </div>
            <div className="achievement-item">
              <strong>6x Wits Certificate of First Class</strong>
              <p>University of the Witwatersrand</p>
            </div>
            <div className="achievement-item">
              <strong>Golden Key Honor Society</strong>
              <p>Golden Key: Wits University (2024)</p>
            </div>
            <div className="achievement-item">
              <strong>Vega School Design Trophy</strong>
              <p>Vega School Trophy for Flair in Design (2022)</p>
            </div>
            <div className="achievement-item">
              <strong>Top Design Student</strong>
              <p>Krugersdorp High (2022)</p>
            </div>
            <div className="achievement-item">
              <strong>Matric Top 20</strong>
              <p>6th Place - Krugersdorp High (2022)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
