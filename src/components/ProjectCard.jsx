import {Link} from "react-router-dom";
import LinkIcon from "../assets/images/icons/external-link.svg?react";
import ArrowIcon from "../assets/images/icons/arrow-right.svg?react";

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
            <i class="fa-solid fa-up-right-from-square"></i>
            <span className="link-text">Live Website</span>
          </a>
        )}

        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="project-link github-link">
            <i class="fa-brands fa-github"></i>
            <span className="link-text">GitHub</span>
          </a>
        )}
      </div>
      <div className="project-divider"></div>
      <Link to={`/portfolio/${id}`} className="case-study-link">
        <span className="link-text">View Case Study</span>

        <span className="arrow-wrapper">
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </Link>
    </article>
  );
}
