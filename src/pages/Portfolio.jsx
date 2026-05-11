import {useState, useRef} from "react";
import ProjectCard from "../components/ProjectCard";
import DesignCard from "../components/DesignCard";
import ImageLightbox from "../components/ImageLightbox";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

import projectData from "../data/projectData";
import designData from "../data/designData";

import "../styles/Portfolio.css";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const container = useRef();

  function openLightbox(image) {
    setSelectedImage(image);
  }

  function closeLightbox() {
    setSelectedImage(null);
  }

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
    </div>
  );
}
