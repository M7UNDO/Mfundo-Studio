import React, { useState } from "react";
import "../styles/ExperienceCard.css";

export default function ExperienceCard({ client, role, description, date }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`experience-timeline-item ${isExpanded ? "expanded" : ""}`}>
      <div className="timeline-track">
        <div className="timeline-line"></div>
        <div className="timeline-node"></div>
      </div>

      <div 
        className="experience-card" 
        onClick={handleToggle}
        role="button"
        aria-expanded={isExpanded}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <div className="experience-header">
          <div className="experience-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-briefcase"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </div>

          <div className="client-info">
            <div className="title-wrapper">
              <h3 className="client-title">
                {client}
                <span className="role-divider"> | </span>
                <span className="role">{role}</span>
              </h3>
              
              <div className="meta-badges">
                <span className="date">{date}</span>
              </div>
            </div>
            
            <div className="interaction-indicator">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="chevron-icon"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="experience-body">
          <p className="role-description-preview">{description}</p>
          
          <div className="experience-collapse-wrapper">
            <div className="full-description-box">
              <p className="role-description-full">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}