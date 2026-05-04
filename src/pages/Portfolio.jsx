import React from "react";
import ProjectCard from "../components/ProjectCard";
import website1 from "../assets/images/projects/LNA.png";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const projectData = [
    {
      id: 1,
      img: website1,
      title: "Absa Next-Gen Wealth Studio",
      description:
        "Designing and developing a responsive financial planning web application prototype that enables young South African professionals to better understand and manage their finances through interactive simulations, personalised strategy tracks, and real-time insights, while integrating educational content to support informed decision-making.",
      info: "website",
      liveLink: "https://ngengebule.co.za/",
      tools: ["React JS", "JavaScript", "GSAP", "HTML & CSS"],
    },
    {
      id: 2,
      img: website1,
      title: "Ngengebule Attorneys",
      description:
        "Designing and developing a responsive, SEO-optimised website for Ngengebule Attorneys Inc that enhances the firms digital presence, communicates its legal services effectively, and improves client engagement through intuitive navigation, brand-aligned design, and a professional, user-friendly experience.",
      info: "website",
      liveLink: "https://ngengebule.co.za/",
      tools: ["React JS", "JavaScript", "GSAP", "HTML & CSS"],
    },
    {
      id: 3,
      img: website1,
      title: "Integrating Fake Store API",
      description:
        "This project is an e-commerce website that integrates the Fake Store REST API along with my own custom products. It includes dynamic product loading, cart logic, and a complete front-end interface representing my brand",
      info: "website",
      liveLink: "https://ngengebule.co.za/",
      tools: ["Vanilla JavaScript", "GSAP", "REST API", "HTML & CSS"],
    },
    {
      id: 4,
      img: website1,
      title: "Integrating Fake Store API",
      description:
        "This project is an e-commerce website that integrates the Fake Store REST API along with my own custom products. It includes dynamic product loading, cart logic, and a complete front-end interface representing my brand",
      info: "website",
      liveLink: "https://ngengebule.co.za/",
      tools: ["Vanilla JavaScript", "REST API", "GSAP", "HTML & CSS"],
    },
  ];
  return (
    <div className="portfolio-page">
      <h2>Web Dev</h2>
      <div className="portfolio-grid">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.img}
            title={project.title}
            description={project.description}
            info={project.info}
            liveLink={project.liveLink}
            tools={project.tools}
          />
        ))}
      </div>
      <h2>Games</h2>
      <div className="portfolio-grid">
        <iframe frameborder="0" src="https://itch.io/embed/4511097?link_color=000000" width="552" height="167" className="game-project">
          <a href="https://m7und0.itch.io/heist-gambit">Heist Gambit by NorthStar Studios</a>
        </iframe>
        <iframe frameborder="0" src="https://itch.io/embed/4511097?link_color=000000" width="552" height="167">
          <a href="https://m7und0.itch.io/heist-gambit">Heist Gambit by NorthStar Studios</a>
        </iframe>
        
      </div>
    </div>
  );
}
