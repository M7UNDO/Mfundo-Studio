// src/pages/Portfolio.jsx

import {useState} from "react";
import ProjectCard from "../components/ProjectCard";
import DesignCard from "../components/DesignCard";
import ImageLightbox from "../components/ImageLightbox";

import projectData from "../data/projectData";
import designData from "../data/designData";

import "../styles/Portfolio.css";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  function openLightbox(image) {
    setSelectedImage(image);
  }

  function closeLightbox() {
    setSelectedImage(null);
  }

  return (
    <main className="portfolio-page">
      <section className="portfolio-section projects-section">
        <div className="portfolio-section-header">
          <p className="portfolio-kicker">Selected Work</p>
          <h2>Web & Interactive Projects</h2>
          <p>
            Responsive websites, web applications, and interactive front-end projects focused on usability, interface
            design, and polished digital experiences.
          </p>
        </div>

        <div className="portfolio-grid">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              src={project.img}
              title={project.title}
              category={project.info}
              description={project.description}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              tools={project.tools}
            />
          ))}
        </div>
      </section>

      <section className="portfolio-section design-section">
        <div className="portfolio-section-header">
          <p className="portfolio-kicker">Visual Design</p>
          <h2>Graphic Design Collection</h2>
          <p>Logos, business cards, letterheads, email signatures, and brand assets.</p>
        </div>

        <div className="design-grid">
          {designData.map((design) => (
            <DesignCard
              key={design.id}
              src={design.src}
              lightSrc={design.lightSrc}
              darkSrc={design.darkSrc}
              title={design.title}
              category={design.category}
              type={design.type}
              link={design.link}
              onOpenImage={openLightbox}
            />
          ))}
        </div>
      </section>

      <ImageLightbox isOpen={!!selectedImage} image={selectedImage} onClose={closeLightbox} />
    </main>
  );
}