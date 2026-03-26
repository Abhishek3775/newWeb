import React from "react";
import "./Interactive_map.css";
import mapImage from "../../assets2/Itinerary/INTERACTIVE MAP/img.png"; // 🔹 change path if needed

const Interactivemap = () => {
  return (
    <section className="interactive-map-section">
      <div className="interactive-map-container">
        <h4 className="interactive-map-title">INTERACTIVE MAP</h4>

        <div className="interactive-map-box">
          <img
            src={mapImage}
            alt="Interactive Map"
            className="interactive-map-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Interactivemap;
