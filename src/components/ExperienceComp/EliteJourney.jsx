import React from "react";
import "./EliteJourney.css";
import { FaPhoneAlt} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const EliteJourney = () => {
  return (
    <section className="elite-journey-section">
      <div className="elite-journey-container">
        {/* HEADER TEXT */}
        <p className="elite-journey-subtitle">YOUR JOURNEY AWAITS</p>
        <h2 className="elite-journey-title">Begin Your Journey</h2>
        <p className="elite-journey-desc">
          Every extraordinary journey begins with a conversation. Our Japan
          specialists await to craft your bespoke itinerary, tailored to your
          every desire.
        </p>

        {/* Contact Row */}
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

        {/* BUTTON */}
        <button className="elite-journey-btn">
          BEGIN YOUR JOURNEY →
        </button>
      </div>
    </section>
  );
};

export default EliteJourney;