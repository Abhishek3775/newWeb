import React from "react";
import "./MarchHero.css"
import marchHero from "../../assets/march-hero.jpg";

const WhereToTravelMarch = () => {
  return (
    <section
      className="wtm-hero-section"
      style={{ backgroundImage: `url(${marchHero})` }}
    >
      <div className="wtm-overlay"></div>

      <div className="wtm-content">
        <p className="wtm-subtitle">WHERE TO TRAVEL IN</p>

        <h1 className="wtm-title">March</h1>

        <p className="wtm-description">
          Spring awakens across the northern hemisphere while autumn paints the south.
          Discover our expertly selected destinations for March travel.
        </p>
      </div>
    </section>
  );
};

export default WhereToTravelMarch;
