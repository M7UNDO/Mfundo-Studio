import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import Logo from "../assets/logos/Northstar Studios_Black.svg?react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="footer-brand-link" to="/">
              <Logo className="footer-logo" />
            </Link>
          </div>

          <div className="footer-column">
            <h4>Interactive Media</h4>
            <ul>
              <li>
                <Link to="/portfolio/absa">ABSA New Wealth Studio</Link>
              </li>
              <li>
                <Link to="/portfolio/northstar-shop">Northstar Studios Shop</Link>
              </li>
              <li>
                <Link to="/portfolio/pavillion">The Pavillion</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Game Design</h4>
            <ul>
              <li>
                <Link to="/portfolio/grave-wave">Grave Wave</Link>
              </li>
              <li>
                <Link to="/portfolio/heist-gambit">Heist Gambit</Link>
              </li>
              <li>
                <Link to="/portfolio/heist-gambit">Hole In One</Link>
              </li>
              <li>
                <Link to="/portfolio/heist-gambit">The Lost Temple</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/mfundo-dhlamini" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:dhlaminimfundo1@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mfundo Dhlamini. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;