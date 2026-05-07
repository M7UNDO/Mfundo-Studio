import React, {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import "../styles/Home.css";

export default function Home() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-badge", {opacity: 0, y: 20, duration: 0.8})
        .from(
          ".hero-title span",
          {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .from(".hero-description", {opacity: 0, x: -20, duration: 0.8}, "-=0.6")
        .from(".hero-cta", {opacity: 0, scale: 0.8, duration: 0.5}, "-=0.4");
    },
    {scope: container},
  );

  return (
    <div className="home-page" ref={container}>
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Available for 2026/2027 roles</span>

          <h1 className="hero-title">
            <span>Mfundo</span> <span>Dhlamini.</span>
          </h1>

          <p className="hero-description">
            Digital Arts Student & Front-End Developer. Merging <strong>Interactive Media</strong> with{" "}
            <strong>Game Design</strong>
            to build immersive digital experiences.
          </p>

          <div className="hero-cta">
            <button className="primary-btn">View Projects</button>
            <a href="/Mfundo-Studio/cv/Mfundo-Dhlamini_CV.pdf" target="_blank" rel="noopener noreferrer" className="cv-button secondary-btn">
              View CV
            </a>
          </div>
        </div>

        {/* Decorative stats or skills tag cloud */}
        <div className="hero-skills-footer">
          <span>React JS</span>
          <span>Unity/Unreal</span>
          <span>GSAP</span>
          <span>UI/UX</span>
        </div>
      </section>
    </div>
  );
}
