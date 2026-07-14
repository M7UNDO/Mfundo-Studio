import React from "react";
import "../styles/AchievementCard.css";

export default function AchievementCard({ achievement, institution, date }) {
  return (
    <div className="achievement-timeline-item">
      <div className="timeline-track">
        <div className="timeline-line"></div>
        <div className="timeline-node"></div>
      </div>

      <div className="achievement-card">
        <div className="achievement-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-trophy">
            <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/>
            <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/>
            <path d="M18 9h1.5a1 1 0 0 0 0-5H18"/>
            <path d="M4 22h16"/>
            <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/>
            <path d="M6 9H4.5a1 1 0 0 1 0-5H6"/>
          </svg>
        </div>

        <div className="achievement-content">
          <div className="achievement-header">
            <h3 className="achievement-title">{achievement}</h3>
            <span className="achievement-date">{date}</span>
          </div>
          <p className="achievement-institution">{institution}</p>
        </div>
      </div>
    </div>
  );
}