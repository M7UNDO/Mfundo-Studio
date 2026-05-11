import {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import "../styles/AnimatedHeroBackground.css";

export default function AnimatedHeroBackground() {
  const bgRef = useRef();

  useGSAP(
    () => {
      gsap.to(".hero-orb", {
        y: -30,
        x: 20,
        rotate: 12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1.2,
      });

      gsap.to(".hero-particle", {
        y: -40,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.25,
      });

      gsap.to(".hero-outline-shape", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });
    },
    {scope: bgRef},
  );

  return (
    <div className="animated-hero-bg" ref={bgRef} aria-hidden="true">
      <div className="hero-orb hero-orb-large"></div>
      <div className="hero-orb hero-orb-medium"></div>
      <div className="hero-orb hero-orb-small"></div>

      <div className="hero-outline-shape"></div>

      <span className="hero-particle particle-1"></span>
      <span className="hero-particle particle-2"></span>
      <span className="hero-particle particle-3"></span>
      <span className="hero-particle particle-4"></span>
      <span className="hero-particle particle-5"></span>
    </div>
  );
}