import React from "react";
import "./RhinoEncounter.css";

const RhinoEncounter = () => {
  return (
    <section className="encounter-wrapper">
      
      {/* ===== TOP WHITE SECTION ===== */}
      <div className="encounter-top">
        <div className="encounter-container">
          
          <div className="encounter-left">
            <h2>
              A Rare Encounter with <br />
              One of Earth's Most <br />
              Protected Giants
            </h2>
            <div className="accent-line"></div>
          </div>

          <div className="encounter-right">
            <p className="main-text">
              Step into the untamed wilderness of South Africa for a once-in-a-lifetime, conservation-led encounter with the critically endangered Black Rhino—guided privately, responsibly, and far beyond the reach of conventional safaris.
            </p>

            <div className="quote-box">
              <p>
                “To walk beside a rhino is to feel the heartbeat of Africa—raw, humbling, and unforgettable.”
              </p>
              <span>— Senior Conservation Ranger, South Africa</span>
            </div>
          </div>

        </div>
      </div>

      {/* ===== BOTTOM STATS SECTION ===== */}
      <div className="encounter-stats">
        <div className="encounter-container stats-grid">

          <div className="stat-item">
            <h3>2,000+</h3>
            <h4>YEARS OF EVOLUTION</h4>
            <p>Rhinos are among the oldest surviving mammals on Earth, unchanged for millennia</p>
          </div>

          <div className="stat-item">
            <h3>5</h3>
            <h4>RHINO SPECIES</h4>
            <p>South Africa is home to the largest population of white and black rhinos</p>
          </div>

          <div className="stat-item">
            <h3>24/7</h3>
            <h4>ANTI-POACHING PROTECTION</h4>
            <p>Private reserves operate round-the-clock monitoring and security</p>
          </div>

          <div className="stat-item">
            <h3>1</h3>
            <h4>RARE WALKING SAFARI</h4>
            <p>One of the few wildlife experiences allowing safe, guided tracking on foot</p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default RhinoEncounter;
