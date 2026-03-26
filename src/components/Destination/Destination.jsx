import React from "react";
import "./Destination.css";
import asia from "../../assets/asia.jpg";
import europe from "../../assets/europe.jpg";
import caribbean from "../../assets/caribian.jpg";
import africa from "../../assets/africa.jpg";
import middle from "../../assets/middle.jpg";

const destinations = [
  {
    title: "Asia",
    subtitle: "ANCIENT WONDERS",
    image: asia,
    large: true,
  },
  {
    title: "Europe",
    subtitle: "TIMELESS ELEGANCE",
    image: europe,
  },
  {
    title: "Caribbean",
    subtitle: "ISLAND PARADISE",
    image: caribbean,
  },
  {
    title: "Africa",
    subtitle: "WILD LUXURY",
    image: africa,
  },
  {
    title: "Middle East",
    subtitle: "DESERT OPULENCE",
    image: middle,
  },
];

const Destinations = () => {
  return (
    <section className="egc-dest-section">
      <div className="egc-dest-header">
        <span className="egc-dest-tag">DESTINATIONS</span>
        <h2 className="egc-dest-title">Browse Our Destinations</h2>
        <p className="egc-dest-description">
          From the cobbled streets of Europe to the untamed wilderness of Africa,
          discover our curated collection of the world’s most exclusive destinations.
        </p>
      </div>

      <div className="egc-dest-grid">
        {destinations.map((item, index) => (
          <div
            key={index}
            className={`egc-dest-card ${
              item.large ? "egc-dest-large" : ""
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="egc-dest-overlay">
              <span className="egc-dest-subtitle">{item.subtitle}</span>
              <h3 className="egc-dest-card-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
