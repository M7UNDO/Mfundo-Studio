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
    },
    {
      id: 2,
      img: website1,
      title: "Ngengebule Attorneys",
      description: "Designing and developing a responsive, SEO-optimised website for Ngengebule Attorneys Inc that enhances the firms digital presence, communicates its legal services effectively, and improves client engagement through intuitive navigation, brand-aligned design, and a professional, user-friendly experience.",
      info: "website",
      liveLink: "https://ngengebule.co.za/",
    },
    {
      id: 3,
      img: website1,
      title: "Ngengebule Attorneys",
      description: "This a website for a law firm",
      info: "website",
      liveLink: "https://ngengebule.co.za/",
    },
  ];
  return (
    <div className="portfolio-page">
      <div className="portfolio-grid">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.img}
            title={project.title}
            description={project.description}
            info={project.info}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}
