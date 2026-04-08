import React from "react";
import "./Elitejourney.css";
import bgimg from "../../assets2/Experience/PERSONALIZED JOURNEYS/13.jpg";
import phone from "../../assets/phone.png";
import mail from "../../assets/msg.png";

const Elitejourney = () => {
  return (
    <section
      className="elite-journey-section"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="elite-journey-overlay"></div>

      <div className="elite-journey-container">
        <p className="elite-journey-subtitle">YOUR JOURNEY AWAITS</p>

        <h2 className="elite-journey-title">Begin Your Journey</h2>

        <p className="elite-journey-desc">
          Every extraordinary journey begins with a conversation. Our Japan
          specialists await to craft your bespoke itinerary, tailored to your
          every desire.
        </p>

        {/* Contact Row */}
        <div className="elite-journey-contact">
          <div className="elite-contact-item">
            <div className="elite-icon-box">
              <img src={phone} alt="Phone" className="elite-icon1" />
            </div>
            <span>+442074269888</span>
          </div>

          <div className="elite-divider"></div>

          <div className="elite-contact-item">
            <div className="elite-icon-box">
              <img src={mail} alt="Email" className="elite-icon2" />
            </div>
            <span>southafrica@eliteconcierge.com</span>
          </div>
        </div>

        {/* Button */}
        <button className="elite-journey-btn">
          BEGIN YOUR JOURNEY <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default Elitejourney;