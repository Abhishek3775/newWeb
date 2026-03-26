import React from "react";
import "./ReadyForAdventure.css";
import ctaBg from "../../assets/cal-back.jpg";

const ReadyForAdventure = () => {
  return (
    <section
      className="rfa-section-wrapper"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="rfa-overlay"></div>

      <div className="rfa-content">
        <h2 className="rfa-title">
          Ready for Your Next Adventure?
        </h2>

        <p className="rfa-description">
          Let our travel experts craft your perfect journey. From first enquiry to <br />
          final farewell, we're with you every step of the way.
        </p>

        <div className="rfa-buttons">
          <button className="rfa-btn-primary">
            Enquire Now
          </button>

          <button className="rfa-btn-outline">
            Call +1 (800) 555-0199
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadyForAdventure;
