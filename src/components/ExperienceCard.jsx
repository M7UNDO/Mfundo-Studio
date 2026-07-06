import React from "react";
import "../styles/ExperienceCard.css";

export default function ExperienceCard({client, role, description, date}) {
  return (
    <div className="experience-card">
      <div className="card-header">
        <div className="experience-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-briefcase-business-icon lucide-briefcase-business"
          >
            <path d="M12 12h.01" />
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        </div>

        <div className="client-date">
          <h3>{client}<span className="role">{` | ${role}`}</span></h3>
          <span className="date">{date}</span>
        </div>
      </div>
      <p className="role-description">{description}</p>
    </div>
  );
}
