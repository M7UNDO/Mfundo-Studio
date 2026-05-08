export default function DesignCard({src, lightSrc, darkSrc, title, category, type, link}) {
  const isPdf = type === "pdf";
  const hasThemeVersions = lightSrc && darkSrc;

  return (
    <article className="design-card">
      <a href={link || src || lightSrc || darkSrc} target="_blank" rel="noreferrer" className="design-card-link">
        <div className="design-card-image-wrapper">
          {hasThemeVersions ? (
            <>
              <img className="design-img design-img-light" src={lightSrc} alt={title} />
              <img className="design-img design-img-dark" src={darkSrc} alt={title} />
            </>
          ) : (
            <img className="design-img" src={src} alt={title} />
          )}
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