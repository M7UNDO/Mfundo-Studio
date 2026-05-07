import {useEffect, useRef, useState} from "react";
import "../styles/ImageLightbox.css";

export default function ImageLightbox({isOpen, image, onClose}) {
  const [zoomed, setZoomed] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setZoomed(false);
    }
  }, [isOpen]);

  if (!isOpen || !image) return null;

  function toggleFullscreen(event) {
    event.stopPropagation();

    if (!document.fullscreenElement) {
      overlayRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  return (
    <div className="image-lightbox-overlay" ref={overlayRef} onClick={onClose}>
      <div className="image-lightbox-actions" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={() => setZoomed((prev) => !prev)}>
          <span className="material-symbols-outlined">{zoomed ? "zoom_out" : "zoom_in"}</span>
        </button>

        <button type="button" onClick={toggleFullscreen}>
          <span className="material-symbols-outlined">fullscreen</span>
        </button>

        <button type="button" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <figure
        className={`image-lightbox-content ${zoomed ? "image-lightbox-content-zoomed" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={image.src} alt={image.alt} />

        {image.caption && <figcaption>{image.caption}</figcaption>}
      </figure>
    </div>
  );
}