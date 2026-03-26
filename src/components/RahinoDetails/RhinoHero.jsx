import React from "react";
import "./RhinoHero.css";
import heroImage from "../../assets/rahinoDetail.jpg"; // 👈 apni image ka naam yaha daalo

const RhinoHero = () => {
  return (
    <section
      className="rhino-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      

      <div className="hero-content">
        <h1>
          Private Black <br />
          Rhino Trekking
        </h1>

        <p>
          Enter the Untamed Heart of Africa’s Most Iconic Wilderness
        </p>

        <button className="hero-btn">
          VIEW EXPERIENCES →
        </button>
      </div>
    </section>
  );
};

export default RhinoHero;
