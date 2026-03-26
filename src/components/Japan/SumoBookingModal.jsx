import React from "react";
import "./SumoBookingModal.css";
import modalImg from "../../assets/sumoPopUP.jpg"; // left image

const SumoBookingModal = ({ closeModal }) => {
  return (
    <div className="sbm-overlay" onClick={closeModal}>
      <div
        className="sbm-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <span className="sbm-close" onClick={closeModal}>
          ×
        </span>

        {/* Left Image */}
        <div className="sbm-left">
          <img src={modalImg} alt="Sumo Arena" />
        </div>

        {/* Right Form */}
        <div className="sbm-right">
          <h2>Start Your Journey Today</h2>

          <form className="sbm-form">

            <div className="sbm-row">
              <select>
                <option>Title*</option>
                <option>Mr</option>
                <option>Mrs</option>
              </select>
              <input type="text" placeholder="First Name*" />
              <input type="text" placeholder="Last Name*" />
            </div>

            <div className="sbm-row">
              <input type="text" placeholder="Phone Number*" />
              <input type="email" placeholder="Email Address*" />
            </div>

            <textarea
              placeholder="Preferred date, number of guests, city (Tokyo / Osaka), tournament or training experience, seating preference, or any special requests."
            ></textarea>

            <div className="sbm-checkbox">
              <label>
                <input type="checkbox" />
                I accept the Privacy Policy.
              </label>

              <label>
                <input type="checkbox" />
                Yes! I would like to receive news and updates.
              </label>
            </div>

            <button type="submit" className="sbm-submit">
              SPEAK TO AN EXPERT
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SumoBookingModal;
