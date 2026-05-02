export default function ProjectCard({src, title, info, description, liveLink}) {
  return (
    <div className="project-card">
      <div className="project-visual-wrapper">
        <img src={src} alt={title} />
      </div>

      <span className="project-badge">{info}</span>

      <h2 className="project-title">{title}</h2>
      

      <p className="project-description">{description}</p>

      <a href={liveLink} className="project-link" target="_blank" rel="noreferrer">
        View Case Study<span class="material-symbols-outlined">arrow_forward</span>
      </a>
    </div>
  );
}
