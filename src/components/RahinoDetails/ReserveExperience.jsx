import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./ReserveExperience.css";

const ReserveExperience = () => {
  return (
    <section className="reserve-section">
      <div className="reserve-container">

        <p className="reserve-subtitle">BEGIN YOUR JOURNEY</p>

        <h2 className="reserve-title">Reserve Your Experience</h2>

        <p className="reserve-description">
          Each rhino trekking experience is meticulously curated to provide rare,
          close-range encounters while respecting the natural behavior of these endangered giants.
          Our long-standing partnerships with private reserves and conservation teams have been built over decades.
        </p>

        <p className="reserve-note">
          Minimum 4 weeks advance booking required
        </p>

        <div className="reserve-contact">
          <div className="contact-item">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>
            <span>+44 2074269888</span>
          </div>

          <div className="divider"></div>

          <div className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <span>southafrica@eliteconcierge.com</span>
          </div>
        </div>

        <button className="reserve-btn">
          BEGIN YOUR JOURNEY →
        </button>

      </div>
    </section>
  );
};

export default ReserveExperience;
