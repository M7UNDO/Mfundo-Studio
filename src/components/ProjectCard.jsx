export default function ProjectCard({src, title, info, description, liveLink, tools}) {
  return (
    <div className="project-card">
      <div className="project-visual-wrapper">
        <img src={src} alt={title} />
      </div>

      <div className="project-tags-container">
        <span className="project-badge">{info}</span>
  
        {tools && tools.map((tool, index) => (
          <span key={index} className="tool-tag">{tool}</span>
        ))}
      </div>

      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <a href={liveLink} target="_blank">{liveLink}</a>
      <a href={liveLink} className="project-link" target="_blank" rel="noreferrer">
        View Case Study<span className="material-symbols-outlined">arrow_forward</span>
      </a>
    </div>
  );
}
