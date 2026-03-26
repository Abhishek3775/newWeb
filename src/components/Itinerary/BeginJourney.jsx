import React from "react";
import "./BeginJourney.css";
import { CiCalendar } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt} from "react-icons/fa";



const BeginJourney = () => {
  return (
    <section className="b-j-section">
      <div className="b-j-container">
        <p className="b-j-sub">BEGIN YOUR JOURNEY</p>

        <h2 className="b-j-title">
          Ready to Experience the Adriatic's Finest
        </h2>

        <p className="b-j-desc">
          Let our journey specialists craft your perfect expedition through
          Croatia, Montenegro, and Greece. Limited availability ensures an
          intimate, personalized experience.
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

        {/* Buttons */}
        <div className="b-j-btn-group">
          <button className="b-j-btn primary">
            <CiCalendar /> View Available Dates →
          </button>

          <button className="b-j-btn secondary">
            <FiPhone /> Speak to a Specialist
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeginJourney;
