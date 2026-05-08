export default function DesignCard({src, title, category, type, link}) {
  const isPdf = type === "pdf";

  return (
    <article className="design-card">
      <a href={link || src} target="_blank" rel="noreferrer" className="design-card-link">
        <div className="design-card-image-wrapper">
          <img src={src} alt={title} />
        </div>

        <div className="design-card-info">
          <span>{category}</span>
          <h3>{title}</h3>
          <p>{isPdf ? "Open PDF" : "View Design"}</p>
        </div>
      </a>
    </article>
  );
}