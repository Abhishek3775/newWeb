import React from "react";
import "./Journey_overview.css";
import { FaShip, FaUtensils, FaWater } from "react-icons/fa";
import { GiCompass } from "react-icons/gi";

const Journeyoverview = () => {
  return (
    <section className="J-O-section">
      <div className="J-O-container">
        <h4 className="J-O-subtitle">JOURNEY OVERVIEW</h4>
        <h2 className="J-O-title">A Voyage Through Ancient Waters</h2>
        <p className="J-O-description">
          This extraordinary expedition takes you through the heart of the Adriatic,
          where medieval fortresses rise from turquoise waters, and ancient coastal
          villages have remained unchanged for centuries. From the dramatic walls of
          Dubrovnik to the serene fjords of Montenegro and the sun-drenched islands of Greece.
        </p>

        <div className="J-O-grid">
          <div className="J-O-card">
            <FaShip className="J-O-icon" />
            <h3 className="J-O-card-title">Intimate Vessel</h3>
            <p className="J-O-card-text">
              Experience the journey aboard a luxury small ship with only 48 guests.
            </p>
          </div>

          <div className="J-O-card">
            <GiCompass className="J-O-icon" />
            <h3 className="J-O-card-title">Expert-Led Tours</h3>
            <p className="J-O-card-text">
              Local guides and historians bring each destination to life.
            </p>
          </div>

          <div className="J-O-card">
            <FaUtensils className="J-O-icon" />
            <h3 className="J-O-card-title">Culinary Excellence</h3>
            <p className="J-O-card-text">
              Savor authentic Mediterranean cuisine with local wine pairings.
            </p>
          </div>

          <div className="J-O-card">
            <FaWater className="J-O-icon" />
            <h3 className="J-O-card-title">Hidden Gems</h3>
            <p className="J-O-card-text">
              Access secluded coves and ports inaccessible to larger vessels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journeyoverview;
