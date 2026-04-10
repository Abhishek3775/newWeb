import React from "react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import "./JourneySection.css";
import bg from "../../assets2/South Africa/joureny.png";

const JourneySection = () => {
  return (
    <section
      className="journey-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="journey-overlay"></div>

      {/* Content */}
      <div className="journey-container">
        <p className="journey-subtitle">YOUR JOURNEY AWAITS</p>

        <h2 className="journey-title">Begin Your Journey</h2>

        <p className="journey-description">
          Every extraordinary journey begins with a conversation. Our South
          Africa specialists await to craft your bespoke itinerary, tailored to
          your every desire.
        </p>

        <div className="journey-contact">
          <div className="contact-item">
            <div className="icon-box">
              <FiPhone />
            </div>
            <span>+442074269888</span>
          </div>

          <div className="divider"></div>

          <div className="contact-item">
            <div className="icon-box">
              <CiMail />
            </div>
            <span>southafrica@eliteconcierge.com</span>
          </div>
        </div>

        <button className="journey-btn">
          BEGIN YOUR JOURNEY <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default JourneySection;