import React from "react";
import "./CalenderHero.css";
import heroImage from "../../assets/where.jpg";

const CalenderHero = () => {
  return (
    <section className="chx-hero-wrapper">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Travel"
        className="chx-hero-bg"
        loading="lazy"
      />

      {/* Overlay */}
      <div className="chx-hero-overlay"></div>

      {/* Content */}
      <div className="chx-hero-content">

        <p className="chx-hero-subtitle">
          WHERE DREAMS TAKE FLIGHT
        </p>

        <h1 className="chx-hero-title">
          Where to Travel <br />
          <span className="chx-hero-highlight">
            This Year
          </span>
        </h1>

        <p className="chx-hero-description">
          Our expertly curated travel calendar reveals the world's most
          extraordinary destinations, perfectly <br /> timed for each month of the year.
        </p>

      </div>
    </section>
  );
};

export default CalenderHero;
