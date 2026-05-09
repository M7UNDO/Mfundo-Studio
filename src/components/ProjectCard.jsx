import {Link} from "react-router-dom";

export default function ProjectCard({id, src, title, category, description, liveLink, githubLink, tools}) {
  return (
    <article className="project-card">
      <Link to={`/portfolio/${id}`} className="project-visual-wrapper">
        <img src={src} alt={title} />
      </Link>

      <div className="project-tags-container">
        {category && <span className="project-badge">{category}</span>}

        {tools?.map((tool) => (
          <span key={tool} className="tool-tag">
            {tool}
          </span>
        ))}
      </div>

      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>

      <div className="project-links">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noreferrer" className="project-link live-link">
            <span className="link-text">Live Website</span>
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        )}

        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="project-link github-link">
            <span className="link-text">GitHub</span>
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        )}

        <Link to={`/portfolio/${id}`} className="project-link case-study-link">
          <span className="link-text">View Case Study</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </article>
  );
}
