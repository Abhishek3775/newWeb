import React from "react";
import "./JapanHome.css";
import heroImage from "../../assets/japanHero.jpg";

const JapanHeroSection = () => {
  return (
    <section
      className="japan-hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="japan-hero-overlay"></div>

      <div className="japan-hero-inner">
        <p className="japan-hero-subtitle">
          AN ODYSSEY OF REFINEMENT
        </p>

        <h1 className="japan-hero-title">Japan</h1>

        <p className="japan-hero-description">
          Where ancient traditions meet with modern
          <br />
           elegance,
          creating moments that transcend time itself.
        </p>

        <div className="japan-hero-button-wrap">
          <button className="japan-hero-button">
            BEGIN YOUR JOURNEY →
          </button>
        </div>
      </div>
    </section>
  );
};

export default JapanHeroSection;
