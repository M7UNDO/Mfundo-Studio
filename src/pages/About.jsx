import React, {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import "../styles/About.css";
import profileImg from "../assets/profile/M7UNDO_Pfp.png";

export default function About() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".about-badge", {opacity: 0, y: 20, duration: 0.6})
        .from(".about-title", {opacity: 0, y: 30, duration: 0.8}, "-=0.3")
        .from(
          ".bio-text p",
          {
            opacity: 0,
            x: -20,
            stagger: 0.2,
            duration: 0.8,
          },
          "-=0.4",
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
                I'm an Honors Digital Arts student specialising in <strong>Game Design</strong> and{""}
                 <strong>Interactive Media</strong>, with hands-on experience in {""}
                <strong>Front-end development, UI/UX Design</strong>, and building brand-driven digital solutions.I
                enjoy working at the intersection of design and technology, where visuals, interaction, and code come
                together to create experiences that feel intuitive, intentional, and engaging.
              </p>

              <p>
                My background in game design shapes how I approach everything: I think in systems, flows, and user
                journeys. Every interaction matters.Beyond the technical side, I enjoy solving problems creatively,
                collaborating with others, and constantly refining my craft.
              </p>

              <blockquote>
                Stay hungry. Stay foolish. Think different. The only way to do great work is to love what you do.
                <br />
                <br />
                <cite>~ Steve Jobs</cite>
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
              <span>Responsive Design</span> <span>Blender 3D</span> <span>Game Design</span>
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
