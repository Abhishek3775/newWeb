import React from "react";
import "./ReserveExperience.css";
import { FiPhone, FiMail } from "react-icons/fi";

const ReserveExperience = () => {
  return (
    <section className="re-wrapper">
      <div className="re-container">

        <p className="re-subtitle">BEGIN YOUR JOURNEY</p>
        <h2 className="re-title">Reserve Your Experience</h2>

        <p className="re-description">
          Each sumo experience is meticulously crafted to ensure unprecedented access 
          while respecting the sacred traditions of this ancient sport. Our relationships 
          with sumo stables have been cultivated over decades.
        </p>

        <p className="re-note">
          Minimum 4 weeks advance booking required
        </p>

        <div className="re-contact">
          <div className="re-contact-item">
            <div className="re-icon">
              <FiPhone />
            </div>
            <span>+442074269888</span>
          </div>

          <div className="re-divider"></div>

          <div className="re-contact-item">
            <div className="re-icon">
              <FiMail />
            </div>
            <span>southafrica@eliteconcierge.com</span>
          </div>
        </div>

        <button className="re-button">
          BEGIN YOUR JOURNEY →
        </button>

      </div>
    </section>
  );
};

export default ReserveExperience;
