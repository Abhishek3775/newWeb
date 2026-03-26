import React from "react";
import "./VesselOverview.css";
import vesselImage from "../../assets2/Itinerary/YOUR VESSEL/img1.png";
import icon1 from "../../assets2/Itinerary/YOUR VESSEL/img2.png";
import icon2 from "../../assets2/Itinerary/YOUR VESSEL/img3.png";
import icon3 from "../../assets2/Itinerary/YOUR VESSEL/img4.png";
import icon4 from "../../assets2/Itinerary/YOUR VESSEL/img5.png";

const VesselOverview = () => {
  const stats = [
    { icon: icon1, value: "48",       label: "Guests"         },
    { icon: icon2, value: "24",       label: "Suites"         },
    { icon: icon3, value: "68m",      label: "Length"         },
    { icon: icon4, value: "12 knots", label: "Cruising Speed" },
  ];

  return (
    <section className="vo-section">
      <div className="vo-container">

        <h4 className="vo-subtitlE">YOUR VESSEL</h4>
        <h2 className="vo-title">The Adriatic Queen</h2>
        <p className="vo-description">
          Experience intimate luxury aboard our boutique expedition vessel, designed to
          access hidden harbors while providing the finest comforts at sea.
        </p>

        <div className="vo-image-wrapper">
          <img
            src={vesselImage}
            alt="The Adriatic Queen"
            className="vo-image"
          />

          <div className="vo-gradient" />

          <div className="vo-stats">
            {stats.map((s, i) => (
              <div key={i} className="vo-stat-item">
                <img src={s.icon} alt={s.label} className="vo-stat-icon" />
                <h3 className="vo-stat-value">{s.value}</h3>
                <p className="vo-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VesselOverview;