// src/pages/PortfolioDetail.jsx

import { useParams, Link } from "react-router-dom";
import portfolioData from "../data/portfolioData";
import "../styles/PortfolioDetail.css";

export default function PortfolioDetail() {
  const { id } = useParams();

  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="portfolio-detail-page">
        <h1>Project not found</h1>
        <Link to="/portfolio">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <main className="portfolio-detail-page">
      
      {/* HERO */}
      <section className="case-study-hero">
        <p className="case-study-category">{project.category}</p>

        <h1>{project.title}</h1>

        <div className="case-study-meta">
          <p><strong>Client:</strong> {project.meta.client}</p>
          <p><strong>Role:</strong> {project.meta.role}</p>
          <p><strong>Year:</strong> {project.meta.year}</p>
          <p><strong>Tools:</strong> {project.meta.tools.join(", ")}</p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="case-study-image">
        <img src={project.coverImage} alt={project.title} />
      </section>

      {/* SECTIONS */}
      {project.sections.map((section) => (
        <section className="case-study-section" key={section.title}>
          
          <div className="case-study-grid">
            
            {/* LEFT TITLE */}
            <div className="case-study-left">
              <h2>{section.title}</h2>
            </div>

            {/* RIGHT CONTENT */}
            <div className="case-study-right">
              
              {section.content &&
                section.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

              {section.list && (
                <ul>
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </section>
      ))}

      {/* GALLERY */}
      <section className="case-study-gallery">
        {project.gallery.map((img, index) => (
          <img key={index} src={img} alt="Project visual" />
        ))}
      </section>

    </main>
  );
}