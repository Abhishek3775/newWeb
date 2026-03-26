import React from "react";
import "./Itinerary_hero.css";
import { FaStar, FaUserFriends } from "react-icons/fa";
import { BsCalendar3, BsGeoAlt } from "react-icons/bs";

const Itineraryhero = () => {
  return (
    <section className="adriatic-hero">
      <div className="adriatic-overlay">
        <div className="adriatic-content">
          <p className="adriatic-subtitle">EXPEDITION CRUISES</p>
          <h1 className="adriatic-title">Adriatic Voyage</h1>
          <h2 className="adriatic-location">Croatia, Montenegro &amp; Greece</h2>

          <p className="adriatic-description">
            Embark on an extraordinary journey through the crystalline waters of
            the Adriatic Sea, exploring ancient walled cities, hidden coves, and
            the timeless beauty of the Mediterranean coast.
          </p>

          <div className="adriatic-rating">
            <FaStar className="star-icon" />
            <span>Exceptional Experience</span>
          </div>

          <div className="adriatic-info">
            <div className="info-item">
              <BsCalendar3 className="info-icon" />
              <div>
                <h3>9</h3>
                <p>Days</p>
              </div>
            </div>

            <div className="info-item">
              <BsGeoAlt className="info-icon" />
              <div>
                <h3>8</h3>
                <p>Destinations</p>
              </div>
            </div>

            <div className="info-item">
              <FaUserFriends className="info-icon" />
              <div>
                <h3>48</h3>
                <p>Guests Max</p>
              </div>
            </div>
          </div>

          <button className="adriatic-btn">View Dates &amp; Prices</button>
        </div>
      </div>
    </section>
  );
};

export default Itineraryhero;