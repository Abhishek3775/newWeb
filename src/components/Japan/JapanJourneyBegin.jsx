import React from "react";
import "./JapanJourneyBegin.css";
import { FaArrowRight } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

import BgImage from "../../assets/japan-bg-jou.png";

const JapanJourneyBegin = () => {
  return (
    <section
      className="elite-journey-section"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="elite-journey-overlay"></div>

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
        <div className="elite-journey-contact">
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

        {/* BUTTON */}
        <button className="elite-journey-btn">
          BEGIN YOUR JOURNEY <FaArrowRight className="btn-arrow" />
        </button>
      </div>
    </section>
  );
};

export default JapanJourneyBegin;