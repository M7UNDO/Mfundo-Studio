import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  src,
  title,
  category,
  description,
  liveLink,
  githubLink,
  tools,
}) {
  return (
    <article className="project-card">
      <div className="project-visual-wrapper">
        <img src={src} alt={title} />
      </div>

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
          <a href={liveLink} target="_blank" rel="noreferrer" className="live-link">
            Live Site
          </a>
        )}

        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="github-link">
            GitHub
          </a>
        )}

        <Link to={`/portfolio/${id}`} className="project-link">
          View Case Study
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </article>
  );
}