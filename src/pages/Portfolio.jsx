import ProjectCard from "../components/ProjectCard";
import DesignCard from "../components/DesignCard";
import projectData from "../data/projectData";
import designData from "../data/designData";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-section">
        <div className="portfolio-section-header">
          <p className="portfolio-kicker">Selected Work</p>
          <h1>Web & Interactive Projects</h1>
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
              title={design.title}
              category={design.category}
              type={design.type}
              link={design.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}