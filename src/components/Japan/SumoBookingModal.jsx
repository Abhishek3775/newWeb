import React from "react";
import "./SumoBookingModal.css";
import modalImg from "../../assets/sumoPopUP.jpg";

const SumoBookingModal = ({ closeModal }) => {
  return (
    <div className="sbm-overlay" onClick={closeModal}>
      <div className="sbm-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="sbm-close" onClick={closeModal} aria-label="Close">
          ×
        </button>

        {/* Left Image */}
        <div className="sbm-left">
          <img src={modalImg} alt="Sumo Arena" />
        </div>

        {/* Right Form */}
        <div className="sbm-right">
          <h2 className="sbm-title">Start Your Journey Today</h2>

          <form className="sbm-form">
            <div className="sbm-section-title">GUEST INFORMATION</div>

            <div className="sbm-row sbm-row-3">
              <select>
                <option>Title*</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
              </select>

              <input type="text" placeholder="First Name*" />
              <input type="text" placeholder="Last Name*" />
            </div>

            <div className="sbm-row sbm-row-2">
              <input type="text" placeholder="🇮🇳 Phone Number*" />
              <input type="email" placeholder="Email Address*" />
            </div>

            <div className="sbm-section-title sbm-mt">
              TELL US MORE ABOUT YOUR SUMO EXPERIENCE
            </div>

            <textarea
              placeholder="Preferred date, number of guests, city (Tokyo / Osaka), tournament or training experience, seating preference, or any special requests."
            ></textarea>

            <div className="sbm-checkbox">
              <label>
                <input type="checkbox" />
                <span>
                  I accept the <a href="/">Privacy Policy</a>.
                </span>
              </label>

              <label>
                <input type="checkbox" />
                <span>
                  Yes! I would like to receive news, updates, and other
                  information from Elite Global Concierge.
                </span>
              </label>
            </div>

            <button type="submit" className="sbm-submit">
              SPEAK TO AN EXPERT
            </button>

            <p className="sbm-note">
              To review full details of our affiliated partners who may contact
              you, and to understand how your information may be used for direct
              marketing, please refer to our Privacy Policy. If you prefer not
              to receive marketing communications or wish to limit contact from
              our affiliates, you may request not to be contacted, unsubscribe
              at any time, or email us at privacy@eliteglobalconcierge.com.
              Communications may include calls or messages sent via automated
              systems. Your consent to receive such communications is not a
              condition of purchasing our services.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SumoBookingModal;