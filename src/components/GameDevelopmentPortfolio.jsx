import {useState, useEffect} from "react";

export default function GameDevelopmentPortfolio() {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:600px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section className="portfolio-section">
      <div className="portfolio-section-header">
        <p className="portfolio-kicker">Selected Games</p>
        <div className="heading">
          <h2>Game Development Projects</h2>
        </div>
        <div className="section-divider"></div>
        <p className="portfolio-description">
          A collection of Unity games, gameplay prototypes, and interactive experiences currently being prepared for
          showcase.
        </p>
      </div>

      {isMobile ? (
        <>
          <div className="game-dev-grid">
            <iframe frameborder="0" src="https://itch.io/embed/4511097?link_color=8563ff" width="208" height="167">
              <a href="https://m7und0.itch.io/heist-gambit">Heist Gambit by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/3472556?link_color=7f5aff" width="208" height="167">
              <a href="https://m7und0.itch.io/mini-golf">Mini Golf by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/4766740?link_color=7f5aff" width="208" height="167">
              <a href="https://m7und0.itch.io/the-lost-temple">The Lost Temple: Echoes of Light by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/3261291?link_color=7f5aff" width="208" height="167">
              <a href="https://m7und0.itch.io/the-staff-of-elysium">The Staff of Elysium by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/2778416?link_color=7f5aff" width="208" height="167">
              <a href="https://m7und0.itch.io/lost-days">LOST DAYS by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/4456089?link_color=7f5aff" width="208" height="167">
              <a href="https://m7und0.itch.io/just-dont-die">Platform Rivals by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/4849275?link_color=7f5aff" width="208" height="167">
              <a href="https://m7und0.itch.io/grave-wave">Grave Wave by NorthStar Studios</a>
            </iframe>
          </div>
        </>
      ) : (
        <>
          <div className="game-dev-grid">
            <iframe frameborder="0" src="https://itch.io/embed/4511097?link_color=8563ff" width="552" height="167">
              <a href="https://m7und0.itch.io/heist-gambit">Heist Gambit by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/3472556?link_color=7f5aff" width="552" height="167">
              <a href="https://m7und0.itch.io/mini-golf">Mini Golf by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/4766740?link_color=7f5aff" width="552" height="167">
              <a href="https://m7und0.itch.io/the-lost-temple">The Lost Temple: Echoes of Light by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/3261291?link_color=7f5aff" width="552" height="167">
              <a href="https://m7und0.itch.io/the-staff-of-elysium">The Staff of Elysium by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/2778416?link_color=7f5aff" width="552" height="167">
              <a href="https://m7und0.itch.io/lost-days">LOST DAYS by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/4456089?link_color=7f5aff" width="552" height="167">
              <a href="https://m7und0.itch.io/just-dont-die">Platform Rivals by NorthStar Studios</a>
            </iframe>
            <iframe frameborder="0" src="https://itch.io/embed/4849275?link_color=7f5aff" width="552" height="167">
              <a href="https://m7und0.itch.io/grave-wave">Grave Wave by NorthStar Studios</a>
            </iframe>
          </div>
        </>
      )}
    </section>
  );
}
