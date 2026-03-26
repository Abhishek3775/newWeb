import React, { useState } from "react";
import "./PackingEssentials.css";

import springIcon from "../../assets/springIcon.png";
import autumnIcon from "../../assets/autumnn.png";
import winterIcon from "../../assets/winter.png";
import summerIcon from "../../assets/summer1.png";
import correctIcon from "../../assets/correct.png";

const PackingEssentials = () => {
  const [activeSeason, setActiveSeason] = useState("spring");

  const data = {
    spring: {
      title: "Spring Packing List",
      items: [
        "Light layers for variable temperatures",
        "Comfortable walking shoes",
        "Sunglasses and sunscreen",
        "Waterproof jacket for spring showers",
        "Light scarf for cool evenings"
      ]
    },
    summer: {
      title: "Summer Packing List",
      items: [
        "Lightweight, breathable clothing",
        "Portable fan or cooling towel",
        "Insect repellent",
        "Umbrella (both rain and sun)",
        "Yukata for festival evenings"
      ]
    },
    autumn: {
      title: "Autumn Packing List",
      items: [
        "Medium layers for cool days",
        "Comfortable hiking shoes",
        "Warm accessories for late November",
        "Light jacket or cardigan",
        "Camera for foliage photos"
      ]
    },
    winter: {
      title: "Winter Packing List",
      items: [
        "Heavy winter coat",
        "Waterproof boots",
        "Hand warmers (kairo)",
        "Thermal underwear",
        "Hat, gloves, and scarf"
      ]
    }
  };

  const seasons = [
    { key: "spring", label: "SPRING", icon: springIcon },
    { key: "summer", label: "SUMMER", icon: summerIcon },
    { key: "autumn", label: "AUTUMN", icon: autumnIcon },
    { key: "winter", label: "WINTER", icon: winterIcon }
  ];

  return (
    <section className="packing-section">
      <div className="packing-container">

        <p className="sub-heading">BE PREPARED</p>
        <h2 className="main-heading">Packing Essentials</h2>

        {/* Season Tabs */}
        <div className="season-tabs">
          {seasons.map((season) => (
            <button
              key={season.key}
              className={`season-btn ${
                activeSeason === season.key ? "active" : ""
              }`}
              onClick={() => setActiveSeason(season.key)}
            >
              <img src={season.icon} alt={season.label} />
              {season.label}
            </button>
          ))}
        </div>

        {/* Packing List Box */}
        <div className="packing-box">
          <h3>{data[activeSeason].title}</h3>

          <div className="packing-items">
            {data[activeSeason].items.map((item, index) => (
              <div key={index} className="packing-item">
                <span className="check"><img src={correctIcon} alt="correctIcon" /></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PackingEssentials;
