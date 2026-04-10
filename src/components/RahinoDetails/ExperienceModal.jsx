import React from "react";
import "./ExperienceModal.css";

const ExperienceModal = ({ isOpen, onClose, data }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="view-modal-overlay" onClick={onClose}>
      <div className="view-modal" onClick={(e) => e.stopPropagation()}>
        <button className="view-close" onClick={onClose}>
          ×
        </button>

        <div className="view-modal-left">
          <img src={data.image} alt={data.title} />
        </div>

        <div className="view-modal-right">
          <p className="view-small">{data.smallHeading}</p>
          <h2>{data.title}</h2>
          <p>{data.description}</p>

          <div className="view-meta">
            <span>{data.duration}</span>
            <span>{data.guests}</span>
            <span>{data.availability}</span>
          </div>

          <h4>Includes</h4>
          <ul>
            {data.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button className="view-book-btn">SPEAK TO AN EXPERT</button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;