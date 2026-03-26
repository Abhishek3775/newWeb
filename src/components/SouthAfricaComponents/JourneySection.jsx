import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./JourneySection.css";



const JourneySection = () => {
  return (
    <section
      className="journey-section"
      // style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="journey-container">
        
        <p className="journey-subtitle">YOUR JOURNEY AWAITS</p>

        <h2 className="journey-title">Begin Your Journey</h2>

        <p className="journey-description">
          Every extraordinary journey begins with a conversation. Our Japan
          specialists await to craft your bespoke itinerary, tailored to your
          every desire.
        </p>

        <div className="journey-contact">
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

        <button className="journey-btn">
          BEGIN YOUR JOURNEY →
        </button>
      </div>
    </section>
  );
};

export default JourneySection;
