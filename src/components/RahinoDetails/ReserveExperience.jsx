import React from "react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import "./ReserveExperience.css";

import reserveBg from "../../assets/joureny2.png"; // <-- apni image yahan use karo

const ReserveExperience = () => {
  return (
    <section
      className="reserve-section"
      style={{ backgroundImage: `url(${reserveBg})` }}
    >
      <div className="reserve-overlay"></div>

      <div className="reserve-container">
        <p className="reserve-subtitle">YOUR JOURNEY AWAITS</p>

        <h2 className="reserve-title">Begin Your Journey</h2>

        <p className="reserve-description">
          Every extraordinary journey begins with a conversation. Our South
          Africa specialists await to craft your bespoke itinerary, tailored to
          your every desire.
        </p>

        <div className="reserve-contact">
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

        <button className="reserve-btn">
          BEGIN YOUR JOURNEY <FiArrowRight className="btn-arrow" />
        </button>
      </div>
    </section>
  );
};

export default ReserveExperience;