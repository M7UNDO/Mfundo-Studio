import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import "../styles/DesignCard.css";

export default function DesignCard({src, lightSrc, darkSrc, title, category, type, link, onOpenImage}) {
  const {theme} = useContext(ThemeContext);
  const isPdf = type === "pdf";

  const displayImage = lightSrc && darkSrc ? (theme === "dark" ? lightSrc : darkSrc) : src;

  function handleClick(event) {
    if (isPdf) return;

    event.preventDefault();

    onOpenImage({
      src: displayImage,
      alt: title,
      caption: `${title} - ${category}`,
      variant: "design",
    });
  }

  return (
    <article className="design-card">
      <a
        href={isPdf ? link : displayImage}
        target="_blank"
        rel="noreferrer"
        className="design-card-link"
        onClick={handleClick}
      >
        <div className="design-card-image-wrapper">
          <img src={displayImage} alt={title} />
        </div>

        <div className="design-card-info">
          <div className="design-card-meta">
            <span>{category}</span>

            <span className="design-format-tag">{type.toUpperCase()}</span>
          </div>

          <h3>{title}</h3>

          <p>{isPdf ? "Open PDF" : "View Design"}</p>
        </div>
      </a>
    </article>
  );
}
