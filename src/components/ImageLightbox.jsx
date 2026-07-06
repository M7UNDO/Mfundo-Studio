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
          {zoomed? (<><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-out-icon lucide-zoom-out"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg></>):(<><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-in-icon lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg></>)}
        </button>

        <button type="button" onClick={toggleFullscreen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-expand-icon lucide-expand"><path d="m15 15 6 6"/><path d="m15 9 6-6"/><path d="M21 16v5h-5"/><path d="M21 8V3h-5"/><path d="M3 16v5h5"/><path d="m3 21 6-6"/><path d="M3 8V3h5"/><path d="M9 9 3 3"/></svg>
        </button>

        <button type="button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>

      <figure
        className={`image-lightbox-content ${zoomed ? "image-lightbox-content-zoomed" : ""} ${
          image.variant === "design" ? "image-lightbox-content-design" : ""
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={image.src} alt={image.alt} />

        {image.caption && <figcaption>{image.caption}</figcaption>}
      </figure>
    </div>
  );
}
