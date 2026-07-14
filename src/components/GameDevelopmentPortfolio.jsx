import React from "react";

export default function GameDevelopmentPortfolio() {
  const games = [
    {
      id: "4511097",
      title: "Heist Gambit by NorthStar Studios",
      link: "https://m7und0.itch.io/heist-gambit",
    },
    {
      id: "3472556",
      title: "Mini Golf by NorthStar Studios",
      link: "https://m7und0.itch.io/mini-golf",
    },
    {
      id: "4766740",
      title: "The Lost Temple: Echoes of Light by NorthStar Studios",
      link: "https://m7und0.itch.io/the-lost-temple",
    },
    {
      id: "4456089",
      title: "Platform Rivals by NorthStar Studios",
      link: "https://m7und0.itch.io/just-dont-die",
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-section-header">
        <p className="portfolio-kicker">Coming Soon</p>
        <div className="heading">
          <h2>Game Development Projects</h2>
        </div>
        <div className="section-divider"></div>
        <p className="portfolio-description">
          A collection of Unity games, gameplay prototypes, and interactive experiences currently being prepared for showcase.
        </p>
      </div>

      <div className="game-dev-grid">
        {games.map((game, index) => (
          <iframe
            bg_color= "var(--background-colour)"
            key={index}
            className="game-dev-card"
            frameBorder="0"
            title={game.title}
            src={`https://itch.io/embed/${game.id}?link_color=7f5aff`}
            width="552"
            height="167"
          >
            <a href={game.link}>{game.title}</a>
          </iframe>
        ))}
      </div>

     
    </section>
  );
}