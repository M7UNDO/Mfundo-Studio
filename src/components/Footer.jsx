import React from "react";
import {Link} from "react-router-dom";
import "../styles/Footer.css";
import Logo from "../assets/logos/Northstar Studios_Black.svg?react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <Link className="footer-brand" to="/">
            <Logo className="footer-logo" />
          </Link>

          <div className="footer-im-projects">
            <h4>Interactive Media</h4>
            <ul>
              <li>
                <Link>ABSA New Wealth Studio</Link>
              </li>
              <li>
                <Link>The Pavillion</Link>
              </li>
            </ul>
          </div>

          <div className="footer-gd-projects">
            <h4>Game Design</h4>
            <ul>
              <li>
                <Link>Grave Wave</Link>
              </li>
              <li>
                <Link>Heist Gambit</Link>
              </li>
            </ul>
          </div>

          <div className="quick-links">
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

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/mfundo-dhlamini" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:dhlaminimfundo1@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mfundo Dhlamini. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
