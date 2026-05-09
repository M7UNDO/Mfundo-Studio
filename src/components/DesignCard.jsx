import {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

export default function DesignCard({
  src,
  lightSrc,
  darkSrc,
  title,
  category,
  type,
  link,
}) {
  const {theme} = useContext(ThemeContext);

  const isPdf = type === "pdf";

  const displayImage =
    lightSrc && darkSrc
      ? theme === "dark"
        ? lightSrc
        : darkSrc
      : src;

  return (
    <article className="design-card">
      <a
        href={link || displayImage}
        target="_blank"
        rel="noreferrer"
        className="design-card-link"
      >
        <div className="design-card-image-wrapper">
          <img src={displayImage} alt={title} />
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