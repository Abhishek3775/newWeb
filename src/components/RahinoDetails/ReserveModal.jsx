import React from "react";
import "./ReserveModal.css";
import rhinoImg from "../../assets/rhinoFam.jpg"; // apni image use karo

const ReserveModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="rm-overlay">
      <div className="rm-modal">

        {/* Close Button */}
        <button className="rm-close" onClick={onClose}>×</button>

        <div className="rm-content">

          {/* Left Image */}
          <div className="rm-image">
            <img src={rhinoImg} alt="Rhino Experience" />
          </div>

          {/* Right Form */}
          <div className="rm-form">
            <h2 className="rm-title">Start Your Journey Today</h2>

            <h4 className="rm-section-heading">GUEST INFORMATION</h4>

            <div className="rm-grid-3">
              <select>
                <option>Title*</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
              </select>

              <input type="text" placeholder="First Name*" />
              <input type="text" placeholder="Last Name*" />
            </div>

            <div className="rm-grid-2">
              <input type="text" placeholder="Phone Number*" />
              <input type="email" placeholder="Email Address*" />
            </div>

            <h4 className="rm-section-heading">
              TELL US MORE ABOUT YOUR RHINO TREKKING EXPERIENCE
            </h4>

            <textarea
              placeholder="Preferred date, number of guests, fitness level, photography interests, and any special requests."
              rows="5"
            ></textarea>

            <div className="rm-checkbox">
              <label>
                <input type="checkbox" /> I accept the Privacy Policy.
              </label>
            </div>

            <div className="rm-checkbox">
              <label>
                <input type="checkbox" /> Yes! I would like to receive news and updates.
              </label>
            </div>

            <button className="rm-submit">
              SPEAK TO AN EXPERT
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveModal;
