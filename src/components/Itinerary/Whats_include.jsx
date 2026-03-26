import React from "react";
import "./Whats_include.css";
import { FaCheckCircle } from "react-icons/fa";
import dubrovnikImage from "../../assets2/Itinerary/What's Included/img.png"; // ← change path as needed
const Whatsinclude = () => {
  return (
    <section className="voyage-included-section">
      <div className="voyage-included-container">
        {/* Left Image */}
        <div className="voyage-included-image">
          <img src={dubrovnikImage} alt="Dubrovnik, Croatia" />
          <div className="voyage-image-overlay">
            <p className="voyage-featured-text">FEATURED DESTINATION</p>
            <h3 className="voyage-image-title">Dubrovnik, Croatia</h3>
          </div>
        </div>

        {/* Right Content */}
        <div className="voyage-included-content">
          <h2 className="voyage-included-title">What’s Included</h2>
          <p className="voyage-included-description">
            Every aspect of your journey has been thoughtfully curated to ensure
            an exceptional experience. From the moment you arrive until your
            departure, every detail is taken care of.
          </p>

          <ul className="voyage-included-list">
            <li>
              <FaCheckCircle className="voyage-list-icon" />
              All accommodations in ocean-view suites
            </li>
            <li>
              <FaCheckCircle className="voyage-list-icon" />
              All meals and premium beverages
            </li>
            <li>
              <FaCheckCircle className="voyage-list-icon" />
              Daily shore excursions
            </li>
            <li>
              <FaCheckCircle className="voyage-list-icon" />
              Onboard enrichment programs
            </li>
            <li>
              <FaCheckCircle className="voyage-list-icon" />
              Airport transfers
            </li>
            <li>
              <FaCheckCircle className="voyage-list-icon" />
              Gratuities throughout
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Whatsinclude