import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="notfound">
      <div className="notfound-wrapper">
        <p className="notfound-label">Error 404</p>
        <h1>404</h1>
        
        <div className="notfound-content">
          <p className="notfound-message">Lost in space?</p>
          <p className="notfound-subtext">
            The page you are looking for doesn't exist or has been moved to another galaxy.
          </p>
        </div>

        <div className="btn-container">
          <button 
            type="button" 
            onClick={() => navigate(-1)} 
            className="back-btn"
          >
            Go back
          </button>

          <Link to="/" className="home-btn">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
