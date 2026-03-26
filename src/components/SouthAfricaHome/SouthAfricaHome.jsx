import React from "react";
import heroImage from "../../assets/southAfrica.jpg";
import "./SouthAfricaHome.css";

const HeroSouthAfrica = () => {
  return (
    <section className="sah-hero-section">
      
      <img
        src={heroImage}
        alt="South Africa"
        className="sah-hero-bg"
      />

      <div className="sah-hero-overlay"></div>

      <div className="sah-hero-content">
        <h1 className="sah-hero-title">South Africa</h1>

        <p className="sah-hero-subtitle">
          Where Wilderness Meets Refinement
        </p>

        <p className="sah-hero-description">
          An extraordinary tapestry of untamed beauty, timeless elegance,
          and soul-stirring experiences curated exclusively for the
          discerning traveller.
        </p>

        <div className="sah-hero-stats">
          <div className="sah-stat-box">
            <h3>500+</h3>
            <p>Curated Experiences</p>
          </div>

          <div className="sah-stat-box">
            <h3>20+</h3>
            <p>Years of Excellence</p>
          </div>

          <div className="sah-stat-box">
            <h3>98%</h3>
            <p>Guest Satisfaction</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSouthAfrica;
