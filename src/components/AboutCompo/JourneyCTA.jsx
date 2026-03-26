import React from "react";
import "./JourneyCTA.css";
import journeyBg from "../../assets/aboutcta.jpg"; // apni image yaha daalo

const JourneyCTA = () => {
  return (
    <section
      className="journey-sec-wrapper"
      style={{ backgroundImage: `url(${journeyBg})` }}
    >
      <div className="journey-sec-overlay"></div>

      <div className="journey-sec-content">
        <h2 className="journey-sec-title">
          BEGIN YOUR JOURNEY
        </h2>

        <p className="journey-sec-description">
          Experience the difference of truly personalized luxury.
          Our team is ready to craft your next extraordinary experience.
        </p>

        <button className="journey-sec-btn">
          REQUEST CONSULTATION
        </button>
      </div>
    </section>
  );
};

export default JourneyCTA;
