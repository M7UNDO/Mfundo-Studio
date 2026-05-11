import {useEffect, useState} from "react";
import "../styles/BackToTop.css";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function ScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {showButton && (
        <button onClick={ScrollToTop} className="back-to-top-btn">
          <i className="fa-solid fa-arrow-up-long"></i>
        </button>
      )}
    </>
  );
}