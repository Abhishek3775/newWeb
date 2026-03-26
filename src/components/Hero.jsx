import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="egc-hero-section">
      <div className="egc-hero-overlay"></div>

      <div className="egc-hero-content">
        <h1 className="egc-hero-heading">
          Come Explore the World <br />
          with EGC
        </h1>

        <p className="egc-hero-subtext">
          And let our signature white glove luxury be your guide
        </p>

        <div className="egc-hero-buttons">
          <button className="egc-hero-btn egc-hero-btn-primary">
            BEGIN YOUR JOURNEY
          </button>
          <button className="egc-hero-btn egc-hero-btn-secondary">
            EXPLORE DESTINATIONS
          </button>
        </div>
      </div>

      <div className="egc-hero-scroll">
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
