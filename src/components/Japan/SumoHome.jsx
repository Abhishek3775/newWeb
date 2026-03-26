import React from "react";
import "./SumoHome.css";

import sumoImg from "../../assets/sumoHome.jpg"; // apni image path daalo

const SumoHome = () => {
  return (
    <section
      className="sumo-hero"
      style={{ backgroundImage: `url(${sumoImg})` }}
    >
      <div className="sumo-overlay"></div>

      <div className="sumo-content">
        <h1>
          The <br />
          Sumo <br />
          Experience
        </h1>

        <p>
          Enter the Sacred World of Japan’s Ancient Warriors
        </p>

        <button className="sumo-btn">
          VIEW EXPERIENCES →
        </button>
      </div>
    </section>
  );
};

export default SumoHome;
