import {useState, useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import InteractiveMediaPortfolio from "../components/InteractiveMediaPortfolio";
import GameDevelopmentPortfolio from "../components/GameDevelopmentPortfolio";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState("interactive-media");
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".projects-section .portfolio-kicker", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
        .from(
          ".projects-section h2",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.3",
        )
        .from(
          ".projects-section .portfolio-section-header p:last-child",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".project-card",
          {
            opacity: 0,
            y: 35,
            scale: 0.98,
            stagger: 0.16,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".design-section .portfolio-kicker",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.2",
        )
        .from(
          ".design-section h2",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.3",
        )
        .from(
          ".design-card",
          {
            opacity: 0,
            y: 30,
            scale: 0.98,
            stagger: 0.12,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.35",
        );
    },
    {scope: container},
  );

  return (
    <div className="portfolio-page" ref={container}>
      <div className="portfolio-selection">
        <button
          onClick={() => setSelectedTab("interactive-media")}
          className={`portfolio-tab ${selectedTab === "interactive-media" ? "active" : ""}`}
        >
          Interactive Media
        </button>
        <button
          onClick={() => setSelectedTab("game-development")}
          className={`portfolio-tab ${selectedTab === "game-development" ? "active" : ""}`}
        >
          Game Design
        </button>
      </div>

      {selectedTab === "interactive-media" && <InteractiveMediaPortfolio />}
      {selectedTab === "game-development" && <GameDevelopmentPortfolio />}
    </div>
  );
}
