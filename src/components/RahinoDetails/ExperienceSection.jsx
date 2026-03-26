import React, { useState } from "react";
import "./ExperienceSection.css";
import rhinoImg from "../../assets/rahinoEx.jpg";
import ReserveModal from "./ReserveModal";
import time from "../../assets/time.png";
import people from "../../assets/people.png";
import calender from "../../assets/calender.png";

const ExperienceSection = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <section className="exp-section">
      <div className="exp-container">

        {/* Top Heading */}
        <div className="exp-header">
          <p className="exp-subtitle">OUR OFFERINGS</p>
          <h2 className="exp-title">Choose Your Experience</h2>
          <p className="exp-description">
            Each experience is thoughtfully curated to provide unparalleled access to Africa’s wildlife,
            combining conservation, comfort, and unforgettable moments in the wild.
          </p>
        </div>

        {/* Main Content */}
        <div className="exp-content">

          {/* Left Image */}
          <div className="exp-image-wrapper">
            <img src={rhinoImg} alt="Morning Rhino Tracking Walk" />

            <div className="exp-price-tag">
              <span>FROM</span>
              <strong>£2,800</strong>
              <p>per person</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="exp-details">

            <p className="exp-small-heading">TRACKING EXPERIENCE</p>
            <h3 className="exp-experience-title">
              Morning Rhino Tracking Walk
            </h3>

            <p className="exp-text">
              Begin at sunrise as expert Shangaan trackers guide you on foot through rhino territory.
              Learn to read fresh spoor and natural signs as you move quietly across open plains and
              acacia woodland. The experience ends with a traditional bush breakfast and fireside stories.
            </p>

            <div className="exp-meta">
              <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={time} alt="" style={{height:"15px",width:"15px"}} /> 4 hours</span>
              <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={people} alt="" style={{height:"15px",width:"15px"}} />2-4 Guests</span>
              <span style={{display:"flex",justifyContent:"center",gap:"4px"}}><img src={calender} alt="" style={{height:"15px",width:"15px"}} />Daily, weather permitting</span>
            </div>

            <div className="exp-includes">
              <h4>INCLUDES</h4>
              <ul>
                <li>Private access to protected rhino habitat</li>
                <li>Guided walking safari with expert trackers</li>
                <li>Armed ranger escort for safety</li>
                <li>Bush breakfast or refreshments</li>
                <li>Conservation briefing and wildlife insights</li>
              </ul>
            </div>

            <div className="exp-buttons">
              <button className="exp-btn-outline">VIEW MORE</button>
              <button className="exp-btn-primary" onClick={() => setOpenModal(true)}>
                RESERVE EXPERIENCE →
              </button>
            </div>

          </div>
        </div>
      </div>
          <ReserveModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
};

export default ExperienceSection;
